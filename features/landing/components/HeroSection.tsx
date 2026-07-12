'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-32">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute -top-40 -right-40 size-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-80 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="space-y-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-muted/40 px-4 py-2">
            <Sparkles className="size-3 text-brand" />
            <span className="text-sm font-medium text-foreground">
              AI-powered resume analysis
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Your Resume Deserves Better Than Guessing
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl text-balance leading-relaxed">
              Get real-time ATS scores, AI-powered suggestions, and actionable insights to make your resume stand out. Perfect keyword matches. Zero rejection guesswork.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              render={<Link href="/auth/signup" />}
              className="bg-brand text-brand-foreground hover:bg-brand/90 h-12 px-8 text-base font-semibold gap-2"
            >
              Get Started Free
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              render={<Link href="#features" />}
              className="h-12 px-8 text-base font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-success size-2 rounded-full" />
              <span className="text-muted-foreground">
                Used by 10,000+ professionals
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="bg-success size-2 rounded-full" />
              <span className="text-muted-foreground">
                100% privacy guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
