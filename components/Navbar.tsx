'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Overview' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
  { href: '/data-deletion', label: 'Data Deletion' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground hover:text-white transition-colors"
        >
          <span className="flex size-7 items-center justify-center rounded border border-border bg-surface font-mono text-xs font-bold text-lime">
            HK
          </span>
          <span className="font-medium text-foreground">automations</span>
          <span className="text-subtle text-xs font-mono hidden sm:inline">.muhammadhassaankhan.com</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-lime font-semibold'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="hidden sm:inline-flex items-center gap-1.5 rounded bg-lime px-3.5 py-1.5 text-xs font-semibold text-background transition-all hover:bg-lime-hover active:scale-95"
          >
            <span>Privacy Policy</span>
            <ArrowUpRight className="size-3.5" />
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-9 items-center justify-center rounded border border-border text-foreground md:hidden hover:bg-surface transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-border bg-surface px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-1 transition-colors ${
                    isActive ? 'text-lime font-semibold' : 'text-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/privacy"
                className="flex w-full items-center justify-center gap-1.5 rounded bg-lime py-2 text-xs font-semibold text-background"
              >
                <span>Privacy Policy</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
