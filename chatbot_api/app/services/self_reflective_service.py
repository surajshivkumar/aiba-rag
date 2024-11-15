from app.utils.helpers import load_processed_files, flatten_metadata
from langchain import hub
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_community.vectorstores import Chroma
from langchain.schema import Document
import os
from langchain_core.pydantic_v1 import BaseModel, Field
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load environment variables
from dotenv import load_dotenv

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

# Initialize LLM and vector store
embedding = OpenAIEmbeddings()
llm = ChatOpenAI(
    model_name="gpt-3.5-turbo", temperature=0.6, openai_api_key=openai_api_key
)


# Define grading models
class GradeDocuments(BaseModel):
    binary_score: str = Field(
        description="Documents are relevant to the question, 'yes' or 'no'"
    )


class GradeGeneration(BaseModel):
    binary_score: str = Field(
        description="Generation is useful for the question, values from 1 to 5"
    )


# Load documents and create a retriever
def create_retriever():
    loaded_documents = load_processed_files("../pages/json")  # Adjust path as necessary
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=20)

    split_documents = []
    for doc in loaded_documents:
        content = doc.page_content
        metadata = doc.metadata
        split_content = text_splitter.split_text(content)
        for split in split_content:
            split_documents.append({"page_content": split, "metadata": metadata})

    documents_as_objects = [
        Document(
            page_content=doc["page_content"], metadata=flatten_metadata(doc["metadata"])
        )
        for doc in split_documents
    ]

    vectorstore = Chroma.from_documents(
        documents=documents_as_objects, embedding=embedding
    )
    return vectorstore.as_retriever()


retriever = create_retriever()

# Prompt for grading
grade_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a grader assessing relevance of a retrieved document to a user question. If the document is related even remotely to the user question, grade it as relevant. Respond with yes or no.",
        ),
        ("human", "Retrieved document: \n\n {document} \n\n User question: {question}"),
    ]
)


# Function to self-reflect and grade
def self_rag(query: str):
    # Step 1: Retrieve documents
    context_docs = retriever.get_relevant_documents(query)

    # Step 2: Grade documents
    relevant_docs = []
    for doc in context_docs:

        grading_response = llm.invoke(
            grade_prompt.format(document=doc.page_content, question=query)
        )

        relevant_docs.append(doc)
        print(grading_response, doc)
        if grading_response.content.lower() == "yes":
            relevant_docs.append(doc)
    # PRINT
    # Step 3: Generate response if relevant documents exist
    if relevant_docs:
        formatted_prompt = hub.pull("rlm/rag-prompt").format(
            context="\n\n".join(doc.page_content for doc in relevant_docs),
            question=query,
        )
        generation_response = llm.invoke(formatted_prompt)
        resp = generation_response.content

        # print(generation_response)
        # Step 4: Grade the generation
        grading_generation = llm.invoke(
            f"Rate the following response for the question '{query}': {resp} just give a score out of 5 no extra response."
        )

        usefulness_score = grading_generation.content

        res = {
            "response": resp,
            "usefulness_score": usefulness_score,
            "relevant_docs": [doc.page_content for doc in relevant_docs],
        }
        # print(res["usefulness_score"])

        return resp + f" \n Confidence : {res["usefulness_score"]}"

    return "No relevant documents found."


# Example usage
if __name__ == "__main__":
    question = "Explain how the different types of agent memory work?"
    result = self_rag(question)
    print(result)
