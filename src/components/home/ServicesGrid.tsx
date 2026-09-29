"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { easeOut, fadeUp, cascade, cascadeItem } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { SELECT_SOLUTION_EVENT } from "@/lib/solution-select";
import { TabIcon } from "./tabIcons";
import { AdminPanelMockup } from "./mockups/AdminPanelMockup";
import { SalesDashboardMockup } from "./mockups/SalesDashboardMockup";

const SERVICE_MOCKUPS: Record<string, ComponentType> = {
  "sistema-administrativo": AdminPanelMockup,
  "revenue-autopilot": SalesDashboardMockup,
};

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5 6.5 12 13 4.5"
        stroke="var(--color-olive)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServicesGrid() {
  const { dictionary } = useDictionary();
  const { solutions, services } = dictionary;
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [revealedSlug, setRevealedSlug] = useState<string | null>(null);
  const [highlightSlug, setHighlightSlug] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const categoryLabels = new Map(
    solutions.tabs.map((tab) => [tab.id, tab.tabLabel]),
  );

  useEffect(() => {
    function onSelect(event: Event) {
      const slug = (event as CustomEvent<string>).detail;
      setActiveFilter("all");
      setHighlightSlug(slug);
      window.setTimeout(() => {
        cardRefs.current[slug]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
      window.setTimeout(() => setHighlightSlug(null), 2200);
    }
    window.addEventListener(SELECT_SOLUTION_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SOLUTION_EVENT, onSelect);
  }, []);

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <section id="soluciones" className="container-site scroll-mt-24 py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-3"
      >
        <SectionLabel>{solutions.eyebrow}</SectionLabel>
        <h2 className="max-w-xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[40px]">
          {solutions.title}
        </h2>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`rounded-full border px-4 py-2 text-sm transition-colors duration-150 ${
            activeFilter === "all"
              ? "border-sand bg-olive-panel text-text"
              : "border-line text-text-soft hover:border-line-strong"
          }`}
        >
          {solutions.allFilterLabel}
        </button>
        {solutions.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveFilter(tab.id)}
            className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors duration-150 ${
              activeFilter === tab.id
                ? "border-sand bg-olive-panel text-text"
                : "border-line text-text-soft hover:border-line-strong"
            }`}
          >
            <TabIcon id={tab.id} />
            {tab.tabLabel}
          </button>
        ))}
      </div>

      <motion.div
        key={activeFilter}
        variants={cascade(0.04)}
        initial="hidden"
        animate="show"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredServices.map((service) => {
          const isRevealed = revealedSlug === service.slug;
          const isHighlighted = highlightSlug === service.slug;
          const Mockup = SERVICE_MOCKUPS[service.slug];
          return (
            <motion.div
              key={service.slug}
              variants={cascadeItem}
              ref={(el) => {
                cardRefs.current[service.slug] = el;
              }}
            >
              <GlowCard>
                <motion.div
                  animate={
                    isHighlighted
                      ? { scale: [1, 1.03, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.6, ease: easeOut }}
                  className="flex h-full flex-col gap-4 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-[0.05em] text-text-soft">
                      <TabIcon id={service.category} />
                      {categoryLabels.get(service.category)}
                    </span>
                    {service.badge && (
                      <span className="rounded-full bg-nude px-3 py-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--color-base)]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[13px] font-medium text-sand">
                      {service.name}
                    </span>
                    <h3 className="text-xl font-medium leading-tight text-text">
                      {service.headline}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-soft">
                    {service.support}
                  </p>

                  {Mockup && (
                    <div className="overflow-hidden rounded-[10px]">
                      <Mockup />
                    </div>
                  )}

                  <ul className="flex flex-col gap-2">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-[13px] text-text"
                      >
                        <span className="mt-0.5 shrink-0">
                          <CheckIcon />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        setRevealedSlug(isRevealed ? null : service.slug)
                      }
                      aria-expanded={isRevealed}
                      className="self-start rounded-full border border-line-strong px-4 py-2 text-xs text-text transition-colors hover:border-sand"
                    >
                      {isRevealed ? solutions.hidePriceLabel : solutions.showPriceLabel}
                    </button>

                    <AnimatePresence initial={false}>
                      {isRevealed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: easeOut }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 border-t border-line pt-4">
                            {service.levels.length > 1 ? (
                              service.levels.map((level) => (
                                <div
                                  key={level.name}
                                  className="flex items-center justify-between gap-3 text-sm"
                                >
                                  <span className="text-text-soft">{level.name}</span>
                                  <span className="font-medium text-text">
                                    {level.price}
                                  </span>
                                </div>
                              ))
                            ) : (
                              <span className="text-[28px] font-semibold tracking-[-0.02em] text-sand">
                                {service.fromPrice}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button href="#contacto" className="w-full justify-center">
                      {service.ctaLabel}
                    </Button>
                  </div>
                </motion.div>
              </GlowCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
