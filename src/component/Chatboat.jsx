import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Mail, Phone } from "lucide-react";
import ReactMarkdown from "react-markdown";

const Chatboat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, displayedText]);

  useEffect(() => {
    if (isFormSubmitted) {
      setMessages([
        {
          id: 1,
          text: "## Hi there!\nThis is an **AI assistant** provided by OZ Media for your queries.\n\nHow can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isFormSubmitted]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email && userInfo.phone) {
      setIsFormSubmitted(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newUserMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newUserMessage]);
      setInputMessage("");
      setIsTyping(true);

      try {
        const response = await fetch(
          "https://oz-chatboat-backend.onrender.com/chat",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: inputMessage }),
          }
        );

        const data = await response.json();
        const fullText = data.reply || "Sorry, no reply received.";

        // Typing animation (slower for readability)
        let i = 0;
        setDisplayedText("");
        const typingInterval = setInterval(() => {
          setDisplayedText((prev) => prev + fullText[i]);
          i++;
          if (i >= fullText.length) {
            clearInterval(typingInterval);
            setMessages((prev) => [
              ...prev,
              {
                id: messages.length + 2,
                text: fullText,
                sender: "bot",
                timestamp: new Date(),
              },
            ]);
            setDisplayedText("");
            setIsTyping(false);
          }
        }, 25); // slower speed
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: messages.length + 2,
            text: "⚠️ Server error. Please try again.",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }
    }
  };

  const handleStartChat = () => {
    if (userInfo.name && userInfo.email && userInfo.phone) {
      setIsFormSubmitted(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputMessage.trim()) {
      handleSendMessage(e);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat icon button */}
      <div
        className={`w-14 h-14 bg-[#dcd4ff] rounded-full flex items-center justify-center cursor-pointer shadow-[4px_4px_0px_#000] border-2 border-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={28} className="text-black" />
      </div>

      {/* Chat window */}
      <div
        className={`absolute bottom-4 right-0 w-80 sm:w-96 h-[500px] bg-white rounded-t-2xl rounded-bl-2xl shadow-[8px_8px_0px_#000] border-2 border-black transition-all duration-300 transform origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-[#dcd4ff] p-4 rounded-t-2xl rounded-bl-2xl border-b-2 border-black flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="md:h-8 md:w-8 h-8 w-8 rounded-lg bg-black"
            />
            <h3 className="font-semibold text-black font-[outfit] text-sm sm:text-base">
              Oz AI Assistant 🤖
            </h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-black/10 transition-colors"
          >
            <X size={18} className="text-black" />
          </button>
        </div>

        {/* Chat body */}
        <div className="h-[calc(100%-72px)] flex flex-col">
          {!isFormSubmitted ? (
            // Form
            <div className="p-4 flex-1 overflow-y-auto">
              <h4 className="font-semibold text-black mb-4">
                Let's get started!
              </h4>
              <div className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User size={14} /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail size={14} /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone size={14} /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                  />
                </div>
                <button
                  onClick={handleStartChat}
                  className="w-full bg-[#dcd4ff] text-black py-2 rounded-lg font-semibold border-2 border-black shadow-[2px_2px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all"
                >
                  Start Chat
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-0">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex transition-all ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] p-3 rounded-lg animate-slidefade ${
                        message.sender === "user"
                          ? "bg-[#dcd4ff] rounded-br-none"
                          : "bg-gray-100 rounded-bl-none"
                      }`}
                    >
                      {/* Render Markdown with custom formatting */}
                      <ReactMarkdown
                        components={{
                          h1: ({ node, ...props }) => (
                            <h1
                              className="text-sm sm:text-base font-bold text-gray-900 mb-1"
                              {...props}
                            />
                          ),
                          h2: ({ node, ...props }) => (
                            <h2
                              className="text-sm font-semibold text-gray-800 mt-2"
                              {...props}
                            />
                          ),
                          p: ({ node, ...props }) => (
                            <p
                              className="text-xs sm:text-sm leading-relaxed text-gray-700 mb-1"
                              {...props}
                            />
                          ),
                          li: ({ node, ...props }) => (
                            <li
                              className="list-disc list-inside text-xs sm:text-sm text-gray-700"
                              {...props}
                            />
                          ),
                          code: ({ node, ...props }) => (
                            <code
                              className="bg-gray-200 text-xs px-1 py-0.5 rounded"
                              {...props}
                            />
                          ),
                        }}
                      >
                        {message.text}
                      </ReactMarkdown>

                      <p className="text-[10px] text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing animation */}
                {isTyping && displayedText && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none max-w-[75%]">
                      <ReactMarkdown>{displayedText}</ReactMarkdown>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t-2 border-gray-200 flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-[#dcd4ff] text-black p-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000] transition-all"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
       {/* Animations */}
 <style>{`
   @keyframes slideFade {
     from { opacity: 0; transform: translateY(8px); }
     to { opacity: 1; transform: translateY(0); }
   }
   .animate-slideFade {
     animation: slideFade 0.4s ease-out;
   }
       `}</style>
    </div>
  );
};

export default Chatboat;