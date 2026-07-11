"use server";

import { redirect } from "next/navigation";

import { loginSchema, signupSchema } from "@/schemas/auth-schema";
import { signIn, signOut, signUp } from "./service";
import { resetPasswordSchema } from "@/schemas/auth-schema";
import { updatePassword } from "./service";

import {
  forgotPasswordSchema,
} from "@/schemas/auth-schema";

import {
  forgotPassword,
} from "./service";

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
};
}

export async function logoutAction() {
  await signOut();

  redirect("/login");
}

export async function forgotPasswordAction(formData: unknown) {
  const validatedFields = forgotPasswordSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid email address.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error } = await forgotPassword(validatedFields.data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
}

export async function updatePasswordAction(
  formData: unknown
) {
  const validatedFields =
    resetPasswordSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error } = await updatePassword(
    validatedFields.data
  );

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
}