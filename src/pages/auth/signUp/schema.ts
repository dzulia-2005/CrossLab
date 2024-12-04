import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .max(255, "Username is too long"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
    first_name: z.string().max(255, "First name is too long").optional(),
    last_name: z.string().max(255, "Last name is too long").optional(),
    email: z.string().email("Invalid email address").optional(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Confirm Password must match Password",
    path: ["confirmPassword"],
  });
