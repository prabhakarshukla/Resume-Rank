"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="border-t border-border px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/10 via-background to-brand/5 px-8 py-20 text-center shadow-xl">

          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative">
            <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
              Ready to get started?
            </span>

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              Stop guessing.
              <br />
              Start improving your resume today.
            </h2>

            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-8">
              Join thousands of students and professionals using AI to create
              stronger resumes, improve ATS compatibility, and land more
              interviews.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button className="h-12 gap-2 px-8 text-base">
                  Get Started Free
                  <ArrowRight className="size-4" />
                </Button>
              </Link>

              <Link href="#features">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-base"
                >
                  Explore Features
                </Button>
              </Link>
            </div>

            <div className="text-muted-foreground mt-10 flex flex-wrap justify-center gap-8 text-sm">
              <span>✨ Free to start</span>
              <span>🔒 Secure & Private</span>
              <span>⚡ Instant AI Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}