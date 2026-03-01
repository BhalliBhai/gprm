"use client";

import React, { useState } from 'react';
import { EditorState, INITIAL_STATE } from '@/components/editor/types';
import { Stepper } from '@/components/editor/Stepper';
import { Step1Profile } from '@/components/editor/Step1Profile';
import { Step2Skills } from '@/components/editor/Step2Skills';
import { Step3Analytics } from '@/components/editor/Step3Analytics';
import { Step4Templates } from '@/components/editor/Step4Templates';
import { Step5Export } from '@/components/editor/Step5Export';

export default function EditorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [editorState, setEditorState] = useState<EditorState>(INITIAL_STATE);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 p-6 md:p-10">
      <div className="mx-auto w-full max-w-7xl">
        <Stepper currentStep={currentStep} />
        
        <div className="mt-8">
          {currentStep === 1 && (
            <Step1Profile 
              state={editorState} 
              setState={setEditorState} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 2 && (
            <Step2Skills 
              state={editorState} 
              setState={setEditorState} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 3 && (
            <Step3Analytics 
              state={editorState} 
              setState={setEditorState} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 4 && (
            <Step4Templates 
              state={editorState} 
              setState={setEditorState} 
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 5 && (
            <Step5Export 
              state={editorState} 
              setState={setEditorState} 
              prevStep={prevStep} 
            />
          )}
        </div>
      </div>
    </div>
  );
}
