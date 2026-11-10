'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

export function ComplianceShowcase() {
  return (
    <div className="w-full rounded-3xl border border-black/[0.08] bg-white/95 backdrop-blur-xl p-8 sm:p-12 shadow-card-stacked">
      {/* Editorial Registry Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8 border-b border-black/[0.08]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 mb-4">
            <ShieldCheck className="size-3.5" />
            <span>Meta Platform Terms v20.0 Compliance</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Privacy, Control &amp; Data Assurance.
          </h3>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-normal">
            AutoPost is an autonomous single-operator publishing system operated by Muhammad Hassaan Khan.
            This registry establishes audited compliance with Meta Platform Terms v20.0, certifying zero audience tracking, zero external database persistence, and complete self-serve data revocation.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              <span>Zero Database Storage</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              <span>No External Audience Tracking</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              <span>pages_manage_posts Scoped</span>
            </span>
          </div>
        </div>

        {/* Clean Legal Direct Links */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
          <Link
            href="/privacy"
            className="group flex items-center justify-between gap-6 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-6 py-3.5 text-xs font-semibold text-foreground transition-all hover:border-[#1848ff] hover:bg-blue-50/50 hover:text-[#1848ff]"
          >
            <span>Privacy Policy</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/terms"
            className="group flex items-center justify-between gap-6 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-6 py-3.5 text-xs font-semibold text-foreground transition-all hover:border-[#1848ff] hover:bg-blue-50/50 hover:text-[#1848ff]"
          >
            <span>Terms of Service</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/data-deletion"
            className="group flex items-center justify-between gap-6 rounded-2xl border border-black/[0.08] bg-black/[0.02] px-6 py-3.5 text-xs font-semibold text-foreground transition-all hover:border-[#1848ff] hover:bg-blue-50/50 hover:text-[#1848ff]"
          >
            <span>User Data Deletion</span>
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Registry Footnote: Pure Sans-Serif */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>Operator: Muhammad Hassaan Khan</span>
        <span>Transport: HTTPS TLS 1.3 Direct Handshake</span>
        <span className="text-emerald-700 font-medium">Compliance Audit Ready</span>
      </div>
    </div>
  );
}
