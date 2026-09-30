"use client";

import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { cascade, cascadeItem } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";
import { HeroNetworkPattern } from "./HeroNetworkPattern";

export function Hero() {
  const { dictionary } = useDictionary();
  const { hero } = dictionary;

  return (
    <section className="container-site relative overflow-hidden pb-20 pt-16 md:pt-24">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10%] inset-y-[-15%] text-sand/40 blur-[6px]"
        animate={{ x: [0, 18, -12, 0], y: [0, -10, 8, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeroNetworkPattern />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-canvas)_0%,var(--color-canvas)_35%,transparent_75%)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-olive/[0.16] blur-[120px]"
        animate={{ scale: [1, 1.08, 0.98, 1], opacity: [0.7, 1, 0.85, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative mx-auto flex max-w-4xl flex-col items-center gap-7 text-center"
        variants={cascade()}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={cascadeItem}>
          <SectionLabel center>{hero.eyebrow}</SectionLabel>
        </motion.div>

        <motion.h1
          variants={cascadeItem}
          className="text-[44px] font-semibold leading-[1.03] tracking-[-0.025em] text-text sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[96px]"
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
