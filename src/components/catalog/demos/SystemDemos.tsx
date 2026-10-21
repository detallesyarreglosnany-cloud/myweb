"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  appear,
  Bar,
  BrowserChrome,
  CheckDot,
  DemoRoot,
  fillX,
  fillY,
  rise,
  type DemoProps,
} from "./primitives";

export function DashboardDemo({ active, copy }: DemoProps) {
  const t = copy.dashboard;
  const bars = [45, 62, 38, 70, 55, 82, 66];
  return (
    <DemoRoot active={active}>
      <BrowserChrome url="admin.tunegocio.com">
        <div className="grid h-full grid-cols-[0.22fr_1fr] gap-[2.4cqw] p-[3cqw]">
          <motion.div variants={rise(0.05)} className="flex flex-col gap-[1.6cqw] border-r border-line pr-[2cqw]">
            {Array.from({ length: 5 }, (_, i) => (
              <Bar key={i} className={i === 0 ? "w-full bg-sand/70" : "w-[80%]"} />
            ))}
          </motion.div>
          <div className="flex flex-col gap-[2cqw]">
            <div className="grid grid-cols-2 gap-[2cqw]">
              <motion.div variants={rise(0.15)} className="rounded-[1.2cqw] border border-line bg-raised p-[2cqw]">
                <span className="block text-[1.9cqw] text-text-soft">{t.sales}</span>
                <span className="text-[4cqw] font-semibold text-text">
                  $<AnimatedCounter value={active ? "1240" : "0"} />
                </span>
              </motion.div>
              <motion.div variants={rise(0.25)} className="flex flex-col gap-[1.2cqw] rounded-[1.2cqw] border border-line bg-raised p-[2cqw]">
                <span className="text-[1.9cqw] text-text-soft">{t.margin}</span>
                <span className="h-[1.8cqw] overflow-hidden rounded-full bg-base">
                  <motion.span variants={fillX(0.6, 1)} className="block h-full w-[68%] origin-left rounded-full bg-olive" />
                </span>
                <span className="text-[2.2cqw] text-text">68%</span>
              </motion.div>
            </div>
            <motion.div variants={rise(0.35)} className="flex flex-1 items-end gap-[1.4cqw] rounded-[1.2cqw] border border-line bg-raised p-[2cqw]">
              {bars.map((height, i) => (
                <motion.span
                  key={i}
                  variants={fillY(0.5 + i * 0.07)}
                  style={{ height: `${height}%` }}
                  className="flex-1 origin-bottom rounded-t-[0.6cqw] bg-sand/70"
                />
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={rise(1.6, 8)}
          className="absolute bottom-[4cqw] right-[4cqw] flex items-center gap-[1.2cqw] rounded-[1.2cqw] border border-line-strong bg-base px-[2cqw] py-[1cqw] text-[2.1cqw] text-text"
        >
          <span className="flex gap-[0.6cqw]">
            <span className="size-[1.4cqw] rounded-full bg-line-strong" />
            <span className="size-[1.4cqw] rounded-full bg-line-strong" />
            <span className="size-[1.4cqw] rounded-full bg-[#c96b5a]" />
          </span>
          {t.alert}
        </motion.div>
      </BrowserChrome>
    </DemoRoot>
  );
}

export function AppDemo({ active, copy }: DemoProps) {
  const t = copy.app;
  return (
    <DemoRoot active={active}>
      <div className="flex h-full items-center justify-between gap-[2cqw] px-[2cqw]">
        <motion.div
          variants={rise(0.1)}
          className="flex h-[30cqw] w-[24cqw] -rotate-3 flex-col gap-[1.4cqw] rounded-[1.4cqw] bg-nude p-[2.4cqw] text-[var(--color-base)]"
        >
          <span className="text-[2.8cqw] font-semibold">{t.idea}</span>
          <span className="h-[1.2cqw] w-[80%] rounded-full bg-[var(--color-base)]/30" />
          <span className="h-[1.2cqw] w-[60%] rounded-full bg-[var(--color-base)]/30" />
        </motion.div>
        <motion.span variants={appear(0.5)} className="text-[3cqw] text-text-soft">→</motion.span>
        <motion.div variants={rise(0.7)} className="flex gap-[1.2cqw]">
          {[0, 1].map((i) => (
            <span key={i} className="flex h-[30cqw] w-[14cqw] flex-col gap-[1cqw] rounded-[1.6cqw] border border-dashed border-line-strong p-[1.4cqw]">
              <span className="h-[5cqw] rounded-[0.6cqw] border border-dashed border-line-strong" />
              <span className="h-[1cqw] w-[80%] rounded-full bg-line" />
              <span className="h-[1cqw] w-[60%] rounded-full bg-line" />
            </span>
          ))}
        </motion.div>
        <motion.span variants={appear(1.2)} className="text-[3cqw] text-text-soft">→</motion.span>
        <motion.div
          variants={rise(1.4)}
          className="relative flex h-[34cqw] w-[18cqw] flex-col gap-[1.2cqw] rounded-[2.4cqw] border border-line-strong bg-base p-[1.6cqw]"
        >
          <span className="h-[7cqw] rounded-[1cqw] bg-olive-panel" />
          <Bar className="w-[80%]" />
          <Bar className="w-[60%]" />
          <span className="mt-auto rounded-full bg-sand py-[0.8cqw]" />
          <motion.span
            variants={rise(1.9)}
            className="absolute -top-[2.4cqw] left-1/2 flex -translate-x-1/2 items-center gap-[0.8cqw] whitespace-nowrap rounded-full border border-line-strong bg-raised px-[1.6cqw] py-[0.6cqw] text-[1.9cqw] text-text"
          >
            <CheckDot />
            {t.installed}
          </motion.span>
        </motion.div>
      </div>
    </DemoRoot>
  );
}

export function SaasDemo({ active, copy }: DemoProps) {
  const t = copy.saas;
  const tints = ["bg-olive", "bg-nude", "bg-sand"];
  return (
    <DemoRoot active={active}>
      <div className="relative h-full">
        {t.tenants.map((tenant, i) => (
          <motion.div
            key={tenant}
            variants={rise(0.15 + i * 0.25, 10)}
            style={{ left: `${4 + i * 9}%`, top: `${6 + i * 10}%`, zIndex: i }}
            className="absolute flex h-[62%] w-[62%] flex-col overflow-hidden rounded-[1.8cqw] border border-line-strong bg-base"
          >
            <span className="flex items-center gap-[1.2cqw] border-b border-line px-[2cqw] py-[1.4cqw]">
              <span className={`size-[2.4cqw] rounded-[0.6cqw] ${tints[i]}`} />
              <span className="text-[2.2cqw] font-medium text-text">{tenant}</span>
            </span>
            <span className="flex flex-1 flex-col gap-[1.2cqw] p-[2cqw]">
              <Bar className="w-full" />
              <Bar className="w-[75%]" />
              <Bar className="w-[55%]" />
            </span>
          </motion.div>
        ))}
        <motion.div
          variants={rise(1.1, 8)}
          className="absolute bottom-[4%] right-[3%] z-10 flex w-[34%] flex-col gap-[1.2cqw] rounded-[1.6cqw] border border-sand/50 bg-raised p-[2cqw]"
        >
          <span className="text-[2cqw] font-medium text-sand">{t.admin}</span>
          {t.tenants.map((tenant, i) => (
            <span key={tenant} className="flex items-center gap-[1cqw] text-[1.8cqw] text-text-soft">
              <span className={`size-[1.4cqw] rounded-full ${tints[i]}`} />
              {tenant}
            </span>
          ))}
        </motion.div>
      </div>
    </DemoRoot>
  );
}

export function RevenueDemo({ active, copy }: DemoProps) {
  const steps = copy.revenue.steps;
  return (
    <DemoRoot active={active}>
      <div className="relative flex h-full flex-col justify-center px-[5cqw]">
        <div className="relative flex items-center justify-between">
          <span className="absolute inset-x-[4cqw] top-1/2 h-px -translate-y-1/2 bg-line-strong" />
          <motion.span
            variants={fillX(0.3, 1.6)}
            className="absolute inset-x-[4cqw] top-1/2 h-px origin-left -translate-y-1/2 bg-sand"
          />
          {steps.map((step, i) => (
            <div key={step} className="relative flex flex-col items-center gap-[1.6cqw]">
              <span className="relative flex size-[9cqw] items-center justify-center rounded-full border border-line-strong bg-base">
                <motion.span
                  variants={appear(0.4 + i * 0.4)}
                  className="absolute inset-[0.8cqw] rounded-full bg-sand/20 ring-1 ring-sand"
                />
                <span className="relative text-[2.6cqw] font-semibold text-text">{i + 1}</span>
              </span>
              <span className="text-[2.2cqw] text-text-soft">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </DemoRoot>
  );
}
