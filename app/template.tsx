'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.35,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
