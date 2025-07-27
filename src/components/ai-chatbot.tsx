"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Sparkles,
  Minimize2,
  Maximize2
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Ahmed's AI assistant! 👋 I'm here to help you learn about Ahmed Attafi - his skills, projects, and how he can help with your next project. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const conversationHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationHistory
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.reply,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again or feel free to contact Ahmed directly at attafiahmed.dev@gmail.com",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "What can Ahmed help me with?",
    "Tell me about Ahmed's experience",
    "What projects has Ahmed worked on?",
    "How can I contact Ahmed?",
    "What technologies does Ahmed use?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-lg flex items-center justify-center text-white group"
            >
              {/* Pulse animation */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-teal-600/30 rounded-full"
              />
              
              <MessageCircle className="w-6 h-6 relative z-10" />
              
              {/* Notification dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-2 h-2 text-white" />
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Chat with Ahmed's AI Assistant
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className="shadow-2xl border-blue-200/50 dark:border-blue-800/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
              {/* Header */}
              <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Ahmed's AI Assistant</h3>
                    <p className="text-xs text-white/80">Online • Ready to help!</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-8 h-8 p-0 text-white hover:bg-white/20"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 p-0 text-white hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-0">
                      {/* Messages */}
                      <div 
                        ref={chatContainerRef}
                        className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-blue-700"
                      >
                        {messages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.sender === 'user' 
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                                : 'bg-gradient-to-r from-teal-500 to-blue-500'
                            } text-white`}>
                              {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>
                            
                            <div className={`flex-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                              <div className={`inline-block p-3 rounded-2xl max-w-[85%] ${
                                message.sender === 'user'
                                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                              }`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                        
                        {isLoading && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-3"
                          >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white">
                              <Bot className="w-4 h-4" />
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl">
                              <div className="flex gap-1">
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                  className="w-2 h-2 bg-blue-500 rounded-full"
                                />
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                  className="w-2 h-2 bg-blue-500 rounded-full"
                                />
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                  className="w-2 h-2 bg-blue-500 rounded-full"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Quick Questions */}
                      {messages.length === 1 && (
                        <div className="px-4 pb-2">
                          <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                          <div className="flex flex-wrap gap-2">
                            {quickQuestions.slice(0, 3).map((question, index) => (
                              <button
                                key={index}
                                onClick={() => handleQuickQuestion(question)}
                                className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                              >
                                {question}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Input */}
                      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex gap-2">
                          <Input
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything about Ahmed..."
                            className="flex-1 border-purple-200 dark:border-purple-800 focus:border-purple-500 focus:ring-purple-500"
                            disabled={isLoading}
                          />
                          <Button
                            onClick={sendMessage}
                            disabled={isLoading || !inputMessage.trim()}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
