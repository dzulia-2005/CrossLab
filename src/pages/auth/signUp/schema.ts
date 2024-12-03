import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters"),
    fullName: z.string().min(3, "Name must be at least 3 characters"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Confirm Password must match Password",
    path: ["confirmPassword"], 
  });

