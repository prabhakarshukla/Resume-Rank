"use client";

import { Bell, Sparkles, CircleCheck, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Notification = {
  id: string;
  icon: typeof Sparkles;
  title: string;
  detail: string;
  time: string;
  tone: string;
};

const notifications: Notification[] = [
  {
    id: "n1",
    icon: CircleCheck,
    title: "Analysis complete",
    detail: "Akshay_Menon_Frontend_2026.pdf scored 91 for Razorpay.",
    time: "12m ago",
    tone: "text-success",
  },
  {
    id: "n2",
    icon: Sparkles,
    title: "3 new AI suggestions",
    detail: "We found ways to raise your Notion match by 8 points.",
    time: "1h ago",
    tone: "text-brand",
  },
  {
    id: "n3",
    icon: CircleAlert,
    title: "Resume needs review",
    detail: "Platform Engineer resume is missing key keywords.",
    time: "3h ago",
    tone: "text-warning",
  },
];

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground relative size-9"
            aria-label="Notifications"
          />
        }
      >
        <Bell className="size-[18px]" />
        <span className="bg-brand ring-background absolute right-2 top-2 size-2 rounded-full ring-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-80 p-0">
        <div className="flex items-center justify-between px-3 py-2.5">
          <p className="text-sm font-semibold">Notifications</p>
          <span className="bg-brand-muted text-brand rounded-md px-1.5 py-0.5 text-[11px] font-medium">
            3 new
          </span>
        </div>
        <div className="border-border border-t">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <button
                key={n.id}
                type="button"
                className="hover:bg-muted/60 flex w-full items-start gap-3 px-3 py-3 text-left transition-colors"
              >
                <span className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                  <Icon className={`size-4 ${n.tone}`} />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-foreground text-sm font-medium">
                    {n.title}
                  </span>
                  <span className="text-muted-foreground text-xs leading-relaxed">
                    {n.detail}
                  </span>
                  <span className="text-muted-foreground/70 text-[11px]">
                    {n.time}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="border-border border-t p-1.5">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground w-full"
          >
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
