"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { easeOut, fadeUp, cascade, cascadeItem } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { SELECT_SOLUTION_EVENT } from "@/lib/solution-select";
import { ServiceMockup } from "./ServiceMockup";
import { TabIcon } from "./tabIcons";
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

function RepeatIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M17 4v3.5h-3.5M7 20v-3.5h3.5"
        stroke="currentColor"
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
  const [replayCount, setReplayCount] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);

  const servicesBySlug = useMemo(() => {
    const map = new Map<string, Service>();
    services.forEach((service) => map.set(service.slug, service));
    return map;
  }, [services]);

  useEffect(() => {
    function onSelect(event: Event) {
      const slug = (event as CustomEvent<string>).detail;
      const tab = solutions.tabs.find((item) => item.serviceSlug === slug);
      if (tab) {
        setActiveTabId(tab.id);
        setDetailOpen(false);
      }
    }
    window.addEventListener(SELECT_SOLUTION_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SOLUTION_EVENT, onSelect);
  }, [solutions.tabs]);

  const activeTab =
    solutions.tabs.find((tab) => tab.id === activeTabId) ?? solutions.tabs[0];
  const activeService = servicesBySlug.get(activeTab.serviceSlug);

  function selectTab(id: string) {
    setActiveTabId(id);
    setDetailOpen(false);
  }

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

      <motion.div
        role="tablist"
        aria-orientation="horizontal"
        variants={cascade(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
      >
        {solutions.tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          const service = servicesBySlug.get(tab.serviceSlug);
          return (
            <motion.button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => selectTab(tab.id)}
              variants={cascadeItem}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className={`flex flex-col items-start gap-2 rounded-[12px] border px-4 py-4 text-left transition-colors duration-200 ${
                isActive
                  ? "border-sand bg-olive-panel"
                  : "border-line bg-canvas hover:border-line-strong"
              }`}
            >
              <span
                className={
                  isActive ? "text-sand" : "text-text-soft"
                }
              >
                <TabIcon id={tab.id} />
              </span>
              <span
                className={`text-[15px] font-medium leading-tight ${
                  isActive ? "text-text" : "text-text-soft"
                }`}
              >
                {tab.tabLabel}
              </span>
              {service && (
                <span className="text-xs text-text-soft">{service.fromPrice}</span>
              )}
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        {activeService && (
          <motion.div
            key={activeService.slug}
            initial={{ opacity: 0, filter: "blur(2px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(2px)" }}
            transition={{ duration: 0.2, ease: easeOut }}
            className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]"
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
                <button
                  type="button"
                  onClick={() => setDetailOpen((open) => !open)}
                  aria-expanded={detailOpen}
                  className="text-sm text-text-soft underline decoration-line-strong underline-offset-4 hover:text-sand"
                >
                  {solutions.viewFullService}
                </button>
              </div>

              <AnimatePresence initial={false}>
                {detailOpen && (
                  <motion.div
                    key="detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-3">
                      {activeService.levels.map((level) => (
                        <div key={level.name} className="flex flex-col gap-3 bg-raised p-5">
                          <span className="text-sm font-medium text-text-soft">
                            {level.name}
                          </span>
                          <span className="text-[28px] font-semibold tracking-[-0.02em] text-text">
                            {level.price}
                          </span>
                          <ul className="flex flex-col gap-2">
                            {level.includes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-text-soft"
                              >
                                <span className="mt-0.5 shrink-0">
                                  <CheckIcon />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="overflow-hidden rounded-[12px] border border-line bg-raised">
              <div className="flex items-center justify-between border-b border-line-strong px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                </div>
                <button
                  type="button"
                  onClick={() => setReplayCount((count) => count + 1)}
                  className="flex items-center gap-1.5 text-xs text-text-soft hover:text-sand"
                >
                  <RepeatIcon />
                  {solutions.repeatAnimation}
                </button>
              </div>
              <ServiceMockup
                key={`${activeTab.id}-${replayCount}`}
                tabId={activeTab.id}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="sr-only" aria-live="polite">
        {locale === "es"
          ? "Cada panel muestra una animación de ejemplo del servicio."
          : "Each panel shows a sample animation of the service."}
      </p>
    </section>
  );
}
