import {
  Calendar,
  Clock,
  FileText,
  HardDrive,
} from "lucide-react";

interface ResumeMetadataProps {
  fileName: string;
  fileSize: number;
  createdAt: string;
  updatedAt: string | null;
}

export function ResumeMetadata({
  fileName,
  fileSize,
  createdAt,
  updatedAt,
}: ResumeMetadataProps) {
  return (
    <div className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
      <div className="flex items-center gap-3">
        <FileText className="size-5 text-primary" />

        <div>
          <p className="text-xs text-muted-foreground">
            File Name
          </p>

          <p className="font-medium break-all">
            {fileName}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <HardDrive className="size-5 text-primary" />

        <div>
          <p className="text-xs text-muted-foreground">
            File Size
          </p>

          <p className="font-medium">
            {(fileSize / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Calendar className="size-5 text-primary" />

        <div>
          <p className="text-xs text-muted-foreground">
            Uploaded
          </p>

          <p className="font-medium">
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Clock className="size-5 text-primary" />

        <div>
          <p className="text-xs text-muted-foreground">
            Last Updated
          </p>

          <p className="font-medium">
            {updatedAt
              ? new Date(updatedAt).toLocaleString()
              : "Never"}
          </p>
        </div>
      </div>
    </div>
  );
}