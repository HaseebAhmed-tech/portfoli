"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Stairs from "../ui/Stairs";

function StairTransition() {
  const tabIndex = useSelector((state) => state.index.value);
  return (
    <AnimatePresence mode="wait">
      <div key={tabIndex}>
        <div className="h-full w-full absolute top-0 left-0 pointer-events-none z-40 flex rounded-full">
          <Stairs />
        </div>
        <motion.div
          className="w-full h-full px-10 absolute z-30 bg-primary top-0 left-0 pointer-events-none border-x-4 border-accent "
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
}

export default StairTransition;
