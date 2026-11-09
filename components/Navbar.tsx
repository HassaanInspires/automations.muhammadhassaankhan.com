'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Overview' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
  { href: '/data-deletion', label: 'Data Deletion' },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/80 dark:bg-[#11141f]/80 backdrop-blur-xl px-3.5 py-2 shadow-card-stacked transition-colors"
      >
        {/* Brand with Live Status Indicator */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 pl-2 pr-1 py-1 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-85"
        >
          <div className="relative flex size-7 items-center justify-center rounded-lg bg-foreground text-background shadow-sm">
            <span className="text-[10px] font-black tracking-wider">AP</span>
            <span className="absolute -top-0.5 -right-0.5 flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[14px] tracking-tight leading-tight">AutoPost</span>
            <span className="hidden sm:inline-block font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
              Personal Engine
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredPath === link.href;

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={`relative z-10 block rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>

                {/* Sliding indicator on active or hover */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {!isActive && isHovered && (
                  <motion.div
                    layoutId="hover-pill"
                    className="absolute inset-0 rounded-full bg-black/[0.03] dark:bg-white/[0.04]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right cluster: Live Beacon + ThemeToggle + CTA */}
        <div className="flex items-center gap-2">
          {/* Subtle Live Engine Status */}
          <div className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Meta Graph v20.0</span>
          </div>

          <ThemeToggle />

          <Link
            href="/privacy"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-sm"
          >
            <span>Legal Portal</span>
            <ArrowUpRight className="size-3.5 opacity-80" />
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-9 items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.08] text-foreground md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/95 dark:bg-[#11141f]/95 p-4 shadow-xl backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-black/[0.06] dark:bg-white/[0.08] text-foreground font-semibold'
                          : 'text-muted-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
