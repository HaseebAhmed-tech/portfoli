import { useState } from "react";

export const useForm = () => {
  const [errors, setErrors] = useState({});
  return {
    errors,
    setErrors,
  };
};
