"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { easeOut, fadeUp } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "./ServiceCard";
import { ServiceFilters, type CatalogFilter } from "./ServiceFilters";
import type { Service } from "@/content/types";

/** Intercala cada servicio destacado con una fila de tres, para dar ritmo al bento. */
function arrange(services: Service[]): Service[] {
  const featured = services.filter((service) => service.featured);
  const regular = services.filter((service) => !service.featured);
  const result: Service[] = [];
  featured.forEach((service, i) => {
    result.push(service, ...regular.slice(i * 3, i * 3 + 3));
  });
  return [...result, ...regular.slice(featured.length * 3)];
}

export function ServiceCatalog() {
  const { dictionary } = useDictionary();
  const { solutions, services, siteSettings, hero } = dictionary;
  const [filter, setFilter] = useState<CatalogFilter>("all");

  const visible =
    filter === "all"
      ? arrange(services)
      : services.filter((service) => service.category === filter);

  return (
    <section id="soluciones" className="container-site scroll-mt-24 py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex max-w-2xl flex-col gap-3"
      >
        <SectionLabel>{solutions.eyebrow}</SectionLabel>
        <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[44px]">
          {solutions.title}
        </h2>
        <p className="text-[17px] leading-[1.6] text-text-soft">{solutions.intro}</p>
      </motion.div>

      <div className="mt-8">
        <ServiceFilters
          categories={solutions.categories}
          active={filter}
          allLabel={solutions.allFilterLabel}
          onChange={setFilter}
        />
      </div>

      <LayoutGroup>
        <motion.ul
          layout
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((service, index) => {
              const wide = filter === "all" && Boolean(service.featured);
              return (
                <motion.li
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.5, ease: easeOut, delay: (index % 3) * 0.08 }}
                  className={wide ? "md:col-span-2 lg:col-span-3" : ""}
                >
                  <ServiceCard service={service} wide={wide} />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[12px] border border-line bg-olive-panel p-6 md:flex-row md:items-center md:p-8"
      >
        <div className="flex max-w-xl flex-col gap-2">
          <h3 className="text-xl font-semibold text-text md:text-2xl">
            {solutions.customCta.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-text-soft">
            {solutions.customCta.support}
          </p>
        </div>
        <Button href={buildWhatsappLink(siteSettings.whatsappNumber, hero.secondaryCta.whatsappMessage)}>
          {solutions.customCta.label}
        </Button>
      </motion.div>
    </section>
  );
}
