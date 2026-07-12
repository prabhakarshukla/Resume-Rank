import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your ResumeRank password",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot password?"
      description="Enter your email and we&apos;ll send you a link to reset your password"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
