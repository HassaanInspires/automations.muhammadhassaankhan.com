import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'relative rounded-2xl border border-black/[0.08] dark:border-white/[0.08]',
          'bg-white/60 dark:bg-white/[0.03]',
          'backdrop-blur-xl',
          'shadow-card-stacked',
          hoverEffect &&
            'transition-all duration-300 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg',
          className
        )
      )}
      {...props}
    >
      {/* Subtle top edge highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-black/[0.06] dark:via-white/[0.12] to-transparent"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
