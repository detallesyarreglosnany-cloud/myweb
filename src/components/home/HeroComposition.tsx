"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { easeOut } from "@/lib/motion";
import type { HeroContent } from "@/content/types";

function Layer({
  depth,
  pointerX,
  pointerY,
  delay,
  className,
  children,
}: {
  depth: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  delay: number;
  className: string;
  children: ReactNode;
}) {
  const x = useTransform(pointerX, (v) => v * depth);
  const y = useTransform(pointerY, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay, ease: easeOut }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="absolute -top-[3.2cqw] left-[2cqw] rounded-full border border-line-strong bg-base px-[1.8cqw] py-[0.5cqw] text-[1.9cqw] font-medium uppercase tracking-[0.06em] text-sand">
      {children}
    </span>
  );
}

function Line({ className = "" }: { className?: string }) {
  return <span className={`block h-[1.1cqw] rounded-full bg-line-strong ${className}`} />;
}

export function HeroComposition({ layers }: { layers: HeroContent["layers"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const pointerY = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const node = ref.current;
    if (!node || reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      rawX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
      rawY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    node.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, rawX, rawY]);

  const paths = [
    "M30 34 C 42 34, 48 50, 58 50",
    "M58 62 C 50 74, 40 74, 30 80",
    "M78 40 C 86 52, 86 62, 80 70",
  ];

  return (
    <div ref={ref} aria-hidden="true" className="@container relative aspect-[5/4] w-full">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {paths.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="var(--color-sand)"
            strokeOpacity="0.55"
            strokeWidth="0.35"
            strokeDasharray="1.2 1"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.9 + i * 0.2, ease: easeOut }}
          />
        ))}
      </svg>

      <Layer depth={6} pointerX={pointerX} pointerY={pointerY} delay={0.2} className="left-0 top-[6%] w-[54%]">
        <div className="relative rounded-[2cqw] border border-line bg-canvas p-[2.4cqw]">
          <Tag>{layers.sales}</Tag>
          <div className="mb-[2cqw] flex gap-[0.9cqw]">
            <span className="size-[1.2cqw] rounded-full bg-line-strong" />
            <span className="size-[1.2cqw] rounded-full bg-line-strong" />
            <span className="size-[1.2cqw] rounded-full bg-line-strong" />
          </div>
          <div className="grid grid-cols-3 gap-[1.4cqw]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-[1cqw] rounded-[1cqw] border border-line bg-raised p-[1.2cqw]">
                <span className="h-[7cqw] rounded-[0.8cqw] bg-olive-panel" />
                <Line className="w-[70%]" />
                <span className="text-[2cqw] text-sand">$24</span>
              </div>
            ))}
          </div>
        </div>
      </Layer>

      <Layer depth={12} pointerX={pointerX} pointerY={pointerY} delay={0.4} className="right-0 top-[18%] w-[44%]">
        <div className="relative rounded-[2cqw] border border-line-strong bg-raised p-[2.4cqw]">
          <Tag>{layers.data}</Tag>
          <span className="block text-[3.6cqw] font-semibold text-text">$1,240</span>
          <div className="mt-[1.6cqw] flex h-[13cqw] items-end gap-[1.1cqw]">
            {[40, 64, 46, 78, 58, 90].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t-[0.5cqw] bg-sand/60" />
            ))}
          </div>
        </div>
      </Layer>

      <Layer depth={9} pointerX={pointerX} pointerY={pointerY} delay={0.6} className="bottom-[4%] left-[4%] w-[46%]">
        <div className="relative flex flex-col gap-[1.4cqw] rounded-[2cqw] border border-line bg-canvas p-[2.4cqw]">
          <Tag>{layers.operations}</Tag>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-[1.4cqw]">
              <span className="flex size-[3cqw] items-center justify-center rounded-full bg-olive/80">
                <svg viewBox="0 0 16 16" className="size-[1.8cqw]">
                  <path d="M4 8.5 7 11l5-6" stroke="var(--color-base)" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <Line className={i === 1 ? "w-[55%]" : "w-[70%]"} />
            </div>
          ))}
        </div>
      </Layer>

      <Layer depth={15} pointerX={pointerX} pointerY={pointerY} delay={0.8} className="bottom-[10%] right-[2%] w-[40%]">
        <div className="relative rounded-[2cqw] border border-sand/50 bg-olive-panel p-[2.4cqw]">
          <Tag>{layers.automation}</Tag>
          <div className="flex items-center justify-between">
            {[0, 1, 2].map((i) => (
              <span key={i} className="flex items-center">
                <span className="flex size-[4.4cqw] items-center justify-center rounded-full border border-sand/60 bg-base">
                  <span className="size-[1.6cqw] rounded-full bg-sand" />
                </span>
                {i < 2 && <span className="mx-[0.6cqw] h-px w-[4cqw] bg-sand/60" />}
              </span>
            ))}
          </div>
        </div>
      </Layer>
    </div>
  );
}
