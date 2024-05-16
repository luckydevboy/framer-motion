import { motion } from "framer-motion";
import { CheckIcon } from "@/components/icons";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

type Props = {
  step: number;
  currentStep: number;
};

const Step = ({ currentStep, step }: Props) => {
  const status: "active" | "inactive" | "complete" =
    currentStep === step
      ? "active"
      : currentStep < step
        ? "inactive"
        : "complete";

  return (
    <div className="relative">
      <motion.div
        animate={status}
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 bg-blue-200 rounded-full"
      ></motion.div>
      <motion.div
        initial={false}
        animate={status}
        variants={{
          active: {
            backgroundColor: fullConfig.theme.colors.white,
            borderColor: fullConfig.theme.colors.blue[500],
            color: fullConfig.theme.colors.blue[500],
          },
          inactive: {
            backgroundColor: fullConfig.theme.colors.white,
            borderColor: fullConfig.theme.colors.slate[200],
            color: fullConfig.theme.colors.slate[400],
          },
          complete: {
            backgroundColor: fullConfig.theme.colors.blue[500],
            borderColor: fullConfig.theme.colors.blue[500],
            color: fullConfig.theme.colors.blue[500],
          },
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center border-2 font-semibold rounded-full w-10 h-10 relative"
        key={step}
      >
        {status === "complete" ? <CheckIcon /> : <span>{step}</span>}
      </motion.div>
    </div>
  );
};

export default Step;
