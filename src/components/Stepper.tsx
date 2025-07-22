
import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export const Stepper = ({ steps, currentStep, className }: StepperProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={cn(
              "relative flex items-center justify-center w-10 h-10 rounded-full border-2",
              index <= currentStep 
                ? "bg-primary border-primary text-primary-foreground" 
                : "bg-background border-muted-foreground/30 text-muted-foreground"
            )}>
              <span className="text-sm font-medium">{index + 1}</span>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={cn(
                  "absolute w-[calc(100%-2rem)] h-0.5 -right-1/2 top-1/2 -translate-y-1/2",
                  index < currentStep ? "bg-primary" : "bg-muted-foreground/30"
                )} />
              )}
            </div>
            
            <span className={cn(
              "mt-2 text-xs text-center max-w-[80px]",
              index <= currentStep ? "text-primary font-medium" : "text-muted-foreground"
            )}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
