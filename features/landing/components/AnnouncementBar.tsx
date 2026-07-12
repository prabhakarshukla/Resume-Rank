'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function AnnouncementBar() {
  return (
    <div className="bg-brand-muted/40 border-b border-brand/10 flex justify-center px-4 py-3">
      <Link
        href="#features"
        className="text-brand-foreground hover:text-brand inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <Sparkles className="size-3" />
        Now with AI-powered keyword analysis
        <ArrowRight className="size-3" />
      </Link>
    </div>
  );
}
