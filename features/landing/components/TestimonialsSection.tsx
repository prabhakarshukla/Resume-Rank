"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Software Engineering Student",
    quote:
      "ResumeRank helped me improve my ATS score from 61% to 91%. I finally started getting interview calls.",
  },
  {
    name: "Priya Verma",
    role: "Frontend Developer",
    quote:
      "The AI suggestions were incredibly accurate. It pointed out missing keywords I had completely overlooked.",
  },
  {
    name: "Rahul Singh",
    role: "Data Analyst",
    quote:
      "The dashboard is clean, fast, and gives actionable insights instead of generic advice.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Trusted by job seekers
          </h2>

          <p className="text-muted-foreground mt-5 text-lg">
            People use ResumeRank to improve resumes before applying for their
            dream jobs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-current"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-7">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-muted-foreground text-sm">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}