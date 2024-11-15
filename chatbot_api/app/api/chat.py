from fastapi import APIRouter, HTTPException
from app.models.chat_model import ChatRequest, ChatResponse
from app.services.chat_service import handle_chat

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):

    try:
        response = handle_chat(request)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
