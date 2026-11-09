'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Bot, Key, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from '@/components/SpotlightCard';

const PILLARS = [
  {
    number: '01',
    title: 'Scheduled Synthesis',
    subtitle: 'DeepSeek-V3 Engine',
    description:
      'Autonomous scheduled triggers execute in isolated memory. DeepSeek-V3 synthesizes editorial-grade briefings on software architecture, cloud platforms, and engineering best practices with clamped sampling temperature.',
    tag: 'Private LLM Worker',
    icon: Bot,
    glow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    number: '02',
    title: 'Ephemeral RAM Execution',
    subtitle: 'Zero Data Retention',
    description:
      'Engineered strictly for private operation. Payloads exist solely in volatile runtime memory during active dispatch. Once Meta returns confirmation, state is instantly purged. Zero external databases.',
    tag: '0 Bytes Persisted',
    icon: ShieldCheck,
    glow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    number: '03',
    title: 'Direct Meta Handshake',
    subtitle: 'Graph API v20.0 Endpoints',
    description:
      'Payloads are transmitted over encrypted HTTPS TLS 1.3 straight to the official Meta Graph API v20.0 feed endpoint, scoped exclusively to pages_manage_posts on Muhammad Hassaan Khan’s Page.',
    tag: 'OAuth 2.0 Scoped',
    icon: Key,
    glow: 'rgba(99, 102, 241, 0.15)',
  },
];

export function ArchitecturePillars() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] text-muted-foreground mb-4">
          <span>Three-Stage Autonomous Architecture</span>
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Engineered for{' '}
          <span className="font-serif italic font-normal text-foreground/90">
            Absolute Restraint.
          </span>
        </h2>
        <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          From scheduled AI prompt formulation to verified Meta Graph API dispatch and immediate memory wipe.
        </p>
      </div>

      {/* 3 Airy Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor={pillar.glow}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  {/* Big Editorial Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-normal text-muted-foreground/60 transition-colors group-hover:text-foreground">
                      {pillar.number}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] text-foreground">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                      {pillar.subtitle}
                    </span>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted-foreground/80">
                    {pillar.tag}
                  </span>
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
