
import { Card, CardContent } from "@/components/ui/card";
import { Description, AutoAwesome } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const CreateCVMethod = () => {
  const navigate = useNavigate();

  const handleFormMethodClick = () => {
    navigate("/create-cv-form");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">Como você quer criar seu currículo?</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Form Method (Active) */}
          <Card 
            className="rounded-networkme-card shadow-networkme cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
            onClick={handleFormMethodClick}
          >
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Description className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-primary mb-2">Criador Rápido (Formulário)</h2>
              <p className="text-muted-foreground">
                Já tem as suas informações? Crie um CV profissional e formatado em minutos.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: AI Interview Method (Inactive) */}
          <Card className={cn(
            "rounded-networkme-card shadow-networkme opacity-60 bg-muted/30",
          )}>
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="bg-muted p-4 rounded-full mb-4">
                <AutoAwesome className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-bold text-muted-foreground mb-2">
                Entrevista com o Maestro
                <span className="ml-2 bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium inline-block">
                  Em Breve
                </span>
              </h2>
              <p className="text-muted-foreground">
                Não sabe por onde começar? Deixe que a nossa IA o guie com perguntas para extrair o melhor da sua trajetória.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateCVMethod;
