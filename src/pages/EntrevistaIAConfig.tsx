import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EntrevistaIAConfig = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vaga: "",
    tipoEntrevista: "",
    descricao: ""
  });

  const tiposEntrevista = [
    "Triagem com RH",
    "Entrevista Técnica", 
    "Painel com Gestores"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.vaga && formData.tipoEntrevista) {
      navigate("/entrevista-ia/simulacao", { state: formData });
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-primary">Entrevista IA</h1>
            <p className="text-muted-foreground">Configure a sua simulação de entrevista</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                Prepare a sua Simulação de Entrevista
              </h2>
              <p className="text-muted-foreground">
                Configure os detalhes para uma experiência personalizada
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo 1: Vaga */}
              <div className="space-y-2">
                <Label htmlFor="vaga" className="text-sm font-medium">
                  Para qual vaga ou área está a treinar?
                </Label>
                <Input
                  id="vaga"
                  type="text"
                  placeholder="Ex: Estágio em Marketing Digital"
                  value={formData.vaga}
                  onChange={(e) => setFormData({ ...formData, vaga: e.target.value })}
                  className="rounded-networkme-button"
                  required
                />
              </div>

              {/* Campo 2: Tipo de Entrevista */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  Qual o tipo de entrevista?
                </Label>
                <div className="flex flex-wrap gap-2">
                  {tiposEntrevista.map((tipo) => (
                    <Badge
                      key={tipo}
                      variant={formData.tipoEntrevista === tipo ? "default" : "outline"}
                      className="cursor-pointer px-4 py-2 rounded-networkme-button"
                      onClick={() => setFormData({ ...formData, tipoEntrevista: tipo })}
                    >
                      {tipo}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Campo 3: Descrição (Opcional) */}
              <div className="space-y-2">
                <Label htmlFor="descricao" className="text-sm font-medium">
                  (Opcional) Cole aqui a descrição da vaga para perguntas mais personalizadas
                </Label>
                <Textarea
                  id="descricao"
                  placeholder="Descrição da vaga..."
                  value={formData.descricao}
                  onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                  className="min-h-[100px] rounded-networkme-button"
                />
              </div>

              {/* Botão de Ação */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full rounded-networkme-button"
                  disabled={!formData.vaga || !formData.tipoEntrevista}
                >
                  Começar Simulação
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default EntrevistaIAConfig;