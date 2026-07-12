'use client';

import { Upload, Zap, CheckCircle } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-border px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to a better resume
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: Upload,
                step: '1',
                title: 'Upload Your Resume',
                description:
                  'Simply upload your resume in PDF or DOCX format. Takes seconds.',
              },
              {
                icon: Zap,
                step: '2',
                title: 'Get Instant Analysis',
                description:
                  'Our AI analyzes your resume and provides a detailed ATS score and recommendations.',
              },
              {
                icon: CheckCircle,
                step: '3',
                title: 'Improve & Resubmit',
                description:
                  'Use the insights to improve your resume, then retest to see your progress.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-brand text-brand-foreground flex h-12 w-12 items-center justify-center rounded-full font-bold">
                      {item.step}
                    </div>
                    {parseInt(item.step) < 3 && (
                      <div className="h-12 w-0.5 bg-brand/20" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="text-brand size-5" />
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
