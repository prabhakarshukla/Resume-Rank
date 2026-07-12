'use client';

import { CheckCircle } from 'lucide-react';

export function SolutionSection() {
  return (
    <section className="border-t border-border px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              ResumeRank Solves It
            </h2>
            <p className="text-muted-foreground text-lg">
              Get everything you need to pass ATS and impress recruiters
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              'Real-time ATS score calculation',
              'Missing keywords detection',
              'AI-powered improvement suggestions',
              'Keyword density analysis',
              'Resume comparison with job descriptions',
              'Historical tracking',
              'Secure cloud storage',
              'Instant processing',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-success size-5 flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
