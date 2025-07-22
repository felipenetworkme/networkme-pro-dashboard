
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skill, Language } from "@/pages/CreateCVForm";
import { Plus, Trash, Code, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillsLanguagesFormProps {
  skills: Skill[];
  languages: Language[];
  onSkillsChange: (skills: Skill[]) => void;
  onLanguagesChange: (languages: Language[]) => void;
}

const skillLevels = ["Básico", "Intermediário", "Avançado", "Especialista"];
const languageLevels = ["Básico", "Intermediário", "Avançado", "Fluente", "Nativo"];

export const SkillsLanguagesForm = ({ 
  skills, 
  languages, 
  onSkillsChange, 
  onLanguagesChange 
}: SkillsLanguagesFormProps) => {
  const [activeTab, setActiveTab] = useState<"skills" | "languages">("skills");
  
  // Skills functions
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      level: "Intermediário"
    };
    onSkillsChange([...skills, newSkill]);
  };
  
  const updateSkill = (id: string, updates: Partial<Skill>) => {
    onSkillsChange(
      skills.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };
  
  const removeSkill = (id: string) => {
    onSkillsChange(skills.filter(item => item.id !== id));
  };
  
  // Languages functions
  const addLanguage = () => {
    const newLanguage: Language = {
      id: Date.now().toString(),
      name: "",
      level: "Intermediário"
    };
    onLanguagesChange([...languages, newLanguage]);
  };
  
  const updateLanguage = (id: string, updates: Partial<Language>) => {
    onLanguagesChange(
      languages.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };
  
  const removeLanguage = (id: string) => {
    onLanguagesChange(languages.filter(item => item.id !== id));
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Habilidades e Idiomas</h2>
      <p className="text-muted-foreground mb-6">
        Adicione suas habilidades técnicas e idiomas para destacar suas competências.
      </p>
      
      <div className="flex space-x-2 mb-6">
        <Button
          variant={activeTab === "skills" ? "default" : "outline"}
          className="flex items-center gap-2"
          onClick={() => setActiveTab("skills")}
        >
          <Code className="h-4 w-4" />
          Habilidades
        </Button>
        <Button
          variant={activeTab === "languages" ? "default" : "outline"}
          className="flex items-center gap-2"
          onClick={() => setActiveTab("languages")}
        >
          <Globe className="h-4 w-4" />
          Idiomas
        </Button>
      </div>
      
      {activeTab === "skills" ? (
        <div className="space-y-4">
          {skills.map((skill) => (
            <Card key={skill.id} className="rounded-networkme-card shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`skill-${skill.id}`}>Habilidade</Label>
                      <Input
                        id={`skill-${skill.id}`}
                        value={skill.name}
                        onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                        placeholder="React.js"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor={`skill-level-${skill.id}`}>Nível</Label>
                      <select
                        id={`skill-level-${skill.id}`}
                        value={skill.level}
                        onChange={(e) => updateSkill(skill.id, { 
                          level: e.target.value as Skill["level"] 
                        })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {skillLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-destructive hover:text-destructive/90"
                    onClick={() => removeSkill(skill.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 border-dashed"
            onClick={addSkill}
          >
            <Plus className="h-4 w-4" />
            Adicionar Habilidade
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {languages.map((language) => (
            <Card key={language.id} className="rounded-networkme-card shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`language-${language.id}`}>Idioma</Label>
                      <Input
                        id={`language-${language.id}`}
                        value={language.name}
                        onChange={(e) => updateLanguage(language.id, { name: e.target.value })}
                        placeholder="Inglês"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor={`language-level-${language.id}`}>Nível</Label>
                      <select
                        id={`language-level-${language.id}`}
                        value={language.level}
                        onChange={(e) => updateLanguage(language.id, { 
                          level: e.target.value as Language["level"] 
                        })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {languageLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-destructive hover:text-destructive/90"
                    onClick={() => removeLanguage(language.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 border-dashed"
            onClick={addLanguage}
          >
            <Plus className="h-4 w-4" />
            Adicionar Idioma
          </Button>
        </div>
      )}
    </div>
  );
};
