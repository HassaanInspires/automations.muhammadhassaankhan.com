'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, Cpu, Sparkles, Activity, Lock, Database } from 'lucide-react';

export function ParallaxHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Mouse tracking for subtle tilt on hero elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 25 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const badgeTiltX1 = useTransform(smoothMouseY, [-200, 200], [8, -8]);
  const badgeTiltY1 = useTransform(smoothMouseX, [-200, 200], [-8, 8]);
  const badgeTiltX2 = useTransform(smoothMouseY, [-200, 200], [-10, 10]);
  const badgeTiltY2 = useTransform(smoothMouseX, [-200, 200], [10, -10]);

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

  // Parallax offsets
  const yFloatingBadge1 = useTransform(smoothProgress, [0, 1], [0, -140]);
  const yFloatingBadge2 = useTransform(smoothProgress, [0, 1], [0, 160]);
  const yFloatingBadge3 = useTransform(smoothProgress, [0, 1], [0, -80]);
  const opacityFade = useTransform(smoothProgress, [0, 0.75], [1, 0.1]);
  const scaleHero = useTransform(smoothProgress, [0, 1], [1, 0.94]);
  const blurHero = useTransform(smoothProgress, [0, 0.9], [0, 4]);

  const scrollToSimulator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('simulator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleWords = ['Autonomous', 'Publishing.'];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-36 lg:pt-36 perspective-[1400px]"
    >
      {/* Ambient Luminous Mesh Glow (Pure CSS GPU layer) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden"
      >
        <div className="h-[520px] w-[860px] rounded-full bg-gradient-to-tr from-amber-200/20 via-blue-500/10 to-indigo-500/15 blur-[120px] dark:from-blue-600/10 dark:via-indigo-500/10 dark:to-emerald-500/05" />
      </div>

      {/* Floating Spatial Micro-Badge 1 (Top Left) */}
      <motion.div
        style={{
          y: yFloatingBadge1,
          x: badgeTiltY1,
          rotateZ: -2,
          opacity: opacityFade,
        }}
        className="pointer-events-none absolute left-4 sm:left-12 lg:left-24 top-24 hidden md:flex items-center gap-3 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/80 dark:bg-[#11141f]/80 backdrop-blur-2xl px-4 py-2.5 shadow-card-stacked z-20 transition-transform duration-200"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
        </span>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-foreground">
            <span>Meta Graph API</span>
            <span className="rounded bg-black/[0.05] dark:bg-white/[0.06] px-1 py-0.5 text-[9px] text-accent">v20.0</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-sans">Official Endpoint Handshake</span>
        </div>
      </motion.div>

      {/* Floating Spatial Micro-Badge 2 (Top Right) */}
      <motion.div
        style={{
          y: yFloatingBadge2,
          x: badgeTiltY2,
          rotateZ: 2.5,
          opacity: opacityFade,
        }}
        className="pointer-events-none absolute right-4 sm:right-12 lg:right-24 top-36 hidden md:flex items-center gap-3 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/80 dark:bg-[#11141f]/80 backdrop-blur-2xl px-4 py-2.5 shadow-card-stacked z-20 transition-transform duration-200"
      >
        <div className="flex size-7 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Cpu className="size-3.5" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-foreground">
            <span>DeepSeek-V3</span>
            <span className="rounded bg-black/[0.05] dark:bg-white/[0.06] px-1 py-0.5 text-[9px] text-muted-foreground">0.70</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-sans">Clamped Editorial Synthesis</span>
        </div>
      </motion.div>

      {/* Floating Spatial Micro-Badge 3 (Subtle Bottom Floating Pill) */}
      <motion.div
        style={{
          y: yFloatingBadge3,
          rotateZ: -1,
          opacity: opacityFade,
        }}
        className="pointer-events-none absolute left-1/4 -bottom-6 hidden lg:flex items-center gap-2.5 rounded-full border border-black/[0.06] dark:border-white/[0.06] bg-white/70 dark:bg-[#11141f]/70 backdrop-blur-xl px-4 py-1.5 shadow-sm font-mono text-[11px] text-muted-foreground z-10"
      >
        <Lock className="size-3 text-emerald-600 dark:text-emerald-400" />
        <span>Zero Database Persistence • Ephemeral Memory Buffer</span>
      </motion.div>

      {/* Main Monumental Stage */}
      <motion.div
        style={{
          scale: scaleHero,
        }}
        className="mx-auto max-w-5xl px-4 text-center sm:px-6 relative z-10"
      >
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white/75 dark:bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-md shadow-sm"
        >
          <span className="size-1.5 rounded-full bg-emerald-500" />
          <span className="text-muted-foreground">Private Facebook Publishing System</span>
          <span className="text-border">•</span>
          <span className="font-semibold text-foreground">Muhammad Hassaan Khan</span>
        </motion.div>

        {/* Monumental Headline with Spring Reveal & Editorial Italic Contrast */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <motion.span
            initial={{ opacity: 0, y: 35, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl font-extrabold tracking-[-0.04em] text-foreground sm:text-7xl md:text-8xl lg:text-9xl leading-[0.96]"
          >
            Autonomous
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-normal text-foreground/90 text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.96]"
          >
            Publishing.
          </motion.span>
        </div>

        {/* Crisp Architectural Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed font-normal"
        >
          A private, scheduled pipeline connecting DeepSeek AI intelligence to the official
          Meta Graph API v20.0 for autonomous publishing to Muhammad Hassaan Khan&apos;s personal Facebook Page.
          Engineered with strict zero-storage ephemeral execution.
        </motion.p>

        {/* Magnetic Tactile CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#simulator"
            onClick={scrollToSimulator}
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-lg transition-all hover:opacity-90 hover:shadow-xl active:scale-95"
          >
            <span>Simulate Live Dispatch</span>
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>

          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] dark:border-white/[0.12] bg-white/70 dark:bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 shadow-sm"
          >
            <span>Compliance &amp; Privacy</span>
            <ArrowRight className="size-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Minimalist Engineering Specs Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 mx-auto max-w-3xl pt-8 border-t border-black/[0.06] dark:border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 text-left"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 block">
              Disk Persistence
            </span>
            <span className="mt-1 font-mono text-sm font-bold text-foreground block">
              0 Bytes
            </span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 block">
              Transport Security
            </span>
            <span className="mt-1 font-mono text-sm font-bold text-foreground block">
              TLS 1.3 Direct
            </span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 block">
              Target Scope
            </span>
            <span className="mt-1 font-mono text-sm font-bold text-foreground block">
              pages_manage_posts
            </span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 block">
              Execution Architecture
            </span>
            <span className="mt-1 font-mono text-sm font-bold text-foreground block">
              Ephemeral RAM
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
