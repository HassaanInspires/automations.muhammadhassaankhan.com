import Link from 'next/link';
import { SpotlightCard } from '@/components/SpotlightCard';
import { GlassCard } from '@/components/GlassCard';
import {
  Shield,
  ArrowRight,
  Sparkles,
  Bot,
  Share2,
  Lock,
  Cpu,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:pt-32">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-md shadow-sm transition-transform hover:scale-[1.02]">
            <span className="flex size-2 rounded-full bg-accent" />
            <span className="text-muted-foreground">Personal Project</span>
            <span className="text-border">•</span>
            <span className="font-semibold text-accent">Meta Graph API v20.0</span>
          </div>

          {/* Main Headline (Strictly ≤ 8 words: 3 words) */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            AI-Powered{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-500 to-indigo-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-accent">
              Facebook
            </span>{' '}
            Automation
          </h1>

          {/* Subtext explaining the utility */}
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed">
            Autonomous personal tool connecting DeepSeek AI intelligence to the Meta Graph API for
            scheduled, high-fidelity publishing to my Facebook Page.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/privacy"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
            >
              <span>View Privacy Policy</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/terms"
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] dark:border-white/[0.12] bg-white/50 dark:bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/20 dark:hover:border-white/20 active:scale-[0.98]"
            >
              <span>Terms of Service</span>
            </Link>
          </div>
        </div>

        {/* Hero Interactive Spotlight Preview Card */}
        <div className="mt-16 sm:mt-24">
          <SpotlightCard className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-6">
              {/* Card Header / Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Bot className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold tracking-tight text-foreground">
                        Post Orchestration Engine
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">DeepSeek-V3 × Graph API Worker</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Calendar className="size-3.5" />
                  <span>Next Run: 09:00 UTC</span>
                </div>
              </div>

              {/* Card Body: Simulation feed */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Target Channel
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Share2 className="size-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground">
                      Personal Page
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">Page Access Token Authenticated</p>
                </div>

                <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Content Model
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Cpu className="size-4 text-accent" />
                    <span className="text-sm font-semibold text-foreground">DeepSeek API</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">Prompt templated & filtered</p>
                </div>

                <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    User Data Retention
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Lock className="size-4 text-emerald-500" />
                    <span className="text-sm font-semibold text-foreground">Zero External Data</span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">Strict zero-storage policy</p>
                </div>
              </div>

              {/* Sample output log console */}
              <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.03] dark:bg-black/30 p-4 font-mono text-xs">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    Live Sandbox Telemetry
                  </span>
                  <span>ID: #FB-AUTO-2026</span>
                </div>
                <div className="mt-3 space-y-1 text-[11px] text-foreground/80">
                  <p className="text-emerald-600 dark:text-emerald-400">
                    ✔ [OAuth 2.0] Verified Page Token with publish_actions &amp; pages_manage_posts
                  </p>
                  <p className="text-muted-foreground">
                    ℹ [DeepSeek] Generated technical automation briefing for scheduled queue
                  </p>
                  <p className="text-accent">
                    ✔ [Meta API] Post dispatched successfully to Facebook Page feed
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Architecture & Compliance Pillars */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Designed for Personal Control &amp; Compliance
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Architected to adhere strictly to Meta Platform Terms and global privacy standards.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <GlassCard className="p-6">
            <div className="flex size-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Lock className="size-4" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              Zero User Data Storage
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              This application never collects, records, or analyzes any personal data from external
              Facebook users or visitors.
            </p>
            <Link
              href="/privacy"
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
            >
              <span>Read in Privacy Policy</span>
              <ChevronRight className="size-3" />
            </Link>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex size-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Layers className="size-4" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              Direct Meta Graph API
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              All interactions communicate directly with the official Graph API v20.0 endpoints
              using secure, self-managed tokens.
            </p>
            <Link
              href="/terms"
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
            >
              <span>Read in Terms of Service</span>
              <ChevronRight className="size-3" />
            </Link>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex size-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Shield className="size-4" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              Instant Revocation &amp; Deletion
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Clear, transparent instructions on how to disconnect this app in Facebook Settings
              or submit deletion inquiries.
            </p>
            <Link
              href="/data-deletion"
              className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
            >
              <span>Read Data Deletion</span>
              <ChevronRight className="size-3" />
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
