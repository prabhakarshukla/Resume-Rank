"use client";

import { UploadCloud } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface UploadCardProps {
  isDragging: boolean;
  onClick: () => void;
}

export function UploadCard({
  isDragging,
  onClick,
}: UploadCardProps) {
  return (
    <Card
      role="button"
      tabIndex={0}
      aria-label="Upload resume"
      onClick={onClick}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          onClick();
        }
      }}
      className={`cursor-pointer border-2 border-dashed transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        isDragging
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/60 hover:bg-muted/40"
      }`}
    >
      <CardContent className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
        <UploadCloud className="size-10 text-primary" />

        <div className="space-y-1">
          <h3 className="text-lg font-semibold">
            Upload your resume
          </h3>

          <p className="text-sm text-muted-foreground">
            Drag & drop your PDF here or click to browse.
          </p>

          <p className="text-xs text-muted-foreground">
            PDF • Max 5 MB
          </p>
        </div>
      </CardContent>
    </Card>
  );
}