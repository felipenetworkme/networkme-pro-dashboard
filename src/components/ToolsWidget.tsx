import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mic, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tool {
  title: string;
  icon: any;
  active: boolean;
}

const ToolsWidget = () => {
  const tools: Tool[] = [
    {
      title: "AI CV Generator",
      icon: FileText,
      active: true,
    },
    {
      title: "AI Interview Simulator", 
      icon: Mic,
      active: false,
    },
    {
      title: "Maestro (Career GPT)",
      icon: Sparkles,
      active: false,
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Sua Caixa de Ferramentas de IA
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Card 
            key={tool.title}
            className={cn(
              "transition-all cursor-pointer",
              tool.active 
                ? "hover:shadow-md" 
                : "opacity-50 bg-muted/30 cursor-default"
            )}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-3">
                <div className={cn(
                  "p-3 rounded-full",
                  tool.active 
                    ? "bg-primary/10" 
                    : "bg-muted"
                )}>
                  <tool.icon className={cn(
                    "h-6 w-6",
                    tool.active 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )} />
                </div>
              </div>
              
              <CardTitle className={cn(
                "text-lg",
                tool.active 
                  ? "text-foreground" 
                  : "text-muted-foreground"
              )}>
                {tool.title}
              </CardTitle>
              
              {!tool.active && (
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium inline-block mt-2">
                  Em Breve
                </span>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ToolsWidget;
