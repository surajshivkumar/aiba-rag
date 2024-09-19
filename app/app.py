from flask import Flask, request, jsonify, render_template
import bs4
import os
from langchain import hub
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader, TextLoader, JSONLoader
from langchain_community.vectorstores import Chroma
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain.schema import Document
import json

with open("keys.json", "r") as f:
    data = json.load(f)
app = Flask(__name__)

# Set your OpenAI API key
os.environ["OPENAI_API_KEY"] = data["OPENAI_API_KEY"]


def load_processed_files(directory: str):
    documents = []
    for filename in os.listdir(directory):
        if filename.endswith(".json"):
            file_path = os.path.join(directory, filename)
            jq_schema = ".chunks[] | {content: .content, metadata: .metadata}"
            loader = JSONLoader(
                file_path=file_path,
                jq_schema=jq_schema,
                content_key="content",
                metadata_func=lambda metadata, _: {**metadata, "source": file_path},
            )
            documents.extend(loader.load())
    return documents


def flatten_metadata(metadata):
    return {
        key: str(value) if isinstance(value, dict) else value
        for key, value in metadata.items()
    }


# Load and process documents
loaded_documents = load_processed_files("../pages/json")
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)

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

# Create vectorstore and retriever
vectorstore = Chroma.from_documents(
    documents=documents_as_objects, embedding=OpenAIEmbeddings()
)
retriever = vectorstore.as_retriever()

# Set up LLM and prompt
prompt = hub.pull("rlm/rag-prompt")
llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


# Create RAG chain
rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)


@app.route("/")
def home():
    return render_template("chat.html")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    question = data.get("question")
    if not question:
        return jsonify({"error": "No question provided"}), 400

    try:
        response = rag_chain.invoke(question)
        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
