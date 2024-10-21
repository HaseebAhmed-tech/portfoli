"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { info } from "@/lib/constants/constants";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col items-center justify-center space-y-6"
    >
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="lg:w-[54%] order-2 lg:order-none">
          <form
            action=""
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
          >
            <h3 className="text-4xl">
              Let&apos;s Work <span className="text-accent">Together</span>
            </h3>
            <p className="text-secondrytext ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              incidunt officia dignissimos in ipsa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Firstname" />
              <Input type="lastname" placeholder="Lastname" />
              <Input type="email" placeholder="Email address" />
              <Input type="phone" placeholder="Phone number" />
            </div>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a Services</SelectLabel>
                  <SelectItem value="est">Web Development</SelectItem>
                  <SelectItem value="cst">App Development</SelectItem>
                  <SelectItem value="mst">AI Modelling</SelectItem>
                  <SelectItem value="bst">Backend Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
              className="h-[200px] "
              placeholder="Type your message here"
            />
            <Button variant="secondary" size="lg" className="max-w-40">
              Send Meassage
            </Button>
          </form>
        </div>
        <div className="flex-1 items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0 ">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] lg:h-[72px] lg:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px] ">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-secondrytext">{item.title}</p>
                    <h3 className="text-xl ">{item.text}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
