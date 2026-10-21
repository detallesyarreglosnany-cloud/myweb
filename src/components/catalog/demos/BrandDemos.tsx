"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import { appear, Bar, DemoRoot, fillX, rise, type DemoProps } from "./primitives";

export function BrandDemo({ active, copy }: DemoProps) {
  const swatches = ["bg-olive-panel", "bg-sand", "bg-nude"];
  return (
    <DemoRoot active={active}>
      <div className="grid h-full grid-cols-[1fr_1fr] gap-[3cqw] p-[3cqw]">
        <div className="flex flex-col items-center justify-center gap-[3cqw] rounded-[2cqw] border border-line bg-base">
          <svg viewBox="0 0 100 100" className="size-[22cqw]" aria-hidden="true">
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="var(--color-sand)"
              strokeWidth="3"
              variants={{
                start: { pathLength: 0 },
                end: { pathLength: 1, transition: { delay: 0.1, duration: 1, ease: easeOut } },
              }}
            />
            <motion.path
              d="M36 62V38h12a12 12 0 0 1 0 24H36"
              fill="none"
              stroke="var(--color-text)"
              strokeWidth="3"
              strokeLinecap="round"
              variants={{
                start: { pathLength: 0 },
                end: { pathLength: 1, transition: { delay: 0.6, duration: 0.8, ease: easeOut } },
              }}
            />
          </svg>
          <div className="flex gap-[1.6cqw]">
            {swatches.map((swatch, i) => (
              <motion.span
                key={swatch}
                variants={rise(1.1 + i * 0.12)}
                className={`size-[5cqw] rounded-full border border-line-strong ${swatch}`}
              />
            ))}
          </div>
        </div>
        <motion.div
          variants={rise(1.6, 8)}
          className="flex flex-col gap-[1.6cqw] rounded-[2cqw] border border-line-strong bg-olive-panel p-[2.6cqw]"
        >
          <span className="text-[2cqw] text-sand">{copy.brand.template}</span>
          <span className="flex-1 rounded-[1.2cqw] bg-base/60" />
          <span className="h-[2.2cqw] w-[70%] rounded-full bg-text/80" />
          <Bar className="w-[50%]" />
        </motion.div>
      </div>
    </DemoRoot>
  );
}

export function ContentDemo({ active, copy }: DemoProps) {
  return (
    <DemoRoot active={active}>
      <div className="grid h-full grid-cols-[1.2fr_1fr] gap-[3cqw] p-[3cqw]">
        <div className="grid grid-cols-3 gap-[1.2cqw]">
          {Array.from({ length: 9 }, (_, i) => (
            <span key={i} className="relative overflow-hidden rounded-[1cqw] border border-line bg-raised">
              <motion.span
                variants={appear(0.15 + i * 0.12)}
                className={`absolute inset-0 ${i % 3 === 0 ? "bg-olive-panel" : i % 3 === 1 ? "bg-nude/50" : "bg-sand/40"}`}
              />
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-[1.6cqw] rounded-[2cqw] border border-line bg-base p-[2.4cqw]">
          <span className="text-[2.2cqw] font-medium text-text">{copy.content.calendar}</span>
          <div className="grid grid-cols-7 gap-[1cqw]">
            {Array.from({ length: 21 }, (_, i) => (
              <span key={i} className="relative flex aspect-square items-center justify-center rounded-[0.6cqw] bg-raised">
                {i % 3 === 0 && (
                  <motion.span variants={appear(1.3 + i * 0.03)} className="size-[1.2cqw] rounded-full bg-sand" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </DemoRoot>
  );
}

export function RoadmapDemo({ active, copy }: DemoProps) {
  const milestones = copy.roadmap.milestones;
  return (
    <DemoRoot active={active}>
      <div className="flex h-full flex-col justify-center gap-[4cqw] px-[5cqw]">
        <div className="relative">
          <span className="absolute inset-x-0 top-[2cqw] h-[0.4cqw] rounded-full bg-line-strong" />
          <motion.span
            variants={fillX(0.2, 1.8)}
            className="absolute inset-x-0 top-[2cqw] h-[0.4cqw] origin-left rounded-full bg-sand"
          />
          <div className="relative flex justify-between">
            {milestones.map((milestone, i) => (
              <div key={milestone} className="flex flex-col items-center gap-[1.6cqw]">
                <span className="relative flex size-[4.4cqw] items-center justify-center rounded-full border border-line-strong bg-base">
                  <motion.span
                    variants={appear(0.4 + i * 0.45)}
                    className="absolute inset-[0.8cqw] rounded-full bg-sand"
                  />
                </span>
                <span className="text-[2.2cqw] text-text-soft">{milestone}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DemoRoot>
  );
}

export function AuditDemo({ active, copy }: DemoProps) {
  const problems = copy.audit.problems;
  const marks = [
    { top: "18%", left: "62%" },
    { top: "48%", left: "24%" },
    { top: "74%", left: "70%" },
  ];
  return (
    <DemoRoot active={active}>
      <div className="grid h-full grid-cols-[1.2fr_1fr] gap-[3cqw] p-[3cqw]">
        <div className="relative flex flex-col gap-[1.6cqw] overflow-hidden rounded-[2cqw] border border-line bg-base p-[2.4cqw]">
          <span className="h-[8cqw] rounded-[1cqw] bg-raised" />
          <Bar className="w-[80%]" />
          <Bar className="w-[60%]" />
          <span className="h-[6cqw] rounded-[1cqw] bg-raised" />
          <Bar className="w-[70%]" />
          <motion.span
            aria-hidden="true"
            variants={{
              start: { y: "0%", opacity: 0 },
              end: {
                y: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
                transition: { delay: 0.2, duration: 1.4, ease: "linear", times: [0, 0.1, 0.9, 1] },
              },
            }}
            className="pointer-events-none absolute inset-0"
          >
            <span className="block h-[0.4cqw] bg-sand shadow-[0_0_12px_rgba(205,186,156,0.6)]" />
          </motion.span>
          {marks.map((mark, i) => (
            <motion.span
              key={i}
              variants={rise(0.6 + i * 0.4)}
              style={mark}
              className="absolute flex size-[4cqw] items-center justify-center rounded-full bg-nude text-[2cqw] font-semibold text-[var(--color-base)]"
            >
              {i + 1}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-[1.6cqw]">
          {problems.map((problem, i) => (
            <motion.span
              key={problem}
              variants={rise(0.8 + i * 0.4)}
              className="flex items-center gap-[1.2cqw] rounded-[1.2cqw] border border-line-strong bg-raised px-[2cqw] py-[1.4cqw] text-[2.1cqw] text-text"
            >
              <span className="flex size-[3cqw] shrink-0 items-center justify-center rounded-full bg-nude text-[1.7cqw] font-semibold text-[var(--color-base)]">
                {i + 1}
              </span>
              {problem}
            </motion.span>
          ))}
        </div>
      </div>
    </DemoRoot>
  );
}
