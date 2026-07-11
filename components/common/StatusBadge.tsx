import { CircleCheck, Clock, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AnalysisStatus } from "@/features/dashboard/types";

const config: Record<
  AnalysisStatus,
  { label: string; icon: typeof CircleCheck; className: string }
> = {
  completed: {
    label: "Completed",
    icon: CircleCheck,
    className: "bg-success-muted text-success",
  },
  processing: {
    label: "Processing",
    icon: Clock,
    className: "bg-brand-muted text-brand",
  },
  needs_review: {
    label: "Needs review",
    icon: CircleAlert,
    className: "bg-warning-muted text-warning",
  },
};

export function StatusBadge({ status }: { status: AnalysisStatus }) {
  const { label, icon: Icon, className } = config[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium",
        className,
      )}
    >
      <Icon
        className={cn("size-3", status === "processing" && "animate-pulse")}
      />
      {label}
    </span>
  );
}
