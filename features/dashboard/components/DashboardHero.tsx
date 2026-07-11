import Link from "next/link";
import { Sparkles, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGreeting } from "@/lib/helpers";
import { currentUser, jobMatch } from "@/features/dashboard/data";

export function DashboardHero() {
  const greeting = getGreeting();

  return (
    <section className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-1.5">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <span className="bg-success inline-block size-1.5 rounded-full" />
          {jobMatch.matchedKeywords} of {jobMatch.totalKeywords} keywords
          matched for {jobMatch.company}
        </div>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-balance md:text-3xl">
          {greeting}, {currentUser.firstName}
        </h1>
        <p className="text-muted-foreground text-pretty">
          Ready to improve your resume today? Your top match sits at{" "}
          <span className="text-foreground font-medium">
            {jobMatch.percentage}%
          </span>{" "}
          for {jobMatch.role}.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Button
          variant="outline"
          render={<Link href="/analysis" />}
          className="h-9 gap-1.5"
        >
          <Sparkles className="size-4" />
          Run analysis
        </Button>
        <Button
          render={<Link href="/upload" />}
          className="bg-brand text-brand-foreground hover:bg-brand/90 h-9 gap-1.5"
        >
          <Upload className="size-4" />
          Upload resume
        </Button>
      </div>
    </section>
  );
}
