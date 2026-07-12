import type { ReactNode } from "react";

type TooltipItem = {
  name?: string;
  value?: ReactNode;
  color?: string;
  dataKey?: string | number;
};

type ChartTooltipProps = {
  active?: boolean;
  label?: ReactNode;
  payload?: TooltipItem[];
  suffix?: string;
  labelMap?: Record<string, string>;
};

export function ChartTooltip({
  active,
  label,
  payload,
  suffix = "",
  labelMap = {},
}: ChartTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-popover border-border min-w-32 rounded-lg border px-3 py-2 text-xs shadow-md">
      <p className="text-foreground mb-1.5 font-medium">{label}</p>
      <div className="flex flex-col gap-1">
        {payload.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground flex items-center gap-1.5">
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {labelMap[String(item.dataKey)] ?? item.name}
            </span>
            <span className="text-foreground font-medium tabular-nums">
              {item.value}
              {suffix}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
