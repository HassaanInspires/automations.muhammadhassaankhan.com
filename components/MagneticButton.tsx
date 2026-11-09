'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SPRING_CONFIG = { stiffness: 220, damping: 20, mass: 0.5 };
const PULL_STRENGTH = 0.28;
const INNER_PULL = 0.14;

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function MagneticButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, SPRING_CONFIG);
  const sy = useSpring(y, SPRING_CONFIG);

  const ix = useTransform(sx, (v) => v * (INNER_PULL / PULL_STRENGTH));
  const iy = useTransform(sy, (v) => v * (INNER_PULL / PULL_STRENGTH));

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * PULL_STRENGTH);
    y.set((e.clientY - cy) * PULL_STRENGTH);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const baseStyles =
    variant === 'primary'
      ? 'bg-foreground text-background shadow-md hover:shadow-lg'
      : 'border border-black/[0.1] dark:border-white/[0.12] bg-white/60 dark:bg-white/[0.04] text-foreground hover:bg-black/5 dark:hover:bg-white/5';

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block will-change-transform">
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${baseStyles} ${className}`}
      >
        <motion.span
          style={{ x: ix, y: iy }}
          className="inline-flex items-center gap-2 will-change-transform"
        >
          {children}
        </motion.span>
      </Link>
    </motion.div>
  );
}
