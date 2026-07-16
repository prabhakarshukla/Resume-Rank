import { ResumeListSkeleton } from "@/features/resume/components/resume-list-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-2">
        <div className="h-8 w-64 animate-pulse rounded bg-muted" />
        <div className="h-4 w-80 animate-pulse rounded bg-muted" />
      </div>

      <ResumeListSkeleton />
    </div>
  );
}