
import { Home, Sparkles, FileText, MessagesSquare, BookOpen, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper to check if a path is active
  const isActive = (path: string) => currentPath === path;

  return (
    <div className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-primary">Networkme PRO</h1>
      </div>
      
      <nav className="px-4">
        {/* Main Navigation Items */}
        <NavLink 
          to="/"
          className={({ isActive }) => cn(
            "flex items-center gap-3 px-4 py-3 rounded-networkme-button mb-2 cursor-pointer transition-colors",
            isActive
              ? "bg-primary text-primary-foreground" 
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Home className="h-5 w-5" />
          <span className="font-medium">Início</span>
        </NavLink>

        <NavLink 
          to="/maestro"
          className={({ isActive }) => cn(
            "flex items-center gap-3 px-4 py-3 rounded-networkme-button mb-2 cursor-pointer transition-colors",
            isActive
              ? "bg-primary text-primary-foreground" 
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Sparkles className="h-5 w-5" />
          <span className="font-medium">Maestro</span>
        </NavLink>

        {/* Separator */}
        <div className="h-px bg-border my-4"></div>
        
        {/* Tools Section */}
        <div className="px-4 mb-2">
          <span className="text-xs font-semibold text-muted-foreground tracking-wider">
            FERRAMENTAS
          </span>
        </div>
        
        <NavLink 
          to="/create-cv"
          className={({ isActive }) => cn(
            "flex items-center gap-3 px-4 py-3 rounded-networkme-button mb-2 cursor-pointer transition-colors pl-6",
            isActive
              ? "bg-primary text-primary-foreground" 
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <FileText className="h-5 w-5" />
          <span className="font-medium">Criador de CV</span>
        </NavLink>

        <div
          className={cn(
            "flex items-start gap-3 px-4 py-3 rounded-networkme-button mb-2 cursor-pointer transition-colors pl-6",
            "text-muted-foreground/60"
          )}
        >
          <MessagesSquare className="h-5 w-5 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-medium">Entrevista IA</span>
            <span className="text-xs text-muted-foreground/70">Em Breve</span>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-border my-4"></div>
        
        {/* Community Section */}
        <div className="px-4 mb-2">
          <span className="text-xs font-semibold text-muted-foreground tracking-wider">
            COMUNIDADE
          </span>
        </div>
        
        <NavLink 
          to="/conteudos"
          className={({ isActive }) => cn(
            "flex items-center gap-3 px-4 py-3 rounded-networkme-button mb-2 cursor-pointer transition-colors pl-6",
            isActive
              ? "bg-primary text-primary-foreground" 
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <BookOpen className="h-5 w-5" />
          <span className="font-medium">Conteúdos</span>
        </NavLink>

        <NavLink 
          to="/eventos"
          className={({ isActive }) => cn(
            "flex items-center gap-3 px-4 py-3 rounded-networkme-button mb-2 cursor-pointer transition-colors pl-6",
            isActive
              ? "bg-primary text-primary-foreground" 
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Users className="h-5 w-5" />
          <span className="font-medium">Eventos</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
