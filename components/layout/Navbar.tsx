"use client";

import Link from "next/link";
import { Menu, Search, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Notifications } from "./Notifications";
import { useSidebar } from "./sidebar-context";

export function Navbar() {
  const { setMobileOpen } = useSidebar();

  return (
    <header className="bg-background/80 border-border sticky top-0 z-30 flex h-16 items-center gap-3 border-b px-4 backdrop-blur-md md:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground -ml-1 size-9 lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation menu"
      >
        <Menu className="size-5" />
      </Button>

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <input
          type="search"
          placeholder="Search resumes, roles, skills…"
          className="border-input bg-muted/40 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/40 h-9 w-full rounded-lg border pr-16 pl-9 text-sm transition-colors outline-none focus-visible:ring-2"
          aria-label="Search"
        />
        <kbd className="text-muted-foreground bg-background border-border pointer-events-none absolute top-1/2 right-2.5 hidden -translate-y-1/2 items-center gap-0.5 rounded border px-1.5 font-mono text-[10px] font-medium md:inline-flex">
          ⌘K
        </kbd>
      </div>

      <div className="flex flex-1 items-center justify-end gap-1 sm:flex-initial">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground size-9 sm:hidden"
          aria-label="Search"
        >
          <Search className="size-[18px]" />
        </Button>
        <ThemeToggle />
        <Notifications />
        <div className="bg-border mx-1 hidden h-6 w-px sm:block" />
        <Button
          render={<Link href="/upload" />}
          className="bg-brand text-brand-foreground hover:bg-brand/90 h-9 gap-1.5 px-3"
        >
          <Upload className="size-4" />
          <span className="hidden sm:inline">Upload Resume</span>
          <span className="sm:hidden">Upload</span>
        </Button>
      </div>
    </header>
  );
}
