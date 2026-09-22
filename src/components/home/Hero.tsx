"use client";

import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { cascade, cascadeItem } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";

export function Hero() {
  const { dictionary } = useDictionary();
  const { hero } = dictionary;

  return (
    <section className="container-site pb-16 pt-16 md:pt-24">
      <motion.div
        className="flex max-w-2xl flex-col items-start gap-6"
        variants={cascade()}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={cascadeItem}>
          <SectionLabel>{hero.eyebrow}</SectionLabel>
        </motion.div>

        <motion.h1
          variants={cascadeItem}
          className="text-[44px] font-semibold leading-[1.02] tracking-[-0.02em] text-text md:text-[64px] lg:text-[72px]"
        >
          {hero.headlinePrefix}{" "}
          <span className="text-sand">{hero.headlineAccent}</span>
        </motion.h1>

        <motion.p
          variants={cascadeItem}
          className="max-w-[560px] text-[17px] leading-[1.6] text-text-soft md:text-xl"
        >
          {hero.support}
        </motion.p>

        <motion.div
          variants={cascadeItem}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>

        <motion.div variants={cascadeItem}>
          <Pill>{hero.trustBadge}</Pill>
        </motion.div>
      </motion.div>
    </section>
  );
}
