'use client';

import * as React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SpatialTiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}

export function SpatialTiltCard({
  children,
  className,
  glareColor = 'rgba(37, 99, 235, 0.12)',
}: SpatialTiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Raw mouse coordinates relative to card center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Raw coordinates for glare effect
  const glareX = useMotionValue(-500);
  const glareY = useMotionValue(-500);

  // Springs for silky 3D rotation
  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    glareX.set(relX);
    glareY.set(relY);

    const centerX = width / 2;
    const centerY = height / 2;

    // Maximum tilt angle of 5 degrees for refined, subtle depth
    const maxTilt = 5;
    const rY = ((relX - centerX) / centerX) * maxTilt;
    const rX = -((relY - centerY) / centerY) * maxTilt;

    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(-500);
    glareY.set(-500);
  }

  const glareBg = useMotionTemplate`radial-gradient(380px circle at ${glareX}px ${glareY}px, ${glareColor}, transparent 75%)`;

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full flex justify-center py-2"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={twMerge(
          clsx(
            'group relative w-full rounded-3xl p-px transition-shadow duration-300',
            'border border-black/[0.08] dark:border-white/[0.08]',
            'bg-gradient-to-b from-black/[0.04] to-transparent dark:from-white/[0.06] dark:to-transparent',
            'shadow-card-stacked',
            className
          )
        )}
      >
        {/* Dynamic Specular Glare Layer */}
        <motion.div
          aria-hidden="true"
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Inner Surface */}
        <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] bg-white/80 dark:bg-[#11141f]/90 backdrop-blur-2xl p-6 sm:p-8">
          {/* Subtle top edge specular highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[calc(1.5rem-1px)] bg-gradient-to-r from-transparent via-black/[0.08] dark:via-white/[0.15] to-transparent"
            aria-hidden="true"
          />
          {children}
        </div>
      </motion.div>
    </div>
  );
}
