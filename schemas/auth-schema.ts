import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long."),
});

export const signupSchema = loginSchema
  .extend({
    fullName: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters long.")
      .max(100, "Full name cannot exceed 100 characters."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;

export const forgotPasswordSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

export type ForgotPasswordSchema = z.infer<
  typeof forgotPasswordSchema
>;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type ResetPasswordSchema = z.infer<
  typeof resetPasswordSchema
>;