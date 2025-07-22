
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";

const MaestroWidget = () => {
  return (
    <Card className="mb-6 rounded-networkme-card shadow-networkme">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-primary">
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
            className="w-full rounded-networkme-button bg-muted/30 border-muted-foreground/20 focus:bg-background"
          />
          
          <div className="flex justify-end">
            <Button variant="link" className="text-sm text-primary p-0 h-auto font-medium" asChild>
              <NavLink to="/maestro">
                Abrir conversa completa
                <ExternalLink className="ml-1 h-3 w-3" />
              </NavLink>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaestroWidget;
