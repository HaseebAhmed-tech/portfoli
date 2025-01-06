"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import  { services as servicesPlaceholder } from "@/lib/constants/constants" ;
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function Services() {

  const [ services, setServices ]= useState(useSelector((state) => state.services.services))

  useEffect(()=> {
    console.log("Services Use Effect Call: => ", services)
    checkServices(services)
  }, [services]);

  const checkServices = (services) => {

    if (services==null || services.length==0){
      console.log("Services PlaceHolder: ", servicesPlaceholder)
      setServices(servicesPlaceholder)  
    }}
    
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services && services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                  {index + 1}
                </div>
                <Link
                  href={service?.href ?? ""}
                  className="w-[70px] h-[70px] rounded-full bg-foreground group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl " />
                </Link>
              </div>
              <div>
                <h2 className="text-[42px] font-bold leading-none text-foreground group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full "></div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Services;
