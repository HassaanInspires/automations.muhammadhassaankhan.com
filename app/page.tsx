'use client';

import * as React from 'react';
import { ParallaxHero } from '@/components/ParallaxHero';
import { ArchitecturePillars } from '@/components/ArchitecturePillars';
import { ComplianceShowcase } from '@/components/ComplianceShowcase';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Monumental Gradient Hero with Extreme Scale Contrast */}
      <ParallaxHero />

      {/* 2. Three Sleek Bento Cards with Giant Multi-Colored Numerals */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <ArchitecturePillars />
      </section>

      {/* 3. Streamlined Compliance & Meta Platform Assurance Dock */}
      <section className="relative mx-auto max-w-6xl px-4 pt-4 pb-24 sm:px-6 sm:pb-36">
        <ComplianceShowcase />
      </section>
    </div>
  );
}
