import { UploadForm } from "@/features/resume/components/upload-form";

export default function UploadPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          Upload Resume
        </h1>

        <p className="text-muted-foreground">
          Upload your resume in PDF format to start AI analysis.
        </p>
      </div>

      <UploadForm />
    </div>
  );
}