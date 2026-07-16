"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="ResumeRank Home"
          className="flex items-center"
        >
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />

          <Link href="/login">
            <Button variant="ghost">
              Sign In
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="gap-2">
              Get Started
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="space-y-2 p-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 space-y-2 border-t border-border pt-4">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>

              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button className="w-full gap-2">
                  Get Started
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}