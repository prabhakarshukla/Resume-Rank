"use client";

import {
  CheckCircle2,
  TriangleAlert,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

export function AIAnalysisPreview() {
  return (
    <section className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
            AI Analysis
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Actionable insights in seconds
          </h2>

          <p className="text-muted-foreground mt-5 text-lg">
            ResumeRank doesn't just score your resume—it explains exactly what
            to improve.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="rounded-3xl border bg-card p-8 text-center">
            <p className="text-muted-foreground text-sm">
              Overall ATS Score
            </p>

            <div className="my-8 text-7xl font-bold text-brand">
              92%
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-600">
              <TrendingUp className="size-4" />
              Excellent Match
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="mb-5 text-lg font-semibold">
                AI Recommendations
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 text-green-500" />
                  <p>Add quantified achievements wherever possible.</p>
                </div>

                <div className="flex gap-3">
                  <TriangleAlert className="mt-1 text-orange-500" />
                  <p>Include Docker and AWS keywords.</p>
                </div>

                <div className="flex gap-3">
                  <BadgeCheck className="mt-1 text-brand" />
                  <p>Your resume summary is well optimized.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Formatting", "95%"],
                ["Keywords", "88%"],
                ["Readability", "91%"],
                ["Impact", "93%"],
              ].map(([label, score]) => (
                <div
                  key={label}
                  className="rounded-2xl border bg-card p-5"
                >
                  <p className="text-muted-foreground text-sm">
                    {label}
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    {score}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}