import { createClient } from "@/server/supabase/server";
import { LoginSchema, SignupSchema } from "@/schemas/auth-schema";

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