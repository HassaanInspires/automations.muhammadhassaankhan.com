import * as React from 'react';
import Link from 'next/link';
import { TOC } from './TOC';
import { ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  badge?: string;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  badge = 'Compliance',
  children,
}: LegalLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      {/* Top Bar */}
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Overview</span>
        </Link>

        <span className="font-mono text-[11px] uppercase tracking-wider text-lime border border-lime/20 px-2 py-0.5 rounded">
          {badge}
        </span>
      </div>

      {/* Header */}
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-3 font-mono text-xs text-subtle">
          Last updated: {lastUpdated} · Meta Platform v20.0
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <article
            id="legal-content"
            className="prose-legal rounded-lg border border-border bg-[#121212] p-8 sm:p-12 text-foreground"
          >
            {children}
          </article>
        </div>

        <div className="lg:col-span-4">
          <TOC contentId="legal-content" />
        </div>
      </div>
    </div>
  );
}
