'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Simple Pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Start free, upgrade when you need more
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Free Plan */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Free</h3>
                  <p className="text-muted-foreground text-sm mt-1">Perfect to get started</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                <Button
                  render={<Link href="/auth/signup" />}
                  variant="outline"
                  className="w-full h-10"
                >
                  Get Started
                </Button>

                <div className="space-y-3 border-t border-border pt-6">
                  {[
                    '3 resume analyses per month',
                    'ATS score calculation',
                    'Basic AI suggestions',
                    'Resume history (30 days)',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="text-success size-5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="rounded-xl border-2 border-brand bg-card p-8 relative">
              <div className="absolute top-4 right-4 bg-brand text-brand-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="space-y-6 opacity-75">
                <div>
                  <h3 className="text-xl font-semibold">Pro</h3>
                  <p className="text-muted-foreground text-sm mt-1">For serious job seekers</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                <Button
                  disabled
                  className="w-full h-10 bg-brand text-brand-foreground hover:bg-brand/90"
                >
                  Coming Soon
                </Button>

                <div className="space-y-3 border-t border-border pt-6">
                  {[
                    'Unlimited analyses',
                    'Advanced AI suggestions',
                    'Keyword optimization',
                    'Resume comparison',
                    'Priority support',
                    'Analytics & insights',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="text-success size-5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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
