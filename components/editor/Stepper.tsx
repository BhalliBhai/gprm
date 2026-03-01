import React from 'react';

interface StepperProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: "Basic Info", title: "Profile Information", nextLabel: "Skills & Tech Stack" },
  { id: 2, label: "Tech Stack", title: "Tech Stack & Skills", nextLabel: "Project Stats" },
  { id: 3, label: "Github Stats", title: "GitHub Analytics", nextLabel: "Choose Template" },
  { id: 4, label: "Template", title: "Choose Your Template", nextLabel: "Finalize Export" },
  { id: 5, label: "Finalize", title: "Generate & Export", nextLabel: "Done" },
];

export function Stepper({ currentStep }: StepperProps) {
  const currentIndex = currentStep - 1;
  const currentStepData = steps[currentIndex];
  
  // Progress bar percentage based on step
  const progressPercentage = ((currentStep) / steps.length) * 100;

  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Step {currentStep} of {steps.length}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black dark:text-white">
            {currentStepData.title}
          </h1>
        </div>
        {currentStep < steps.length && (
          <div className="text-left sm:text-right hidden sm:block">
            <span className="text-sm font-medium opacity-60 dark:text-slate-400">
              Next: {currentStepData.nextLabel}
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/10">
        <div 
          className="absolute inset-y-0 left-0 bg-primary transition-all duration-500" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Step Indicators */}
      <div className="mt-4 flex justify-between hidden sm:flex">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          
          return (
            <div 
              key={step.id} 
              className={`flex items-center gap-2 ${isCurrent ? 'text-primary' : isCompleted ? 'text-primary/70' : 'opacity-30 dark:text-slate-400'}`}
            >
              <span className="material-symbols-outlined text-sm">
                {isCompleted ? 'check_circle' : isCurrent ? 'radio_button_checked' : 'circle'}
              </span>
              <span className={`text-[10px] sm:text-xs font-bold uppercase hidden md:inline-block ${isCurrent ? 'text-primary' : ''}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
