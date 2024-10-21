import React from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/components/common/Socials";
import Photo from "@/components/common/Photo";
import Stats from "@/components/common/Stats";
import { useSelector } from "react-redux";

function Homepage() {
  const user = useSelector((state) => state.user.userData);
  return (
    <section className="h-full ">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-none ">
          <span className="text-xl  ">
            {user.designation ?? "Designation "}
          </span>
          <h1 className="mb-5 h1 ">
            Hello I am <br />
            <span className="text-accent uppercase ">
              {user.name ?? "John Doe"}
            </span>
          </h1>
          <p className=" text-foreground w-[100%] lg:max-w-[85%] mb-12 ">
            {user.description ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-8 ">
            <Button
              variant="secondary"
              size="lg"
              className="flex space-x-2 items-center"
            >
              <span>Download CV</span> <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 lg:mb-0 ">
              <Socials
                containerStyle="flex gap-6"
                iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
              />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-none mb-8 lg:mb-0 ">
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Homepage;
