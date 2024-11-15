from langchain_community.document_loaders import JSONLoader
import os
import json


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


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
