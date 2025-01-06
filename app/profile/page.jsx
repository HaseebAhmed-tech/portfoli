"use client";

import Modal from "@/components/common/Modal";
import Image from "next/image";
import { FaSmileWink } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import Header from "@/components/common/Header";
import SocialLinks from "@/components/forms/SocialLinks";
import AccountInfo from "./../../components/forms/AccountInfo";
import StatsData from "./../../components/forms/StatsData";
import ServicesData from "@/components/forms/Services";
import SectionWithModal from "@/components/common/SectionWithModal"
 
function Profile() {
  const userData = useSelector((state) => state.user.userData);
  const userId = useSelector((state) => state.user.userId);


  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex w-full">
          <div className="flex flex-col w-[30%] items-center  py-6 rounded-md ">
            <div>
              <div className="rounded-full w-80 h-80 relative">
                <Image
                  src="/assets/logo3.png"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="object-cover rounded-full w-full h-full"
                />
                <div>
                  <Button
                    variant="icon"
                    size="icon"
                    className="absolute right-5 top-3/4 w-10 h-10 border-none bg-[#27272c]"
                  >
                    <FaSmileWink />
                  </Button>
                </div>
              </div>
            </div>
            <h1 className="text-xl lg:text-2xl">{userData.name ?? "John Doe"}</h1>
            <h2 className="text-md text-accent mb-2">{userData.designation}</h2>
            <Button variant="rounded" size="md">
              Edit Profile
            </Button>
          </div>
          <div className="flex-1 px-12">
            <div className="flex flex-col">
              <SectionWithModal title={"Account Information"} form={"Account-Info"} ModalContent={<AccountInfo />} userId={userId}/>
              <SectionWithModal title={"Stats Data"} form={"Stats-Data"} ModalContent={<StatsData />} userId={userId}/>
              <SectionWithModal title={"Socail Links"} form={"Socials-Link"} ModalContent={<SocialLinks />} userId={userId}/>
              <SectionWithModal title={"Services"} form={"Services"} ModalContent={<ServicesData />} userId={userId} />
              <SectionWithModal title={"Resume"} form={""} ModalContent={<div />} userId={userId}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
