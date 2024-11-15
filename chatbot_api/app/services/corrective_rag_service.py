from app.utils.helpers import load_processed_files, flatten_metadata
from langchain import hub
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_community.vectorstores import Chroma
from langchain.schema import Document
import os
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.tools.tavily_search import TavilySearchResults
from dotenv import load_dotenv
from langchain_core.pydantic_v1 import BaseModel, Field


class GradeDocuments(BaseModel):
    """Binary score for relevance check on retrieved documents."""

    binary_score: str = Field(
        description="Documents are relevant to the question, 'yes' or 'no'"
    )


# Load environment variables
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
tavily_api_key = os.getenv("TAVILY_API_KEY")

# Load the base prompt from hub
prompt = hub.pull("rlm/rag-prompt")

# Initialize LLM and vector store
llm = ChatOpenAI(
    model_name="gpt-3.5-turbo", temperature=0.6, openai_api_key=openai_api_key
)
embedding = OpenAIEmbeddings()

# Web search tool
web_search_tool = TavilySearchResults(k=5)

# Define a new prompt for grading
grade_prompt = f"""
You are a grader assessing relevance of a retrieved document to a user question. 
If the document contains keyword(s) or semantic meaning related to the question, grade it as relevant. 
Give a binary score 'yes' or 'no' to indicate whether the document is relevant to the question.

Document: {{document}}
User Question: {{question}}
"""

# Initialize structured output for grading
structured_llm_grader = llm.with_structured_output(GradeDocuments)


def corrective_rag(query: str):
    # query = query.lower()  # Normalize the query

    # Load and process documents
    loaded_documents = load_processed_files("../pages/json")  # Adjust path as necessary

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=2000, chunk_overlap=500)

    split_documents = []
    for doc in loaded_documents:
        content = doc.page_content
        metadata = doc.metadata
        split_content = text_splitter.split_text(content)
        for split in split_content:
            split_documents.append({"page_content": split, "metadata": metadata})

    # Convert split documents to Document objects
    documents_as_objects = [
        Document(
            page_content=doc["page_content"], metadata=flatten_metadata(doc["metadata"])
        )
        for doc in split_documents
    ]

    # Create a vector store and retriever
    vectorstore = Chroma.from_documents(
        documents=documents_as_objects, embedding=embedding
    )
    retriever = vectorstore.as_retriever()

    # Retrieve relevant documents
    context_docs = retriever.get_relevant_documents(query)

    # Grade the retrieved documents
    relevant_docs = []
    web_search_needed = False

    for doc in context_docs:
        # Prepare the grading prompt
        grading_prompt = grade_prompt.format(document=doc.page_content, question=query)
        grade_response = structured_llm_grader.invoke(grading_prompt)
        print(grade_response)
        if grade_response.binary_score == "yes":
            relevant_docs.append(doc)
        else:
            web_search_needed = True

    # If no relevant documents found, perform web search
    if not relevant_docs or web_search_needed:
        print(
            "---No relevant documents found or grading was inconclusive. Performing web search---"
        )

        # Optimize query for web search
        better_query = llm.invoke(
            f"Rewrite the following question for better search results in context to university of south florida: {query}"
        )
        print(better_query)
        # Ensure better_query is a string
        if not isinstance(better_query.content, str):
            raise ValueError("The query for web search must be a string.")

        print(f"Optimized Query for Web Search: {better_query.content}")

        # Perform web search
        web_search_results = web_search_tool.invoke({"query": better_query.content})

        # Ensure web search results are valid
        if not web_search_results:
            print("---No results found from web search---")
            return "No results found."

        web_results_formatted = "\n\n".join(
            [result["content"] for result in web_search_results]
        )

        # Append web search results to relevant documents
        relevant_docs.append(Document(page_content=web_results_formatted))

    # Format the main response prompt
    context_formatted = "\n\n".join(doc.page_content for doc in relevant_docs)
    formatted_prompt = prompt.format(context=context_formatted, question=query)

    # Generate response using the formatted prompt
    response_message = llm.invoke(formatted_prompt)

    # Extract the content from the AIMessage
    if hasattr(response_message, "content"):
        response_content = response_message.content
    else:
        response_content = str(response_message)

    return response_content
