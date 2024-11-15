from fastapi import FastAPI
from app.api.chat import router as chat_router
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()


app = FastAPI()
openai_api_key = os.getenv("OPENAI_API_KEY")
# Include the chat router
origins = [
    "http://localhost:3001",  # Allow specific domain
    # Add more origins as needed
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)
app.include_router(chat_router)


@app.get("/")
async def read_root():
    return {"message": "Welcome to the Chatbot API!"}
