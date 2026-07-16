"use client";

import { CircleX, FileSearch, Clock3 } from "lucide-react";

const PROBLEMS = [
  {
    icon: CircleX,
    title: "Low ATS Scores",
    description:
      "Most resumes get rejected before a recruiter even sees them because they fail ATS screening.",
  },
  {
    icon: FileSearch,
    title: "Missing Keywords",
    description:
      "Without the right skills and keywords, your resume struggles to match job descriptions.",
  },
  {
    icon: Clock3,
    title: "Endless Manual Editing",
    description:
      "Improving a resume takes hours of guessing what recruiters actually want.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-sm font-medium text-red-500">
            The Problem
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Job applications shouldn't feel like a guessing game.
          </h2>

          <p className="text-muted-foreground mt-5 text-lg leading-8">
            Thousands of qualified candidates are rejected simply because their
            resumes aren't optimized for modern hiring systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-red-500/10 p-3 text-red-500">
                  <Icon className="size-6" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {problem.title}
                </h3>

                <p className="text-muted-foreground leading-7">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}