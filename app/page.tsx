'use client';

import * as React from 'react';
import { ParallaxHero } from '@/components/ParallaxHero';
import { ArchitecturePillars } from '@/components/ArchitecturePillars';
import { ComplianceShowcase } from '@/components/ComplianceShowcase';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Bespoke Editorial Magazine Hero with Sideways Running Spine */}
      <ParallaxHero />

      {/* 2. Architectural Manifesto Spread (Three Operating Laws) */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ArchitecturePillars />
      </section>

      {/* 3. Official Compliance Colophon & Audit Registry */}
      <section className="relative mx-auto max-w-7xl px-4 pt-4 pb-24 sm:px-6 sm:pb-36 lg:px-8">
        <ComplianceShowcase />
      </section>
    </div>
  );
}
