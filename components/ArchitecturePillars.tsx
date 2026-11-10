'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Bot, Key, ShieldCheck } from 'lucide-react';

const ARTICLES = [
  {
    num: '01',
    category: 'Intelligent Reasoning',
    title: 'Scheduled Synthesis',
    subtitle: 'DeepSeek-V3 Engine',
    description:
      'Autonomous cron triggers initiate reasoning under strict temperature clamping (0.70). The engine crafts high-signal editorial briefings formatted in clean social markdown, ready for deterministic broadcast.',
    highlight: 'Temperature Clamped to 0.70',
    icon: Bot,
  },
  {
    num: '02',
    category: 'Zero Retention',
    title: 'Ephemeral RAM Scrub',
    subtitle: 'Volatile Execution Buffer',
    description:
      'Payloads exist solely in volatile memory during active HTTPS handshake. The exact millisecond Meta returns confirmation, state is instantly purged. No databases, no tracking tables, no disk writes.',
    highlight: '0 Bytes Persisted to Disk',
    icon: ShieldCheck,
  },
  {
    num: '03',
    category: 'Audited Scoping',
    title: 'Meta Graph Protocol',
    subtitle: 'Graph API v20.0 Endpoints',
    description:
      'Direct TLS 1.3 encrypted transmission strictly confined to pages_manage_posts on Muhammad Hassaan Khan’s Page. No audience profiling, no follower harvesting, no extraneous permission grants.',
    highlight: 'Direct HTTPS TLS 1.3 Handshake',
    icon: Key,
  },
];

export function ArchitecturePillars() {
  return (
    <div id="manifesto" className="w-full scroll-mt-24">
      {/* Editorial Section Header: Clean Sans-Serif, Zero Hacker Slashes */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/[0.08] pb-8 mb-12 sm:mb-16">
        <div>
          <span className="text-xs font-semibold text-[#1848ff] uppercase tracking-wider block mb-2">
            System Architecture
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] text-slate-950">
            The Three Principles.
            <span className="block font-serif italic font-normal text-muted-foreground text-3xl sm:text-5xl tracking-normal mt-1">
              Engineered for absolute restraint.
            </span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-xs text-muted-foreground max-w-xs text-left md:text-right leading-relaxed font-normal">
          Published for technical clarity, Meta App Reviewers, and compliance verification.
        </p>
      </div>

      {/* 3-Column Editorial Grid: Pure Human Typography */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((article, idx) => {
          const Icon = article.icon;
          return (
            <motion.article
              key={article.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white/95 p-8 sm:p-10 shadow-card-stacked transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-black/20"
            >
              <div>
                {/* Header: Numeral & Category */}
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {article.category}
                  </span>
                  <span className="font-serif text-4xl font-normal text-[#1848ff]">
                    {article.num}
                  </span>
                </div>

                {/* Body Content */}
                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <div className="flex size-6 items-center justify-center rounded-lg bg-blue-50 text-[#1848ff]">
                      <Icon className="size-3.5" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {article.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-normal">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Refined Highlight Footer */}
              <div className="mt-8 pt-5 border-t border-black/[0.06] flex items-center justify-between text-xs">
                <span className="font-medium text-foreground/80">
                  {article.highlight}
                </span>
                <span className="size-1.5 rounded-full bg-emerald-500" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
