'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, ArrowRight, ShieldCheck, Cpu, ArrowUpRight, Compass } from 'lucide-react';

export function ParallaxHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Smooth mouse tilt coordinates for floating elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 24 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const tiltX = useTransform(smoothMouseY, [-200, 200], [4, -4]);
  const tiltY = useTransform(smoothMouseX, [-200, 200], [-4, 4]);

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

  const yParallaxText = useTransform(smoothProgress, [0, 1], [0, -60]);
  const yParallaxSpine = useTransform(smoothProgress, [0, 1], [0, 80]);
  const opacityFade = useTransform(smoothProgress, [0, 0.85], [1, 0.15]);

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
      className="relative overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-36"
    >
      {/* Editorial Watermark Stamp (Magazine Folio Background) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 sm:right-12 top-10 font-mono text-[100px] sm:text-[180px] lg:text-[240px] font-black text-black/[0.02] select-none leading-none z-0"
      >
        2026
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Magazine Top Meta Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between border-b border-black/[0.08] pb-4 mb-12 sm:mb-16 font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="flex size-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold text-foreground">VOL. 01 / EDITION 2026</span>
            <span className="hidden sm:inline text-black/20">|</span>
            <span className="hidden sm:inline text-foreground/80">PRIVATE AUTOMATION REGISTRY</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#1848ff] font-semibold">DEEPSEEK-V3 • META v20.0</span>
            <span className="hidden md:inline text-black/20">|</span>
            <span className="hidden md:inline font-sans text-xs lowercase text-muted-foreground">muhammad hassaan khan</span>
          </div>
        </div>

        {/* Asymmetrical Hero Stage: Sideways Spine + Monumental Headlines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Vertical Magazine Running Spine (Sideways Text) */}
          <motion.div
            style={{ y: yParallaxSpine }}
            className="hidden lg:flex lg:col-span-1 flex-col items-center justify-between border-r border-black/[0.08] pr-4 min-h-[480px] select-none"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#1848ff] font-bold [writing-mode:vertical-rl] rotate-180">
              AUTONOMOUS ARCHITECTURE // ARCHIVE REF: 0206
            </span>
            <div className="h-16 w-px bg-black/[0.1]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground [writing-mode:vertical-rl] rotate-180">
              ZERO-RETENTION PROTOCOL
            </span>
          </motion.div>

          {/* Main Monumental Editorial Body */}
          <motion.div
            style={{ y: yParallaxText, rotateX: tiltX, rotateY: tiltY }}
            className="lg:col-span-11 flex flex-col justify-between"
          >
            {/* Editorial Category Tag */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[11px] font-semibold text-[#1848ff]">
                <span>ARCHITECTURAL BRIEFING</span>
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                DISPATCH PROTOCOL // EPHEMERAL
              </span>
            </div>

            {/* Monumental Headline: Asymmetric, Magazine-Style Scale */}
            <div className="mt-8 sm:mt-10">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[132px] font-black tracking-[-0.05em] text-slate-950 leading-[0.9] sm:leading-[0.88]">
                AUTONOMOUS
                <span className="block font-serif italic font-normal text-[#1848ff] text-5xl sm:text-7xl md:text-8xl lg:text-[116px] tracking-tight mt-2 sm:mt-3">
                  Publishing.
                </span>
              </h1>
            </div>

            {/* Editorial Asymmetric Pull-Quote and Manifest Grid */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-black/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Bold Pull-Quote */}
              <div className="md:col-span-7">
                <p className="font-serif italic text-2xl sm:text-3xl text-slate-900 leading-snug">
                  &ldquo;A private, deterministic pipeline connecting DeepSeek AI intelligence to Meta Graph API v20.0 with strictly zero external data retention.&rdquo;
                </p>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans max-w-xl">
                  Engineered exclusively for Muhammad Hassaan Khan’s personal Facebook Page. Every post is formulated in volatile runtime memory, dispatched over encrypted TLS 1.3, and immediately flushed upon confirmation.
                </p>

                {/* Magazine Action Bar */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#manifesto"
                    onClick={scrollToSpread}
                    className="group relative inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#1848ff] hover:shadow-lg active:scale-95 uppercase tracking-wider"
                  >
                    <span>Read The Manifesto</span>
                    <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </a>

                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-white px-7 py-3.5 text-xs font-bold text-foreground transition-all hover:border-[#1848ff] hover:text-[#1848ff] active:scale-95 shadow-sm uppercase tracking-wider"
                  >
                    <span>Compliance Colophon</span>
                    <ArrowUpRight className="size-3.5 opacity-60" />
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Fashion Specification Index Card */}
              <div className="md:col-span-5 rounded-2xl border border-black/[0.08] bg-white/95 p-6 shadow-card-stacked font-mono text-xs">
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 text-muted-foreground">
                  <span className="uppercase tracking-widest text-[10px] font-bold text-foreground">
                    INDEX // REGISTRY
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE PROTOCOL
                  </span>
                </div>

                <dl className="mt-4 space-y-3">
                  <div className="flex items-baseline justify-between border-b border-black/[0.03] pb-2">
                    <dt className="text-muted-foreground">01. Model Architecture</dt>
                    <dd className="font-bold text-[#1848ff]">DeepSeek-V3 (0.70)</dd>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-black/[0.03] pb-2">
                    <dt className="text-muted-foreground">02. Data Retention</dt>
                    <dd className="font-bold text-[#f59e0b]">0 Bytes (Ephemeral)</dd>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-black/[0.03] pb-2">
                    <dt className="text-muted-foreground">03. Transport Scoping</dt>
                    <dd className="font-bold text-[#059669]">pages_manage_posts</dd>
                  </div>
                  <div className="flex items-baseline justify-between pt-1">
                    <dt className="text-muted-foreground">04. Operator Identity</dt>
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
