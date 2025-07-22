
import Sidebar from "@/components/Sidebar";
import MaestroWidget from "@/components/MaestroWidget";
import MissionsWidget from "@/components/MissionsWidget";
import ToolsWidget from "@/components/ToolsWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Menu de Navegação Lateral */}
      <Sidebar />
      
      {/* Área de Conteúdo Principal */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Widget do Maestro */}
          <MaestroWidget />
          
          {/* Widget de Missões */}
          <MissionsWidget />
          
          {/* Widget de Ferramentas */}
          <ToolsWidget />
        </div>
      </main>
    </div>
  );
};

export default Index;
