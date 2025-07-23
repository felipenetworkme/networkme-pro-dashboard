import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Send, Mic, ArrowRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const EntrevistaIASimulacao = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state || {};
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const perguntas = [
    "Olá! Vamos começar a nossa simulação. Para começar, conte-me um pouco sobre si e a sua trajetória.",
    "Porque está interessado(a) nesta posição específica?",
    "Qual considera ser a sua maior força profissional?",
    "Descreva uma situação desafiante que enfrentou e como a resolveu.",
    "Onde se vê profissionalmente daqui a 5 anos?"
  ];

  useEffect(() => {
    // Mensagem inicial
    const initialMessage: ChatMessage = {
      id: "1",
      text: perguntas[0],
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  const handleSendMessage = () => {
    if (!inputText.trim() || isComplete) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1;
      
      if (nextIndex < perguntas.length) {
        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: perguntas[nextIndex],
          isUser: false,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, aiMessage]);
        setCurrentQuestionIndex(nextIndex);
      } else {
        // Final message
        const finalMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: "Obrigado. A nossa simulação terminou. Estou a preparar o seu feedback detalhado.",
          isUser: false,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, finalMessage]);
        setIsComplete(true);
      }
      
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleViewFeedback = () => {
    navigate("/entrevista-ia/feedback", { state: { ...formData, messages } });
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-primary">Simulação de Entrevista</h1>
            <p className="text-muted-foreground">
              {formData.vaga && `Vaga: ${formData.vaga}`}
              {formData.tipoEntrevista && ` • Tipo: ${formData.tipoEntrevista}`}
            </p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6">
          {/* Messages */}
          <div className="flex-1 py-6 space-y-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <Card
                  className={`max-w-[80%] p-4 ${
                    message.isUser
                      ? "bg-primary text-primary-foreground ml-12"
                      : "bg-muted mr-12"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </Card>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <Card className="bg-muted mr-12 p-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </Card>
              </div>
            )}

            {isComplete && (
              <div className="flex justify-center py-4">
                <Button
                  onClick={handleViewFeedback}
                  className="rounded-networkme-button"
                >
                  Ver meu Feedback
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-border bg-card p-4 sticky bottom-0">
            <div className="flex gap-3 items-end">
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite a sua resposta..."
                className="min-h-[60px] resize-none rounded-networkme-button"
                disabled={isTyping || isComplete}
              />
              
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className="mb-1 rounded-networkme-button"
                      disabled
                    >
                      <Mic className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Gravação de áudio em breve!</p>
                  </TooltipContent>
                </Tooltip>

                <Button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping || isComplete}
                  size="icon"
                  className="mb-1 rounded-networkme-button"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EntrevistaIASimulacao;