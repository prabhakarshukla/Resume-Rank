import { AuthLayout } from "@/components/layout/AuthLayout";
import { SignupForm } from "@/features/auth/components/SignupForm";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create your account"
      description="Start improving your ATS score today"
    >
      <SignupForm />
    </AuthLayout>
  );
}