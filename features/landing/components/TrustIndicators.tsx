'use client';

export function TrustIndicators() {
  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-muted-foreground text-center text-sm font-medium tracking-widest uppercase">
          Trusted by professionals from
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { name: 'Google', size: 'sm' },
            { name: 'Microsoft', size: 'sm' },
            { name: 'Meta', size: 'sm' },
            { name: 'Apple', size: 'sm' },
            { name: 'Amazon', size: 'sm' },
            { name: 'Stripe', size: 'sm' },
          ].map((company) => (
            <div
              key={company.name}
              className="text-muted-foreground hover:text-foreground text-sm font-semibold transition-colors"
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
