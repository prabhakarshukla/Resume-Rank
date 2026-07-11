import { createClient } from "@/server/supabase/server";
import { LoginSchema, SignupSchema } from "@/schemas/auth-schema";
import type { ForgotPasswordSchema } from "@/schemas/auth-schema";
import type {
  ResetPasswordSchema,
} from "@/schemas/auth-schema";

export async function signUp(data: SignupSchema) {
  const supabase = await createClient();

  return supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        full_name: data.fullName,
      },
    },
  });
}

export async function signIn(data: LoginSchema) {
  const supabase = await createClient();

  return supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
}

export async function signOut() {
  const supabase = await createClient();

  return supabase.auth.signOut();
}

export async function getCurrentUser() {
  const supabase = await createClient();

  return supabase.auth.getUser();
}

export async function forgotPassword(
  data: ForgotPasswordSchema
) {
  const supabase = await createClient();

  return supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
  });
}

export async function updatePassword(
  data: ResetPasswordSchema
) {
  const supabase = await createClient();

  return supabase.auth.updateUser({
    password: data.password,
  });
}