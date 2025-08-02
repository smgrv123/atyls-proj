import { z } from "zod";

export const signInSchema = z.object({
  emailOrUsername: z.string().min(3, "Email or username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z
  .object({
    emailOrUsername: z.string().min(3, "Email or username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    repeatPassword: z.string().min(6, "Please repeat your password"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords must match",
    path: ["repeatPassword"],
  });
