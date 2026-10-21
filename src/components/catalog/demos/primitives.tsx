"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import type { DemoCopy } from "@/content/types";

export interface DemoProps {
  active: boolean;
  copy: DemoCopy;
}

export function rise(delay: number, y = 4) {
  return {
    start: { opacity: 0, y },
    end: { opacity: 1, y: 0, transition: { delay, duration: 0.45, ease: easeOut } },
  };
}

export function appear(delay: number) {
  return {
    start: { opacity: 0 },
    end: { opacity: 1, transition: { delay, duration: 0.4, ease: easeOut } },
  };
}

export function fillX(delay: number, duration = 0.8) {
  return {
    start: { scaleX: 0 },
    end: { scaleX: 1, transition: { delay, duration, ease: easeOut } },
  };
}

export function fillY(delay: number, duration = 0.7) {
  return {
    start: { scaleY: 0 },
    end: { scaleY: 1, transition: { delay, duration, ease: easeOut } },
  };
}

export function press(delay: number) {
  return {
    start: { scale: 1 },
    end: { scale: [1, 0.92, 1], transition: { delay, duration: 0.35, ease: easeOut } },
  };
}

/** Raíz de cada demo: propaga "start" o "end" a todos sus hijos. */
export function DemoRoot({
  active,
  children,
  className = "",
}: {
  active: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="start"
      animate={active ? "end" : "start"}
      className={`relative h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function BrowserChrome({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[2cqw] border border-line bg-base">
      <div className="flex items-center gap-[1cqw] border-b border-line px-[2.5cqw] py-[1.6cqw]">
        <span className="size-[1.3cqw] rounded-full bg-line-strong" />
        <span className="size-[1.3cqw] rounded-full bg-line-strong" />
        <span className="size-[1.3cqw] rounded-full bg-line-strong" />
        <span className="ml-[2cqw] flex-1 truncate rounded-full bg-raised px-[2cqw] py-[0.5cqw] text-[2cqw] text-text-soft">
          {url}
        </span>
      </div>
      <div className="relative flex-1">{children}</div>
    </div>
  );
}

export function Bar({ className = "" }: { className?: string }) {
  return <span className={`block h-[1.3cqw] rounded-full bg-line-strong ${className}`} />;
}

export function CheckDot() {
  return (
    <svg viewBox="0 0 16 16" className="size-[2.4cqw] shrink-0" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="var(--color-olive)" />
      <path
        d="M4.5 8.2 7 10.6l4.6-5"
        stroke="var(--color-base)"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
