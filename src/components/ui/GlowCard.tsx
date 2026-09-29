"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export function GlowCard({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`group relative ${className}`}>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[13px] bg-sand/25 blur-md"
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="relative flex h-full flex-col rounded-[12px] border border-sand/40 bg-canvas shadow-[0_0_0_1px_rgba(205,186,156,0.15),0_0_20px_-4px_rgba(205,186,156,0.35)] transition-shadow duration-300 group-hover:border-sand/70 group-hover:shadow-[0_0_0_1px_rgba(205,186,156,0.3),0_0_32px_-2px_rgba(205,186,156,0.55)]"
      >
        {children}
      </div>
    </div>
  );
}
