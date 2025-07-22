
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/components/Stepper";
import { PersonalInfoForm } from "@/components/cv-form/PersonalInfoForm";
import { ExperienceForm } from "@/components/cv-form/ExperienceForm";
import { SkillsLanguagesForm } from "@/components/cv-form/SkillsLanguagesForm";
import { ReviewForm } from "@/components/cv-form/ReviewForm";
import { CVPreview } from "@/components/cv-form/CVPreview";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const STEPS = [
  "Dados Pessoais",
  "Experiências",
  "Habilidades e Idiomas",
  "Rever e Gerar",
  "CV Finalizado"
];

export type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
};

export type Experience = {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
  type: "professional" | "academic" | "volunteer" | "extracurricular";
};

export type Skill = {
  id: string;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Especialista";
};

export type Language = {
  id: string;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado" | "Fluente" | "Nativo";
};

export type CVFormData = {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  skills: Skill[];
  languages: Language[];
  template: "modern" | "classic" | "minimal";
};

const initialFormData: CVFormData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    location: ""
  },
  experiences: [],
  skills: [],
  languages: [],
  template: "modern"
};

const CreateCVForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CVFormData>(initialFormData);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleComplete = () => {
    toast.success("CV gerado com sucesso!");
    navigate("/", { state: { completedMission: "mission-1" } });
  };

  const updateFormData = (section: keyof CVFormData, data: any) => {
    setFormData({
      ...formData,
      [section]: data
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoForm 
            data={formData.personalInfo} 
            onChange={(data) => updateFormData("personalInfo", data)} 
          />
        );
      case 1:
        return (
          <ExperienceForm 
            data={formData.experiences} 
            onChange={(data) => updateFormData("experiences", data)} 
          />
        );
      case 2:
        return (
          <SkillsLanguagesForm 
            skills={formData.skills}
            languages={formData.languages}
            onSkillsChange={(data) => updateFormData("skills", data)}
            onLanguagesChange={(data) => updateFormData("languages", data)}
          />
        );
      case 3:
        return (
          <ReviewForm 
            data={formData} 
            onTemplateChange={(template) => updateFormData("template", template)} 
          />
        );
      case 4:
        return (
          <CVPreview 
            data={formData} 
            onComplete={handleComplete} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Stepper 
          steps={STEPS} 
          currentStep={currentStep} 
          className="mb-8" 
        />
        
        <Card className="rounded-networkme-card shadow-networkme">
          <CardContent className="p-8">
            {renderStepContent()}
            
            {currentStep < STEPS.length - 1 && (
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleNext}
                  className="flex items-center bg-primary text-primary-foreground"
                >
                  Próximo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateCVForm;
