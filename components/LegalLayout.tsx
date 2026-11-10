'use client';

import * as React from 'react';
import Link from 'next/link';
import { TOC } from './TOC';
import { Shield, Clock, ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  badge?: string;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  badge = 'Official Compliance Record',
  children,
}: LegalLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14">
      {/* Back button & official badge */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/90 px-4 py-2 text-xs font-semibold text-muted-foreground backdrop-blur-md transition-all hover:border-[#1848ff] hover:text-[#1848ff] active:scale-95 shadow-sm"
        >
          <ArrowLeft className="size-3.5" />
          <span>Return to Overview</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-[#1848ff]">
          <Shield className="size-3.5" />
          <span>{badge}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="mb-12 border-b border-black/[0.08] pb-10">
        <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            Effective Date: <strong className="font-semibold text-foreground">{lastUpdated}</strong>
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
            <CheckCircle2 className="size-3.5 text-emerald-600" />
            Meta Platform Terms v20.0 Standard
          </span>
        </div>

        {/* Auditor Verification Callout */}
        <div className="mt-6 rounded-2xl border border-blue-200/80 bg-blue-50/60 p-5 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 font-bold text-foreground text-sm">
            <ShieldAlert className="size-4 text-[#1848ff]" />
            <span>Notice for Meta App Reviewers &amp; Platform Auditors</span>
          </div>
          <p className="mt-2 leading-relaxed text-slate-700 font-normal">
            This legal record certifies that <strong>AutoPost</strong> operates exclusively as a private, single-operator publishing system governed by <strong>Muhammad Hassaan Khan</strong>. The application does not collect, record, or monetize external Facebook audience or user data.
          </p>
        </div>
      </div>

      {/* Two-Column Grid: Content (Left) + Sticky TOC (Right) */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Legal Content */}
        <div className="lg:col-span-8">
          <article
            id="legal-content"
            className="prose-custom rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-xl p-8 sm:p-12 shadow-card-stacked text-foreground space-y-8"
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
