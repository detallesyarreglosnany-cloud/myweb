"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

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
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.12 }}
    >
      {children}
    </motion.span>
  );
}
