import React from "react";
import { socials } from "@/lib/constants/constants";
import Link from "next/link";
import { useSelector } from "react-redux";

function Socials({ containerStyle, iconStyle }) {
  const socialLinks = useSelector((state) => state.socials.socials);
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => {
        const socialId = social.id;
        return (
          <Link
            key={index}
            href={socialLinks ? socialLinks[socialId] : social.link}
            target="_blank"
            className={iconStyle}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
