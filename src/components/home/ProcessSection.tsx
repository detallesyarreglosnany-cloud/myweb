"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { fadeUp } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ProcessStep } from "@/content/types";

function Step({
  step,
  index,
  total,
  progress,
}: {
  step: ProcessStep;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const lit = useTransform(progress, [start, start + 0.12], [0, 1]);

  return (
    <li className="relative flex gap-5 md:flex-col md:gap-6">
      <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-line-strong bg-base text-sm font-semibold text-text-soft">
        <motion.span
          aria-hidden="true"
          style={{ opacity: lit }}
          className="absolute inset-0 rounded-full border border-sand bg-olive-panel"
        />
        <span className="relative">{String(index + 1).padStart(2, "0")}</span>
      </span>
      <div className="flex flex-col gap-2 pb-10 md:pb-0">
        <h3 className="text-xl font-medium text-text">{step.title}</h3>
        <p className="max-w-xs text-[15px] leading-relaxed text-text-soft">{step.description}</p>
      </div>
    </li>
  );
}

export function ProcessSection() {
  const { dictionary } = useDictionary();
  const { processSection } = dictionary;
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });

  return (
    <section className="container-site py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-3"
      >
        <SectionLabel>{processSection.eyebrow}</SectionLabel>
        <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[40px]">
          {processSection.title}
        </h2>
      </motion.div>

      <ol ref={ref} className="relative mt-12 grid grid-cols-1 md:grid-cols-3 md:gap-8">
        <span
          aria-hidden="true"
          className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-line-strong md:left-6 md:right-[calc(33%-1.5rem)] md:h-px md:w-auto"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: scrollYProgress }}
          className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px origin-top bg-sand md:hidden"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="absolute left-6 right-[calc(33%-1.5rem)] top-6 hidden h-px origin-left bg-sand md:block"
        />
        {processSection.steps.map((step, index) => (
          <Step
            key={step.title}
            step={step}
            index={index}
            total={processSection.steps.length}
            progress={scrollYProgress}
          />
        ))}
      </ol>
    </section>
  );
}
