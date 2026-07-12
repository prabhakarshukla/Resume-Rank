import type { ReactNode } from "react";
import { AuthLayout } from "@/components/layout/AuthLayout";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthLayout
      title="ResumeRank"
      description="AI-powered resume analysis"
    >
      {children}
    </AuthLayout>
  );
}