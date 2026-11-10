'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Bot, Key, ShieldCheck, ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    num: '01',
    law: 'LAW OF CLAMPED SYNTHESIS',
    color: 'text-[#1848ff]',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50/40',
    title: 'Scheduled Reasoning',
    author: 'DeepSeek-V3 Engine',
    excerpt:
      'Autonomous cron triggers initiate reasoning under strict temperature clamping (0.70). The engine crafts high-signal editorial briefings formatted in clean social markdown, ready for deterministic broadcast.',
    spec: 'TEMP 0.70 • ZERO PROMPT DRIFT',
    icon: Bot,
  },
  {
    num: '02',
    law: 'LAW OF VOLATILE TRANSIENCE',
    color: 'text-[#f59e0b]',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-50/40',
    title: 'Ephemeral RAM Scrub',
    author: 'Zero-Storage Buffer',
    excerpt:
      'Payloads exist solely in volatile memory during active HTTPS handshake. The exact millisecond Meta returns confirmation, state is instantly purged. No databases, no telemetry tables, no disk writes.',
    spec: '0 BYTES STORED • VOLATILE EXECUTION',
    icon: ShieldCheck,
  },
  {
    num: '03',
    law: 'LAW OF LEAST PRIVILEGE',
    color: 'text-[#059669]',
    borderColor: 'border-emerald-200',
    bgColor: 'bg-emerald-50/40',
    title: 'Cryptographic Handshake',
    author: 'Meta Graph API v20.0',
    excerpt:
      'Direct TLS 1.3 encrypted transmission strictly confined to pages_manage_posts on Muhammad Hassaan Khan’s Page. No audience profiling, no follower harvesting, no extraneous permission grants.',
    spec: 'TLS 1.3 ENCRYPTED • AUDITED SCOPE',
    icon: Key,
  },
];

export function ArchitecturePillars() {
  return (
    <div id="manifesto" className="w-full scroll-mt-24">
      {/* Editorial Spread Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/[0.08] pb-8 mb-12 sm:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-[#1848ff] uppercase tracking-widest mb-3">
            <span>SECTION 02 // ARCHITECTURAL SPREAD</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] text-slate-950">
            THE MANIFESTO.
            <span className="block font-serif italic font-normal text-muted-foreground text-3xl sm:text-5xl tracking-normal mt-1">
              Three Laws of Autonomous Execution.
            </span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 font-mono text-xs text-muted-foreground max-w-xs text-left md:text-right">
          PUBLISHED FOR AUDITORS, META REVIEWERS, AND ENGINEERING SCRUTINY.
        </p>
      </div>

      {/* 3-Column Magazine Spread with Sideways Law Labels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((article, idx) => {
          const Icon = article.icon;
          return (
            <motion.article
              key={article.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white/95 p-8 sm:p-10 shadow-card-stacked transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:${article.borderColor}`}
            >
              <div>
                {/* Magazine Column Top Header */}
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    {article.law}
                  </span>
                  <span className={`font-serif text-4xl font-black ${article.color}`}>
                    {article.num}
                  </span>
                </div>

                {/* Article Content */}
                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <div className={`flex size-6 items-center justify-center rounded-lg ${article.bgColor} ${article.color}`}>
                      <Icon className="size-3.5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-muted-foreground">
                      {article.author}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Magazine Article Stamp Footer */}
              <div className="mt-8 pt-5 border-t border-black/[0.06] flex items-center justify-between font-mono text-[10px]">
                <span className="font-semibold text-foreground/80 tracking-wide">
                  {article.spec}
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
