import {
  FileText,
  Target,
  Sparkles,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { statCards } from "@/features/dashboard/data";
import type { StatCard } from "@/features/dashboard/types";

const iconMap: Record<string, LucideIcon> = {
  resumes: FileText,
  ats: Target,
  analyses: Sparkles,
  skills: Lightbulb,
};

function trendClasses(trend: StatCard["trend"]) {
  if (trend === "up") return "text-success bg-success-muted";
  if (trend === "down") return "text-warning bg-warning-muted";
  return "text-muted-foreground bg-muted";
}

export function StatCards() {
  return (
    <section
      aria-label="Key metrics"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {statCards.map((stat) => {
        const Icon = iconMap[stat.id] ?? FileText;
        const TrendIcon = stat.trend === "down" ? TrendingDown : TrendingUp;

        return (
          <Card
            key={stat.id}
            className="gap-0 p-5 transition-shadow hover:shadow-sm"
          >
            <div className="flex items-start justify-between">
              <span className="bg-muted text-muted-foreground flex size-9 items-center justify-center rounded-lg">
                <Icon className="size-[18px]" />
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                  trendClasses(stat.trend),
                )}
              >
                <TrendIcon className="size-3" />
                {stat.deltaLabel}
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
              <p className="font-heading text-3xl font-semibold tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-xs">{stat.helpText}</p>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
