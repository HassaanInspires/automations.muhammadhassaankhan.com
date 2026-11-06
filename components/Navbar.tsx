'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Overview' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/data-deletion', label: 'Data Deletion' },
];

export function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu upon navigation
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white/70 dark:bg-[#0b101b]/70 backdrop-blur-xl px-3 py-2 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_30px_-8px_rgba(0,0,0,0.5)] transition-colors"
      >
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 pl-3 pr-2 py-1 text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <div className="relative flex size-6 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-sm">
            <span className="text-xs font-black tracking-tighter">FB</span>
            <span className="absolute -top-0.5 -right-0.5 flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
          </div>
          <span className="font-semibold text-[15px] tracking-tight">AutoPost</span>
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
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && isHovered && (
                  <motion.div
                    layoutId="hover-pill"
                    className="absolute inset-0 rounded-full bg-black/[0.03] dark:bg-white/[0.04]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right cluster: ThemeToggle & CTA */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/privacy"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-sm"
          >
            <span>Legal Portal</span>
            <ArrowUpRight className="size-3.5 opacity-80" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-9 items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.1] text-foreground md:hidden hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white/90 dark:bg-[#0b101b]/95 backdrop-blur-2xl p-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-black/[0.06] dark:bg-white/[0.08] text-foreground font-semibold'
                        : 'text-muted-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
                <Link
                  href="/privacy"
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-foreground py-2.5 text-xs font-semibold text-background transition-transform active:scale-[0.99]"
                >
                  <ShieldCheck className="size-3.5" />
                  <span>Review Privacy Policy</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
