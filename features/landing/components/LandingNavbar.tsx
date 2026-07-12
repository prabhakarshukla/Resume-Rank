'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/common/Logo';
import { ThemeToggle } from '@/components/common/ThemeToggle';

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/80 border-border sticky top-0 z-40 flex h-16 items-center border-b px-4 backdrop-blur-md md:px-6">
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { label: 'Features', href: '#features' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              render={<Link href="/auth/login" />}
              className="h-9"
            >
              Sign In
            </Button>
            <Button
              render={<Link href="/auth/signup" />}
              className="bg-brand text-brand-foreground hover:bg-brand/90 h-9"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            {[
              { label: 'Features', href: '#features' },
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button
                variant="outline"
                render={<Link href="/auth/login" />}
                className="w-full h-9"
              >
                Sign In
              </Button>
              <Button
                render={<Link href="/auth/signup" />}
                className="bg-brand text-brand-foreground hover:bg-brand/90 w-full h-9"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
