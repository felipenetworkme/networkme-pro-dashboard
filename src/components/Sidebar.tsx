
import { Home, Sparkles, Construction, School } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const menuItems = [
    { name: "Início", icon: Home, active: true },
    { name: "Maestro", icon: Sparkles, active: false },
    { name: "Ferramentas", icon: Construction, active: false },
    { name: "Conteúdo", icon: School, active: false },
  ];

  return (
    <div className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">Networkme PRO</h1>
      </div>
      
      <nav className="px-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-networkme-button mb-2 cursor-pointer transition-colors",
              item.active 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
