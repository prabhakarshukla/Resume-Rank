"use client";

import Link from "next/link";
import {
  Globe,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Logo } from "@/components/common/Logo";

export function LandingFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Logo />
            </Link>

            <p className="text-muted-foreground mt-5 max-w-md leading-7">
              ResumeRank helps students and professionals optimize resumes using
              AI-powered ATS analysis, keyword optimization, and personalized
              recommendations.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://github.com/"
                target="_blank"
                className="border-border hover:bg-muted rounded-xl border p-2 transition-colors"
              >
                <Globe className="size-5" />
              </Link>

              <Link
                href="https://linkedin.com/"
                target="_blank"
                className="border-border hover:bg-muted rounded-xl border p-2 transition-colors"
              >
                <ExternalLink className="size-5" />
              </Link>

              <Link
                href="mailto:hello@resumerank.com"
                className="border-border hover:bg-muted rounded-xl border p-2 transition-colors"
              >
                <Mail className="size-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 font-semibold">Product</h3>

            <div className="space-y-3">
              <Link href="#features" className="text-muted-foreground hover:text-foreground block">
                Features
              </Link>

              <Link href="#pricing" className="text-muted-foreground hover:text-foreground block">
                Pricing
              </Link>

              <Link href="#faq" className="text-muted-foreground hover:text-foreground block">
                FAQ
              </Link>

              <Link href="/signup" className="text-muted-foreground hover:text-foreground block">
                Get Started
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold">Company</h3>

            <div className="space-y-3">
              <Link href="/" className="text-muted-foreground hover:text-foreground block">
                Home
              </Link>

              <Link href="/login" className="text-muted-foreground hover:text-foreground block">
                Login
              </Link>

              <Link href="/signup" className="text-muted-foreground hover:text-foreground block">
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        <div className="border-border text-muted-foreground mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p>© 2026 ResumeRank. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}