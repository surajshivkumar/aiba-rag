from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI
from app.models.chat_model import ChatRequest, ChatResponse
from app.services.naive_rag_service import naive_rag
from app.services.corrective_rag_service import corrective_rag
from app.services.self_reflective_service import self_rag
import os
from dotenv import load_dotenv

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
# from app.api.chat import (
#     route_question,
#     adaptive_rag,
# )  # Assuming these functions are defined in chat.py
openai_api_key = os.getenv("OPENAI_API_KEY")
llm = ChatOpenAI(
    model_name="gpt-3.5-turbo", temperature=1, openai_api_key=openai_api_key
)


def handle_chat(request: ChatRequest) -> ChatResponse:
    print(request)
    if request.method == "Naive":
        response = naive_rag(request.query)  # Assuming naive_rag is defined
    elif request.method == "Corrective":
        response = corrective_rag(request.query)
    elif request.method == "Self Reflective":
        response = self_rag(request.query)  # Assuming adaptive_rag is defined
    else:
        return ChatResponse(response="Invalid method specified.")

    return ChatResponse(response=response)
