import { useState } from "react";
import { useSelector } from "react-redux";
import { getFirstname, getLastname } from "@/lib/utils";

export const useUserData = () => {
  const userData = useSelector((state) => state.user.userData);
  const [firstname, setFirstname] = useState(
    userData ? getFirstname(userData.name) : "John"
  );
  const [lastname, setLastname] = useState(
    userData ? getLastname(userData.name) : "Doe"
  );
  const [designation, setDesignation] = useState(
    userData ? userData.designation : ""
  );
  const [email, setEmail] = useState(userData ? userData.email : "");

  const [contact, setContact] = useState(userData ? userData.contact : "")

  const [description, setDescription] = useState(userData ? userData.description : "")
  return {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    designation,
    setDesignation,
    email,
    setEmail,
    contact,
    setContact,
    description,
    setDescription
  };
};
