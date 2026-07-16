"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";

import { uploadResume } from "../upload";
import { ResumePreview } from "./resume-preview";
import { UploadCard } from "./upload-card";
import { UploadProgress } from "./upload-progress";

export function UploadForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleFile(selectedFile: File) {
    setFile(selectedFile);
  }

  async function handleUpload() {
    if (!file) return;

    setIsUploading(true);
    setProgress(25);

    try {
      setProgress(60);

      const result = await uploadResume(file);

      setProgress(100);

      if (!result.success) {
        toast.error(result.error?.message);
        return;
      }

      toast.success("Resume uploaded successfully.");

      setFile(null);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } finally {
      setIsUploading(false);

      setTimeout(() => {
        setProgress(0);
      }, 500);
    }
  }

  return (
    <div
      className="space-y-6"
      aria-busy={isUploading}
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        hidden
        aria-label="Upload resume"
        onChange={(event) => {
          const selectedFile = event.target.files?.[0];

          if (selectedFile) {
            handleFile(selectedFile);
          }
        }}
      />

      <div
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();

          setIsDragging(false);

          const droppedFile =
            event.dataTransfer.files?.[0];

          if (droppedFile) {
            handleFile(droppedFile);
          }
        }}
      >
        <UploadCard
          isDragging={isDragging}
          onClick={() => inputRef.current?.click()}
        />
      </div>

      {file && <ResumePreview file={file} />}

      {isUploading && (
        <UploadProgress progress={progress} />
      )}

      {file && (
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleUpload}
            disabled={isUploading}
            className="flex-1 rounded-md bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
          >
            {isUploading
              ? "Uploading..."
              : "Upload Resume"}
          </button>

          <button
            type="button"
            onClick={handleUpload}
            disabled={isUploading}
            className="rounded-md border px-4 py-2 transition hover:bg-accent disabled:pointer-events-none disabled:opacity-50"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}