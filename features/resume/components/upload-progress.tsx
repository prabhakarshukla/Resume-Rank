interface UploadProgressProps {
  progress: number;
}

export function UploadProgress({
  progress,
}: UploadProgressProps) {
  return (
    <div className="space-y-2">
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Uploading... {progress}%
      </p>
    </div>
  );
}