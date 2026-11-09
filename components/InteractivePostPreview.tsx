'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Share2,
  Globe,
  CheckCircle2,
  Bot,
  Zap,
  ArrowRight,
  Shield,
  RefreshCw,
  Cpu,
  Check,
  Lock,
  Terminal,
} from 'lucide-react';
import { SpatialTiltCard } from '@/components/SpatialTiltCard';

interface SamplePost {
  id: string;
  topic: string;
  prompt: string;
  timestamp: string;
  content: string;
  tags: string[];
}

const SAMPLE_POSTS: SamplePost[] = [
  {
    id: 'ai-architecture',
    topic: 'System Architecture',
    prompt: 'Synthesize the architectural benefits of zero-persistence ephemeral automation workers.',
    timestamp: 'Just now',
    content:
      'Engineered a deterministic, zero-storage automation pipeline connecting DeepSeek-V3 AI intelligence to the Meta Graph API v20.0. By keeping all execution strictly in volatile RAM and discarding state immediately after dispatch, personal data retention drops to absolute zero. Architecture built for speed, privacy, and full compliance.',
    tags: ['#SystemArchitecture', '#DeepSeekAI', '#MetaGraphAPI', '#Automation'],
  },
  {
    id: 'graph-api',
    topic: 'Meta API v20.0',
    prompt: 'Explain OAuth 2.0 page token rotation and permission scoping for pages_manage_posts.',
    timestamp: '2 hours ago',
    content:
      'Meta Graph API v20.0 enforces strict least-privilege scoping. Our autonomous worker authenticates exclusively with pages_manage_posts and pages_read_engagement—zero user profile scraping, zero friend-list access. Transparent, audited, and strictly confined to personal Page publishing.',
    tags: ['#WebDev', '#MetaAPI', '#APIv20', '#CloudEngineering'],
  },
  {
    id: 'deepseek-v3',
    topic: 'AI Content Synthesis',
    prompt: 'Summarize how DeepSeek-V3 handles technical briefing formulation with prompt temperature clamping.',
    timestamp: 'Yesterday at 09:00 UTC',
    content:
      'Utilizing DeepSeek-V3 with strict temperature clamping (0.7) produces high-signal, editorial-grade technical briefings ready for scheduled Facebook Page publication. Every post is pre-moderated, structured with clean Markdown spacing, and formatted for maximum technical clarity.',
    tags: ['#ArtificialIntelligence', '#DeepSeekV3', '#MachineLearning'],
  },
];

const PIPELINE_STEPS = [
  { id: 'synthesizing', label: '01. Clamped AI Synthesis', detail: 'DeepSeek-V3 (0.7 temp)' },
  { id: 'handshake', label: '02. OAuth 2.0 Scope Handshake', detail: 'pages_manage_posts' },
  { id: 'dispatched', label: '03. Meta Graph v20.0 Dispatch', detail: 'HTTP 200 OK & RAM Flushed' },
];

export function InteractivePostPreview() {
  const [selectedPost, setSelectedPost] = React.useState<SamplePost>(SAMPLE_POSTS[0]);
  const [dispatchStatus, setDispatchStatus] = React.useState<'idle' | 'synthesizing' | 'handshake' | 'dispatched'>('idle');

  const handleSelect = (post: SamplePost) => {
    setSelectedPost(post);
    setDispatchStatus('idle');
  };

  const runSimulation = () => {
    if (dispatchStatus !== 'idle') return;
    setDispatchStatus('synthesizing');

    setTimeout(() => {
      setDispatchStatus('handshake');
      setTimeout(() => {
        setDispatchStatus('dispatched');
        setTimeout(() => {
          setDispatchStatus('idle');
        }, 5000);
      }, 1100);
    }, 1000);
  };

  return (
    <div id="simulator" className="w-full scroll-mt-24">
      <SpatialTiltCard glareColor="rgba(59, 130, 246, 0.08)">
        <div className="w-full">
          {/* Top Header & Topic Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.04] px-3 py-1 font-mono text-[11px] font-semibold text-foreground">
                <Sparkles className="size-3 text-accent" />
                <span>Interactive Centerpiece</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Live Dispatch Simulator
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Select an architectural topic to simulate live prompt synthesis, Meta Graph handshake, and volatile RAM flush.
              </p>
            </div>

            {/* Topic Pills */}
            <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
              {SAMPLE_POSTS.map((post) => {
                const isCurrent = post.id === selectedPost.id;
                return (
                  <button
                    key={post.id}
                    type="button"
                    onClick={() => handleSelect(post)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      isCurrent
                        ? 'bg-foreground text-background shadow-sm scale-[1.02]'
                        : 'border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {post.topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-time Visual Pipeline Tracker Ribbon */}
          <div className="mt-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.02] p-4">
            <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5 font-semibold text-foreground">
                <Terminal className="size-3 text-accent" />
                Pipeline Execution Telemetry
              </span>
              <span className="text-[10px]">Status: {dispatchStatus.toUpperCase()}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PIPELINE_STEPS.map((step, idx) => {
                const isStepActive =
                  (step.id === 'synthesizing' && (dispatchStatus === 'synthesizing' || dispatchStatus === 'handshake' || dispatchStatus === 'dispatched')) ||
                  (step.id === 'handshake' && (dispatchStatus === 'handshake' || dispatchStatus === 'dispatched')) ||
                  (step.id === 'dispatched' && dispatchStatus === 'dispatched');

                const isCurrentlyExecuting = dispatchStatus === step.id;

                return (
                  <div
                    key={step.id}
                    className={`rounded-xl border p-2.5 transition-all duration-300 ${
                      isStepActive
                        ? 'border-emerald-500/30 bg-emerald-500/[0.05] text-foreground'
                        : 'border-black/[0.04] dark:border-white/[0.04] bg-transparent text-muted-foreground/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold">{step.label}</span>
                      {isCurrentlyExecuting ? (
                        <RefreshCw className="size-3 animate-spin text-accent" />
                      ) : isStepActive ? (
                        <Check className="size-3 text-emerald-500" />
                      ) : (
                        <span className="size-1.5 rounded-full bg-muted-foreground/30" />
                      )}
                    </div>
                    <span className="mt-1 text-[10px] text-muted-foreground block truncate">
                      {step.detail}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Split Grid: Prompt & Dispatch Controller (Left) + Facebook Post Preview (Right) */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Prompt & Dispatch Controller */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-5 font-mono text-xs">
                <div className="flex items-center justify-between text-muted-foreground border-b border-black/[0.04] dark:border-white/[0.04] pb-2.5">
                  <span className="flex items-center gap-1.5 text-accent font-semibold text-[11px]">
                    <Bot className="size-3.5" />
                    DeepSeek Prompt Instruction
                  </span>
                  <span className="text-[10px]">Temp: 0.70</span>
                </div>
                <p className="mt-3 text-foreground/90 font-sans text-xs leading-relaxed italic">
                  &quot;{selectedPost.prompt}&quot;
                </p>
              </div>

              {/* Trigger Dispatch Button */}
              <button
                type="button"
                onClick={runSimulation}
                disabled={dispatchStatus !== 'idle'}
                className={`flex items-center justify-center gap-2.5 rounded-2xl p-4 text-xs font-bold transition-all ${
                  dispatchStatus === 'idle'
                    ? 'bg-foreground text-background shadow-md hover:opacity-90 active:scale-[0.98]'
                    : dispatchStatus === 'dispatched'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-black/[0.06] dark:bg-white/[0.08] text-foreground'
                }`}
              >
                {dispatchStatus === 'idle' && (
                  <>
                    <Zap className="size-3.5 fill-current" />
                    <span>Trigger Live Simulation Handshake</span>
                  </>
                )}
                {dispatchStatus === 'synthesizing' && (
                  <>
                    <RefreshCw className="size-3.5 animate-spin" />
                    <span>Synthesizing DeepSeek Briefing...</span>
                  </>
                )}
                {dispatchStatus === 'handshake' && (
                  <>
                    <RefreshCw className="size-3.5 animate-spin text-accent" />
                    <span>Authorizing Meta Graph v20.0 HTTPS...</span>
                  </>
                )}
                {dispatchStatus === 'dispatched' && (
                  <>
                    <Check className="size-3.5" />
                    <span>Dispatched Live (HTTP 200) • RAM Purged</span>
                  </>
                )}
              </button>

              {/* Security & Scoping Parameters */}
              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.015] dark:bg-white/[0.015] px-3.5 py-2">
                  <span className="text-muted-foreground">Scope Authorization:</span>
                  <span className="text-foreground font-semibold">pages_manage_posts</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.015] dark:bg-white/[0.015] px-3.5 py-2">
                  <span className="text-muted-foreground">Execution Lifecycle:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Ephemeral RAM (0 Bytes Persisted)
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-black/[0.04] dark:border-white/[0.04] bg-black/[0.015] dark:bg-white/[0.015] px-3.5 py-2">
                  <span className="text-muted-foreground">Target Destination:</span>
                  <span className="text-foreground font-semibold">Muhammad Hassaan Khan Page</span>
                </div>
              </div>
            </div>

            {/* Right Column: Realistic Clean Facebook Post Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-[#141824] shadow-xl overflow-hidden transition-all">
                {/* Facebook Post Header */}
                <div className="p-4 sm:p-5 flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    {/* Author Avatar */}
                    <div className="relative flex size-10 items-center justify-center rounded-full bg-foreground text-background font-bold text-xs shadow-md">
                      <span>HK</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-foreground">
                          Muhammad Hassaan Khan
                        </span>
                        <CheckCircle2 className="size-3.5 fill-blue-500 text-white dark:text-[#141824]" />
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <span>{selectedPost.timestamp}</span>
                        <span>•</span>
                        <Globe className="size-3 opacity-75" />
                        <span>•</span>
                        <span className="font-mono text-[10px] text-accent">AutoPost v20.0</span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400">
                    <span>Verified Feed Post</span>
                  </div>
                </div>

                {/* Post Text Content with Fluid AnimatePresence */}
                <div className="p-5 sm:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedPost.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <p className="text-sm sm:text-[15px] leading-relaxed text-foreground/90 whitespace-pre-line font-sans">
                        {selectedPost.content}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {selectedPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Clean Verification Bar */}
                <div className="px-5 py-3 flex items-center justify-between text-xs text-muted-foreground border-t border-black/[0.04] dark:border-white/[0.04] bg-black/[0.01] dark:bg-white/[0.01] font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1.5">
                    <Shield className="size-3 text-accent" />
                    <span>Zero Stored User Data</span>
                  </span>
                  <span>TLS 1.3 Transport Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SpatialTiltCard>
    </div>
  );
}
