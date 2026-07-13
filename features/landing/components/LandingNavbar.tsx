"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const NAV_ITEMS = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="ResumeRank Home"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <Logo />
        </Link>
</div>
        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

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

        <div className="mt-4 flex flex-col gap-2 border-t pt-4">
  <Link
    href="/login"
    className="block"
    onClick={() => setIsOpen(false)}
  >
    <Button
      variant="outline"
      className="w-full"
    >
      Sign In
    </Button>
  </Link>

  <Link
    href="/signup"
    className="block"
    onClick={() => setIsOpen(false)}
  >
    <Button className="w-full gap-2">
      Get Started
      <ArrowRight className="size-4" />
    </Button>
  </Link>
</div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-background/95 border-border animate-in fade-in slide-in-from-top-2 border-t backdrop-blur-xl md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-2 p-4"
            aria-label="Mobile Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:bg-muted rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-2 border-t pt-4">
              <Button
                variant="outline"
                className="w-full"
                render={<Link href="/login" />}
              >
                Sign In
              </Button>

              <Button
                className="w-full gap-2"
                render={<Link href="/signup" />}
              >
                Get Started
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}