import { useState } from "react";
import { useSelector } from "react-redux";

export const useSocials = () => {
  const socialLinks = useSelector((state) => state.socials.socials);
  const [linkedin, setLinkedin] = useState(
    socialLinks ? socialLinks.linkedin : ""
  );
  const [github, setGithub] = useState(socialLinks ? socialLinks.github : "");
  const [instagram, setInstagram] = useState(
    socialLinks ? socialLinks.instagram : ""
  );
  return {
    linkedin,
    setLinkedin,
    github,
    setGithub,
    instagram,
    setInstagram,
  };
};
