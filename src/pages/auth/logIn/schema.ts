import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Please enter email"),
  password: z.string().min(8, "Please enter correct password"),
});