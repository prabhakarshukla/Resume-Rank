"use client";

import { primaryNav, secondaryNav } from "@/config/navigation";
import { Logo } from "@/components/common/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { SidebarNav } from "./SidebarNav";
import { UserMenu } from "./UserMenu";
import { useSidebar } from "./sidebar-context";

export function MobileSidebar() {
  const { mobileOpen, setMobileOpen } = useSidebar();

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetContent
        side="left"
        className="bg-sidebar w-72 gap-0 p-0"
        showCloseButton={false}
      >
        <SheetHeader className="border-sidebar-border h-16 justify-center border-b px-4">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigate ResumeRank
          </SheetDescription>
          <Logo />
        </SheetHeader>

        <nav
          className="flex flex-1 flex-col gap-6 overflow-y-auto px-3 py-5"
          aria-label="Mobile primary"
        >
          <div className="flex flex-col gap-2">
            <p className="text-sidebar-foreground/45 px-2.5 text-[11px] font-semibold tracking-wider uppercase">
              Workspace
            </p>
            <SidebarNav
              items={primaryNav}
              collapsed={false}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sidebar-foreground/45 px-2.5 text-[11px] font-semibold tracking-wider uppercase">
              Account
            </p>
            <SidebarNav
              items={secondaryNav}
              collapsed={false}
              onNavigate={() => setMobileOpen(false)}
            />
          </div>
        </nav>

        <div className="border-sidebar-border border-t p-3">
          <UserMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
}
