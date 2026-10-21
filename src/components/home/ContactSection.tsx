"use client";

import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { cascade, cascadeItem } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

export function ContactSection() {
  const { dictionary } = useDictionary();
  const { contact, siteSettings, hero } = dictionary;

  return (
    <section id="contacto" className="container-site scroll-mt-24 py-16 md:py-24">
      <motion.div
        variants={cascade(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center gap-6 rounded-[16px] border border-line bg-canvas px-6 py-14 text-center md:py-20"
      >
        <motion.div variants={cascadeItem}>
          <SectionLabel center>{contact.eyebrow}</SectionLabel>
        </motion.div>
        <motion.h2
          variants={cascadeItem}
          className="max-w-2xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[48px]"
        >
          {contact.title}
        </motion.h2>
        <motion.p variants={cascadeItem} className="max-w-lg text-[17px] leading-[1.6] text-text-soft">
          {contact.support}
        </motion.p>
        <motion.div variants={cascadeItem} className="flex flex-col gap-3 sm:flex-row">
          <Button href={buildWhatsappLink(siteSettings.whatsappNumber, siteSettings.whatsappDefaultMessage)}>
            {contact.whatsappLabel}
          </Button>
          <Button href={siteSettings.instagram} variant="ghost">
            {contact.instagramLabel} {siteSettings.instagramHandle}
          </Button>
        </motion.div>
        <motion.div variants={cascadeItem}>
          <Pill>{hero.trustBadge}</Pill>
        </motion.div>
      </motion.div>
    </section>
  );
}
