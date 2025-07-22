
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Settings, 
  HelpCircle, 
  FileText, 
  Mic, 
  Sparkles,
  ArrowRight,
  User
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Barra de Navegação Superior */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">Networkme PRO</h1>
            </div>
            
            {/* Menu à direita */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Usuario" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-foreground hidden sm:block">
                  Olá, João Silva
                </span>
              </div>
              
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Widget de Boas-Vindas */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">
              Bem-vindo(a) de volta, João Silva!
            </CardTitle>
            <p className="text-muted-foreground">
              Este é o seu plano de ação para conquistar seu próximo objetivo.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progresso Geral</span>
                <span className="font-medium">0% Concluído</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Widget de Próximas Missões */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Suas Próximas Missões
          </h2>
          
          <div className="space-y-4">
            {/* Missão 1 - Ativa */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg">
                  Missão 01: Construir um CV de alto impacto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Crie um currículo profissional que passa pelos filtros de IA (ATS) 
                  e impressiona recrutadores.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Começar Missão
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Missão 2 - Inativa */}
            <Card className="opacity-50 bg-muted/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-muted-foreground">
                    Missão 02: Preparar para entrevistas com IA
                  </CardTitle>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium">
                    Em Breve
                  </span>
                </div>
              </CardHeader>
            </Card>

            {/* Missão 3 - Inativa */}
            <Card className="opacity-50 bg-muted/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-muted-foreground">
                    Missão 03: Mapear seus superpoderes profissionais
                  </CardTitle>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium">
                    Em Breve
                  </span>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Widget de Ferramentas de IA */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Sua Caixa de Ferramentas de IA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Ferramenta 1 - Ativa */}
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">AI CV Generator</CardTitle>
              </CardHeader>
            </Card>

            {/* Ferramenta 2 - Inativa */}
            <Card className="opacity-50 bg-muted/30">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-muted rounded-full">
                    <Mic className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <CardTitle className="text-lg text-muted-foreground">
                  AI Interview Simulator
                </CardTitle>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium inline-block">
                  Em Breve
                </span>
              </CardHeader>
            </Card>

            {/* Ferramenta 3 - Inativa */}
            <Card className="opacity-50 bg-muted/30">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-muted rounded-full">
                    <Sparkles className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <CardTitle className="text-lg text-muted-foreground">
                  Maestro (Career GPT)
                </CardTitle>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium inline-block">
                  Em Breve
                </span>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
