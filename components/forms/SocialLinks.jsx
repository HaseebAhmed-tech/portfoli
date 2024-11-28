import React, { use } from "react";
import IconInput from "./../common/IconInput";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useSocials } from "@/hooks/useSocials";
import { handleSubmit } from "@/features/forms/SocialLinks/helper";
import { useDispatch } from "react-redux";

function SocialLinks({userId}) {
  const { linkedin, setLinkedin, github, setGithub, instagram, setInstagram } =
    useSocials();
  const dispatch = useDispatch();

  // "PRI by UN"
  // "TCFT Senario Analysis"
  // "IFRS"


  return (
    <form id="Socials-Link" onSubmit={(e)=> {handleSubmit(e, userId, dispatch)}}>
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
    </form>
  );
}

export default SocialLinks;
