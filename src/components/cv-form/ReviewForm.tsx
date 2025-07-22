
import { Card, CardContent } from "@/components/ui/card";
import { CVFormData } from "@/pages/CreateCVForm";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ReviewFormProps {
  data: CVFormData;
  onTemplateChange: (template: CVFormData["template"]) => void;
}

export const ReviewForm = ({ data, onTemplateChange }: ReviewFormProps) => {
  const templates = [
    { id: "modern", name: "Moderno", image: "/cv-template-modern.png" },
    { id: "classic", name: "Clássico", image: "/cv-template-classic.png" },
    { id: "minimal", name: "Minimalista", image: "/cv-template-minimal.png" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Rever e Gerar</h2>
      <p className="text-muted-foreground mb-6">
        Verifique as informações abaixo e escolha um modelo para o seu currículo.
      </p>

      <div className="space-y-6">
        <Card className="rounded-networkme-card shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-medium text-primary mb-2">Dados Pessoais</h3>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">Nome:</span> {data.personalInfo.fullName}</p>
              <p><span className="font-medium">Email:</span> {data.personalInfo.email}</p>
              <p><span className="font-medium">Telefone:</span> {data.personalInfo.phone}</p>
              <p><span className="font-medium">LinkedIn:</span> {data.personalInfo.linkedin}</p>
              <p><span className="font-medium">Localização:</span> {data.personalInfo.location}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-networkme-card shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-medium text-primary mb-2">Experiências</h3>
            {data.experiences.length > 0 ? (
              <div className="space-y-3">
                {data.experiences.map((exp) => (
                  <div key={exp.id} className="text-sm">
                    <p className="font-medium">{exp.title}</p>
                    <p>{exp.organization} | {exp.startDate} - {exp.endDate}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">Nenhuma experiência adicionada</p>
            )}
          </CardContent>
        </Card>

        <Card className="rounded-networkme-card shadow-sm">
          <CardContent className="p-4">
            <h3 className="font-medium text-primary mb-2">Habilidades e Idiomas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Habilidades</h4>
                {data.skills.length > 0 ? (
                  <ul className="text-sm list-disc list-inside">
                    {data.skills.map((skill) => (
                      <li key={skill.id}>{skill.name} ({skill.level})</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm">Nenhuma habilidade adicionada</p>
                )}
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-1">Idiomas</h4>
                {data.languages.length > 0 ? (
                  <ul className="text-sm list-disc list-inside">
                    {data.languages.map((language) => (
                      <li key={language.id}>{language.name} ({language.level})</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm">Nenhum idioma adicionado</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="font-medium text-primary mb-4">Escolha um modelo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div 
              key={template.id}
              className={cn(
                "relative cursor-pointer rounded-networkme-card overflow-hidden border-2 transition-all",
                data.template === template.id 
                  ? "border-primary shadow-md" 
                  : "border-transparent hover:border-primary/50"
              )}
              onClick={() => onTemplateChange(template.id as CVFormData["template"])}
            >
              <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="font-medium">{template.name}</p>
                  <p className="text-xs text-muted-foreground">(Visualização)</p>
                </div>
              </div>
              
              {data.template === template.id && (
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
