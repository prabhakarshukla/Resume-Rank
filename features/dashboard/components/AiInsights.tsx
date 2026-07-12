import {
  Award,
  CircleAlert,
  Lightbulb,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import {
  strengths,
  weaknesses,
  missingSkills,
  recommendations,
  jobMatch,
} from "@/features/dashboard/data";

function InsightList({
  title,
  icon: Icon,
  iconClass,
  items,
  markerClass,
}: {
  title: string;
  icon: LucideIcon;
  iconClass: string;
  items: string[];
  markerClass: string;
}) {
  return (
    <Card className="gap-4 p-5">
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "flex size-8 items-center justify-center rounded-lg",
            iconClass,
          )}
        >
          <Icon className="size-4" />
        </span>
        <h3 className="font-heading text-sm font-semibold">{title}</h3>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <span
              className={cn(
                "mt-1.5 size-1.5 shrink-0 rounded-full",
                markerClass,
              )}
            />
            <span className="text-muted-foreground leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function JobMatchCard() {
  const dash = 2 * Math.PI * 40;
  const offset = dash - (dash * jobMatch.percentage) / 100;

  return (
    <Card className="from-brand/8 items-center gap-4 bg-gradient-to-b to-transparent p-5">
      <div className="flex w-full items-center gap-2.5">
        <span className="bg-brand-muted text-brand flex size-8 items-center justify-center rounded-lg">
          <Target className="size-4" />
        </span>
        <h3 className="font-heading text-sm font-semibold">Job match score</h3>
      </div>

      <div className="relative flex size-32 items-center justify-center">
        <svg className="size-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            className="fill-none stroke-muted"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            className="fill-none stroke-brand transition-all"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={dash}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="font-heading text-3xl font-semibold tabular-nums">
            {jobMatch.percentage}%
          </span>
          <span className="text-muted-foreground text-xs">match</span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm font-medium">{jobMatch.role}</p>
        <p className="text-muted-foreground text-xs">
          {jobMatch.company} · {jobMatch.matchedKeywords}/
          {jobMatch.totalKeywords} keywords
        </p>
      </div>
    </Card>
  );
}

export function AiInsights() {
  return (
    <section aria-label="AI insights" className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Sparkles className="text-brand size-4" />
        <h2 className="font-heading text-lg font-semibold tracking-tight">
          AI insights
        </h2>
        <span className="bg-brand-muted text-brand ml-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium">
          Updated today
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <InsightList
          title="Top strengths"
          icon={Award}
          iconClass="bg-success-muted text-success"
          items={strengths}
          markerClass="bg-success"
        />
        <InsightList
          title="Weaknesses"
          icon={CircleAlert}
          iconClass="bg-warning-muted text-warning"
          items={weaknesses}
          markerClass="bg-warning"
        />
        <JobMatchCard />

        <Card className="gap-4 p-5">
          <div className="flex items-center gap-2.5">
            <span className="bg-danger-muted text-danger flex size-8 items-center justify-center rounded-lg">
              <Target className="size-4" />
            </span>
            <h3 className="font-heading text-sm font-semibold">
              Missing skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill) => (
              <span
                key={skill.name}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium",
                  skill.demand === "high"
                    ? "border-danger/25 bg-danger-muted text-danger"
                    : "border-border bg-muted text-muted-foreground",
                )}
              >
                {skill.name}
                {skill.demand === "high" && (
                  <span className="text-[10px] opacity-70">high demand</span>
                )}
              </span>
            ))}
          </div>
        </Card>

        <Card className="gap-4 p-5 lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="bg-brand-muted text-brand flex size-8 items-center justify-center rounded-lg">
              <Lightbulb className="size-4" />
            </span>
            <h3 className="font-heading text-sm font-semibold">
              Recommended improvements
            </h3>
          </div>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {recommendations.map((rec, i) => (
              <li
                key={rec}
                className="bg-muted/50 flex items-start gap-2.5 rounded-lg p-3 text-sm"
              >
                <span className="bg-brand text-brand-foreground mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold">
                  {i + 1}
                </span>
                <span className="text-muted-foreground leading-relaxed">
                  {rec}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
