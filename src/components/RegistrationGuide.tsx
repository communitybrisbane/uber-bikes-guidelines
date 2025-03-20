
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
      className="section-container bg-uber-lightGray"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title mx-auto w-fit after:mx-auto">
          自転車でのUber Eats配達員登録ガイド
        </h2>
        <p className="text-lg text-gray-700 mt-4">
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
              className="uber-outline-button"
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
