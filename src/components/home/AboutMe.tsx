"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { cascade, cascadeItem, fadeUp } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { serviceHref } from "@/lib/catalog";

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
} as const;

export function AboutMe() {
  const { dictionary, locale } = useDictionary();
  const { about } = dictionary;

  return (
    <section id="sobre-mi" className="container-site scroll-mt-24 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* Retrato y respaldo */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-line">
              <Image
                src="/daniela-sobre-mi.jpg"
                alt={about.photoAlt}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 460px, 100vw"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4 right-4 flex flex-col rounded-[12px] border border-line-strong bg-base/90 px-4 py-3">
              <span className="text-[15px] font-semibold text-text">Daniela Silva</span>
              <span className="text-[13px] text-text-soft">{about.role}</span>
            </figcaption>
          </motion.figure>

          <motion.dl
            variants={cascade(0.08)}
            {...reveal}
            className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-line bg-line"
          >
            {about.highlights.map((item) => (
              <motion.div key={item.label} variants={cascadeItem} className="flex flex-col-reverse gap-1 bg-canvas px-3 py-4 md:px-4">
                <dt className="text-[11px] leading-snug text-text-soft">{item.label}</dt>
                <dd className="text-lg font-semibold text-text md:text-xl">
                  <AnimatedCounter value={item.value} />
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        {/* Relato */}
        <div className="flex flex-col gap-10">
          <motion.div variants={fadeUp} {...reveal} className="flex flex-col gap-4">
            <SectionLabel>{about.eyebrow}</SectionLabel>
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-text md:text-[46px]">
              {about.titleLead} <span className="text-sand">{about.titleAccent}</span>
            </h2>
          </motion.div>

          <motion.div variants={cascade(0.1)} {...reveal} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div variants={cascadeItem} className="flex flex-col gap-2">
              <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-soft">{about.problemLabel}</span>
              <p className="text-[16px] leading-[1.65] text-text-soft">{about.problemText}</p>
            </motion.div>
            <motion.div variants={cascadeItem} className="flex flex-col gap-2">
              <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-sand">{about.solutionLabel}</span>
              <p className="text-[16px] leading-[1.65] text-text">{about.solutionText}</p>
            </motion.div>
          </motion.div>

          <motion.ul variants={cascade(0.06)} {...reveal} className="flex flex-col border-t border-line">
            {about.outcomes.map((outcome, i) => (
              <motion.li
                key={outcome}
                variants={cascadeItem}
                className="flex items-baseline gap-4 border-b border-line py-3.5 text-[17px] text-text"
              >
                <span className="w-6 text-xs tabular-nums text-sand">{String(i + 1).padStart(2, "0")}</span>
                {outcome}
              </motion.li>
            ))}
          </motion.ul>

          <motion.blockquote
            variants={fadeUp}
            {...reveal}
            className="border-l-2 border-sand py-1 pl-6 text-[22px] font-medium leading-[1.35] tracking-[-0.01em] text-text md:text-[28px]"
          >
            {about.closingLine}
          </motion.blockquote>

          <motion.div variants={cascade(0.08)} {...reveal} className="flex flex-col gap-4 rounded-[18px] border border-line bg-olive-panel p-6 md:p-8">
            <motion.div variants={cascadeItem}>
              <SectionLabel>{about.experienceEyebrow}</SectionLabel>
            </motion.div>
            <motion.p variants={cascadeItem} className="text-[19px] leading-[1.5] text-text">
              {about.experienceIntro}
            </motion.p>
            <motion.p variants={cascadeItem} className="text-[16px] leading-[1.65] text-text-soft">
              {about.experienceYears}
            </motion.p>
            <motion.p variants={cascadeItem} className="text-[16px] leading-[1.65] text-text-soft">
              {about.experienceProcess}
            </motion.p>
            <motion.div variants={cascadeItem}>
              <Button href={serviceHref(locale, "saas-white-label")} variant="ghost">
                {about.cleaningAngelsCta}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={cascade(0.08)} {...reveal} className="flex flex-col gap-4">
            <motion.p variants={cascadeItem} className="text-[15px] font-medium text-text-soft">
              {about.perspectivesIntro}
            </motion.p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.perspectives.map((perspective) => (
                <motion.div
                  key={perspective.label}
                  variants={cascadeItem}
                  className="rounded-[14px] border border-line-strong bg-canvas px-5 py-4"
                >
                  <span className="text-sm font-semibold text-sand">{perspective.label}</span>
                  <p className="mt-1 text-[15px] leading-[1.5] text-text-soft">{perspective.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} {...reveal} className="flex flex-col items-start gap-5 border-t border-line pt-8">
            <h3 className="max-w-xl text-[26px] font-semibold leading-[1.2] tracking-[-0.02em] text-text md:text-[34px]">
              {about.closingTitleLead} <span className="text-sand">{about.closingTitleAccent}</span>
            </h3>
            <Button href="#contacto">{about.closingCta}</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
