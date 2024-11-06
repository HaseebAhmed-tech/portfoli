import React from "react";
import IconInput from "./../common/IconInput";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useSocials } from "@/hooks/useSocials";
function SocialLinks() {
  const { linkedin, setLinkedin, github, setGithub, instagram, setInstagram } =
    useSocials();

  return (
    <div className={"py-5"}>
      <IconInput
        name="linkedin"
        Icon={FaLinkedin}
        inputProps={{
          placeholder: "LinkedIn",
          value: linkedin,
        }}
        set={(e) => setLinkedin(e)}
      />
      <IconInput
        name="github"
        Icon={FaGithub}
        inputProps={{
          placeholder: "GitHub",
          value: github,
        }}
        set={(e) => setGithub(e)}
      />
      <IconInput
        name="instagram"
        Icon={FaInstagram}
        inputProps={{
          placeholder: "Instagram",
          value: instagram,
        }}
        set={(e) => setInstagram(e)}
      />
    </div>
  );
}

export default SocialLinks;
