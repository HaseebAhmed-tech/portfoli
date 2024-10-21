"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function PageTransition({ children }) {
  const tabIndex = useSelector((state) => state.index.value);

  return (
    <AnimatePresence>
      <div key={tabIndex}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-full w-full absolute z-20 bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}

export default PageTransition;
