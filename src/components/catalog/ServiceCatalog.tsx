"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { groupByCategory } from "@/lib/catalog";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { easeOut, fadeUp } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import type { CatalogCategory, Service } from "@/content/types";
import { CategoryIcon } from "./CategoryIcon";
import { CompactCard, LeadCard } from "./ServiceCard";
import { ServiceFilters, type CatalogFilter } from "./ServiceFilters";
import { QuickView } from "./QuickView";

type Explore = (service: Service, trigger: HTMLElement) => void;

/** Un capítulo por categoría: encabezado editorial fijo y sus soluciones con jerarquía. */
function Chapter({
  index,
  category,
  services,
  onExplore,
}: {
  index: number;
  category: CatalogCategory;
  services: Service[];
  onExplore: Explore;
}) {
  const { dictionary } = useDictionary();
  const { solutions } = dictionary;
  const lead = services.find((service) => service.featured) ?? services[0];
  const rest = services.filter((service) => service !== lead);

  return (
    <section
      aria-labelledby={`chapter-${category.id}`}
      className="grid grid-cols-1 gap-8 border-t border-line pt-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2.25fr)] lg:gap-12"
    >
      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-3 self-start lg:sticky lg:top-28"
      >
        <span aria-hidden="true" className="text-[56px] font-semibold leading-none tracking-[-0.04em] text-line-strong md:text-[72px]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 id={`chapter-${category.id}`} className="flex items-center gap-2 text-xl font-semibold text-text">
          <CategoryIcon id={category.id} size={18} />
          {category.label}
        </h3>
        <p className="max-w-xs text-[15px] leading-relaxed text-text-soft">{category.description}</p>
        <span className="text-xs uppercase tracking-[0.08em] text-sand">
          {solutions.countLabel.replace("{count}", String(services.length))}
        </span>
      </motion.header>

      <div className="flex flex-col gap-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <LeadCard service={lead} onExplore={onExplore} flip={index % 2 === 1} />
        </motion.div>
        {rest.length > 0 && (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {rest.map((service, i) => (
              <motion.li
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: easeOut, delay: (i % 2) * 0.1 }}
                className={rest.length % 2 === 1 && i === rest.length - 1 ? "sm:col-span-2" : ""}
              >
                <CompactCard
                  service={service}
                  onExplore={onExplore}
                  wide={rest.length % 2 === 1 && i === rest.length - 1}
                />
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function ServiceCatalog() {
  const { dictionary } = useDictionary();
  const { solutions, services, siteSettings, hero } = dictionary;
  const [filter, setFilter] = useState<CatalogFilter>("all");
  const [open, setOpen] = useState<Service | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const groups = groupByCategory(solutions.categories, services);
  const visible = filter === "all" ? groups : groups.filter((group) => group.category.id === filter);

  const explore = useCallback<Explore>((service, element) => {
    trigger.current = element;
    setOpen(service);
  }, []);
  const close = useCallback(() => {
    setOpen(null);
    trigger.current?.focus();
  }, []);

  const changeFilter = (next: CatalogFilter) => {
    setFilter(next);
    const top = listRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) listRef.current?.scrollIntoView({ block: "start" });
  };

  return (
    <section id="soluciones" className="container-site scroll-mt-24 py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end"
      >
        <div className="flex flex-col gap-3">
          <SectionLabel>{solutions.eyebrow}</SectionLabel>
          <h2 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-text md:text-[52px]">
            {solutions.title}
          </h2>
        </div>
        <div className="flex flex-col gap-2 lg:pb-2">
          <p className="text-[17px] leading-[1.6] text-text-soft">{solutions.intro}</p>
          <p className="text-[13px] text-text-soft">{solutions.demoNote}</p>
        </div>
      </motion.div>

      <div ref={listRef} className="mt-10 scroll-mt-24">
        <ServiceFilters
          categories={solutions.categories}
          active={filter}
          allLabel={solutions.allFilterLabel}
          onChange={changeFilter}
        />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="mt-10 flex flex-col gap-16 md:gap-20"
        >
          {visible.map((group) => (
            <Chapter
              key={group.category.id}
              index={groups.indexOf(group)}
              category={group.category}
              services={group.services}
              onExplore={explore}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-16 flex flex-col items-start justify-between gap-5 rounded-[18px] border border-sand/40 bg-olive-panel p-6 md:flex-row md:items-center md:p-10"
      >
        <div className="flex max-w-xl flex-col gap-2">
          <h3 className="text-2xl font-semibold text-text md:text-3xl">{solutions.customCta.title}</h3>
          <p className="text-[15px] leading-relaxed text-text-soft">{solutions.customCta.support}</p>
        </div>
        <Button href={buildWhatsappLink(siteSettings.whatsappNumber, hero.secondaryCta.whatsappMessage)}>
          {solutions.customCta.label}
        </Button>
      </motion.div>

      <QuickView service={open} onClose={close} />
    </section>
  );
}
