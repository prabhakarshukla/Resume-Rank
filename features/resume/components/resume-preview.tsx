import { FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ResumePreviewProps {
  file: File;
}

export function ResumePreview({
  file,
}: ResumePreviewProps) {
  const size = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <Card>
      <CardContent className="flex items-center gap-4 py-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <FileText className="size-6 text-primary" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-medium">
            {file.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {size}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
