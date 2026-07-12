import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type LogoProps = {
  showText?: boolean;
  className?: string;
};

export function Logo({ showText = true, className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className="bg-brand text-brand-foreground flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold shadow-sm"
        aria-hidden="true"
      >
        R
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-foreground text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </span>
          <span className="text-muted-foreground text-[11px] font-medium">
            {siteConfig.tagline}
          </span>
        </div>
      )}
    </div>
  );
}
