"use client";

import { motion } from "motion/react";
import { appear, CheckDot, DemoRoot, rise, type DemoProps } from "./primitives";

export function AgentDemo({ active, copy }: DemoProps) {
  const t = copy.agent;
  return (
    <DemoRoot active={active}>
      <div className="mx-auto flex h-full w-[78%] flex-col overflow-hidden rounded-[2cqw] border border-line bg-base">
        <div className="flex items-center gap-[1.4cqw] border-b border-line px-[2.6cqw] py-[1.8cqw]">
          <span className="flex size-[4cqw] items-center justify-center rounded-full bg-olive-panel text-[2cqw] text-sand">
            IA
          </span>
          <span className="text-[2.4cqw] font-medium text-text">{t.name}</span>
          <span className="ml-auto size-[1.4cqw] rounded-full bg-olive" />
        </div>
        <div className="flex flex-1 flex-col justify-end gap-[1.8cqw] p-[2.8cqw]">
          <motion.span
            variants={rise(0.2, 6)}
            className="max-w-[75%] self-end rounded-[1.8cqw] rounded-br-[0.4cqw] bg-raised px-[2.4cqw] py-[1.4cqw] text-[2.3cqw] text-text"
          >
            {t.question}
          </motion.span>
          <motion.span
            variants={{
              start: { opacity: 0 },
              end: { opacity: [0, 1, 1, 0], transition: { delay: 0.7, duration: 0.8, times: [0, 0.2, 0.8, 1] } },
            }}
            className="flex gap-[0.8cqw] self-start rounded-[1.8cqw] bg-olive-panel px-[2.2cqw] py-[1.6cqw]"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-[1.2cqw] rounded-full bg-sand/70" />
            ))}
          </motion.span>
          <motion.span
            variants={rise(1.5, 6)}
            className="max-w-[80%] self-start rounded-[1.8cqw] rounded-bl-[0.4cqw] bg-olive-panel px-[2.4cqw] py-[1.4cqw] text-[2.3cqw] text-text"
          >
            {t.answer}
          </motion.span>
        </div>
      </div>
    </DemoRoot>
  );
}

export function AutomationDemo({ active, copy }: DemoProps) {
  const t = copy.automation;
  return (
    <DemoRoot active={active}>
      <div className="flex h-full items-center gap-[1.6cqw] px-[3cqw]">
        <motion.div
          variants={rise(0.1)}
          className="flex shrink-0 flex-col gap-[0.8cqw] rounded-[1.6cqw] border border-sand/60 bg-raised px-[2.4cqw] py-[2cqw]"
        >
          <span className="size-[1.6cqw] rounded-full bg-sand" />
          <span className="text-[2.4cqw] font-medium text-text">{t.trigger}</span>
        </motion.div>
        <div className="flex flex-1 flex-col gap-[1.6cqw]">
          {t.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-[1.4cqw]">
              <motion.span
                variants={{
                  start: { scaleX: 0 },
                  end: { scaleX: 1, transition: { delay: 0.4 + i * 0.35, duration: 0.35 } },
                }}
                className="h-px w-[5cqw] origin-left bg-sand"
              />
              <motion.span
                variants={rise(0.55 + i * 0.35)}
                className="flex flex-1 items-center gap-[1.2cqw] rounded-[1.4cqw] border border-line-strong bg-base px-[2cqw] py-[1.4cqw] text-[2.2cqw] text-text"
              >
                <motion.span variants={appear(0.75 + i * 0.35)}>
                  <CheckDot />
                </motion.span>
                {step}
              </motion.span>
            </div>
          ))}
          <motion.span
            variants={rise(1.8)}
            className="self-end rounded-full bg-sand px-[2.4cqw] py-[0.9cqw] text-[2cqw] font-medium text-[var(--color-base)]"
          >
            {t.done}
          </motion.span>
        </div>
      </div>
    </DemoRoot>
  );
}
