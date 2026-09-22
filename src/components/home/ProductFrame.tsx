"use client";

import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { fadeUp } from "@/lib/motion";

export function ProductFrame() {
  const { dictionary } = useDictionary();
  const { productFrame } = dictionary;

  return (
    <section className="container-site pb-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="overflow-hidden rounded-[12px] border border-line bg-raised"
      >
        <div className="flex items-center gap-1.5 border-b border-line-strong px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
        </div>
        <div className="flex min-h-[280px] flex-col items-center justify-center gap-2 px-6 py-16 text-center md:min-h-[420px]">
          <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-sand">
            {productFrame.eyebrow}
          </span>
          <p className="max-w-md text-lg text-text-soft">
            {productFrame.placeholderNote}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
