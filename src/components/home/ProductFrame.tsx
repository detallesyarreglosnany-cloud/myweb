"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { fadeUp, easeOut } from "@/lib/motion";

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
        className="flex flex-col items-center gap-3 pb-8 text-center"
      >
        <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-sand">
          {productFrame.eyebrow}
        </span>
        <h2 className="max-w-xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[48px]">
          {productFrame.title}
        </h2>
        <p className="max-w-sm text-sm text-text-soft">
          {productFrame.placeholderNote}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="relative"
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-olive/[0.16] blur-[100px]"
          style={{ width: 480, height: 480, margin: "auto" }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4, ease: easeOut }}
          className="relative overflow-hidden rounded-[12px] border border-line bg-canvas"
        >
          <div className="flex items-center gap-1.5 border-b border-line-strong px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </div>
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/mockups/producto-en-accion.jpg"
              alt={productFrame.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
