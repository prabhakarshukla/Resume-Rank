import { SignupForm } from "@/features/auth/components/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </main>
  );
}