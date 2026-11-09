'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

export function ComplianceShowcase() {
  return (
    <div className="w-full rounded-3xl border border-black/[0.08] bg-white/85 backdrop-blur-xl p-8 sm:p-12 shadow-card-stacked">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 font-mono text-[11px] font-semibold text-emerald-700 mb-3">
            <ShieldCheck className="size-3.5" />
            <span>Meta Platform Terms v20.0 Standard</span>
          </div>

          <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Privacy, Control &amp; Data Assurance
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            AutoPost operates strictly as an autonomous personal publisher for Muhammad Hassaan Khan.
            Zero external audience profiling, zero database persistence, and complete self-serve data revocation.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="size-3.5 text-emerald-500" />
              <span>Zero Database Storage</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="size-3.5 text-emerald-500" />
              <span>No External User Ingestion</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="size-3.5 text-emerald-500" />
              <span>pages_manage_posts Scoped</span>
            </span>
          </div>
        </div>

        {/* Legal Action Pills */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
          <Link
            href="/privacy"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-5 py-3 text-xs font-semibold text-foreground transition-all hover:bg-black/[0.05]"
          >
            <span>Privacy Policy</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/terms"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-5 py-3 text-xs font-semibold text-foreground transition-all hover:bg-black/[0.05]"
          >
            <span>Terms of Service</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/data-deletion"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-5 py-3 text-xs font-semibold text-foreground transition-all hover:bg-black/[0.05]"
          >
            <span>Data Deletion Instructions</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
