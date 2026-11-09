import * as React from 'react';
import Link from 'next/link';
import { Shield, Mail, CheckCircle2, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-black/[0.08] dark:border-white/[0.08] bg-elevated/40 dark:bg-[#090a10]/80 backdrop-blur-md overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex size-6 items-center justify-center rounded-lg bg-foreground text-background font-black text-[10px] tracking-wider">
                AP
              </div>
              <span className="text-base font-bold tracking-tight text-foreground">
                AutoPost Platform
              </span>
            </div>
            <p className="mt-3.5 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Autonomous personal automation engine connecting DeepSeek AI intelligence to the
              Meta Graph API v20.0 for scheduled, high-fidelity publishing to Muhammad Hassaan Khan&apos;s Facebook Page.
            </p>

            <div className="mt-5 flex items-center gap-2 font-mono text-[11px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3 py-1 text-muted-foreground">
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
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-foreground font-mono">
              Legal &amp; Compliance
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition-colors hover:text-foreground inline-flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground transition-colors hover:text-foreground inline-flex items-center gap-1"
                >
                  <span>Terms of Service</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/data-deletion"
                  className="text-muted-foreground transition-colors hover:text-foreground inline-flex items-center gap-1"
                >
                  <span>User Data Deletion</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Ownership & Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-foreground font-mono">
              Developer &amp; Ownership
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
              <li className="text-[11px] text-muted-foreground/80 font-mono">
                Owner: Muhammad Hassaan Khan
              </li>
              <li className="text-[11px] text-muted-foreground/80 font-mono">
                Strict Zero-Tracking Architecture
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] dark:border-white/[0.06] pt-8 text-xs text-muted-foreground sm:flex-row font-mono">
          <p>© 2026 AutoPost. Muhammad Hassaan Khan. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1 text-muted-foreground/80">
              <CheckCircle2 className="size-3 text-emerald-500" />
              Meta Platform v20.0 Verified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
