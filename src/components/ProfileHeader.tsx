
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfileHeader = () => {
  const location = useLocation();
  const [completedMissions, setCompletedMissions] = useState(0);

  useEffect(() => {
    // Check if returning from completing a mission
    if (location.state && location.state.completedMission) {
      setCompletedMissions(1); // For now, we track 1 completed mission
    }
  }, [location]);
  return (
    <Card className="mb-6 rounded-networkme-card shadow-networkme">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
          {/* Left Column - User Identity */}
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-border">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&fit=crop&q=80" 
                  alt="Foto de perfil" 
                />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              
              <div>
                <h2 className="text-xl font-bold">João Silva</h2>
                <p className="text-muted-foreground text-sm">
                  Engenharia de Software, Universidade do Porto
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Objective and Progress */}
          <div className="w-full sm:w-auto sm:text-right mt-4 sm:mt-0">
            <div className="mb-4">
              <span className="text-xs text-muted-foreground block mb-1">
                Meu Objetivo de Carreira:
              </span>
              <div className="flex items-center gap-2 justify-start sm:justify-end">
                <h3 className="text-lg font-bold text-primary">
                  Conseguir o 1º Emprego em Tech
                </h3>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-6 w-6 rounded-full"
                >
                  <Edit className="h-3.5 w-3.5" />
                  <span className="sr-only">Editar objetivo</span>
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 justify-start sm:justify-end">
              <Flag className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong>{completedMissions}</strong> / 5 Missões Concluídas
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
