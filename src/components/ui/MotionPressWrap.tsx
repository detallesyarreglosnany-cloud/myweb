"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";

export function MotionPressWrap({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ duration: 0.25, ease: easeOut }}
    >
      {children}
    </motion.span>
  );
}
