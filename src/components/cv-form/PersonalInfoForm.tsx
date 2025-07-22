
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PersonalInfo } from "@/pages/CreateCVForm";

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export const PersonalInfoForm = ({ data, onChange }: PersonalInfoFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: value
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Dados Pessoais</h2>
      <p className="text-muted-foreground mb-6">
        Preencha seus dados de contato para que os recrutadores possam entrar em contato com você.
      </p>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Nome Completo</Label>
          <Input
            id="fullName"
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            placeholder="João Silva"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            placeholder="joao.silva@email.com"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="+351 123 456 789"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="linkedin">URL do LinkedIn</Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={data.linkedin}
            onChange={handleChange}
            placeholder="linkedin.com/in/joaosilva"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="location">Localização</Label>
          <Input
            id="location"
            name="location"
            value={data.location}
            onChange={handleChange}
            placeholder="Lisboa, Portugal"
          />
        </div>
      </div>
    </div>
  );
};
