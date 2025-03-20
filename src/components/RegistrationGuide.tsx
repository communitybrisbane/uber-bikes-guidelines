
import { useRef, useEffect, useState } from 'react';
import { registrationSteps } from '@/data/registrationSteps';
import RegistrationStepItem from './RegistrationStepItem';

const RegistrationGuide = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    stepsRef.current = stepsRef.current.slice(0, registrationSteps.length);
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleStep = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  const maxDisplaySteps = 5;
  const displayedSteps = expanded ? registrationSteps : registrationSteps.slice(0, maxDisplaySteps);

  return (
    <section 
      id="registration-guide" 
      className="section-container bg-slate-50"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900">
          自転車でのUber Eats配達員登録ガイド
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <p className="text-lg text-slate-700 mt-4">
          ワーキングホリデーでオーストラリアに滞在中の方向けに、Uber Eats配達員の登録方法を詳しく解説します。
          すべての手続きが完了するまでに約7～14日かかりますので、計画的に進めましょう。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {displayedSteps.map((step, index) => (
          <RegistrationStepItem
            key={step.id}
            step={step}
            isLast={index === displayedSteps.length - 1 && !expanded}
            activeStep={activeStep}
            toggleStep={toggleStep}
          />
        ))}

        {registrationSteps.length > maxDisplaySteps && (
          <div className="text-center mt-8">
            <button
              onClick={toggleExpand}
              className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors font-medium"
            >
              {expanded ? "折りたたむ" : "すべてのステップを表示"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationGuide;
