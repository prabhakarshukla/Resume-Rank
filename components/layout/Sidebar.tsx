"use client";

import { PanelLeftClose, PanelLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { primaryNav, secondaryNav } from "@/config/navigation";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { SidebarNav } from "./SidebarNav";
import { UserMenu } from "./UserMenu";
import { useSidebar } from "./sidebar-context";

export function Sidebar() {
  const { collapsed, toggleCollapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "bg-sidebar border-sidebar-border sticky top-0 hidden h-svh shrink-0 flex-col border-r transition-[width] duration-200 ease-in-out lg:flex",
        collapsed ? "w-[68px]" : "w-64",
      )}
    >
      <div
        className={cn(
          "flex h-16 items-center border-b border-sidebar-border px-4",
          collapsed && "justify-center px-0",
        )}
      >
        <Logo showText={!collapsed} />
      </div>

      <nav
        className="flex flex-1 flex-col gap-6 overflow-y-auto px-3 py-5"
        aria-label="Primary"
      >
        <div className="flex flex-col gap-2">
          {!collapsed && (
            <p className="text-sidebar-foreground/45 px-2.5 text-[11px] font-semibold tracking-wider uppercase">
              Workspace
            </p>
          )}
          <SidebarNav items={primaryNav} collapsed={collapsed} />
        </div>

        <div className="flex flex-col gap-2">
          {!collapsed && (
            <p className="text-sidebar-foreground/45 px-2.5 text-[11px] font-semibold tracking-wider uppercase">
              Account
            </p>
          )}
          <SidebarNav items={secondaryNav} collapsed={collapsed} />
        </div>

        {!collapsed && (
          <div className="border-brand/20 bg-brand-muted mt-auto flex flex-col gap-2 rounded-xl border p-3.5">
            <div className="text-brand flex items-center gap-1.5 text-sm font-semibold">
              <Sparkles className="size-4" />
              Pro plan
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Unlimited analyses and priority AI matching are active.
            </p>
          </div>
        )}
      </nav>

      <div className="border-sidebar-border flex flex-col gap-2 border-t p-3">
        <UserMenu collapsed={collapsed} />
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleCollapsed}
          className={cn(
            "text-sidebar-foreground/60 hover:text-sidebar-foreground w-full justify-start gap-2",
            collapsed && "justify-center px-0",
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PanelLeft className="size-[18px]" />
          ) : (
            <>
              <PanelLeftClose className="size-[18px]" />
              <span>Collapse</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  );
}
