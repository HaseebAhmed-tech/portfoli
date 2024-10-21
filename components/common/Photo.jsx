"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Photo() {
  return (
    <div className=" w-full h-full relative ">
      <div className="w-[220px] h-[220px] xl:w-[498px] xl:h-[498px] lg:w-[350px] lg:h-[350px] absolute inset-0 m-auto">
        <Image
          src="/assets/logo3.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain mix-blend-lighten "
        />
      </div>

      <motion.svg
        className="w-[230px] xl:w-[560px] lg:w-[400px] h-[230px] xl:h-[560px] lg:h-[400px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
}

export default Photo;
