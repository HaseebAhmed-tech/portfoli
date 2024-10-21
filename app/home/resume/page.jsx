"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  about,
  education,
  experience,
  skills,
} from "@/lib/constants/constants";
function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0 "
    >
      <Tabs
        defaultValue="experience"
        className="flex flex-col w-full lg:flex-row gap-[60px] "
      >
        <TabsList className="flex flex-col w-full max-w-[480px] mx-auto lg:mx-0 gap-6 ">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh]">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center lg:text-left ">
              <h3 className="text-4xl font-bold ">{experience.title}</h3>
              <p className="max-w-[600px]  text-secondrytext mx-auto lg:mx-0 ">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[300px] min-h[60px] text-center lg:text-left ">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] m-0 p-0 rounded-full bg-accent"></span>
                        <p className="text-secondrytext">{item.comapany}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center lg:text-left ">
              <h3 className="text-4xl font-bold ">{education.title}</h3>
              <p className="max-w-[600px]  text-secondrytext mx-auto lg:mx-0 ">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[300px] min-h[60px] text-center lg:text-left ">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] m-0 p-0 rounded-full bg-accent"></span>
                        <p className="text-secondrytext ">{item.institute}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-secondrytext mx-auto lg:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap[30px] gap-4">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize ">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent
            value="about"
            className="w-full text-center lg:text-left "
          >
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold ">{about.title}</h3>
              <p className="max-w-[600px] text-secondrytext mx-auto lg:mx-0 ">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center lg:justify-start gap-4 "
                    >
                      <span className="text-secondrytext">{item.filename}</span>
                      <span className="text-foreground text-xl">
                        {item.feildValue}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
}

export default Resume;
