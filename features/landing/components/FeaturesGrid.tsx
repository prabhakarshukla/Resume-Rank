"use client";

import {
  Brain,
  ShieldCheck,
  Sparkles,
  Target,
  BarChart3,
  History,
} from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "AI Resume Analysis",
    description:
      "Receive instant AI-powered feedback on structure, content, readability, and impact.",
  },
  {
    icon: Target,
    title: "ATS Score",
    description:
      "Check how well your resume matches Applicant Tracking Systems before applying.",
  },
  {
    icon: Sparkles,
    title: "Keyword Optimization",
    description:
      "Identify missing keywords from job descriptions to improve recruiter visibility.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description:
      "Track resume improvements with visual analytics and section-wise scoring.",
  },
  {
    icon: History,
    title: "Resume History",
    description:
      "Store multiple resume versions and compare previous analyses anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Your resumes stay encrypted and secure. You control your personal data.",
  },
];

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="border-t border-border px-4 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
            Features
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to build a stronger resume
          </h2>

          <p className="text-muted-foreground mt-5 text-lg leading-8">
            ResumeRank combines AI, ATS optimization, and actionable insights
            into one powerful platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-brand/10 p-3 text-brand transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}