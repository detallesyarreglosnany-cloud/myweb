"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { cascade, cascadeItem, easeOut } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutMe() {
  const { dictionary } = useDictionary();
  const { about } = dictionary;

  return (
    <section id="sobre-mi" className="container-site scroll-mt-24 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative mx-auto w-full max-w-[320px] lg:mx-0"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[12px] border border-line">
            <Image
              src="/daniela-sobre-mi.jpg"
              alt={about.photoAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 320px, 360px"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-[12px] border border-line-strong bg-raised px-4 py-3">
            <div className="text-2xl font-semibold text-sand">
              {about.highlights[0]?.value}
            </div>
            <div className="max-w-[140px] text-[11px] uppercase tracking-[0.05em] text-text-soft">
              {about.highlights[0]?.label}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cascade()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={cascadeItem}>
            <SectionLabel>{about.eyebrow}</SectionLabel>
          </motion.div>

          <motion.h2
            variants={cascadeItem}
            className="max-w-xl text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-text md:text-[40px]"
          >
            {about.title}
          </motion.h2>

          <motion.div variants={cascadeItem} className="flex flex-col gap-4">
            {about.body.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-xl text-[17px] leading-[1.6] text-text-soft"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={cascadeItem}
            className="grid grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-3"
          >
            {about.highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-text">
                  {item.value}
                </span>
                <span className="text-xs leading-snug text-text-soft">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
