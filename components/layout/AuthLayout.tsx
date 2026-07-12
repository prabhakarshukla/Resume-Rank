import { Logo } from "@/components/common/Logo";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md animate-in-fade">
        {/* Logo and Header */}
        <div className="mb-8 flex flex-col items-center gap-6">
          <Logo showText={false} />
          <div className="space-y-2 text-center">
            <h1 className="font-heading text-2xl font-semibold tracking-tight text-balance">
              {title}
            </h1>
            {description && (
              <p className="text-muted-foreground text-sm">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-border bg-card shadow-sm">
          {children}
        </div>
      </div>
    </main>
  );
}
