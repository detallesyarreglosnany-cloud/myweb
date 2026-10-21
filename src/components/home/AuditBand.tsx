"use client";

import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { fadeUp } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function AuditBand() {
  const { dictionary } = useDictionary();
  const { auditBand, siteSettings } = dictionary;

  return (
    <section id="recursos" className="container-site scroll-mt-24 py-8 md:py-12">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col items-start justify-between gap-6 border-y border-line py-10 md:flex-row md:items-center"
      >
        <div className="flex max-w-xl flex-col gap-3">
          <SectionLabel>{auditBand.eyebrow}</SectionLabel>
          <h2 className="text-2xl font-semibold leading-tight text-text md:text-3xl">
            {auditBand.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-text-soft">{auditBand.support}</p>
        </div>
        <Button href={buildWhatsappLink(siteSettings.whatsappNumber, auditBand.whatsappMessage)}>
          {auditBand.ctaLabel}
        </Button>
      </motion.div>
    </section>
  );
}
