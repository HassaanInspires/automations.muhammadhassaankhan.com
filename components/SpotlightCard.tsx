'use client';

import * as React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(99, 102, 241, 0.25)',
  ...props
}: SpotlightCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-300);
    mouseY.set(-300);
  }

  const spotlightBg = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 70%)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        clsx(
          'group relative rounded-3xl p-px transition-shadow duration-300',
          'border border-black/[0.08] dark:border-white/[0.08]',
          'bg-gradient-to-b from-black/[0.05] to-transparent dark:from-white/[0.06] dark:to-transparent',
          'shadow-card-stacked',
          className
        )
      )}
      {...props}
    >
      {/* GPU Spotlight layer */}
      <motion.div
        aria-hidden="true"
        style={{ background: spotlightBg }}
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Inner surface */}
      <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] bg-white/70 dark:bg-[#0c101a]/85 backdrop-blur-2xl p-6 sm:p-8">
        {/* Subtle top edge specular highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[calc(1.5rem-1px)] bg-gradient-to-r from-transparent via-black/[0.08] dark:via-white/[0.15] to-transparent"
          aria-hidden="true"
        />
        {children}
      </div>
    </div>
  );
}
