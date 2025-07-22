
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";

const MaestroWidget = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Maestro - Seu Assistente de Carreira
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-foreground">
            "Olá, João Silva! Analisei seu perfil e nossa primeira missão juntos é construir um CV de alto impacto. Pronto para começar?"
          </p>
        </div>
        
        <div className="space-y-3">
          <Input
            placeholder="Responda ao Maestro ou faça uma pergunta..."
            className="w-full"
          />
          
          <div className="flex justify-end">
            <Button variant="link" className="text-sm text-muted-foreground p-0 h-auto">
              Abrir conversa completa
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaestroWidget;
