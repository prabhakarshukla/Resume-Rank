"use client";

import {
  Brain,
  CheckCircle2,
  FileSearch,
  Sparkles,
} from "lucide-react";

const SOLUTIONS = [
  {
    icon: Brain,
    title: "AI-Powered Resume Review",
    description:
      "Receive intelligent feedback on content, formatting, readability, and professional impact within seconds.",
  },
  {
    icon: FileSearch,
    title: "ATS Optimization",
    description:
      "Instantly identify missing keywords and improve compatibility with Applicant Tracking Systems.",
  },
  {
    icon: Sparkles,
    title: "Actionable Improvements",
    description:
      "Get clear, prioritized suggestions instead of vague advice so you know exactly what to improve.",
  },
];

export function SolutionSection() {
  return (
    <section className="border-t border-border bg-muted/20 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
            Our Solution
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Build a resume recruiters actually want to read.
          </h2>

          <p className="text-muted-foreground mt-5 text-lg leading-8">
            ResumeRank combines AI, ATS analysis, and personalized suggestions
            to help you create stronger resumes with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-brand/10 p-3 text-brand transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {solution.title}
                </h3>

                <p className="text-muted-foreground leading-7">
                  {solution.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand">
                  <CheckCircle2 className="size-4" />
                  Included in every analysis
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 rounded-3xl border border-brand/20 bg-gradient-to-r from-brand/10 via-background to-brand/5 p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">
                One upload. Complete resume analysis.
              </h3>

              <p className="text-muted-foreground mt-4 leading-8">
                Upload your resume once and receive ATS scoring, AI feedback,
                keyword optimization, section-by-section analysis, and
                personalized recommendations—all in under 30 seconds.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-card p-5">
                <p className="text-3xl font-bold text-brand">92%</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Average ATS Score
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-5">
                <p className="text-3xl font-bold text-brand">&lt;30s</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Analysis Time
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-5">
                <p className="text-3xl font-bold text-brand">10K+</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Resumes Reviewed
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-5">
                <p className="text-3xl font-bold text-brand">24/7</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  AI Assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}