
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Experience } from "@/pages/CreateCVForm";
import { Plus, Trash, Briefcase, GraduationCap, Heart, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

const experienceTypes = [
  { value: "professional", label: "Experiência Profissional", icon: Briefcase },
  { value: "academic", label: "Projetos Acadêmicos", icon: GraduationCap },
  { value: "volunteer", label: "Trabalho Voluntário", icon: Heart },
  { value: "extracurricular", label: "Atividades Extracurriculares", icon: Award }
];

export const ExperienceForm = ({ data, onChange }: ExperienceFormProps) => {
  const [activeType, setActiveType] = useState<Experience["type"]>("professional");
  
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
      type: activeType
    };
    
    onChange([...data, newExperience]);
  };
  
  const updateExperience = (id: string, updates: Partial<Experience>) => {
    onChange(
      data.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };
  
  const removeExperience = (id: string) => {
    onChange(data.filter(item => item.id !== id));
  };
  
  const filteredExperiences = data.filter(exp => exp.type === activeType);
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Experiências</h2>
      <p className="text-muted-foreground mb-6">
        Adicione suas experiências profissionais, acadêmicas, voluntárias e extracurriculares.
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {experienceTypes.map((type) => (
          <Button
            key={type.value}
            variant={activeType === type.value ? "default" : "outline"}
            className="flex items-center gap-2"
            onClick={() => setActiveType(type.value as Experience["type"])}
          >
            <type.icon className="h-4 w-4" />
            {type.label}
          </Button>
        ))}
      </div>
      
      <div className="space-y-4">
        {filteredExperiences.map((experience) => (
          <Card key={experience.id} className="rounded-networkme-card shadow-sm">
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-primary">
                  {experience.title || "Nova Experiência"}
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-destructive hover:text-destructive/90"
                  onClick={() => removeExperience(experience.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor={`title-${experience.id}`}>Cargo/Título</Label>
                  <Input
                    id={`title-${experience.id}`}
                    value={experience.title}
                    onChange={(e) => updateExperience(experience.id, { title: e.target.value })}
                    placeholder="Desenvolvedor Full-Stack"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor={`organization-${experience.id}`}>Empresa/Instituição</Label>
                  <Input
                    id={`organization-${experience.id}`}
                    value={experience.organization}
                    onChange={(e) => updateExperience(experience.id, { organization: e.target.value })}
                    placeholder="Empresa XYZ"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor={`startDate-${experience.id}`}>Data de Início</Label>
                    <Input
                      id={`startDate-${experience.id}`}
                      value={experience.startDate}
                      onChange={(e) => updateExperience(experience.id, { startDate: e.target.value })}
                      placeholder="Jan 2020"
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor={`endDate-${experience.id}`}>Data de Término</Label>
                    <Input
                      id={`endDate-${experience.id}`}
                      value={experience.endDate}
                      onChange={(e) => updateExperience(experience.id, { endDate: e.target.value })}
                      placeholder="Atual"
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor={`description-${experience.id}`}>Descrição</Label>
                  <Textarea
                    id={`description-${experience.id}`}
                    value={experience.description}
                    onChange={(e) => updateExperience(experience.id, { description: e.target.value })}
                    placeholder="Descreva suas responsabilidades e realizações nesta posição..."
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 border-dashed"
          onClick={addExperience}
        >
          <Plus className="h-4 w-4" />
          Adicionar {experienceTypes.find(t => t.value === activeType)?.label}
        </Button>
      </div>
    </div>
  );
};
