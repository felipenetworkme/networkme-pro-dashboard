import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Play } from "lucide-react";

const Eventos = () => {
  const upcomingEvent = {
    id: 1,
    date: "25 de Agosto",
    time: "19h00",
    title: "Workshop: Como construir a sua marca pessoal no LinkedIn",
    description: "Aprenda estratégias avançadas para criar uma presença profissional marcante no LinkedIn. Descubra como otimizar o seu perfil, criar conteúdo relevante e expandir a sua rede de contactos de forma eficaz. Este workshop prático será conduzido por especialistas em marca pessoal e marketing digital.",
    speaker: "Ana Silva, Especialista em Marca Pessoal",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop"
  };

  const pastEvents = [
    {
      id: 2,
      date: "10 de Julho",
      time: "18h30",
      title: "Mesa Redonda: O Futuro do Trabalho Remoto",
      description: "Discussão sobre as tendências e desafios do trabalho remoto com líderes de empresas tech.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      date: "15 de Junho",
      time: "19h00",
      title: "Bootcamp: Preparação para Entrevistas Tech",
      description: "Sessão intensiva de preparação para entrevistas técnicas com exercícios práticos e simulações.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      date: "20 de Maio",
      time: "17h00",
      title: "Networking: Conectar Talentos Tech",
      description: "Evento de networking para profissionais de tecnologia partilharem experiências e oportunidades.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Eventos da Comunidade</h1>
            <p className="text-muted-foreground">
              Participe em workshops, networking e eventos para acelerar a sua carreira
            </p>
          </div>

          {/* Upcoming Event Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Próximos Eventos</h2>
            
            <Card className="overflow-hidden rounded-networkme-card shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={upcomingEvent.image} 
                    alt={upcomingEvent.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{upcomingEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{upcomingEvent.time}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{upcomingEvent.title}</h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {upcomingEvent.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-6 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{upcomingEvent.speaker}</span>
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Inscrever-se Gratuitamente
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Past Events Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Eventos Anteriores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-networkme-card">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm mb-4 leading-relaxed">
                      {event.description}
                    </CardDescription>
                    
                    <Button variant="outline" className="w-full justify-center gap-2">
                      <Play className="h-4 w-4" />
                      Ver Gravação
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Eventos;