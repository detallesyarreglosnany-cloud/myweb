"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { serviceHref } from "@/lib/catalog";
import { cascade, cascadeItem, easeOut, fadeUp } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

/** Estudio de caso de Cleaning Angels: contexto, problema, solución, flujos y resultados. */
export function CaseStudy() {
  const { dictionary, locale } = useDictionary();
  const { flagshipProject: c } = dictionary;
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "center center"] });
  const reduce = useReducedMotion();
  const factor = useMotionValue(1);
  useEffect(() => factor.set(reduce ? 0 : 1), [reduce, factor]);
  const scale = useTransform([scrollYProgress, factor], ([p, f]: number[]) => 1 - (1 - p) * 0.08 * f);

  const story = [
    { label: c.contextLabel, text: c.context },
    { label: c.problemLabel, text: c.problem },
    { label: c.solutionLabel, text: c.solution },
  ];

  return (
    <section id="proyectos" className="scroll-mt-24 border-y border-line bg-canvas py-16 md:py-24">
      <div className="container-site">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel>{c.eyebrow}</SectionLabel>
            <h2 className="text-[48px] font-semibold leading-[0.95] tracking-[-0.04em] text-text md:text-[88px]">
              {c.title}
            </h2>
            <p className="text-[17px] text-text-soft">{c.location}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={c.linkHref}>{c.linkLabel}</Button>
            <Button href={serviceHref(locale, "saas-white-label")} variant="ghost">
              {c.licenseLabel}
            </Button>
          </div>
        </motion.div>

        <figure ref={frameRef} className="mt-12">
          <motion.div
            style={{ scale }}
            className="overflow-hidden rounded-[16px] border border-line-strong bg-base shadow-[0_40px_80px_-48px_rgba(0,0,0,0.9)]"
          >
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-2 rounded-full bg-line-strong" />
              ))}
            </div>
            <Image
              src="/mockups/case-operacion.jpg"
              alt={c.screenshotAlt}
              width={932}
              height={418}
              className="h-auto w-full"
              sizes="(min-width: 1200px) 1152px, 100vw"
            />
          </motion.div>
          <figcaption className="mt-3 text-[12px] text-text-soft">{c.screenshotCaption}</figcaption>
        </figure>

        <motion.ol
          variants={cascade(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
        >
          {story.map((step, i) => (
            <motion.li key={step.label} variants={cascadeItem} className="flex flex-col gap-3 border-t border-line-strong pt-5">
              <span className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.08em] text-sand">
                <span className="tabular-nums text-text-soft">{String(i + 1).padStart(2, "0")}</span>
                {step.label}
              </span>
              <p className="text-[20px] leading-snug text-text md:text-[22px]">{step.text}</p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-16">
          <h3 className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-soft">{c.flowsLabel}</h3>
          <motion.ol
            variants={cascade(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:gap-0"
          >
            {c.flows.map((flow, i) => (
              <motion.li key={flow} variants={cascadeItem} className="flex items-center md:flex-1 md:last:flex-none">
                <span className="flex min-h-[48px] items-center gap-2.5 rounded-full border border-sand/50 bg-base px-4 text-[15px] text-text">
                  <span className="size-2 rounded-full bg-sand" aria-hidden="true" />
                  {flow}
                </span>
                {i < c.flows.length - 1 && (
                  <motion.span
                    aria-hidden="true"
                    variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.5, ease: easeOut } } }}
                    className="mx-2 hidden h-px flex-1 origin-left bg-sand/50 md:block"
                  />
                )}
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <div className="mt-16">
          <h3 className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-soft">{c.resultsLabel}</h3>
          <motion.dl
            variants={cascade(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[16px] border border-line-strong bg-line-strong lg:grid-cols-4"
          >
            {c.stats.map((stat) => (
              <motion.div key={stat.label} variants={cascadeItem} className="flex flex-col-reverse gap-2 bg-base px-5 py-7 md:px-7 md:py-9">
                <dt className="text-sm text-text-soft">{stat.label}</dt>
                <dd className="text-[40px] font-semibold leading-none tracking-[-0.03em] text-sand md:text-[56px]">{stat.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
