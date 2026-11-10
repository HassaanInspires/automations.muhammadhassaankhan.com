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
  badge = 'Official Document',
  children,
}: LegalLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Back button & badge */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md transition-all hover:bg-black/5 hover:text-foreground active:scale-95 shadow-sm"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Overview</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1848ff]">
          <Shield className="size-3" />
          <span>{badge}</span>
        </div>
      </div>

      {/* Hero header */}
      <div className="mb-10 border-b border-black/[0.08] pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            Last updated: <strong className="font-semibold text-foreground">{lastUpdated}</strong>
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
            <CheckCircle2 className="size-3.5" />
            Meta Platform Terms v20.0 Standard
          </span>
        </div>

        {/* Meta Reviewer Quick-Audit Callout */}
        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/50 p-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <ShieldAlert className="size-4 text-[#1848ff]" />
            <span>Notice for Meta App Reviewers &amp; Compliance Auditors</span>
          </div>
          <p className="mt-1.5 leading-relaxed">
            This document confirms that AutoPost operates as a private, single-user automation tool
            governed by Muhammad Hassaan Khan. No user data from external Facebook users is collected,
            processed, or stored.
          </p>
        </div>
      </div>

      {/* Two-Column Grid: Content (Left) + Sticky TOC (Right) */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Legal Content */}
        <div className="lg:col-span-8">
          <article
            id="legal-content"
            className="prose-custom rounded-3xl border border-black/[0.08] bg-white/90 backdrop-blur-xl p-6 sm:p-10 shadow-card-stacked text-foreground"
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
