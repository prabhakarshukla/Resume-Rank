import { AuthLayout } from "@/components/layout/AuthLayout";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot password?"
      description="We'll send you a password reset link."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}