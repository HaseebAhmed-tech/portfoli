"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/constants/constants";
import WorksSliderBtns from "@/components/common/WorksSliderBtns";

function Work() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
    setProject;
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="flex flex-col lg:flex-row lg:gap-[30px] ">
        <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>
            <p className="text-secondrytext ">{project.description}</p>
            <ul className="flex gap-4 ">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20 "></div>
            <div className="flex items-center gap-4 ">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-foreground text-3xl group-hover:text-accent  " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project Live</p>
                      </TooltipContent>
                    </Tooltip>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-foreground text-3xl group-hover:text-accent  " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] ">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="h-[520px] mb-12 "
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative h-[460px] group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        alt={project.title}
                        src={project.image}
                        fill
                        className="object-cover "
                      ></Image>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <WorksSliderBtns
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 w-full z-20 justify-between lg:w-max lg:justify-none "
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
            />
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
