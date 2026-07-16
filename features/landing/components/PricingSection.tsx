"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FREE = [
  "1 Resume Upload",
  "ATS Score",
  "Basic AI Suggestions",
  "Resume History",
];

const PRO = [
  "Unlimited Resume Uploads",
  "Advanced AI Analysis",
  "Keyword Optimization",
  "Section-wise Insights",
  "Resume Comparison",
  "Priority Processing",
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-t border-border px-4 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
            Pricing
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Start free. Upgrade when you're ready.
          </h2>

          <p className="text-muted-foreground mt-5 text-lg">
            Everything you need to improve your resume.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border p-8">
            <h3 className="text-2xl font-bold">
              Free
            </h3>

            <p className="text-muted-foreground mt-2">
              Perfect for students.
            </p>

            <div className="my-8 text-5xl font-bold">
              ₹0
            </div>

            <div className="space-y-4">
              {FREE.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check className="size-5 text-green-500" />
                  {item}
                </div>
              ))}
            </div>

            <Link href="/signup" className="mt-8 block">
              <Button className="w-full">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="relative rounded-3xl border-2 border-brand p-8 shadow-xl">
            <span className="absolute right-6 top-6 rounded-full bg-brand px-3 py-1 text-xs text-white">
              Coming Soon
            </span>

            <h3 className="text-2xl font-bold">
              Pro
            </h3>

            <p className="text-muted-foreground mt-2">
              Built for professionals.
            </p>

            <div className="my-8 text-5xl font-bold">
              —
            </div>

            <div className="space-y-4">
              {PRO.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check className="size-5 text-brand" />
                  {item}
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="mt-8 w-full"
              disabled
            >
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}