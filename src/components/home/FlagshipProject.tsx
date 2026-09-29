"use client";

import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { fadeUp, cascade, cascadeItem } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function FlagshipProject() {
  const { dictionary } = useDictionary();
  const { flagshipProject } = dictionary;

  return (
    <section id="proyectos" className="container-site scroll-mt-24 py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="overflow-hidden rounded-[12px] border border-line bg-olive-panel px-6 py-10 md:px-12 md:py-14"
      >
        <SectionLabel>{flagshipProject.eyebrow}</SectionLabel>

        <h2 className="mt-4 max-w-2xl text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-text md:text-[36px]">
          {flagshipProject.title}
        </h2>

        <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-text-soft">
          {flagshipProject.description}
        </p>

        <motion.div
          variants={cascade(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-line-strong bg-line-strong sm:grid-cols-4"
        >
          {flagshipProject.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cascadeItem}
              className="flex flex-col gap-1 bg-canvas px-5 py-6"
            >
              <span className="text-[28px] font-semibold tracking-[-0.02em] text-sand">
                {stat.value}
              </span>
              <span className="text-xs text-text-soft">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <Button href={flagshipProject.linkHref}>
            {flagshipProject.linkLabel}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
