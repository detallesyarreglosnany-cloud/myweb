"use client";

import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { cascade, cascadeItem } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";
import { HeroNetworkPattern } from "./HeroNetworkPattern";
import { HeroComposition } from "./HeroComposition";

export function Hero() {
  const { dictionary } = useDictionary();
  const { hero, siteSettings } = dictionary;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-sand/30 blur-[6px] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]"
      >
        <HeroNetworkPattern />
      </div>

      <div className="container-site relative grid grid-cols-1 items-center gap-12 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={cascade(0.08)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={cascadeItem}>
            <SectionLabel>{hero.eyebrow}</SectionLabel>
          </motion.div>

          <motion.h1
            variants={cascadeItem}
            className="text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-text sm:text-[52px] lg:text-[58px] xl:text-[66px]"
          >
            {hero.headlinePrefix}{" "}
            <span className="text-sand">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={cascadeItem}
            className="max-w-[540px] text-[17px] leading-[1.6] text-text-soft md:text-lg"
          >
            {hero.support}
          </motion.p>

          <motion.div variants={cascadeItem} className="flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button
              href={buildWhatsappLink(siteSettings.whatsappNumber, hero.secondaryCta.whatsappMessage)}
              variant="ghost"
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div variants={cascadeItem}>
            <Pill>{hero.trustBadge}</Pill>
          </motion.div>
        </motion.div>

        <HeroComposition layers={hero.layers} />
      </div>
    </section>
  );
}
