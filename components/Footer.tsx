import * as React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand & Context */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
              <span className="flex size-6 items-center justify-center rounded border border-border bg-surface font-mono text-[11px] font-bold text-lime">
                HK
              </span>
              <span>automations.muhammadhassaankhan.com</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Personal automation infrastructure connecting DeepSeek AI models to the Meta Graph API for scheduled, high-fidelity content publishing to my personal Facebook Page.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-subtle">
              <span className="size-1.5 rounded-full bg-lime" />
              <span>Personal Environment · Meta Graph API v20.0</span>
            </div>
          </div>

          {/* Navigation & Legal Links */}
          <div className="flex flex-wrap gap-12 text-xs">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                Navigation
              </div>
              <ul className="mt-3 space-y-2 text-muted">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/data-deletion" className="hover:text-foreground transition-colors">
                    Data Deletion
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                Direct Contact
              </div>
              <ul className="mt-3 space-y-2 text-muted">
                <li>
                  <a
                    href="mailto:m.hassaankhan.official@gmail.com"
                    className="hover:text-foreground transition-colors font-mono"
                  >
                    m.hassaankhan.official@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://muhammadhassaankhan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    muhammadhassaankhan.com ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-[11px] text-subtle sm:flex-row">
          <p>© 2026 Muhammad Hassaan Khan. All personal rights reserved.</p>
          <p className="font-mono">Meta Graph API v20.0 · DeepSeek-V3</p>
        </div>
      </div>
    </footer>
  );
}
