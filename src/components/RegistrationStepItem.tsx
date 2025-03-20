
import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Step, StepContentItem } from '@/data/registrationSteps';
import CopyButton from './CopyButton';

type RegistrationStepItemProps = {
  step: Step;
  isLast: boolean;
  activeStep: number | null;
  toggleStep: (id: number) => void;
};

const RegistrationStepItem = ({ 
  step, 
  isLast, 
  activeStep, 
  toggleStep 
}: RegistrationStepItemProps) => {
  
  const renderContent = () => {
    if (Array.isArray(step.content)) {
      return (
        <ul className="space-y-2">
          {step.content.map((item: StepContentItem, i) => (
            <li key={i} className="flex items-start space-x-2">
              <ArrowRight size={16} className="text-uber-green mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">{item.item}</span>
                {item.description && (
                  <span className="text-gray-600 ml-2">（{item.description}）</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      );
    } else {
      return <div>{step.content}</div>;
    }
  };

  // Special handling for step 3 (invitation code)
  const renderStep3Content = () => {
    if (step.id === 3) {
      return (
        <div>
          <p className="mb-3">招待コードを入力しないと$500の特典が受け取れません！</p>
          <div className="flex items-center justify-center bg-uber-green/10 p-3 rounded-lg mb-2">
            <p className="text-uber-green font-mono font-bold tracking-wider mr-2">353ebz8exhf7</p>
            <CopyButton code="353ebz8exhf7" />
          </div>
          <p className="text-sm text-gray-600">※ 登録時にのみ入力可能。後から追加することはできません。</p>
        </div>
      );
    }
    
    return renderContent();
  };

  return (
    <div 
      className={`mb-6 ${
        isLast ? '' : 'border-l-2 border-uber-green pb-8'
      } pl-8 relative transition-all duration-500`}
    >
      {/* Step Indicator */}
      <div 
        className="absolute left-0 transform -translate-x-1/2 w-12 h-12 rounded-full
                   flex items-center justify-center bg-white shadow-md border-2 border-uber-green"
      >
        <span className="text-uber-green font-bold">{step.id}</span>
      </div>

      {/* Content */}
      <div 
        className="glass-panel rounded-xl p-6 hover:shadow-glass-hover transition-all duration-300 cursor-pointer"
        onClick={() => toggleStep(step.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {step.icon}
            <h3 className="text-lg font-semibold">{step.title}</h3>
          </div>
          {(Array.isArray(step.content) || typeof step.content === 'object') && (
            <button className="text-uber-green">
              {activeStep === step.id ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          )}
        </div>

        {/* Step Content */}
        <div 
          className={`mt-4 transition-all duration-300 overflow-hidden ${
            !Array.isArray(step.content) || activeStep === step.id 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          {renderStep3Content()}
        </div>
      </div>
    </div>
  );
};

export default RegistrationStepItem;
