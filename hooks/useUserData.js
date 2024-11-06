import { useState } from "react";
import { useSelector } from "react-redux";
import { getFirstname, getLastname } from "@/lib/utils";

export const useUserData = () => {
  const userData = useSelector((state) => state.user.userData);
  const [firstname, setFirstname] = useState(
    userData ? getFirstname(userData.name) : ""
  );
  const [lastname, setLastname] = useState(
    userData ? getLastname(userData.name) : ""
  );
  const [designation, setDesignation] = useState(
    userData ? userData.designation : ""
  );
  const [email, setEmail] = useState(userData ? userData.email : "");
  return {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    designation,
    setDesignation,
    email,
    setEmail,
  };
};
