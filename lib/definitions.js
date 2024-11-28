import { z } from "zod";

export const SignupFormSchema = z
  .object({
    firstname: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long." })
      .trim(),
    lastname: z.string().trim().optional(),
    email: z
      .string()
      .min(1, { message: "Required." })
      .email({ message: "Please enter a valid email." })
      .trim(),
    description: z.string().optional(),
    contact: z.string().trim().optional(),
    designation: z.string().min(1, { message: "Required." }).trim(),
    password: z
      .string()
      .min(1, { message: "Required." })
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim(),
    confirmPassword: z.string(),
    linkedin: z.string().trim().optional(),
    github: z.string().trim().optional(),
    instagram: z.string().trim().optional(),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"], // points to the field where the issue should be reported
        message: "Passwords do not match.",
      });
    }
  });

export const LoginFormSchema = z.object({
  email: z.string().min(1, { message: "Email can't be Empty" }).email(),
  password: z.string().min(1, { message: "Password can't be Empty" }),
});

export const AccountInfoSchema = z
  .object({
    firstname: z.string().min(1, { message: "Firstname can't be Empty" }),
    lastname: z.string().trim().optional(),
    email: z.preprocess(
      (value) => {
        if (typeof value === 'string' && value.trim() === '') {
          return null; // Convert empty strings to null
        }
        return value;
      },
      z.string()
        .email({ message: "Please enter a valid email address." })
        .nullable() // Email can be null
    ),
  
    description: z.string().optional(),
    contact: z.string().optional(),
    designation: z.string().min(1, { message: "Required" }).nullable(),
    oldPassword: z.string().min(1, { message: "Required" }).nullable(),
    password: z
      .string()
      .min(1, { message: "Required." })
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
      .regex(/[0-9]/, { message: "Contain at least one number." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character.",
      })
      .trim().nullable(),
    confirmPassword: z.string().nullable(),
  })
  .superRefine((values, ctx) => {
    if(values.oldPassword){
      if (values.password !== values.confirmPassword) {
        ctx.addIssue({
          path: ["confirmPassword"], // points to the field where the issue should be reported
          message: "Passwords do not match.",
        });
      }
    }
  });
