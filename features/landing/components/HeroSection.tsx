"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2">
            <Sparkles className="size-4 text-brand" />
            <span className="text-sm font-medium">
              AI-Powered Resume Analyzer
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Land More Interviews with{" "}
              <span className="text-brand">AI-Powered</span> Resume Analysis
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg leading-8">
              Upload your resume and receive instant ATS scoring, keyword
              optimization, AI-powered recommendations, and actionable insights
              to improve your chances of landing interviews.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link href="/signup">
              <Button className="h-12 gap-2 px-8 text-base">
                Analyze Resume
                <ArrowRight className="size-4" />
              </Button>
            </Link>

            <Link href="#features">
              <Button variant="outline" className="h-12 px-8 text-base">
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 border-t border-border pt-8 text-center lg:text-left">
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Resumes Reviewed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">92%</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                ATS Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">&lt;30s</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Analysis Time
              </p>
            </div>
          </div>
        </div>

        {/* Right Preview */}
        <div className="relative">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="font-semibold">Resume Dashboard</p>
                <p className="text-muted-foreground text-sm">
                  AI Resume Analysis
                </p>
              </div>

              <div className="rounded-xl bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-400">
                ATS 92%
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>ATS Compatibility</span>
                  <span>92%</span>
                </div>

                <div className="bg-muted h-2 rounded-full">
                  <div className="bg-brand h-2 w-[92%] rounded-full" />
                </div>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h4 className="mb-3 font-medium">AI Suggestions</h4>

                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>✓ Add React keywords</li>
                  <li>✓ Improve Professional Summary</li>
                  <li>✓ Include measurable achievements</li>
                  <li>✓ Optimize ATS formatting</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border p-4">
                <h4 className="mb-3 font-medium">Resume Strength</h4>

                <div className="flex justify-between text-sm">
                  <span>Overall Score</span>
                  <span className="font-semibold text-brand">Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}