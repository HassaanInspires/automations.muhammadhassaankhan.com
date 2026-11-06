'use client';

import * as React from 'react';

export function ThemeToggle() {
  return (
    <div
      className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] font-mono text-subtle"
      title="Meta Graph API Status"
    >
      <span className="size-1.5 rounded-full bg-lime animate-pulse" />
      <span>v20.0 Online</span>
    </div>
  );
}
