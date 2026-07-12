'use client';

import { AlertCircle, Clock, Zap } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              The Resume Rejection Problem
            </h2>
            <p className="text-muted-foreground text-lg">
              Most resumes never make it past the ATS. Here&apos;s why:
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: AlertCircle,
                title: 'ATS Blind Spots',
                description:
                  'You don\'t know which keywords the ATS is looking for. Your resume gets rejected before a human even sees it.',
              },
              {
                icon: Clock,
                title: 'Wasted Time',
                description:
                  'Spending hours writing the "perfect" resume without knowing if it\'ll actually pass the initial screening.',
              },
              {
                icon: Zap,
                title: 'Zero Feedback',
                description:
                  'No way to know what\'s missing. No guidance on what actually matters to recruiters and hiring systems.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="space-y-3">
                  <div className="bg-danger/10 flex w-fit items-center justify-center rounded-lg p-3">
                    <Icon className="text-danger size-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
