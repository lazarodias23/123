import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o BetoBot 🤖. Posso ajudar com horários, valores ou dúvidas sobre o parque?' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    // Create a generic history array for context
    const history = messages.map(m => `${m.role === 'user' ? 'Usuário' : 'Modelo'}: ${m.text}`);
    
    const response = await sendMessageToGemini(userMsg, history);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir chat"
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90%] md:w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 animate-fadeIn">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <span className="font-bold">Ajuda - Sítio do Beto</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-500 text-xs p-3 rounded-2xl animate-pulse">
                  Digitando...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ex: Quanto custa o ingresso?"
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">IA pode cometer erros. Verifique informações críticas.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;