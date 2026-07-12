'use client';

export function TestimonialsSection() {
  return (
    <section className="border-t border-border px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What Users Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Early user feedback coming soon
            </p>
          </div>

          <div className="rounded-xl border border-brand/20 bg-brand-muted/20 p-12 text-center">
            <p className="text-muted-foreground">
              We&apos;re collecting testimonials from our early users. Check back soon to see what professionals are saying about ResumeRank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
