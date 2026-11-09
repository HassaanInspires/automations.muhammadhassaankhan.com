'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, ArrowRight, Cpu, Sparkles, Lock } from 'lucide-react';

export function ParallaxHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Smooth mouse tilt coordinates for floating badges
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 25 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const badgeTiltX1 = useTransform(smoothMouseY, [-200, 200], [6, -6]);
  const badgeTiltY1 = useTransform(smoothMouseX, [-200, 200], [-6, 6]);
  const badgeTiltX2 = useTransform(smoothMouseY, [-200, 200], [-8, 8]);
  const badgeTiltY2 = useTransform(smoothMouseX, [-200, 200], [8, -8]);

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

  const yFloatingBadge1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const yFloatingBadge2 = useTransform(smoothProgress, [0, 1], [0, 120]);
  const opacityFade = useTransform(smoothProgress, [0, 0.8], [1, 0.15]);
  const scaleHero = useTransform(smoothProgress, [0, 1], [1, 0.96]);

  const scrollToCards = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('architecture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-36 lg:pt-36"
    >
      {/* Multi-Colored Ambient Iridescent Mesh (Soft Warm Alabaster Atmosphere) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden"
      >
        <div className="h-[460px] w-[800px] rounded-full bg-gradient-to-r from-violet-400/15 via-rose-300/15 via-cyan-400/15 to-emerald-300/15 blur-[100px]" />
      </div>

      {/* Floating Spatial Micro-Badge (Left: Meta Graph API) */}
      <motion.div
        style={{
          y: yFloatingBadge1,
          x: badgeTiltY1,
          rotateZ: -2,
          opacity: opacityFade,
        }}
        className="pointer-events-none absolute left-6 sm:left-14 lg:left-24 top-24 hidden md:flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white/80 backdrop-blur-xl px-4 py-2.5 shadow-card-stacked z-20"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
        </span>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-foreground">
            <span>Meta Graph</span>
            <span className="rounded bg-gradient-to-r from-emerald-500 to-teal-500 px-1 py-0.5 text-[9px] text-white">v20.0</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-sans">Verified HTTPS Endpoints</span>
        </div>
      </motion.div>

      {/* Floating Spatial Micro-Badge (Right: DeepSeek-V3 Engine) */}
      <motion.div
        style={{
          y: yFloatingBadge2,
          x: badgeTiltY2,
          rotateZ: 2.5,
          opacity: opacityFade,
        }}
        className="pointer-events-none absolute right-6 sm:right-14 lg:right-24 top-32 hidden md:flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white/80 backdrop-blur-xl px-4 py-2.5 shadow-card-stacked z-20"
      >
        <div className="flex size-7 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-sm">
          <Cpu className="size-3.5" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-foreground">
            <span>DeepSeek-V3</span>
            <span className="rounded bg-violet-100 px-1 py-0.5 text-[9px] text-violet-700 font-semibold">0.70 Temp</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-sans">Clamped AI Synthesis</span>
        </div>
      </motion.div>

      {/* Main Monumental Stage */}
      <motion.div
        style={{ scale: scaleHero }}
        className="mx-auto max-w-5xl px-4 text-center sm:px-6 relative z-10"
      >
        {/* Eyebrow Pill with Chromatic Micro-Glow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-md shadow-sm"
        >
          <span className="size-2 rounded-full bg-gradient-to-tr from-violet-500 to-rose-500 animate-pulse" />
          <span className="text-muted-foreground">Autonomous Facebook Pipeline</span>
          <span className="text-black/10">•</span>
          <span className="font-semibold text-foreground">Muhammad Hassaan Khan</span>
        </motion.div>

        {/* Monumental Headline: Vibrant Rainbow Gradient Sans + Pure Editorial Serif Italic */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl font-black tracking-[-0.04em] sm:text-8xl md:text-9xl leading-[0.94] bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 bg-clip-text text-transparent"
          >
            Autonomous
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-normal text-slate-900 text-6xl sm:text-8xl md:text-9xl leading-[0.94]"
          >
            Publishing.
          </motion.span>
        </div>

        {/* Short, Punchy 1-Sentence Subtext (Stripped of text walls) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 mx-auto max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed font-normal"
        >
          High-signal technical briefings synthesized via DeepSeek-V3 and dispatched directly to
          Muhammad Hassaan Khan&apos;s Facebook Page via Meta Graph API v20.0 with zero data retention.
        </motion.p>

        {/* Multi-Colored Iridescent CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#architecture"
            onClick={scrollToCards}
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-glow-rainbow active:scale-95"
          >
            <span>Explore Architecture</span>
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-white/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-black/5 active:scale-95 shadow-sm"
          >
            <span>Compliance &amp; Privacy</span>
            <ArrowRight className="size-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Clean, High-Contrast 3-Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 mx-auto max-w-2xl pt-6 border-t border-black/[0.06] grid grid-cols-3 gap-6 text-center"
        >
          <div>
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent block">
              0 Bytes
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
              Disk Persistence
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent block">
              TLS 1.3
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
              Encrypted Handshake
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl font-black bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent block">
              v20.0
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
              Meta Graph API
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
