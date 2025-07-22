import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Conteudos = () => {
  const contentItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      category: "Entrevistas",
      title: "Os 5 erros a evitar na sua próxima entrevista",
      description: "Descubra os erros mais comuns em entrevistas de emprego e como evitá-los para aumentar as suas chances de sucesso.",
      type: "artigo"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop",
      category: "CV",
      title: "Como criar um CV que se destaca",
      description: "Aprenda as melhores práticas para criar um curriculum vitae que chama a atenção dos recrutadores.",
      type: "video"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=200&fit=crop",
      category: "Carreira",
      title: "Dicas para negociar o seu salário",
      description: "Estratégias eficazes para negociar um salário justo e benefícios adequados na sua próxima proposta de emprego.",
      type: "artigo"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
      category: "Tech",
      title: "Tendências do mercado tech em 2024",
      description: "Uma análise completa das principais tendências e oportunidades no setor tecnológico para os próximos anos.",
      type: "video"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      category: "LinkedIn",
      title: "Otimize o seu perfil no LinkedIn",
      description: "Passos essenciais para criar um perfil profissional atrativo e expandir a sua rede de contactos.",
      type: "artigo"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop",
      category: "Soft Skills",
      title: "Desenvolva as suas competências interpessoais",
      description: "Como desenvolver e demonstrar soft skills que são cada vez mais valorizadas pelo mercado de trabalho.",
      type: "video"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Conteúdos para a sua Carreira</h1>
            <p className="text-muted-foreground">
              Artigos, vídeos e recursos para acelerar o seu desenvolvimento profissional
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-networkme-card">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 leading-relaxed">
                    {item.description}
                  </CardDescription>
                  
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto text-primary hover:text-primary">
                    {item.type === "video" ? "Ver Vídeo" : "Ler Mais"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conteudos;