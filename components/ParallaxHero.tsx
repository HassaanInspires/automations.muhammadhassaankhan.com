'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';

export function ParallaxHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Smooth mouse tilt coordinates for editorial cards
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 24 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const tiltX = useTransform(smoothMouseY, [-200, 200], [3, -3]);
  const tiltY = useTransform(smoothMouseX, [-200, 200], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll parallax progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const yParallaxText = useTransform(smoothProgress, [0, 1], [0, -40]);
  const yParallaxSpine = useTransform(smoothProgress, [0, 1], [0, 60]);

  const scrollToSpread = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('manifesto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Editorial Header Ribbon: Pure Human Sans-Serif */}
        <div className="flex flex-wrap items-center justify-between border-b border-black/[0.08] pb-4 mb-12 sm:mb-16 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-foreground tracking-tight">Private Publishing Platform</span>
            <span className="text-black/15">•</span>
            <span className="text-muted-foreground font-normal">Muhammad Hassaan Khan</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#1848ff] font-medium tracking-tight">Meta Graph API v20.0 Verified</span>
            <span className="hidden md:inline text-black/15">•</span>
            <span className="hidden md:inline text-muted-foreground font-normal">DeepSeek-V3 Engine</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Subtle Vertical Magazine Spine (Pure Sans-Serif, No Terminal Slashes) */}
          <motion.div
            style={{ y: yParallaxSpine }}
            className="hidden lg:flex lg:col-span-1 flex-col items-center justify-between border-r border-black/[0.08] pr-4 min-h-[460px] select-none text-xs text-muted-foreground tracking-widest uppercase font-medium"
          >
            <span className="[writing-mode:vertical-rl] rotate-180 text-[#1848ff]">
              Autonomous Architecture
            </span>
            <div className="h-20 w-px bg-black/[0.1]" />
            <span className="[writing-mode:vertical-rl] rotate-180 text-muted-foreground/60">
              Zero Retention Protocol
            </span>
          </motion.div>

          {/* Main Monumental Editorial Body */}
          <motion.div
            style={{ y: yParallaxText, rotateX: tiltX, rotateY: tiltY }}
            className="lg:col-span-11 flex flex-col justify-between"
          >
            {/* Category Pill */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1848ff]">
                Architectural Edition
              </span>
              <span className="text-xs text-muted-foreground">
                Ephemeral Dispatch Lifecycle
              </span>
            </div>

            {/* Monumental Headline */}
            <div className="mt-8 sm:mt-10">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[124px] font-black tracking-[-0.04em] text-slate-950 leading-[0.92] sm:leading-[0.9]">
                AUTONOMOUS
                <span className="block font-serif italic font-normal text-[#1848ff] text-5xl sm:text-7xl md:text-8xl lg:text-[112px] tracking-tight mt-2 sm:mt-3">
                  Publishing.
                </span>
              </h1>
            </div>

            {/* Editorial Two-Column Spread */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-black/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Editorial Statement & Actions */}
              <div className="md:col-span-7">
                <p className="font-serif italic text-2xl sm:text-3xl text-slate-900 leading-snug">
                  &ldquo;A private, deterministic pipeline connecting DeepSeek AI intelligence to Meta Graph API v20.0 with strictly zero external data retention.&rdquo;
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-normal max-w-xl">
                  Engineered exclusively for Muhammad Hassaan Khan’s personal Facebook Page. Every post is formulated in volatile runtime memory, dispatched over encrypted TLS 1.3, and immediately purged upon confirmation.
                </p>

                {/* Tactile Magnetic Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#manifesto"
                    onClick={scrollToSpread}
                    className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#1848ff] px-8 py-3.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 tracking-wide"
                  >
                    <span>Explore Architecture</span>
                    <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>

                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-7 py-3.5 text-xs font-semibold text-foreground transition-all hover:border-[#1848ff] hover:text-[#1848ff] active:scale-95 shadow-sm tracking-wide"
                  >
                    <span>Compliance &amp; Privacy</span>
                    <ArrowUpRight className="size-3.5 opacity-60" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Luxury Summary Card (Pure Sans-Serif, Zero Terminal Styling) */}
              <div className="md:col-span-5 rounded-3xl border border-black/[0.08] bg-white/95 p-7 shadow-card-stacked text-xs">
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-muted-foreground">
                  <span className="font-semibold text-foreground tracking-tight text-xs">
                    System Specifications
                  </span>
                  <span className="text-emerald-600 font-medium flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Pipeline
                  </span>
                </div>

                <dl className="mt-4 space-y-3.5">
                  <div className="flex items-baseline justify-between border-b border-black/[0.03] pb-2.5">
                    <dt className="text-muted-foreground">AI Intelligence</dt>
                    <dd className="font-semibold text-foreground">DeepSeek-V3 (0.70 Clamped)</dd>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-black/[0.03] pb-2.5">
                    <dt className="text-muted-foreground">Storage Model</dt>
                    <dd className="font-semibold text-[#1848ff]">0 Bytes (Ephemeral Volatile RAM)</dd>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-black/[0.03] pb-2.5">
                    <dt className="text-muted-foreground">Target Scope</dt>
                    <dd className="font-semibold text-foreground">pages_manage_posts</dd>
                  </div>
                  <div className="flex items-baseline justify-between pt-0.5">
                    <dt className="text-muted-foreground">Verified Operator</dt>
                    <dd className="font-semibold text-foreground">Muhammad Hassaan Khan</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
