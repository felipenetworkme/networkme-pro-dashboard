
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import MaestroWidget from "@/components/MaestroWidget";
import MissionsWidget from "@/components/MissionsWidget";
import ToolsWidget from "@/components/ToolsWidget";
import ProfileHeader from "@/components/ProfileHeader";
import { Progress } from "@/components/ui/progress";
import { useLocation } from "react-router-dom";

const Index = () => {
  const [completedMissions, setCompletedMissions] = useState<number>(0);
  const location = useLocation();
  
  useEffect(() => {
    // Update progress if returning from completing a mission
    if (location.state && location.state.completedMission) {
      setCompletedMissions(1); // For now, we're just tracking one mission
    }
  }, [location]);

  const totalMissions = 5;
  const progressValue = (completedMissions / totalMissions) * 100;

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Profile and objective header */}
          <ProfileHeader />
          
          {/* Chatbot assistant widget */}
          <div className="mb-10">
            <MaestroWidget />
          </div>
          
          {/* Missions widget with action plan */}
          <div className="mb-10">
            <MissionsWidget />
          </div>
          
          {/* Tools widget */}
          <div className="mt-10">
            <ToolsWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
