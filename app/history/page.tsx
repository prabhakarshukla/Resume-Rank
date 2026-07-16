import { ResumeList } from "@/features/resume/components/resume-list";
import { getUserResumes } from "@/features/resume/service";

export default async function HistoryPage() {
  const resumes = await getUserResumes();

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Resume History
        </h1>

        <p className="text-muted-foreground">
          Manage all your uploaded resumes.
        </p>
      </div>

      <ResumeList resumes={resumes} />
    </div>
  );
}