'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Trash2,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Mail,
  SlidersHorizontal,
  FileCheck,
} from 'lucide-react';

export function ComplianceShowcase() {
  const [activeTab, setActiveTab] = React.useState<'retention' | 'revocation'>('retention');

  return (
    <div className="w-full rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#11141f]/70 backdrop-blur-xl p-6 sm:p-10 shadow-card-stacked">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="size-3" />
            <span>Meta Platform Terms v20.0 Standard</span>
          </div>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Privacy, Control &amp; Data Transparency
          </h3>
          <p className="mt-1 text-xs text-muted-foreground max-w-xl">
            Clear, audited guidelines for Meta App Reviewers, visitors, and platform auditors.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="inline-flex rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] p-1 self-start md:self-center">
          <button
            type="button"
            onClick={() => setActiveTab('retention')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'retention'
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Zero-Data Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('revocation')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'revocation'
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Self-Serve Revocation
          </button>
        </div>
      </div>

      {/* Dynamic Content Pane */}
      <div className="mt-8">
        {activeTab === 'retention' ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-lg font-bold text-foreground">
                Strict Zero External User Data Retention
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                AutoPost operates strictly as an autonomous personal publisher for Muhammad Hassaan
                Khan’s Facebook Page. It does not provide consumer-facing SaaS accounts, does not collect
                follower profile data, does not analyze comment histories, and does not record visitor IP
                addresses or cookies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="rounded-2xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.015] dark:bg-white/[0.02] p-4">
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                    Zero Database Storage
                  </span>
                  <span className="mt-1 text-[11px] text-muted-foreground block leading-normal">
                    Execution memory terminates instantly after dispatch. No user tables or disk writes.
                  </span>
                </div>

                <div className="rounded-2xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.015] dark:bg-white/[0.02] p-4">
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                    Zero External Profiling
                  </span>
                  <span className="mt-1 text-[11px] text-muted-foreground block leading-normal">
                    Only personal page administrative tokens are utilized. No audience data is ingested.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                  Official Policies
                </span>
                <h5 className="mt-1 text-sm font-bold text-foreground">Complete Legal Suite</h5>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Review the full documentation prepared for Meta Developer Review and privacy compliance.
                </p>

                <div className="mt-4 space-y-2 text-xs">
                  <Link
                    href="/privacy"
                    className="flex items-center justify-between rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-background px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>Privacy Policy</span>
                    <ChevronRight className="size-3.5" />
                  </Link>

                  <Link
                    href="/terms"
                    className="flex items-center justify-between rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-background px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>Terms of Service</span>
                    <ChevronRight className="size-3.5" />
                  </Link>

                  <Link
                    href="/data-deletion"
                    className="flex items-center justify-between rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-background px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>User Data Deletion</span>
                    <ChevronRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.04] dark:border-white/[0.04]">
                <a
                  href="mailto:m.hassaankhan.official@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-mono"
                >
                  <Mail className="size-3.5" />
                  <span>m.hassaankhan.official@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">
              Instant Facebook App Disconnect &amp; Revocation
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
              Even though AutoPost does not retain external user information, you can remove any associated
              permissions at any time directly through your Facebook Account Settings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.02] p-5">
                <span className="text-accent font-bold block mb-1">STEP 01</span>
                <span className="font-semibold text-foreground text-sm block">Open Settings</span>
                <p className="mt-2 text-[11px] text-muted-foreground font-sans leading-relaxed">
                  Log into Facebook, click your profile picture in the top right, and select{' '}
                  <strong className="text-foreground">Settings &amp; privacy &gt; Settings</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.02] p-5">
                <span className="text-accent font-bold block mb-1">STEP 02</span>
                <span className="font-semibold text-foreground text-sm block">Apps &amp; Websites</span>
                <p className="mt-2 text-[11px] text-muted-foreground font-sans leading-relaxed">
                  In the left sidebar, click <strong className="text-foreground">Apps and websites</strong>{' '}
                  to view all authorized applications.
                </p>
              </div>

              <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.02] p-5">
                <span className="text-accent font-bold block mb-1">STEP 03</span>
                <span className="font-semibold text-foreground text-sm block">Click Remove</span>
                <p className="mt-2 text-[11px] text-muted-foreground font-sans leading-relaxed">
                  Locate <strong className="text-foreground">AutoPost</strong> and click{' '}
                  <strong className="text-foreground">Remove</strong> to instantly revoke token access.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/data-deletion"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                <span>Read Full Step-by-Step Data Deletion Guide</span>
                <ChevronRight className="size-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
