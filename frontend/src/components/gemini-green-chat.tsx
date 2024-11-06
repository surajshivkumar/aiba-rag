"use client";

import { useState, useEffect, useRef } from "react";

import { Send, Menu, MoreVertical, Plus, ArrowRight } from "lucide-react";
import axios from "axios";
interface Message {
  text: string;
  isUser: boolean;
}

interface SuggestedQuestion {
  text: string;
  icon: string;
}

export function GeminiGreenChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const animateGradient = () => {
      const time = new Date().getTime() / 1000;
      const position = ((time % 4) / 4) * 100; // 4 second cycle
      textElement.style.backgroundPosition = `${position}% 50%`;
      requestAnimationFrame(animateGradient);
    };

    requestAnimationFrame(animateGradient);
  }, []);

  const suggestedQuestions: SuggestedQuestion[] = [
    { text: "How can I travel around campus?", icon: "🚌" },
    { text: "Who do we play next?", icon: "🏈" },
    { text: "How can I request an official transcript?", icon: "📝" },
    { text: "How do I calculate my GPA?", icon: "💻" },
  ];

  const handleSend = async (text: string) => {
    if (!text) return;

    setMessages([...messages, { text, isUser: true }]);
    setInput("");

    try {
      // Send the message to the backend
      const response = await axios.post("http://localhost:5000/chat", {
        question: text,
      });

      // Update the messages with the response from the backend
      setMessages((prev) => [
        ...prev,
        { text: response.data.response, isUser: false },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { text: "There was an error processing your request.", isUser: false },
      ]);
    }
  };

  return (
    <div className="flex h-screen bg-green-50 text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-green-100 p-4 hidden md:block">
        <div className="flex items-center justify-between mb-4">
          <button className="text-green-700 hover:text-green-900">
            <Menu size={24} />
          </button>
          <span className="font-semibold text-green-800">BullsAI</span>
          <button className="text-green-700 hover:text-green-900">
            <MoreVertical size={24} />
          </button>
        </div>
        <button className="w-full bg-green-600 text-white rounded-full py-2 px-4 flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors">
          <Plus size={20} />
          <span>New chat</span>
        </button>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 4L2 28H30L16 4Z" fill="#FFFFFF" />
              <path d="M16 4L2 28H16V4Z" fill="#E6F4EA" />
              <path d="M16 4V28H30L16 4Z" fill="#CEEAD6" />
            </svg>
            <span className="font-semibold">BullsAI</span>
          </div>
          <button className="rounded-full w-8 h-8 bg-green-500 flex items-center justify-center">
            <span className="text-sm font-medium">RD</span>
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold mb-6">
                Hello,{" "}
                <span
                  ref={textRef}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-600 to-green-900 inline-block"
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Bull
                </span>
              </h1>
              <h2 className="text-2xl font-bold mb-5 text-gray-800">
                How can I help?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(question.text)}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-3 text-left"
                  >
                    <span className="text-2xl">{question.icon}</span>
                    <span className="flex-1">{question.text}</span>
                    <ArrowRight size={20} className="text-green-600" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? "bg-green-600 text-white"
                        : "bg-green-100 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-green-200">
          <div className="flex items-center space-x-2 max-w-4xl mx-auto bg-white rounded-full shadow-md">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Got questions? I’m here to take the bull by the horns!"
              className="flex-1 p-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              style={{ caretColor: "#10B981" }} // Custom caret color
            />
            <button
              onClick={() => handleSend(input)}
              className="p-3 text-green-600 hover:text-green-800 transition-colors rounded-r-full"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
