"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

export function AnimatedCounter({ value }: { value: string }) {
  const match = value.match(/^\d+/);
  const target = match ? parseInt(match[0], 10) : null;
  const suffix = match ? value.slice(match[0].length) : "";

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || target === null) return;
    const controls = animate(0, target, {
      duration: shouldReduceMotion ? 0 : 1.4,
      ease: easeOut,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, target, shouldReduceMotion]);

  if (target === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
