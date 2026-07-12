'use client';

import { Zap, Target, Sparkles, TrendingUp, Lock, Rocket, BarChart3, Clock } from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      icon: Zap,
      title: 'ATS Score',
      description: 'Get an instant ATS compatibility score for your resume',
    },
    {
      icon: Sparkles,
      title: 'AI Suggestions',
      description: 'Receive actionable, AI-powered improvement suggestions',
    },
    {
      icon: Target,
      title: 'Keyword Analysis',
      description: 'Identify missing keywords and optimize your content',
    },
    {
      icon: TrendingUp,
      title: 'Resume Comparison',
      description: 'Compare your resume against job descriptions',
    },
    {
      icon: Clock,
      title: 'Resume History',
      description: 'Track changes and improvements over time',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Detailed insights into your resume performance',
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Your data is encrypted and completely secure',
    },
    {
      icon: Rocket,
      title: 'Fast Processing',
      description: 'Get results in seconds, not minutes',
    },
  ];

  return (
    <section id="features" className="border-t border-border px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful Features
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to ace your resume and land interviews
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border-border hover:border-brand/50 group rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-brand/10 group-hover:bg-brand/20 mb-4 flex w-fit rounded-lg p-2 transition-colors">
                    <Icon className="text-brand size-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
