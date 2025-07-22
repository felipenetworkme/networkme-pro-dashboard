
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Mission {
  id: string;
  title: string;
  description: string;
  active: boolean;
}

const MissionsWidget = () => {
  const [completedMissions, setCompletedMissions] = useState<Set<string>>(new Set());

  const missions: Mission[] = [
    {
      id: "mission-1",
      title: "Missão 01: Construir um CV de alto impacto",
      description: "Crie um currículo profissional que passa pelos filtros de IA (ATS) e impressiona recrutadores.",
      active: true,
    },
    {
      id: "mission-2", 
      title: "Missão 02: Preparar para entrevistas com IA",
      description: "",
      active: false,
    },
    {
      id: "mission-3",
      title: "Missão 03: Mapear seus superpoderes profissionais", 
      description: "",
      active: false,
    },
  ];

  const handleMissionToggle = (missionId: string) => {
    const newCompleted = new Set(completedMissions);
    if (newCompleted.has(missionId)) {
      newCompleted.delete(missionId);
    } else {
      newCompleted.add(missionId);
      toast.success('Parabéns, missão concluída!', {
        position: 'bottom-right',
      });
    }
    setCompletedMissions(newCompleted);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-primary mb-4">
        Seu Plano de Ação (Missões)
      </h2>
      
      <div className="space-y-4">
        {missions.map((mission) => {
          const isCompleted = completedMissions.has(mission.id);
          const isInactive = !mission.active;
          
          return (
            <Card 
              key={mission.id}
              className={cn(
                "transition-all rounded-networkme-card shadow-networkme",
                isCompleted && "opacity-60 bg-muted/30",
                isInactive && "opacity-50 bg-muted/30"
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Checkbox
                    checked={isCompleted}
                    onCheckedChange={() => handleMissionToggle(mission.id)}
                    disabled={isInactive}
                    className="mt-1"
                  />
                  
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-lg font-bold mb-2",
                      isCompleted && "line-through",
                      isInactive ? "text-muted-foreground" : "text-primary"
                    )}>
                      {mission.title}
                      {isInactive && (
                        <span className="ml-2 bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium">
                          Em Breve
                        </span>
                      )}
                    </h3>
                    
                    {mission.description && (
                      <p className={cn(
                        "text-muted-foreground mb-4",
                        isCompleted && "line-through"
                      )}>
                        {mission.description}
                      </p>
                    )}
                    
                    {mission.active && !isCompleted && (
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-networkme-button">
                        Começar Missão
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MissionsWidget;
