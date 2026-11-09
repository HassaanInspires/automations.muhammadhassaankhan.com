'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Key, ShieldCheck, CheckCircle2, ArrowRight, Zap, RefreshCw, Lock } from 'lucide-react';

const STAGES = [
  {
    step: '01',
    title: 'Intelligent Briefing Synthesis',
    actor: 'DeepSeek-V3 Engine',
    description:
      'The scheduled worker triggers at designated UTC hours. DeepSeek-V3 synthesizes an editorial-grade briefing focusing on software engineering, cloud systems, and AI automation. Prompt temperature is clamped to 0.7 to ensure consistent technical rigor.',
    specs: [
      { label: 'Model', val: 'deepseek-chat-v3' },
      { label: 'Sampling Temperature', val: '0.70' },
      { label: 'Output Format', val: 'Formatted Social Markdown' },
    ],
    icon: Bot,
    accentColor: 'text-blue-500',
  },
  {
    step: '02',
    title: 'OAuth 2.0 Token Handshake',
    actor: 'Meta Graph API v20.0',
    description:
      'The synthesized payload is prepared for transmission. AutoPost exchanges a cryptographically secured Page Access Token with Meta endpoints, restricted exclusively to the pages_manage_posts and pages_read_engagement permissions.',
    specs: [
      { label: 'API Endpoint', val: 'https://graph.facebook.com/v20.0/me/feed' },
      { label: 'Scope Authorization', val: 'pages_manage_posts' },
      { label: 'Transport Security', val: 'HTTPS TLS 1.3' },
    ],
    icon: Key,
    accentColor: 'text-indigo-500',
  },
  {
    step: '03',
    title: 'Direct Dispatch & Volatile Memory Flush',
    actor: 'Personal Facebook Page',
    description:
      'The post is published live to Muhammad Hassaan Khan’s official Facebook Page. Once Meta returns an HTTP 200 with the new Post ID, the runtime process terminates immediately and all memory is wiped from RAM. Zero database persistence.',
    specs: [
      { label: 'Target Feed', val: 'Personal Page (Muhammad Hassaan Khan)' },
      { label: 'Disk Writes', val: '0 Bytes' },
      { label: 'Visitor Data Stored', val: 'None' },
    ],
    icon: ShieldCheck,
    accentColor: 'text-emerald-500',
  },
];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full">
      {/* Stage Selector Ribbon */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {STAGES.map((stage, idx) => {
          const isActive = idx === activeStep;
          const Icon = stage.icon;

          return (
            <button
              key={stage.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`relative flex flex-col text-left p-5 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? 'border-accent bg-accent/[0.04] dark:bg-accent/[0.08] shadow-md scale-[1.01]'
                  : 'border-black/[0.06] dark:border-white/[0.08] bg-white/60 dark:bg-[#11141f]/60 hover:border-black/20 dark:hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-xs font-bold text-accent">STAGE {stage.step}</span>
                <Icon className={`size-4 ${stage.accentColor}`} />
              </div>
              <h4 className="mt-3 text-base font-bold text-foreground">{stage.title}</h4>
              <span className="mt-1 text-xs text-muted-foreground">{stage.actor}</span>

              {/* Active baseline highlight indicator */}
              {isActive && (
                <motion.div
                  layoutId="timeline-active-border"
                  className="absolute inset-x-0 bottom-0 h-1 bg-accent rounded-b-2xl"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Expanded Active Stage Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/80 dark:bg-[#11141f]/80 backdrop-blur-xl p-6 sm:p-8 shadow-card-stacked"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted-foreground mb-3">
                <span>Phase {STAGES[activeStep].step} of 03</span>
                <span>•</span>
                <span className="text-foreground font-semibold">{STAGES[activeStep].actor}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {STAGES[activeStep].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {STAGES[activeStep].description}
              </p>
            </div>

            {/* Spec Matrix */}
            <div className="w-full lg:w-80 shrink-0 flex flex-col gap-2 font-mono text-xs">
              {STAGES[activeStep].specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.015] dark:bg-white/[0.02] px-4 py-2.5"
                >
                  <span className="text-muted-foreground">{spec.label}:</span>
                  <span className="text-foreground font-semibold">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
