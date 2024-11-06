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

function Profile() {
  const userData = useSelector((state) => state.user.userData);

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
            <h1 className="text-xl lg:text-2xl">{userData.name}</h1>
            <h2 className="text-md text-accent mb-2">{userData.designation}</h2>
            <Button variant="rounded" size="md">
              Edit Profile
            </Button>
          </div>
          <div className="flex-1 px-12">
            <div className="flex flex-col">
              <div className="flex items-center justify-between py-4 border-b border-slate-800">
                <h1 className="text-lg">Account Information</h1>
                <Modal
                  ModalTrigger={
                    <Button variant="simple" size="sm">
                      Edit
                    </Button>
                  }
                  title={"Account Information"}
                  ModalContent={<AccountInfo />}
                />
              </div>
              <div className="flex items-center justify-between py-4 border-b border-slate-800">
                <h1 className="text-lg">Stats</h1>
                <Modal
                  ModalTrigger={
                    <Button variant="simple" size="sm">
                      Edit
                    </Button>
                  }
                  title={"Stats Data"}
                  ModalContent={<StatsData />}
                />
              </div>
              <div className="flex items-center justify-between py-4 border-b border-slate-800">
                <h1 className="text-lg">Social Links</h1>
                <Modal
                  ModalTrigger={
                    <Button variant="simple" size="sm">
                      Edit
                    </Button>
                  }
                  title={"Socail Links"}
                  ModalContent={<SocialLinks />}
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
