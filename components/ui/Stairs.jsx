import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

function Stairs() {
  const stairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  return [...Array(6)].map((_, index) => {
    return (
      <motion.div
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.4,
          delay: reverseIndex(index) * 0.1,
          ease: "easeInOut",
        }}
        className={`w-full h-full relative bg-slate-300 top-0 pointer-events-none `}
        onAnimationComplete={() => {}}
      />
    );
  });
}

export default Stairs;
