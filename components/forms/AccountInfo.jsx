import React from "react";
import PasswordInput from "../common/PasswordInput";
import ErrorInputs from "../common/ErrorInputs";
import { useForm } from "@/hooks/useForm";
import { useUserData } from "@/hooks/useUserData";
import { useState } from "react";

function AccountInfo() {
  const { errors, setErrors } = useForm();
  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    designation,
    setDesignation,
    email,
    setEmail,
  } = useUserData();

  const [ resetPassword, setResetPassword ] = useState(false)

  return (
    <form className="flex flex-col gap-3 md:gap-6 bg-[#27272c] rounded-xl py-5 ">
      <div className="grid grid-cols-2 gap-3 md:gap-6 ">
        <ErrorInputs
          name="firstname"
          error={errors.firstname}
          placeholder="Firstname"
          value={firstname}
        />

        <ErrorInputs
          name="lastname"
          error={errors.lastname}
          placeholder="Lastname"
          value={lastname}
        />

        <ErrorInputs
          name="designation"
          error={errors.designation}
          placeholder="Designation"
          value={designation}
        />

        <ErrorInputs name="phone" error={errors.phone} placeholder="Phone" />
      </div>
      <div className={"flex flex-col"}>
        <ErrorInputs
          name="email"
          error={errors.email}
          placeholder="Email Address"
          type="email"
          value={email}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-2">{errors.email}</p>
        )}
      </div>
      


  {!resetPassword && <p onClick={()=>{setResetPassword(!resetPassword)}} className="text-accent underline hover:cursor-pointer p-2">Reset Password</p>}
   {resetPassword && <div className={"flex flex-col"}>
        <PasswordInput
          name="password"
          placeholder="Password"
          showIcon={false}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-2">{errors.password}</p>
        )}
      </div>}
      {resetPassword && <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <div className="flex flex-col">
          <PasswordInput
            name="password"
            placeholder="Password"
            showIcon={false}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-2">{errors.password}</p>
          )}
        </div>

        <div className="flex flex-col">
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm Password"
            showIcon={false}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-2">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>}
    </form>
  );
}

export default AccountInfo;
