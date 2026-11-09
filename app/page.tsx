'use client';

import * as React from 'react';
import { ParallaxHero } from '@/components/ParallaxHero';
import { InteractivePostPreview } from '@/components/InteractivePostPreview';
import { ArchitecturePillars } from '@/components/ArchitecturePillars';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { ComplianceShowcase } from '@/components/ComplianceShowcase';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Monumental Hero Section with Multi-Layer Parallax & Spatial Float */}
      <ParallaxHero />

      {/* 2. Tactile Interactive Dispatch Simulator */}
      <section className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <InteractivePostPreview />
      </section>

      {/* 3. Deep Execution Architecture Lifecycle */}
      <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] text-muted-foreground mb-4">
            <span>Deterministic Execution Flow</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From Cloud Trigger to{' '}
            <span className="font-serif italic font-normal text-foreground/90">
              Instant Memory Wipe.
            </span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Inspect the exact cryptographic handshakes and ephemeral memory boundaries of each publishing cycle.
          </p>
        </div>
        <ProcessTimeline />
      </section>

      {/* 4. Three-Pillar Architecture (Airy Minimalist Cards with Spotlight Cursor Tracking) */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <ArchitecturePillars />
      </section>

      {/* 5. Official Compliance & User Revocation Hub */}
      <section className="relative mx-auto max-w-6xl px-4 pt-4 pb-24 sm:px-6 sm:pb-36">
        <ComplianceShowcase />
      </section>
    </div>
  );
}
