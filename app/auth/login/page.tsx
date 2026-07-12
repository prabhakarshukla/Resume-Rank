import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your ResumeRank account",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to your ResumeRank account"
    >
      <LoginForm />
    </AuthLayout>
  );
}
