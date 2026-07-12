import { AuthLayout } from "@/components/layout/AuthLayout";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Reset password"
      description="Choose a new password for your account."
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}