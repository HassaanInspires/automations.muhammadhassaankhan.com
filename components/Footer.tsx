import * as React from 'react';
import Link from 'next/link';
import { Shield, Sparkles, Mail, Github, CheckCircle2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-black/[0.08] dark:border-white/[0.08] bg-elevated/40 dark:bg-[#07090e]/70 backdrop-blur-md overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex size-6 items-center justify-center rounded-lg bg-accent text-accent-foreground font-black text-xs">
                FB
              </div>
              <span className="text-base font-bold tracking-tight text-foreground">
                AutoPost Platform
              </span>
            </div>
            <p className="mt-3.5 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Personal automation infrastructure connecting DeepSeek AI intelligence to the
              Meta Graph API for scheduled, high-fidelity content publishing.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3 py-1 text-[11px] text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span>Meta Graph API v20.0 Live</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-foreground">
              Legal & Policy
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/data-deletion"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  User Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-foreground">
              Direct Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a
                  href="mailto:m.hassaankhan.official@gmail.com"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-3.5" />
                  <span>m.hassaankhan.official@gmail.com</span>
                </a>
              </li>
              <li className="text-[11px] text-muted-foreground/80">
                Personal Automation Sandbox
              </li>
              <li className="text-[11px] text-muted-foreground/80">
                Strict Zero-Tracking Architecture
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] dark:border-white/[0.06] pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 AutoPost. All personal automation rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1 text-muted-foreground/80">
              <CheckCircle2 className="size-3 text-emerald-500" />
              Verified Meta Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Massive subtle ghost wordmark bleeding off the bottom */}
      <div
        aria-hidden="true"
        className="-mb-8 pointer-events-none select-none text-center font-sans font-black tracking-tighter opacity-[0.03] dark:opacity-[0.04] overflow-hidden"
        style={{
          fontSize: 'clamp(5rem, 16vw, 15rem)',
          lineHeight: 0.8,
        }}
      >
        AUTOMATION
      </div>
    </footer>
  );
}
