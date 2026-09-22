"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { easeOut } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { SELECT_SOLUTION_EVENT } from "@/lib/solution-select";
import type { Service } from "@/content/types";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

export function SolutionsTabs() {
  const { dictionary, locale } = useDictionary();
  const { solutions, services } = dictionary;
  const [activeTabId, setActiveTabId] = useState(solutions.tabs[0].id);

  const servicesBySlug = useMemo(() => {
    const map = new Map<string, Service>();
    services.forEach((service) => map.set(service.slug, service));
    return map;
  }, [services]);

  useEffect(() => {
    function onSelect(event: Event) {
      const slug = (event as CustomEvent<string>).detail;
      const tab = solutions.tabs.find((item) => item.serviceSlug === slug);
      if (tab) setActiveTabId(tab.id);
    }
    window.addEventListener(SELECT_SOLUTION_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SOLUTION_EVENT, onSelect);
  }, [solutions.tabs]);

  const activeTab = solutions.tabs.find((tab) => tab.id === activeTabId) ?? solutions.tabs[0];
  const activeService = servicesBySlug.get(activeTab.serviceSlug);

  return (
    <section id="soluciones" className="container-site scroll-mt-24 py-16 md:py-24">
      <div className="flex flex-col gap-3">
        <SectionLabel>{solutions.eyebrow}</SectionLabel>
        <h2 className="max-w-xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[40px]">
          {solutions.title}
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        <div
          role="tablist"
          aria-orientation="vertical"
          className="flex gap-1 overflow-x-auto md:flex-col md:overflow-visible"
        >
          {solutions.tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTabId(tab.id)}
                className={`relative whitespace-nowrap rounded-lg px-4 py-3 text-left text-[15px] transition-colors duration-200 ${
                  isActive
                    ? "bg-raised text-text"
                    : "text-text-soft hover:text-text"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="solutions-tab-bar"
                    className="absolute inset-y-0 left-0 w-[2px] bg-sand"
                    transition={{ duration: 0.25, ease: easeOut }}
                  />
                )}
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.slug}
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(2px)" }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]"
            >
              <div className="flex flex-col gap-5">
                <h3 className="text-[28px] font-medium leading-[1.25] text-text">
                  {activeService.headline}
                </h3>
                <p className="max-w-md text-[17px] leading-[1.6] text-text-soft">
                  {activeService.support}
                </p>
                <ul className="flex flex-col gap-2">
                  {activeService.benefits.slice(0, 4).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-[15px] text-text">
                      <span className="mt-1 shrink-0">
                        <CheckIcon />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <span className="text-[15px] text-text-soft">
                  {activeService.fromPrice}
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button href="#contacto">{activeService.ctaLabel}</Button>
                  <a
                    href={`#servicio-${activeService.slug}`}
                    className="text-sm text-text-soft underline decoration-line-strong underline-offset-4 hover:text-sand"
                  >
                    {solutions.viewFullService}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[12px] border border-line bg-raised">
                <div className="flex items-center gap-1.5 border-b border-line-strong px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                </div>
                <div className="flex min-h-[240px] items-center justify-center px-6 py-12 text-center">
                  <p className="max-w-xs text-sm text-text-soft">
                    {locale === "es"
                      ? "Animación temática pendiente para esta etapa."
                      : "Themed animation pending for this stage."}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
