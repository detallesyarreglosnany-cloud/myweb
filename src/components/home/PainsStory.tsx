"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { categorySurface, serviceHref } from "@/lib/catalog";
import { easeOut, fadeUp } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceDemo } from "@/components/catalog/ServiceDemo";
import type { Pain } from "@/content/types";

/** Relato de una situación: lo que pasa, lo que cuesta, cómo se resuelve y qué cambia. */
function Story({ pain }: { pain: Pain }) {
  const { dictionary, locale } = useDictionary();
  const { pains, services } = dictionary;
  const service = services.find((item) => item.slug === pain.solutionSlug);
  if (!service) return null;

  const steps = [
    { label: pains.situationLabel, body: <p className="text-[19px] leading-snug text-text">&ldquo;{pain.quote}&rdquo;</p> },
    service.problem && {
      label: pains.costLabel,
      body: <p className="text-[15px] leading-relaxed text-text-soft">{service.problem.cost}</p>,
    },
    {
      label: pains.solutionLabel,
      body: (
        <div className="flex flex-col gap-3">
          <p className="text-[15px] text-text">
            <span className="font-semibold text-sand">{service.name}.</span> {service.headline}
          </p>
          <div className={`${categorySurface[service.category]} rounded-[14px] p-3 md:p-4`}>
            <ServiceDemo service={service} />
          </div>
        </div>
      ),
    },
    service.problem && {
      label: pains.resultLabel,
      body: <p className="text-[15px] leading-relaxed text-text">{service.problem.result}</p>,
    },
  ].filter(Boolean) as { label: string; body: React.ReactNode }[];

  return (
    <div className="flex flex-col">
      <ol className="flex flex-col">
        {steps.map((step, i) => (
          <motion.li
            key={step.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut, delay: i * 0.12 }}
            className="relative flex gap-4 pb-6 last:pb-0"
          >
            <span aria-hidden="true" className="relative flex w-5 shrink-0 justify-center">
              <span
                className={`relative z-10 mt-1 size-3 rounded-full border ${
                  i === steps.length - 1 ? "border-sand bg-sand" : "border-line-strong bg-base"
                }`}
              />
              {i < steps.length - 1 && (
                <motion.span
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, ease: easeOut, delay: i * 0.12 + 0.2 }}
                  className="absolute bottom-[-4px] top-4 w-px origin-top bg-line-strong"
                />
              )}
            </span>
            <div className="flex flex-1 flex-col gap-2">
              <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-text-soft">{step.label}</span>
              {step.body}
            </div>
          </motion.li>
        ))}
      </ol>
      <Link
        href={serviceHref(locale, service.slug)}
        className="group ml-9 mt-6 inline-flex min-h-[44px] items-center gap-2 self-start text-[15px] font-medium text-text"
      >
        <span className="link-underline">{pains.ctaLabel}</span>
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}

export function PainsStory() {
  const { dictionary } = useDictionary();
  const { pains } = dictionary;
  const [activeId, setActiveId] = useState(pains.items[0].id);
  const active = pains.items.find((pain) => pain.id === activeId) ?? pains.items[0];

  return (
    <section className="container-site py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex max-w-2xl flex-col gap-3"
      >
        <SectionLabel>{pains.eyebrow}</SectionLabel>
        <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-text md:text-[48px]">
          {pains.title}
        </h2>
        <p className="text-[17px] leading-[1.6] text-text-soft">{pains.intro}</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        <ul className="flex flex-col border-t border-line">
          {pains.items.map((pain, i) => {
            const isActive = pain.id === active.id;
            return (
              <li key={pain.id} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`pain-story-${pain.id}`}
                  onClick={() => setActiveId(pain.id)}
                  className={`group relative flex min-h-[64px] w-full items-center gap-4 py-4 pl-4 pr-2 text-left transition-colors duration-200 ${
                    isActive ? "text-text" : "text-text-soft hover:text-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pain-indicator"
                      transition={{ duration: 0.3, ease: easeOut }}
                      className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-sand"
                    />
                  )}
                  <span className="w-6 shrink-0 text-xs tabular-nums text-text-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[18px] leading-snug md:text-[20px]">{pain.quote}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 transition-transform duration-200 ${isActive ? "translate-x-1 text-sand" : "group-hover:translate-x-1"}`}
                  >
                    →
                  </span>
                </button>
                {/* En móvil, el relato se despliega debajo de la situación elegida. */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="story"
                      id={`pain-story-${pain.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeOut }}
                      className="overflow-hidden lg:hidden"
                    >
                      <div className="pb-8 pl-4 pt-2">
                        <Story pain={pain} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <div className="sticky top-28 rounded-[18px] border border-line bg-canvas p-8" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Story pain={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
