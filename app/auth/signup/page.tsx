import type { Metadata } from "next";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { SignupForm } from "@/features/auth/components/SignupForm";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create a new ResumeRank account",
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create account"
      description="Join ResumeRank to start improving your resume"
    >
      <SignupForm />
    </AuthLayout>
  );
}
