'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, ArrowRight, Cpu, Lock, ShieldCheck } from 'lucide-react';

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
      {/* Crisp Ambient Radial Wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden"
      >
        <div className="h-[420px] w-[760px] rounded-full bg-blue-500/[0.04] blur-[100px]" />
      </div>

      {/* Harmonic Accent 1: Acid Mint (Meta Graph API) */}
      <motion.div
        style={{
          y: yFloatingBadge1,
          x: badgeTiltY1,
          rotateZ: -2,
          opacity: opacityFade,
        }}
        className="pointer-events-none absolute left-6 sm:left-14 lg:left-24 top-24 hidden md:flex items-center gap-3 rounded-2xl border border-emerald-300/80 bg-white/95 backdrop-blur-xl px-4 py-2.5 shadow-card-stacked z-20"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
        </span>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-foreground">
            <span>Meta Graph</span>
            <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-[9px] text-white font-semibold">v20.0</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-sans">Verified HTTPS Endpoints</span>
        </div>
      </motion.div>

      {/* Harmonic Accent 2: Ultramarine (DeepSeek-V3 Engine) */}
      <motion.div
        style={{
          y: yFloatingBadge2,
          x: badgeTiltY2,
          rotateZ: 2.5,
          opacity: opacityFade,
        }}
        className="pointer-events-none absolute right-6 sm:right-14 lg:right-24 top-32 hidden md:flex items-center gap-3 rounded-2xl border border-blue-200/80 bg-white/95 backdrop-blur-xl px-4 py-2.5 shadow-card-stacked z-20"
      >
        <div className="flex size-7 items-center justify-center rounded-xl bg-[#1848ff] text-white shadow-sm">
          <Cpu className="size-3.5" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-foreground">
            <span>DeepSeek-V3</span>
            <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[9px] text-[#1848ff] font-semibold">0.70</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-sans">Clamped AI Synthesis</span>
        </div>
      </motion.div>

      {/* Main Monumental Stage */}
      <motion.div
        style={{ scale: scaleHero }}
        className="mx-auto max-w-5xl px-4 text-center sm:px-6 relative z-10"
      >
        {/* Eyebrow Pill with Ultramarine & Mint Accents */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-medium text-blue-950 backdrop-blur-md shadow-sm"
        >
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-blue-900">Autonomous Facebook Pipeline</span>
          <span className="text-blue-300">•</span>
          <span className="text-blue-700">Muhammad Hassaan Khan</span>
        </motion.div>

        {/* Monumental Headline: Crisp Bold Obsidian + Pure Ultramarine Editorial Italic */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl font-black tracking-[-0.04em] text-slate-950 sm:text-8xl md:text-9xl leading-[0.94]"
          >
            Autonomous
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic font-normal text-[#1848ff] text-6xl sm:text-8xl md:text-9xl leading-[0.94]"
          >
            Publishing.
          </motion.span>
        </div>

        {/* Short, Clean 1-Sentence Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 mx-auto max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed font-normal"
        >
          High-signal technical briefings synthesized via DeepSeek-V3 and dispatched directly to
          Muhammad Hassaan Khan&apos;s Facebook Page via Meta Graph API v20.0 with zero data retention.
        </motion.p>

        {/* Distinct Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#architecture"
            onClick={scrollToCards}
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#1848ff] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            <span>Explore Architecture</span>
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-white/90 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-emerald-300 hover:bg-emerald-50/50 active:scale-95 shadow-sm"
          >
            <span>Compliance &amp; Privacy</span>
            <ArrowRight className="size-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Clean, High-Contrast 3-Metric Strip (Triad: Amber, Ultramarine, Mint) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 mx-auto max-w-2xl pt-6 border-t border-black/[0.06] grid grid-cols-3 gap-6 text-center"
        >
          <div>
            <span className="font-mono text-2xl font-black text-[#f59e0b] block">
              0 Bytes
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
              Disk Persistence
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl font-black text-[#1848ff] block">
              TLS 1.3
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground block">
              Encrypted Handshake
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl font-black text-[#059669] block">
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
