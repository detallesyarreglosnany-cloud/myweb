"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

/**
 * Muestra siempre el valor real (también sin JavaScript y en el HTML del servidor).
 * Solo cuenta desde cero justo antes de entrar en pantalla, así nunca queda en "0+".
 */
export function AnimatedCounter({ value }: { value: string }) {
  const match = value.match(/^\d+/);
  const target = match ? parseInt(match[0], 10) : null;
  const suffix = match ? value.slice(match[0].length) : "";

  const ref = useRef<HTMLSpanElement>(null);
  // Se activa un poco antes de ser visible, para que el salto a cero no se vea.
  const isInView = useInView(ref, { once: true, margin: "120px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(target ?? 0);

  useEffect(() => {
    if (target === null || !isInView || shouldReduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.4,
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
