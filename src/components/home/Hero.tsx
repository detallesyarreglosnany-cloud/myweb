"use client";

import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { cascade, cascadeItem } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";
import { HeroNetworkPattern } from "./HeroNetworkPattern";
import { HeroStage } from "./HeroStage";

export function Hero() {
  const { dictionary } = useDictionary();
  const { hero, siteSettings } = dictionary;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[80%] text-sand/25 blur-[6px] [mask-image:radial-gradient(ellipse_at_50%_20%,black,transparent_70%)]"
      >
        <HeroNetworkPattern />
      </div>

      <div className="container-site relative pb-16 pt-8 md:pb-24 md:pt-12">
        <motion.div variants={cascade(0.08)} initial="hidden" animate="show" className="flex flex-col gap-6">
          <motion.div variants={cascadeItem} className="flex flex-wrap items-center justify-between gap-4">
            <SectionLabel>{hero.eyebrow}</SectionLabel>
            <Pill>{hero.trustBadge}</Pill>
          </motion.div>

          <motion.h1
            variants={cascadeItem}
            className="max-w-[19ch] text-[36px] font-semibold leading-[1.02] tracking-[-0.035em] text-text sm:text-[54px] lg:text-[64px] xl:text-[70px]"
          >
            {hero.headlinePrefix} <span className="text-sand">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.div
            variants={cascadeItem}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <p className="max-w-[520px] text-[17px] leading-[1.6] text-text-soft md:text-lg">{hero.support}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button
                href={buildWhatsappLink(siteSettings.whatsappNumber, hero.secondaryCta.whatsappMessage)}
                variant="ghost"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-10 md:mt-12">
          <HeroStage stage={hero.stage} />
        </div>
      </div>
    </section>
  );
}
