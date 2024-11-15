from pydantic import BaseModel


class ChatRequest(BaseModel):
    query: str
    method: str = "naive"


class ChatResponse(BaseModel):
    response: str
