"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { fadeUp, easeOut } from "@/lib/motion";

function FloatingChip({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="flex items-center gap-2 rounded-[12px] border border-line bg-raised px-4 py-3 text-sm text-text shadow-none"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function ProductFrame() {
  const { dictionary, locale } = useDictionary();
  const { productFrame } = dictionary;

  return (
    <section className="container-site pb-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="overflow-hidden rounded-[12px] border border-line bg-canvas"
      >
        <div className="flex items-center gap-1.5 border-b border-line-strong px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
        </div>

        <div className="relative flex min-h-[360px] flex-col items-center justify-center gap-3 overflow-hidden px-6 py-20 text-center md:min-h-[520px] md:py-28">
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-olive/[0.12] blur-[100px]"
            style={{ width: 480, height: 480, margin: "auto" }}
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-sand/[0.06] to-transparent"
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          />

          <span className="relative text-[13px] font-medium uppercase tracking-[0.06em] text-sand">
            {productFrame.eyebrow}
          </span>
          <h2 className="relative max-w-xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[48px]">
            {productFrame.title}
          </h2>
          <p className="relative max-w-sm text-sm text-text-soft">
            {productFrame.placeholderNote}
          </p>

          <FloatingChip
            className="absolute left-[8%] top-[22%] hidden sm:block"
            delay={0.2}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-olive" />
            {locale === "es" ? "Cita agendada" : "Booking confirmed"}
          </FloatingChip>

          <FloatingChip
            className="absolute right-[10%] top-[18%] hidden sm:block"
            delay={0.5}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sand" />
            {locale === "es" ? "Pedido por WhatsApp" : "Ordered via WhatsApp"}
          </FloatingChip>

          <FloatingChip
            className="absolute bottom-[16%] left-[14%] hidden md:block"
            delay={0.8}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-nude" />
            {locale === "es" ? "Pago recibido" : "Payment received"}
          </FloatingChip>
        </div>
      </motion.div>
    </section>
  );
}
