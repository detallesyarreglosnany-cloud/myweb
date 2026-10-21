"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { categorySurface, fillTemplate, serviceHref } from "@/lib/catalog";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { easeDrawer } from "@/lib/motion";
import type { Service } from "@/content/types";
import { CategoryIcon } from "./CategoryIcon";
import { hasLiveDemo, ServiceDemo } from "./ServiceDemo";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
      <path d="M3 8.5 6.5 12 13 4.5" stroke="var(--color-olive)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3 border-t border-line pt-5">
      <h3 className="text-[12px] font-medium uppercase tracking-[0.08em] text-sand">{label}</h3>
      {children}
    </section>
  );
}

/**
 * Panel de exploración de una solución: qué resuelve, cómo funciona, qué incluye,
 * qué se personaliza y cómo pedirla. Lateral en escritorio, hoja inferior en móvil.
 */
export function QuickView({ service, onClose }: { service: Service | null; onClose: () => void }) {
  const { dictionary, locale } = useDictionary();
  const { solutions, serviceDetail, siteSettings } = dictionary;
  const closeRef = useRef<HTMLButtonElement>(null);
  // Solo se abre tras un clic, así que siempre corre en el navegador.
  const fromSide = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;

  useEffect(() => {
    if (!service) return;
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          key="quick-view"
          className="fixed inset-0 z-[60] flex items-end justify-end md:items-stretch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label={solutions.closeLabel}
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 bg-[var(--color-base)]/75"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-view-title"
            initial={fromSide ? { x: "100%" } : { y: "100%" }}
            animate={fromSide ? { x: 0 } : { y: 0 }}
            exit={fromSide ? { x: "100%" } : { y: "100%" }}
            transition={{ duration: 0.45, ease: easeDrawer }}
            className="relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[20px] border border-line-strong bg-base md:max-h-none md:w-[min(560px,100%)] md:rounded-none md:rounded-l-[20px]"
            onKeyDown={(event) => {
              if (event.key !== "Tab") return;
              const focusables = event.currentTarget.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
              );
              const first = focusables[0];
              const last = focusables[focusables.length - 1];
              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
              }
            }}
          >
            <header className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.06em] text-text-soft">
                  <CategoryIcon id={service.category} />
                  {solutions.categories.find((c) => c.id === service.category)?.label}
                </span>
                <h2 id="quick-view-title" className="text-2xl font-semibold tracking-[-0.02em] text-text">
                  {service.name}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-text transition-colors duration-200 hover:border-sand"
              >
                <span className="sr-only">{solutions.closeLabel}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M1 1l12 12M13 1 1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6">
              <p className="text-xl leading-snug text-sand">{service.headline}</p>

              <div className={`${categorySurface[service.category]} rounded-[14px] p-4`}>
                {hasLiveDemo(service) && (
                  <span className="mb-3 inline-flex rounded-full bg-[var(--color-base)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.06em] text-sand">
                    {solutions.tryLabel}
                  </span>
                )}
                <ServiceDemo service={service} interactive />
              </div>

              <Block label={solutions.problemLabel}>
                <p className="text-[15px] leading-relaxed text-text">
                  {service.problem ? service.problem.situation : service.support}
                </p>
                {service.problem && (
                  <p className="text-[15px] leading-relaxed text-text-soft">{service.problem.result}</p>
                )}
              </Block>

              <Block label={solutions.howLabel}>
                <ul className="flex flex-col gap-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-[15px] text-text">
                      <Check />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block label={solutions.includesLabel}>
                <div className="flex flex-col gap-3">
                  {service.levels.map((level) => (
                    <details key={level.name} className="group rounded-[12px] border border-line bg-canvas">
                      <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-3 px-4 [&::-webkit-details-marker]:hidden">
                        <span className="text-[15px] font-medium text-text">{level.name}</span>
                        <span className="flex items-center gap-3">
                          <span className="font-semibold text-sand">{level.price}</span>
                          <span aria-hidden="true" className="text-text-soft transition-transform duration-200 group-open:rotate-45">
                            +
                          </span>
                        </span>
                      </summary>
                      <ul className="flex flex-col gap-1.5 border-t border-line px-4 py-3">
                        {level.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-text-soft">
                            <Check />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </Block>

              <Block label={solutions.optionsLabel}>
                <p className="text-[15px] leading-relaxed text-text-soft">
                  {service.mode === "proposal" ? solutions.customizeProposal : solutions.customizeStandard}
                </p>
              </Block>
            </div>

            <footer className="flex flex-col gap-3 border-t border-line px-6 py-4 sm:flex-row sm:items-center">
              <a
                href={buildWhatsappLink(
                  siteSettings.whatsappNumber,
                  fillTemplate(
                    service.mode === "proposal" ? serviceDetail.whatsappProposal : serviceDetail.whatsappStandard,
                    service,
                  ),
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-sand px-5 text-[15px] font-medium text-[var(--color-base)] transition-colors duration-200 hover:bg-nude"
              >
                {service.mode === "proposal" ? serviceDetail.proposalCtaLabel : service.ctaLabel}
              </a>
              <Link
                href={serviceHref(locale, service.slug)}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-line-strong px-5 text-[15px] text-text transition-colors duration-200 hover:border-sand"
              >
                {solutions.viewSolutionLabel} →
              </Link>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
