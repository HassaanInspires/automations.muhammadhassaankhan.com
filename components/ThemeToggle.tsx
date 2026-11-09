'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="size-9 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 opacity-0"
        aria-hidden="true" 
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex size-9 items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white/70 dark:bg-white/[0.06] text-foreground shadow-sm backdrop-blur-md transition-colors hover:border-black/20 dark:hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="size-4 text-accent transition-colors" />
          ) : (
            <Sun className="size-4 text-amber-500 transition-colors" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
