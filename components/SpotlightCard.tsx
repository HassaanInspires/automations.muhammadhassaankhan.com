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
  spotlightColor = 'rgba(212, 255, 0, 0.15)',
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

  const spotlightBg = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 70%)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        clsx(
          'group relative rounded-xl p-px transition-colors duration-200',
          'border border-border hover:border-border-hover bg-background',
          className
        )
      )}
      {...props}
    >
      {/* Subtle cursor-following border glow */}
      <motion.div
        aria-hidden="true"
        style={{ background: spotlightBg }}
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Inner surface */}
      <div className="relative h-full w-full rounded-[calc(0.75rem-1px)] bg-[#121212] p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}
