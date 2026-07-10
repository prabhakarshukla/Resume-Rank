"use server";

import { loginSchema, signupSchema } from "@/schemas/auth-schema";
import { signIn, signOut, signUp } from "./service";

export async function loginAction(formData: unknown) {
  const validatedFields = loginSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error } = await signIn(validatedFields.data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Logged in successfully.",
  };
}

export async function signupAction(formData: unknown) {
  const validatedFields = signupSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error } = await signUp(validatedFields.data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Account created successfully.",
  };
}

export async function logoutAction() {
  await signOut();

  return {
    success: true,
    message: "Logged out successfully.",
  };
}