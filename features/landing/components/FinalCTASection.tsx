'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTASection() {
  return (
    <section className="border-t border-border px-4 py-20 sm:py-32">
      <div className="relative overflow-hidden">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="absolute -top-40 -right-40 size-80 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 size-80 rounded-full bg-brand/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Resume?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of professionals getting more interviews with ResumeRank.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              render={<Link href="/auth/signup" />}
              className="bg-brand text-brand-foreground hover:bg-brand/90 h-12 px-8 text-base font-semibold gap-2"
            >
              Get Started Free
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              render={<Link href="/auth/login" />}
              className="h-12 px-8 text-base font-semibold"
            >
              Already have an account?
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            No credit card required. Free plan includes 3 analyses per month.
          </p>
        </div>
      </div>
    </section>
  );
}
