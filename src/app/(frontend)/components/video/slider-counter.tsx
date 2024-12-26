// SlideCounter.tsx
'use client';

import { motion } from 'framer-motion';

interface SlideCounterProps {
  current: number;
  total: number;
}

export default function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div className="relative text-4xl font-mono text-white flex items-center gap-2">
      <div className="overflow-hidden h-12">
        <motion.div
          key={current}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="flex flex-col items-end"
        >
          <span>{current}</span>
        </motion.div>
      </div>
      <span className="transform -translate-y-1">/</span>
      <span>{total}</span>
    </div>
  );
}