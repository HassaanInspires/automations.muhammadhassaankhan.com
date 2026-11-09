'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Calendar,
  Share2,
  Cpu,
  Lock,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  ShieldCheck,
  Workflow,
  ArrowRight,
  RefreshCw,
  KeyRound,
  FileCode2,
} from 'lucide-react';

export function TelemetryDeck() {
  const [activeTab, setActiveTab] = React.useState<'flow' | 'logs' | 'security'>('flow');
  const [selectedNode, setSelectedNode] = React.useState<number>(0);
  const [copied, setCopied] = React.useState(false);

  const copyTelemetry = () => {
    const payload = JSON.stringify(
      {
        session_id: 'FB-AUTO-2026-PROD',
        engine: 'DeepSeek-V3',
        meta_api_version: 'v20.0',
        oauth_scopes: ['pages_manage_posts', 'pages_read_engagement'],
        data_persistence: 'NONE_EPHEMERAL_RAM_ONLY',
        latency_ms: 42,
        status: 'VERIFIED_ACTIVE',
      },
      null,
      2
    );
    navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const PIPELINE_NODES = [
    {
      id: 0,
      title: 'Cron Scheduler',
      subtitle: 'Trigger Engine',
      type: 'Ingestion',
      details: 'Evaluates UTC cron rule (09:00 UTC daily). Spawns isolated ephemeral worker execution in memory.',
    },
    {
      id: 1,
      title: 'DeepSeek-V3',
      subtitle: 'Content Synthesis',
      type: 'LLM Worker',
      details: 'Generates structured technical briefing. Applies temperature clamp (0.7) and editorial filters.',
    },
    {
      id: 2,
      title: 'Guardrail Filter',
      subtitle: 'OAuth Token Handshake',
      type: 'Security',
      details: 'Validates Meta Graph API Page Access Token with HMAC-SHA256 signature verification.',
    },
    {
      id: 3,
      title: 'Meta Graph API',
      subtitle: 'v20.0 Endpoint Dispatch',
      type: 'Publication',
      details: 'Direct HTTPS TLS 1.3 POST to https://graph.facebook.com/v20.0/me/feed. Zero external database writes.',
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Deck Header: Title, Status, and Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.06] dark:border-white/[0.06] pb-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Bot className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold tracking-tight text-foreground">
                Post Orchestration Engine
              </h3>
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active v20.0
              </span>
            </div>
            <p className="text-xs text-muted-foreground">DeepSeek-V3 × Meta Graph API Worker</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="inline-flex rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.04] p-1">
          <button
            type="button"
            onClick={() => setActiveTab('flow')}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
              activeTab === 'flow'
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Workflow className="size-3" />
            <span>Pipeline Flow</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('logs')}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
              activeTab === 'logs'
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Terminal className="size-3" />
            <span>Live Logs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('security')}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
              activeTab === 'security'
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <ShieldCheck className="size-3" />
            <span>Security Matrix</span>
          </button>
        </div>
      </div>

      {/* Dynamic Tab Panes */}
      <AnimatePresence mode="wait">
        {activeTab === 'flow' && (
          <motion.div
            key="flow"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* 4 Connected Node Pills */}
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-4">
              {PIPELINE_NODES.map((node, i) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedNode(node.id)}
                    className={`relative flex flex-col text-left rounded-2xl border p-3.5 transition-all ${
                      isSelected
                        ? 'border-accent bg-accent/[0.04] dark:bg-accent/[0.08] shadow-sm'
                        : 'border-black/[0.06] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.02] hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-semibold text-accent">
                        0{i + 1} // {node.type}
                      </span>
                      {isSelected && <span className="size-1.5 rounded-full bg-accent" />}
                    </div>
                    <span className="mt-2 text-xs font-bold text-foreground">{node.title}</span>
                    <span className="text-[11px] text-muted-foreground">{node.subtitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Detailed Inspector */}
            <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-4 text-xs">
              <div className="flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.04] pb-2">
                <span className="font-semibold text-foreground">
                  Node Inspector: {PIPELINE_NODES[selectedNode].title}
                </span>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                  ● Verified Zero-Retention Handshake
                </span>
              </div>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {PIPELINE_NODES[selectedNode].details}
              </p>
            </div>
          </motion.div>
        )}

        {activeTab === 'logs' && (
          <motion.div
            key="logs"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-[#0c1017] p-4 font-mono text-xs text-white/90 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-emerald-300">Live Sandbox Telemetry Stream</span>
                </div>
                <button
                  type="button"
                  onClick={copyTelemetry}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/80 transition-colors hover:bg-white/10"
                >
                  {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                  <span>{copied ? 'Copied' : 'Copy State'}</span>
                </button>
              </div>

              <div className="mt-3 space-y-1.5 text-[11px] leading-relaxed">
                <p className="text-emerald-400">
                  [09:00:01 UTC] [OAUTH-2.0] Page Access Token verified via Graph API v20.0
                </p>
                <p className="text-blue-300">
                  [09:00:02 UTC] [DEEPSEEK-V3] Briefing synthesized (428 tokens, latency 184ms)
                </p>
                <p className="text-zinc-400">
                  [09:00:02 UTC] [SECURITY] Sanitization complete: Zero external personal identifiers
                </p>
                <p className="text-emerald-400">
                  [09:00:03 UTC] [META-POST] Dispatched successfully: Feed ID #108291827419
                </p>
                <p className="text-zinc-500">
                  [09:00:04 UTC] [CLEANUP] Ephemeral memory flushed. 0 bytes retained on disk.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'security' && (
          <motion.div
            key="security"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-accent">
                <KeyRound className="size-4" />
                <span className="text-xs font-bold text-foreground">OAuth 2.0 Scope</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                pages_manage_posts
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground leading-normal">
                Minimally scoped to personal page publishing only. No user profile access.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-accent">
                <Lock className="size-4" />
                <span className="text-xs font-bold text-foreground">Data Retention</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                100% Ephemeral RAM
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground leading-normal">
                Strict zero-persistence architecture. No external database or tracker.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-accent">
                <ShieldCheck className="size-4" />
                <span className="text-xs font-bold text-foreground">Meta Compliance</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Platform Terms v20.0
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground leading-normal">
                Full adherence to Meta developer policies and user data deletion callbacks.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Summary Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] dark:border-white/[0.06] pt-4 font-mono text-[11px] text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Worker Latency: <strong className="text-foreground font-semibold">42ms</strong>
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Calendar className="size-3" />
            Next Schedule: 09:00 UTC
          </span>
        </div>
        <span className="text-accent font-medium">Session ID: #FB-AUTO-2026</span>
      </div>
    </div>
  );
}
