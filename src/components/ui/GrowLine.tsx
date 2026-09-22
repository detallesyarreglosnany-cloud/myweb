"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

export function GrowLine({ className = "" }: { className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block h-px bg-sand origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easeOut }}
    />
  );
}
