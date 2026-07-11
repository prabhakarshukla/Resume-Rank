import { cn } from "@/lib/utils";
import { scoreTone } from "@/lib/helpers";

const toneClass: Record<string, string> = {
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
};

const toneTrack: Record<string, string> = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

type ScoreBadgeProps = {
  score: number;
  showBar?: boolean;
  className?: string;
};

export function ScoreBadge({
  score,
  showBar = true,
  className,
}: ScoreBadgeProps) {
  const tone = scoreTone(score);

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {showBar && (
        <div
          className="bg-muted h-1.5 w-14 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <div
            className={cn("h-full rounded-full", toneTrack[tone])}
            style={{ width: `${score}%` }}
          />
        </div>
      )}
      <span
        className={cn("font-mono text-sm font-semibold", toneClass[tone])}
      >
        {score}
      </span>
    </div>
  );
}
