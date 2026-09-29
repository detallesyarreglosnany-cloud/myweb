"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { fadeUp, cascade, cascadeItem } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { selectSolutionTab } from "@/lib/solution-select";

export function PainRows() {
  const { dictionary } = useDictionary();
  const { pains } = dictionary;

  return (
    <section className="container-site py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-3"
      >
        <SectionLabel>{pains.eyebrow}</SectionLabel>
        <h2 className="max-w-xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[40px]">
          {pains.title}
        </h2>
      </motion.div>

      <motion.ul
        className="mt-10 flex flex-col"
        variants={cascade(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {pains.items.map((pain) => (
          <motion.li
            key={pain.id}
            variants={cascadeItem}
            className="border-b border-line first:border-t"
          >
            <Link
              href="#soluciones"
              onClick={() => selectSolutionTab(pain.solutionSlug)}
              className="group flex min-h-[72px] items-center justify-between gap-6 py-5 transition-colors duration-150 hover:bg-raised"
            >
              <span className="text-[22px] leading-[1.3] text-text md:text-[28px]">
                <span className="text-nude">&ldquo;</span>
                {pain.quote}
                <span className="text-nude">&rdquo;</span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-2xl text-text-soft transition-transform duration-150 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
