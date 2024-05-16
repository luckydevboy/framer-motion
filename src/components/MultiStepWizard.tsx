import { Step } from "@/components/index";
import { useState } from "react";
import { useAnimationControls } from "framer-motion";

const LENGTH = 4;

const MultiStepWizard = () => {
  const [status, setStatus] = useState(1);
  const controls = useAnimationControls();

  const handleContinue = () => {
    if (status <= LENGTH) {
      setStatus((prevState) => prevState + 1);
      controls.start({ opacity: 1, pathLength: 1 });
    }
  };

  const handleBack = () => {
    if (status > 1) {
      setStatus((prevState) => prevState - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 inline-block">
      <div className="flex justify-between">
        {Array.from({ length: LENGTH }, (_, index) => index + 1).map((item) => (
          <Step key={item} step={item} currentStep={status} />
        ))}
      </div>

      <div className="mt-8 mb-4 h-6 w-44 bg-slate-100 rounded"></div>
      <div className="h-3 w-60 bg-slate-100 rounded"></div>
      <div className="mt-2 h-3 w-80 bg-slate-100 rounded"></div>

      <div className="flex justify-between items-center mt-8">
        <button
          className="font-semibold disabled:text-slate-400"
          onClick={handleBack}
          disabled={status === 1}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white rounded-full px-4 py-2 font-semibold disabled:bg-blue-500/50"
          disabled={status === LENGTH + 1}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MultiStepWizard;
