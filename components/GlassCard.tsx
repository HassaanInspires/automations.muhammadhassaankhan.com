import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'relative rounded-lg border border-border bg-[#121212]/80 p-6',
          'transition-colors duration-200 hover:border-border-hover',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
}
