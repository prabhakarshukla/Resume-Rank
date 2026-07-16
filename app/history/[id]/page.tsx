import { notFound } from "next/navigation";

import { createClient } from "@/server/supabase/server";

import { ResumeMetadata } from "@/features/resume/components/resume-metadata";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ResumeDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    notFound();
  }

  const { data: resume, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (error || !resume) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Resume Details
        </h1>

        <p className="text-muted-foreground">
          View your uploaded resume information.
        </p>
      </div>

      <ResumeMetadata
        fileName={resume.file_name}
        fileSize={resume.file_size}
        createdAt={resume.created_at}
        updatedAt={resume.updated_at}
      />
    </div>
  );
}