import * as React from 'react';
import Link from 'next/link';
import { TOC } from './TOC';
import { Shield, Clock, ArrowLeft, CheckCircle } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  badge?: string;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  badge = 'Official Document',
  children,
}: LegalLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Back button & badge */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-all hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground active:scale-95"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Overview</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[11px] font-medium text-accent">
          <Shield className="size-3" />
          <span>{badge}</span>
        </div>
      </div>

      {/* Hero header */}
      <div className="mb-12 border-b border-black/[0.08] dark:border-white/[0.08] pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            Last updated: <strong className="font-semibold text-foreground">{lastUpdated}</strong>
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <CheckCircle className="size-3.5" />
            Meta Platform Terms v20.0 Standard
          </span>
        </div>
      </div>

      {/* Two-Column Grid: Content (Left) + Sticky TOC (Right) */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Legal Content */}
        <div className="lg:col-span-8">
          <article
            id="legal-content"
            className="prose-custom rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#0c101a]/70 backdrop-blur-xl p-6 sm:p-10 shadow-card-stacked text-foreground"
          >
            {children}
          </article>
        </div>

        {/* Right Column: Sticky Table of Contents */}
        <div className="lg:col-span-4">
          <TOC contentId="legal-content" />
        </div>
      </div>
    </div>
  );
}
