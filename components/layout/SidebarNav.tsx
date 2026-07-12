"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/config/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SidebarNavProps = {
  items: NavItem[];
  collapsed: boolean;
  onNavigate?: () => void;
};

export function SidebarNav({ items, collapsed, onNavigate }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;

        const link = (
          <Link
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative flex h-9 items-center gap-3 rounded-lg px-2.5 text-sm font-medium transition-colors",
              collapsed && "justify-center px-0",
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
            )}
          >
            {active && (
              <span
                className="bg-brand absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full"
                aria-hidden="true"
              />
            )}
            <Icon className="size-[18px] shrink-0" />
            {!collapsed && <span className="truncate">{item.title}</span>}
            {!collapsed && item.badge && (
              <span className="bg-sidebar-accent text-sidebar-foreground/70 ml-auto rounded-md px-1.5 py-0.5 font-mono text-[11px]">
                {item.badge}
              </span>
            )}
          </Link>
        );

        return (
          <li key={item.href}>
            {collapsed ? (
              <Tooltip>
                <TooltipTrigger render={link} />
                <TooltipContent side="right" sideOffset={8}>
                  {item.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              link
            )}
          </li>
        );
      })}
    </ul>
  );
}
