import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Set New Password",
  description: "Set your new ResumeRank password",
};

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Set new password"
      description="Create a strong password for your account"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}
