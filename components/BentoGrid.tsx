'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Lock,
  Layers,
  Shield,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Server,
  Zap,
  Trash2,
  Cpu,
} from 'lucide-react';

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Bento Card 1 (Span 2): Zero-Storage Architecture Proof */}
      <div className="md:col-span-2 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#11141f]/70 backdrop-blur-xl p-7 shadow-card-stacked transition-all duration-300 hover:border-black/20 dark:hover:border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Lock className="size-5" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="size-3" />
            Zero External Data Storage
          </span>
        </div>

        <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Architected for Ephemeral Execution
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-xl">
          This system functions purely as an automated pipeline for Muhammad Hassaan Khan’s personal
          Facebook Page. It never stores, collects, records, or sells any personal data or interactions
          from external Facebook visitors or users.
        </p>

        {/* Visual Ephemeral Pipeline Diagram */}
        <div className="mt-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-4 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 text-muted-foreground">
            <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
              Execution Boundary
            </span>
            <span className="text-[11px]">RAM: Volatile Only</span>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3 text-center">
            <div className="rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-background p-3">
              <span className="text-[11px] text-muted-foreground block">1. Ingestion</span>
              <span className="text-xs font-semibold text-foreground">Scheduled Trigger</span>
            </div>
            <div className="rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-background p-3">
              <span className="text-[11px] text-muted-foreground block">2. In-Memory Processing</span>
              <span className="text-xs font-semibold text-foreground">DeepSeek Prompt</span>
            </div>
            <div className="rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-background p-3">
              <span className="text-[11px] text-muted-foreground block">3. Immediate Flush</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">0b Retained</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            <span>Review Full Privacy Policy & Data Minimization</span>
            <ChevronRight className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Bento Card 2 (Span 1): Direct Graph API Certified */}
      <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#11141f]/70 backdrop-blur-xl p-7 shadow-card-stacked transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 flex flex-col justify-between">
        <div>
          <div className="flex size-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Layers className="size-5" />
          </div>
          <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
            Direct Meta Graph API
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            All requests connect directly to official Facebook Graph API v20.0 endpoints using TLS 1.3
            and self-managed OAuth page tokens.
          </p>

          <div className="mt-5 space-y-2 font-mono text-[11px]">
            <div className="flex items-center justify-between rounded-lg bg-black/[0.02] dark:bg-white/[0.02] px-3 py-1.5 border border-black/[0.04] dark:border-white/[0.04]">
              <span className="text-muted-foreground">Scope:</span>
              <span className="text-foreground font-semibold">pages_manage_posts</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-black/[0.02] dark:bg-white/[0.02] px-3 py-1.5 border border-black/[0.04] dark:border-white/[0.04]">
              <span className="text-muted-foreground">API Version:</span>
              <span className="text-foreground font-semibold">v20.0</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
          <Link
            href="/terms"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            <span>Terms of Service</span>
            <ChevronRight className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Bento Card 3 (Span 1): DeepSeek-V3 Intelligence */}
      <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#11141f]/70 backdrop-blur-xl p-7 shadow-card-stacked transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 flex flex-col justify-between">
        <div>
          <div className="flex size-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Cpu className="size-5" />
          </div>
          <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
            DeepSeek-V3 Synthesis
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            High-reasoning prompt pipeline synthesizing technical briefings and automation news
            specifically formatted for Facebook Page publication.
          </p>

          <div className="mt-5 space-y-2 font-mono text-[11px]">
            <div className="flex items-center justify-between rounded-lg bg-black/[0.02] dark:bg-white/[0.02] px-3 py-1.5 border border-black/[0.04] dark:border-white/[0.04]">
              <span className="text-muted-foreground">Model:</span>
              <span className="text-foreground font-semibold">deepseek-chat-v3</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-black/[0.02] dark:bg-white/[0.02] px-3 py-1.5 border border-black/[0.04] dark:border-white/[0.04]">
              <span className="text-muted-foreground">Moderation:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Passed</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
          <span className="font-mono text-[10px] text-muted-foreground">
            Strict Zero External Data Ingestion
          </span>
        </div>
      </div>

      {/* Bento Card 4 (Span 2): Self-Serve Deletion Protocol */}
      <div className="md:col-span-2 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#11141f]/70 backdrop-blur-xl p-7 shadow-card-stacked transition-all duration-300 hover:border-black/20 dark:hover:border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Trash2 className="size-5" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            Meta Compliance v20.0 Standard
          </span>
        </div>

        <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Instant User Revocation &amp; Deletion
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-xl">
          While this personal automation app does not collect personal user data, anyone can immediately
          sever permissions via Facebook Account Settings or trigger an automated data deletion request.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.02] dark:bg-white/[0.02] p-3.5">
            <span className="font-semibold text-foreground block">Facebook Settings Revocation</span>
            <span className="mt-1 text-[11px] text-muted-foreground block leading-normal">
              Go to Settings &gt; Apps and Websites &gt; Select AutoPost &gt; Click Remove.
            </span>
          </div>

          <div className="rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.02] dark:bg-white/[0.02] p-3.5">
            <span className="font-semibold text-foreground block">Dedicated Support Contact</span>
            <span className="mt-1 text-[11px] text-muted-foreground block leading-normal">
              Contact m.hassaankhan.official@gmail.com for expedited compliance verification.
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
          <Link
            href="/data-deletion"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            <span>Read Step-by-Step Data Deletion Instructions</span>
            <ChevronRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
