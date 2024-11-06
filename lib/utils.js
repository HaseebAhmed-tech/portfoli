import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleValidationErrors = (validationResult) => {
  if (!validationResult.error || !validationResult.error.errors) {
    return {}; // Return an empty object if there are no validation errors
  }
  return validationResult.error.errors.reduce((acc, error) => {
    acc[error.path[0]] = error.message;
    return acc;
  }, {});
};

export const getFirstname = (name) => {
  if (!name) return "";
  return name.split(" ").length > 1 ? name.split(" ")[0] : name;
};

export const getLastname = (name) => {

  if (!name) return "";
  return name.split(" ").length > 1 ? name.split(" ")[1] : "";
};
 