import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";

function PasswordInput({ placeholder, showIcon, name }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="relative w-full ">
      <Input
        name={name}
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        className={`${
          showIcon && "pl-10"
        } placeholder:text-sm md:placeholder:text-base`}
      />{" "}
      {showIcon && (
        <RiLockPasswordLine
          className="absolute top-1/2 -translate-y-1/2 left-2 text-accent-hover"
          size={18}
        />
      )}
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute top-1/2 -translate-y-1/2 right-2 text-secondrytext"
      >
        {isPasswordVisible ? (
          <MdOutlineVisibility size={20} className="text-accent" />
        ) : (
          <AiOutlineEyeInvisible size={20} />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
