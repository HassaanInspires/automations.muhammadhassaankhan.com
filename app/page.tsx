import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 font-mono text-xs text-subtle">
            <span className="size-1.5 rounded-full bg-lime" />
            <span className="uppercase tracking-widest text-lime">Personal Pipeline</span>
            <span>·</span>
            <span>Meta Graph API v20.0</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl leading-[0.95]">
            AI-Powered Facebook Automation.
          </h1>

          {/* Editorial Subtitle */}
          <p className="mt-8 max-w-2xl text-base text-muted sm:text-lg lg:text-xl leading-relaxed">
            A personal system engineered to synthesize technical insights via DeepSeek AI and
            publish them directly to my Facebook Page using official Meta Graph API endpoints.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 rounded bg-lime px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-lime-hover active:scale-95"
            >
              <span>View Privacy Policy</span>
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/terms"
              className="inline-flex items-center gap-2 rounded border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:text-white"
            >
              <span>Terms of Service</span>
              <ArrowUpRight className="size-4 text-subtle" />
            </Link>
          </div>
        </div>

        {/* Minimalist Architecture Schematic */}
        <div className="mt-20 border border-border bg-[#121212] rounded-lg p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-border pb-6 gap-2">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                Architecture Overview
              </span>
              <h2 className="text-lg font-semibold tracking-tight text-foreground mt-1">
                Content Synthesis &amp; Dispatch Flow
              </h2>
            </div>
            <div className="font-mono text-xs text-subtle">
              Status: <span className="text-lime">Online</span> · Private Scope
            </div>
          </div>

          {/* Flow Pipeline */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border border-border/80 bg-background/50 p-5 rounded">
              <div className="font-mono text-[11px] text-lime">01 / GENERATE</div>
              <div className="mt-2 text-sm font-semibold text-foreground">DeepSeek API</div>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Automated generation of technical drafts from scheduled prompts.
              </p>
              <div className="mt-4 font-mono text-[10px] text-subtle">
                POST /chat/completions
              </div>
            </div>

            <div className="border border-border/80 bg-background/50 p-5 rounded">
              <div className="font-mono text-[11px] text-lime">02 / VALIDATE</div>
              <div className="mt-2 text-sm font-semibold text-foreground">Policy &amp; Format</div>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Local safety validation, length checks, and markdown rendering.
              </p>
              <div className="mt-4 font-mono text-[10px] text-subtle">
                Client-Side Sandbox
              </div>
            </div>

            <div className="border border-border/80 bg-background/50 p-5 rounded">
              <div className="font-mono text-[11px] text-lime">03 / PUBLISH</div>
              <div className="mt-2 text-sm font-semibold text-foreground">Meta Graph API</div>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Direct dispatch to personal Facebook Page feed via Page Token.
              </p>
              <div className="mt-4 font-mono text-[10px] text-subtle">
                POST /v20.0/me/feed
              </div>
            </div>
          </div>

          {/* Architecture Details Grid */}
          <div className="mt-8 border-t border-border pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
            <div>
              <div className="text-[10px] uppercase text-subtle">Storage</div>
              <div className="text-foreground mt-1 font-semibold">0 External Records</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-subtle">Scope</div>
              <div className="text-foreground mt-1 font-semibold">Personal Page Only</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-subtle">Protocol</div>
              <div className="text-foreground mt-1 font-semibold">HTTPS / TLS 1.3</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-subtle">Compliance</div>
              <div className="text-lime mt-1 font-semibold">Meta v20.0 Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-border">
        <div className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-lime">
            Core Principles
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Privacy &amp; Restraint.
          </h2>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            This tool exists purely to automate publishing to my own personal Facebook Page. It is
            not a commercial SaaS or multi-tenant service.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="border-t border-border pt-6">
            <span className="font-mono text-xs text-subtle">01</span>
            <h3 className="mt-3 text-base font-semibold text-foreground">
              Zero User Data Collection
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              I do not collect, store, or share personal data from visitors, followers, or any other
              Facebook users. Access tokens are kept strictly local.
            </p>
            <Link
              href="/privacy"
              className="mt-4 inline-flex items-center gap-1 text-xs text-lime hover:underline"
            >
              <span>Privacy Policy</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="border-t border-border pt-6">
            <span className="font-mono text-xs text-subtle">02</span>
            <h3 className="mt-3 text-base font-semibold text-foreground">
              Strictly Personal Use
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Designed as a developer automation utility for my own content workflow. No external
              accounts or third-party authentication access.
            </p>
            <Link
              href="/terms"
              className="mt-4 inline-flex items-center gap-1 text-xs text-lime hover:underline"
            >
              <span>Terms of Service</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="border-t border-border pt-6">
            <span className="font-mono text-xs text-subtle">03</span>
            <h3 className="mt-3 text-base font-semibold text-foreground">
              Simple Access Revocation
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Full instructions on how to remove or revoke access through your Facebook App Settings
              or submit direct deletion requests.
            </p>
            <Link
              href="/data-deletion"
              className="mt-4 inline-flex items-center gap-1 text-xs text-lime hover:underline"
            >
              <span>Data Deletion Instructions</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
