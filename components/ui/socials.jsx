import React from "react";
import { socials } from "@/lib/constants/constants";
import Link from "next/link";
import { useSelector } from "react-redux";

export const SocialsComponent = () => {
  const socialLinks = useSelector((state) => state.socials.socials);
  console.log("Loading Socials Links: ", socialLinks)

  return (
    <ul className="hidden lg:flex mr-12 space-x-2">
      {socials.map((tab, index) => {
        const socialId = tab.id;
        console.log(tab.link)
        console.log((socialLinks[socialId]!=="" && socialLinks[socialId]!==null) ? socialLinks[socialId] : tab.link)
        return (
          <Link
            key={index}
            className="w-10 h-10 rounded-full border border-accent 
                    bg-icons text-foreground flex justify-center items-center hover:text-primary
                    hover:bg-accent transition transform duration-300 ease-in-out hover:scale-110 hover:-rotate-6 relative"
            href={socialLinks? (socialLinks[socialId]!==null && socialLinks[socialId]!=="") ? socialLinks[socialId] : tab.link: tab.link}
            target="_blank"
          >
            {tab.icon}
          </Link>
        );
      })}
    </ul>
  );
};

export default socials;
