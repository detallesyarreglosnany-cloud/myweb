"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { fillTemplate, serviceHref } from "@/lib/catalog";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { cascade, cascadeItem, easeOut, fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PhotoMockup } from "@/components/home/mockups/PhotoMockup";
import { CategoryIcon } from "./CategoryIcon";
import { ServiceDemo } from "./ServiceDemo";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 shrink-0">
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

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-60px" },
} as const;

export function ServiceDetail({ slug }: { slug: string }) {
  const { dictionary, locale } = useDictionary();
  const { services, solutions, serviceDetail: t, siteSettings } = dictionary;
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;

  const category = solutions.categories.find((c) => c.id === service.category);
  const related = services.filter(
    (item) => item.category === service.category && item.slug !== service.slug,
  );
  const message = fillTemplate(
    service.mode === "proposal" ? t.whatsappProposal : t.whatsappStandard,
    service,
  );
  const whatsappHref = buildWhatsappLink(siteSettings.whatsappNumber, message);
  const ctaLabel = service.mode === "proposal" ? t.proposalCtaLabel : service.ctaLabel;

  return (
    <article className="container-site pb-24 pt-8 md:pt-12">
      <nav aria-label={t.solutionsLabel} className="text-sm text-text-soft">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={`/${locale}`} className="link-underline hover:text-text">
              {t.homeLabel}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/${locale}#soluciones`} className="link-underline hover:text-text">
              {t.solutionsLabel}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-text">
            {service.name}
          </li>
        </ol>
      </nav>

      <header className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <motion.div variants={cascade(0.07)} initial="hidden" animate="show" className="flex flex-col gap-5">
          <motion.span variants={cascadeItem} className="flex items-center gap-2 text-xs uppercase tracking-[0.06em] text-sand">
            <CategoryIcon id={service.category} />
            {category?.label}
          </motion.span>
          <motion.h1
            variants={cascadeItem}
            className="text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-text md:text-[52px]"
          >
            {service.name}
          </motion.h1>
          <motion.p variants={cascadeItem} className="text-xl leading-snug text-sand md:text-2xl">
            {service.headline}
          </motion.p>
          <motion.p variants={cascadeItem} className="max-w-xl text-[17px] leading-[1.6] text-text-soft">
            {service.support}
          </motion.p>
          <motion.ul variants={cascadeItem} className="flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line-strong px-2.5 py-1 text-xs text-text-soft">
                {tag}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={cascadeItem} className="flex flex-wrap items-center gap-4 pt-2">
            <Button href={whatsappHref}>{ctaLabel}</Button>
            <span className="text-lg font-semibold text-text">{service.fromPrice}</span>
          </motion.div>
        </motion.div>
        <div className="rounded-[16px] border border-line bg-canvas p-4 md:p-6">
          <ServiceDemo service={service} interactive morph />
        </div>
      </header>

      {service.problem && (
        <section className="mt-20">
          <motion.div variants={fadeUp} {...reveal}>
            <SectionLabel>{t.problemLabel}</SectionLabel>
          </motion.div>
          <motion.ol
            variants={cascade(0.1)}
            {...reveal}
            className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {[
              { label: t.problemLabel, text: service.problem.situation, tone: "border-line" },
              { label: t.problemCostLabel, text: service.problem.cost, tone: "border-line" },
              { label: t.problemResultLabel, text: service.problem.result, tone: "border-sand/50" },
            ].map((step, i) => (
              <motion.li
                key={step.label}
                variants={cascadeItem}
                className={`relative flex flex-col gap-3 rounded-[12px] border ${step.tone} bg-canvas p-6`}
              >
                <span className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.06em] text-text-soft">
                  <span className="flex size-7 items-center justify-center rounded-full border border-line-strong text-xs text-sand">
                    {i + 1}
                  </span>
                  {step.label}
                </span>
                <p className={`text-[16px] leading-[1.6] ${i === 2 ? "text-text" : "text-text-soft"}`}>{step.text}</p>
                {i < 2 && (
                  <span aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-sand md:block">
                    →
                  </span>
                )}
              </motion.li>
            ))}
          </motion.ol>
        </section>
      )}

      <section className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <motion.div variants={fadeUp} {...reveal}>
            <SectionLabel>{t.benefitsLabel}</SectionLabel>
          </motion.div>
          <motion.ul variants={cascade(0.08)} {...reveal} className="mt-6 flex flex-col gap-3">
            {service.benefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={cascadeItem}
                className="flex items-start gap-3 rounded-[12px] border border-line bg-canvas px-5 py-4 text-[15px] text-text"
              >
                <Check />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        {service.photo && (
          <div>
            <motion.div variants={fadeUp} {...reveal}>
              <SectionLabel>{t.previewLabel}</SectionLabel>
            </motion.div>
            <div className="mt-6">
              <PhotoMockup src={service.photo} alt={service.name} />
            </div>
          </div>
        )}
      </section>

      <section className="mt-20">
        <motion.div variants={fadeUp} {...reveal}>
          <SectionLabel>{t.levelsLabel}</SectionLabel>
        </motion.div>
        <motion.div
          variants={cascade(0.08)}
          {...reveal}
          className={`mt-6 grid grid-cols-1 gap-4 ${service.levels.length > 2 ? "md:grid-cols-3" : service.levels.length === 2 ? "md:grid-cols-2" : ""}`}
        >
          {service.levels.map((level, i) => (
            <motion.div
              key={level.name}
              variants={cascadeItem}
              className={`flex flex-col gap-4 rounded-[12px] border p-6 ${
                i === service.levels.length - 1 && service.levels.length > 1
                  ? "border-sand/50 bg-olive-panel"
                  : "border-line bg-canvas"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-base font-medium text-text">{level.name}</span>
                <span className="text-2xl font-semibold tracking-[-0.02em] text-sand">{level.price}</span>
              </div>
              <ul className="flex flex-col gap-2 border-t border-line pt-4">
                {level.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-soft">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {service.faqs.length > 0 && (
        <section className="mt-20 max-w-3xl">
          <motion.div variants={fadeUp} {...reveal}>
            <SectionLabel>{t.faqLabel}</SectionLabel>
          </motion.div>
          <div className="mt-6 flex flex-col border-t border-line">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-line">
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] text-text [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-sand transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 text-[15px] leading-relaxed text-text-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <motion.section
        variants={fadeUp}
        {...reveal}
        className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[12px] border border-sand/40 bg-olive-panel p-8 md:flex-row md:items-center md:p-10"
      >
        <div className="flex max-w-xl flex-col gap-2">
          <h2 className="text-2xl font-semibold text-text md:text-3xl">{t.ctaTitle}</h2>
          <p className="text-[15px] leading-relaxed text-text-soft">{t.ctaSupport}</p>
        </div>
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.4, repeat: 2, ease: easeOut, delay: 1 }}
        >
          <Button href={whatsappHref}>{ctaLabel}</Button>
        </motion.div>
      </motion.section>

      {related.length > 0 && (
        <section className="mt-20">
          <motion.div variants={fadeUp} {...reveal}>
            <SectionLabel>{t.relatedLabel}</SectionLabel>
          </motion.div>
          <motion.ul variants={cascade(0.08)} {...reveal} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {related.map((item) => (
              <motion.li key={item.slug} variants={cascadeItem}>
                <Link
                  href={serviceHref(locale, item.slug)}
                  className="group flex h-full flex-col gap-2 rounded-[12px] border border-line bg-canvas p-6 transition-colors duration-200 hover:border-sand/50"
                >
                  <span className="text-[13px] font-medium text-sand">{item.name}</span>
                  <span className="text-lg font-medium leading-snug text-text">{item.headline}</span>
                  <span className="mt-auto pt-2 text-sm text-text-soft">
                    {solutions.viewSolutionLabel}{" "}
                    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      )}

      <div className="mt-16">
        <Link href={`/${locale}#soluciones`} className="link-underline text-sm text-text-soft hover:text-text">
          ← {t.backLabel}
        </Link>
      </div>
    </article>
  );
}
