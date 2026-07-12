'use client';

import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

export function AIAnalysisPreview() {
  return (
    <section className="border-t border-border px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Sample Analysis
            </h2>
            <p className="text-muted-foreground text-lg">
              See what an AI analysis looks like
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* ATS Score Card */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">ATS Score</h3>
                <div className="flex items-end gap-4">
                  <div className="text-6xl font-bold text-brand">85%</div>
                  <div className="text-muted-foreground text-sm mb-2">
                    <TrendingUp className="inline size-4 mr-1" />
                    Strong match
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Keywords matched</span>
                    <span className="font-semibold">24/32</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-success w-[75%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions Card */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">AI Suggestions</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Add Python to skills', type: 'improvement' },
                    { label: 'Use "Led team of 5" instead of "Worked with team"', type: 'improvement' },
                    { label: 'Great use of impact metrics', type: 'strength' },
                  ].map((suggestion, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {suggestion.type === 'strength' ? (
                        <CheckCircle className="text-success size-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="text-warning size-5 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm">{suggestion.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
