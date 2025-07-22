
import AppSidebar from "@/components/Sidebar";
import MaestroWidget from "@/components/MaestroWidget";
import MissionsWidget from "@/components/MissionsWidget";
import ToolsWidget from "@/components/ToolsWidget";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-2">Progresso da Jornada</h2>
            <Progress value={33} className="h-4" />
            <p className="text-sm text-muted-foreground mt-2">0 de 5 missões principais concluídas</p>
          </div>
          
          <MaestroWidget />
          <MissionsWidget />
          <ToolsWidget />
        </div>
      </main>
    </div>
  );
};

export default Index;
