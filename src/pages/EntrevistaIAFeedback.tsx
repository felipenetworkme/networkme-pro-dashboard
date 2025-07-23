import { useNavigate, useLocation } from "react-router-dom";
import { Home, CheckCircle, Target, Lightbulb } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const EntrevistaIAFeedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};

  const score = 82;
  const progressValue = (score / 100) * 100;

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-primary">Relatório de Feedback</h1>
            <p className="text-muted-foreground">Análise do seu desempenho na simulação</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-8">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                Seu Relatório de Desempenho
              </h2>
              <p className="text-muted-foreground">
                Baseado na sua simulação de entrevista
              </p>
            </div>

            {/* Card 1: Pontuação Geral */}
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted-foreground/20"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${progressValue * 2.51}, 251`}
                      className="text-primary"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{score}</div>
                      <div className="text-sm text-muted-foreground">/ 100</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Pontuação da Entrevista</h3>
                  <Badge variant="secondary" className="text-sm">
                    Bom desempenho
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Cards de Análise */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 2: Análise de Clareza */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-networkme-button">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Clareza e Objetividade</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      As suas respostas foram claras e bem estruturadas. Demonstrou boa capacidade de 
                      comunicação e conseguiu transmitir as suas ideias de forma objetiva. Continue a 
                      praticar essa habilidade, pois é fundamental em qualquer entrevista.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Card 3: Análise Estrutural */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-networkme-button">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Uso do Método STAR</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      O método STAR (Situação, Tarefa, Ação, Resultado) ajuda a estruturar respostas 
                      comportamentais de forma eficaz.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong>Feedback:</strong> Notou-se algumas oportunidades para aplicar melhor 
                      esta metodologia nas suas respostas, especialmente ao descrever resultados 
                      concretos das suas ações.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Card 4: Sugestões de Melhoria */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-networkme-button">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-4">Dicas para Melhorar</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">
                        Prepare exemplos específicos que demonstrem as suas competências usando o método STAR
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">
                        Pratique falar sobre os seus objetivos de carreira de forma mais detalhada
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">
                        Prepare perguntas relevantes sobre a empresa e o cargo para demonstrar interesse
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Botão Final */}
            <div className="text-center pt-4">
              <Button
                onClick={() => navigate("/")}
                className="rounded-networkme-button"
                size="lg"
              >
                <Home className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EntrevistaIAFeedback;