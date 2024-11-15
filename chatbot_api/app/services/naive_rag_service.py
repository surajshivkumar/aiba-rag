from app.utils.helpers import load_processed_files, flatten_metadata, format_docs
from langchain import hub
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_community.vectorstores import Chroma
from langchain.schema import Document
import os
from langchain_core.runnables import RunnablePassthrough
from langchain.text_splitter import RecursiveCharacterTextSplitter
from dotenv import load_dotenv

# Load OpenAI API key
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

# Load the base prompt from hub
prompt = hub.pull("rlm/rag-prompt")

# Define a new prompt that includes greetings handling
full_prompt = f"""
You are a helpful chatbot that can engage in casual conversation and provide information based on context. 

1. If the user greets you with phrases like 'hi', 'hello', 'hey', or 'howdy', respond warmly with:
   "Hello! How can I assist you today?"

2. For questions related to the context or available knowledge, provide detailed and informative answers.

Context: {{context}}
Question: {{question}}
Response: 
"""

# Initialize LLM and vector store
llm = ChatOpenAI(
    model_name="gpt-3.5-turbo", temperature=0.6, openai_api_key=openai_api_key
)
embedding = OpenAIEmbeddings()


def naive_rag(query: str):
    query = query.lower()
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
    context_formatted = "\n\n".join(doc.page_content for doc in context_docs)

    # Format the prompt with context and question
    formatted_prompt = full_prompt.format(context=context_formatted, question=query)

    # Generate response using the formatted prompt
    response_message = llm.invoke(formatted_prompt)

    # Extract the content from the AIMessage
    if hasattr(response_message, "content"):
        response_content = response_message.content  # Extract the response content
    else:
        response_content = str(response_message)  # Fallback to string conversion

    return response_content
