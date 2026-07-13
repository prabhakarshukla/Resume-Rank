"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

export function DashboardPreviewSection() {
  return (
    <section className="border-t border-border px-4 py-24" id="dashboard">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
            Dashboard Preview
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to improve your resume
          </h2>

          <p className="text-muted-foreground mt-5 text-lg leading-8">
            A clean workspace that helps you analyze resumes, discover missing
            skills, improve ATS compatibility and track every resume version in
            one place.
          </p>
        </div>

        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <div className="ml-4 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
                resumrank.app/dashboard
              </div>
            </div>

            <div className="grid lg:grid-cols-[240px_1fr]">
              {/* Sidebar */}
              <aside className="border-r border-border bg-muted/30 p-6">
                <div className="mb-8 text-lg font-semibold">
                  ResumeRank
                </div>

                <div className="space-y-3">
                  {[
                    "Dashboard",
                    "Upload Resume",
                    "Analysis",
                    "History",
                    "Profile",
                  ].map((item) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        item === "Dashboard"
                          ? "bg-brand text-white"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>

              {/* Main */}
              <main className="space-y-6 p-6">
                {/* Top Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border p-5">
                    <div className="text-muted-foreground text-sm">
                      ATS Score
                    </div>

                    <div className="mt-3 text-4xl font-bold text-green-500">
                      92%
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-green-500">
                      <TrendingUp className="size-4" />
                      +12%
                    </div>
                  </div>

                  <div className="rounded-2xl border p-5">
                    <div className="text-muted-foreground text-sm">
                      Resume Strength
                    </div>

                    <div className="mt-3 text-4xl font-bold">
                      Excellent
                    </div>

                    <div className="mt-2 text-sm text-muted-foreground">
                      Top 8%
                    </div>
                  </div>

                  <div className="rounded-2xl border p-5">
                    <div className="text-muted-foreground text-sm">
                      Missing Skills
                    </div>

                    <div className="mt-3 text-4xl font-bold text-orange-500">
                      5
                    </div>

                    <div className="mt-2 text-sm text-muted-foreground">
                      Add recommended keywords
                    </div>
                  </div>
                </div>

                {/* Analysis */}
                <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                  <div className="rounded-2xl border p-6">
                    <h3 className="mb-5 font-semibold">
                      AI Recommendations
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 text-green-500" />
                        <div>
                          <p className="font-medium">
                            Strong professional summary
                          </p>

                          <p className="text-muted-foreground text-sm">
                            Your summary is concise and impactful.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <TriangleAlert className="mt-0.5 size-5 text-orange-500" />
                        <div>
                          <p className="font-medium">
                            Add Docker & AWS
                          </p>

                          <p className="text-muted-foreground text-sm">
                            Frequently required for Software Engineer roles.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 text-green-500" />
                        <div>
                          <p className="font-medium">
                            Quantified achievements
                          </p>

                          <p className="text-muted-foreground text-sm">
                            Great use of measurable impact.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent */}
                  <div className="rounded-2xl border p-6">
                    <h3 className="mb-5 font-semibold">
                      Recent Analyses
                    </h3>

                    <div className="space-y-4">
                      {[
                        ["Frontend Resume", "89%"],
                        ["Google SWE", "92%"],
                        ["ML Engineer", "86%"],
                      ].map(([title, score]) => (
                        <div
                          key={title}
                          className="flex items-center justify-between rounded-xl bg-muted/40 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="size-4 text-brand" />
                            <span className="text-sm">
                              {title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-sm font-semibold">
                            {score}
                            <ArrowUpRight className="size-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}