
import { Button } from "@/components/ui/button";
import { CVFormData } from "@/pages/CreateCVForm";
import { Download } from "lucide-react";

interface CVPreviewProps {
  data: CVFormData;
  onComplete: () => void;
}

export const CVPreview = ({ data, onComplete }: CVPreviewProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">CV Finalizado</h2>
      <p className="text-muted-foreground mb-6">
        Seu currículo está pronto! Você pode baixá-lo em formato PDF.
      </p>
      
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-md aspect-[3/4] border rounded-networkme-card shadow-md bg-white p-8 overflow-hidden">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold">{data.personalInfo.fullName}</h1>
            <p className="text-sm text-muted-foreground">{data.personalInfo.location}</p>
            <div className="text-xs mt-2 space-x-2">
              <span>{data.personalInfo.email}</span>
              <span>•</span>
              <span>{data.personalInfo.phone}</span>
            </div>
          </div>
          
          <div className="space-y-4 text-xs">
            <div>
              <h2 className="text-sm font-bold border-b pb-1 mb-2">Experiência Profissional</h2>
              {data.experiences
                .filter(exp => exp.type === "professional")
                .map((exp, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between">
                      <p className="font-medium">{exp.title}</p>
                      <p>{exp.startDate} - {exp.endDate}</p>
                    </div>
                    <p className="italic">{exp.organization}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
            </div>
            
            <div>
              <h2 className="text-sm font-bold border-b pb-1 mb-2">Habilidades</h2>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <span key={index} className="bg-muted px-2 py-0.5 rounded text-[10px]">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold border-b pb-1 mb-2">Idiomas</h2>
              <div className="grid grid-cols-2 gap-1">
                {data.languages.map((lang, index) => (
                  <div key={index} className="text-[10px]">
                    <span className="font-medium">{lang.name}: </span>
                    <span>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-networkme-button"
          size="lg"
          onClick={onComplete}
        >
          <Download className="mr-2 h-5 w-5" />
          Baixar PDF
        </Button>
      </div>
    </div>
  );
};
