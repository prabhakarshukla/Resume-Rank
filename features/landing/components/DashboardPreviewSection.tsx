'use client';

export function DashboardPreviewSection() {
  return (
    <section className="border-t border-border px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Dashboard Preview
            </h2>
            <p className="text-muted-foreground text-lg">
              Clean, intuitive interface for managing your resumes
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-brand/20 bg-card p-6 shadow-lg">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-brand/10 to-brand/5 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-muted-foreground text-sm">
                  Dashboard interface preview
                </div>
                <div className="text-foreground/50 text-xs">
                  [Interactive dashboard shown in production]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
