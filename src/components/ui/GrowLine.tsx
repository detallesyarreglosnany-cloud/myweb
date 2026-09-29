"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

export function GrowLine({
  className = "",
  origin = "left",
}: {
  className?: string;
  origin?: "left" | "center";
}) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block h-px bg-sand ${origin === "center" ? "origin-center" : "origin-left"} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easeOut }}
    />
  );
}
