import Link from "next/link";
import {
  Upload,
  Sparkles,
  GitCompare,
  History,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type QuickAction = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconClass: string;
};

const actions: QuickAction[] = [
  {
    title: "Upload resume",
    description: "Add a new resume to analyze",
    href: "/upload",
    icon: Upload,
    iconClass: "bg-brand-muted text-brand",
  },
  {
    title: "Analyze resume",
    description: "Match against a job description",
    href: "/analysis",
    icon: Sparkles,
    iconClass: "bg-success-muted text-success",
  },
  {
    title: "Compare resumes",
    description: "See which version ranks higher",
    href: "/analysis?mode=compare",
    icon: GitCompare,
    iconClass: "bg-warning-muted text-warning",
  },
  {
    title: "View history",
    description: "Browse past analyses",
    href: "/history",
    icon: History,
    iconClass: "bg-muted text-muted-foreground",
  },
];

export function QuickActions() {
  return (
    <section aria-label="Quick actions" className="flex flex-col gap-4">
      <h2 className="font-heading text-lg font-semibold tracking-tight">
        Quick actions
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Card
              key={action.title}
              className="group hover:border-brand/30 relative gap-0 p-5 transition-all hover:shadow-sm"
            >
              <Link href={action.href} className="absolute inset-0">
                <span className="sr-only">{action.title}</span>
              </Link>
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-xl",
                    action.iconClass,
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <ArrowUpRight className="text-muted-foreground/40 group-hover:text-brand size-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="mt-4 flex flex-col gap-1">
                <h3 className="text-sm font-semibold">{action.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {action.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
