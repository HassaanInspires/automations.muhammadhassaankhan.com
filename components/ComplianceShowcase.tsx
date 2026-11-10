'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowUpRight, Scale } from 'lucide-react';

export function ComplianceShowcase() {
  return (
    <div className="w-full rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-xl p-8 sm:p-12 shadow-card-stacked">
      {/* Magazine Registry Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8 border-b border-black/[0.08]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 font-mono text-[11px] font-bold text-emerald-800 mb-4">
            <ShieldCheck className="size-3.5" />
            <span>META AUDIT // COMPLIANCE COLOPHON</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Registry of Trust &amp; Revocation.
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            AutoPost is an autonomous single-operator publishing system operated by Muhammad Hassaan Khan.
            This colophon establishes audited compliance with Meta Platform Terms v20.0, certifying zero audience tracking, zero external database persistence, and complete self-serve data revocation.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              <span>Zero Database Retention</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              <span>No Audience Tracking</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              <span>pages_manage_posts Scoped</span>
            </span>
          </div>
        </div>

        {/* Magazine Index Stamps */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
          <Link
            href="/privacy"
            className="group flex items-center justify-between gap-6 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-6 py-3.5 text-xs font-bold text-foreground transition-all hover:border-[#1848ff] hover:bg-blue-50/50 hover:text-[#1848ff]"
          >
            <span className="font-mono uppercase tracking-wider">01. Privacy Policy</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/terms"
            className="group flex items-center justify-between gap-6 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-6 py-3.5 text-xs font-bold text-foreground transition-all hover:border-[#1848ff] hover:bg-blue-50/50 hover:text-[#1848ff]"
          >
            <span className="font-mono uppercase tracking-wider">02. Terms of Service</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/data-deletion"
            className="group flex items-center justify-between gap-6 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-6 py-3.5 text-xs font-bold text-foreground transition-all hover:border-[#1848ff] hover:bg-blue-50/50 hover:text-[#1848ff]"
          >
            <span className="font-mono uppercase tracking-wider">03. Data Deletion</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Colophon Footnote */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted-foreground">
        <span>OPERATOR: MUHAMMAD HASSAAN KHAN</span>
        <span>PROTOCOL: HTTPS TLS 1.3 DIRECT HANDSHAKE</span>
        <span>STATUS: AUDIT-READY</span>
      </div>
    </div>
  );
}
