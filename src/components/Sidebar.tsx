
import { Home, Sparkles, Construction, School } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const menuItems = [
  { name: "Início", icon: Home, active: true },
  { name: "Maestro", icon: Sparkles, active: false },
  { name: "Ferramentas", icon: Construction, active: false },
  { name: "Conteúdo", icon: School, active: false },
];

const AppSidebar = () => {
  return (
    <div className="group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar">
      <SidebarProvider>
        <ShadcnSidebar className="border-r border-border" variant="sidebar" collapsible="icon">
          <SidebarHeader className="p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">Networkme PRO</h1>
            <SidebarTrigger className="h-7 w-7" />
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-networkme-button mb-2 w-full transition-colors",
                      item.active 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                    tooltip={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </ShadcnSidebar>
      </SidebarProvider>
    </div>
  );
};

export default AppSidebar;
