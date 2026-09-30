"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { cascade, cascadeItem, fadeUp, easeOut } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { selectSolutionTab } from "@/lib/solution-select";

function FlowArrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <motion.svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        aria-hidden="true"
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
      >
        <path
          d="M1 12h34m0 0-8-8m8 8-8 8"
          stroke="var(--color-sand)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}

export function AboutMe() {
  const { dictionary } = useDictionary();
  const { about } = dictionary;

  return (
    <section id="sobre-mi" className="container-site scroll-mt-24 py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-4"
      >
        <SectionLabel>{about.eyebrow}</SectionLabel>
        <h2 className="max-w-2xl text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-text md:text-[44px]">
          {about.titleLead}{" "}
          <span className="text-sand">{about.titleAccent}</span>
        </h2>
      </motion.div>

      {/* Flujo problema -> solución */}
      <div className="mt-12 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="flex flex-col gap-3 rounded-[12px] border border-line bg-raised p-6 md:p-8"
        >
          <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-text-soft">
            {about.problemLabel}
          </span>
          <p className="text-[17px] leading-[1.6] text-text-soft">
            {about.problemText}
          </p>
        </motion.div>

        <FlowArrow />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
          className="flex flex-col gap-4 rounded-[12px] border border-sand/40 bg-canvas p-6 md:p-8"
        >
          <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-sand">
            {about.solutionLabel}
          </span>
          <p className="text-[17px] leading-[1.6] text-text">
            {about.solutionText}
          </p>

          <motion.div
            variants={cascade(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {about.outcomes.map((outcome) => (
              <motion.span
                key={outcome}
                variants={cascadeItem}
                className="rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-text"
              >
                {outcome}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="mt-8 max-w-2xl border-l-2 border-sand py-1 pl-5 text-[20px] font-medium leading-[1.4] text-text md:text-[24px]"
      >
        {about.closingLine}
      </motion.p>

      {/* Panel de experiencia */}
      <motion.div
        variants={cascade(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 overflow-hidden rounded-[12px] border border-line bg-olive-panel p-6 md:p-10"
      >
        <motion.div variants={cascadeItem}>
          <SectionLabel>{about.experienceEyebrow}</SectionLabel>
        </motion.div>

        <motion.div
          variants={cascadeItem}
          className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:gap-8"
        >
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-line-strong">
            <Image
              src="/daniela-sobre-mi.jpg"
              alt={about.photoAlt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p className="max-w-xl text-[17px] leading-[1.6] text-text">
                {about.experienceIntro}
              </p>
              <Button
                href="#soluciones"
                variant="ghost"
                className="self-start"
                onClick={() => selectSolutionTab("saas-white-label")}
              >
                {about.cleaningAngelsCta}
              </Button>
            </div>
            <p className="max-w-xl text-[17px] leading-[1.6] text-text-soft">
              {about.experienceYears}
            </p>
            <p className="max-w-xl text-[17px] leading-[1.6] text-text-soft">
              {about.experienceProcess}
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={cascadeItem}
          className="mt-8 text-[15px] font-medium text-text-soft"
        >
          {about.perspectivesIntro}
        </motion.p>

        <motion.div
          variants={cascadeItem}
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {about.perspectives.map((perspective) => (
            <div
              key={perspective.label}
              className="rounded-[12px] border border-line-strong bg-canvas px-5 py-4"
            >
              <span className="text-sm font-semibold text-sand">
                {perspective.label}
              </span>
              <p className="mt-1 text-[15px] leading-[1.5] text-text-soft">
                {perspective.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={cascadeItem}
          className="mt-10 grid grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-3"
        >
          {about.highlights.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-text">
                <AnimatedCounter value={item.value} />
              </span>
              <span className="text-xs leading-snug text-text-soft">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Cierre / CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 flex flex-col items-start gap-5"
      >
        <h3 className="max-w-xl text-[26px] font-semibold leading-[1.2] tracking-[-0.02em] text-text md:text-[34px]">
          {about.closingTitleLead}{" "}
          <span className="text-sand">{about.closingTitleAccent}</span>
        </h3>
        <Button href="#contacto">{about.closingCta}</Button>
      </motion.div>
    </section>
  );
}
