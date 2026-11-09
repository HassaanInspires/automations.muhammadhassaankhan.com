'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Bot, Key, ShieldCheck } from 'lucide-react';

const PILLARS = [
  {
    number: '01',
    gradient: 'from-violet-600 via-indigo-600 to-blue-600',
    borderHover: 'hover:border-violet-300',
    title: 'Scheduled Synthesis',
    subtitle: 'DeepSeek-V3 Engine',
    description:
      'Autonomous cron triggers activate DeepSeek-V3 with temperature clamped to 0.70, formulating structured, high-signal technical briefings for Facebook Page broadcasting.',
    tag: 'Clamped AI Worker',
    icon: Bot,
    iconBg: 'bg-violet-50 text-violet-600',
  },
  {
    number: '02',
    gradient: 'from-rose-500 via-pink-500 to-amber-500',
    borderHover: 'hover:border-rose-300',
    title: 'Ephemeral Execution',
    subtitle: 'Zero Data Retention',
    description:
      'Payloads exist strictly in volatile RAM during active dispatch. Once the Meta Graph endpoint responds, memory is completely wiped. Zero disk writes or databases.',
    tag: '0 Bytes Persisted',
    icon: ShieldCheck,
    iconBg: 'bg-rose-50 text-rose-600',
  },
  {
    number: '03',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    borderHover: 'hover:border-emerald-300',
    title: 'Meta Graph Handshake',
    subtitle: 'Graph API v20.0 Endpoints',
    description:
      'Direct TLS 1.3 encrypted HTTPS transmission scoped strictly to pages_manage_posts on Muhammad Hassaan Khan’s Page. No user profiling or audience harvesting.',
    tag: 'OAuth 2.0 Scoped',
    icon: Key,
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
];

export function ArchitecturePillars() {
  return (
    <div id="architecture" className="w-full scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-3.5 py-1 font-mono text-[11px] text-muted-foreground mb-4 shadow-sm">
          <span className="size-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
          <span>Execution Architecture</span>
        </div>
        <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Engineered for{' '}
          <span className="font-serif italic font-normal text-slate-900">
            Absolute Clarity.
          </span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          From isolated AI prompt formulation to verified Meta dispatch and immediate memory purge.
        </p>
      </div>

      {/* 3 Stylish Bento Cards with Multi-Colored Gradients */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white/85 p-8 sm:p-9 shadow-card-stacked transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pillar.borderHover}`}
            >
              <div>
                {/* Big Gradient Numeral & Icon */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-serif text-5xl font-normal bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}
                  >
                    {pillar.number}
                  </span>
                  <div className={`flex size-10 items-center justify-center rounded-2xl ${pillar.iconBg} shadow-sm`}>
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="mt-8">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                    {pillar.subtitle}
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-8 pt-5 border-t border-black/[0.05] flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">
                  {pillar.tag}
                </span>
                <span className="size-1.5 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
