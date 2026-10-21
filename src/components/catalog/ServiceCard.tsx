"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { serviceHref } from "@/lib/catalog";
import { easeOut } from "@/lib/motion";
import type { Service } from "@/content/types";
import { CategoryIcon } from "./CategoryIcon";
import { ServiceDemo } from "./ServiceDemo";

export function ServiceCard({ service, wide }: { service: Service; wide: boolean }) {
  const { dictionary, locale } = useDictionary();
  const { solutions } = dictionary;
  const category = solutions.categories.find((c) => c.id === service.category);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={`group relative flex h-full flex-col gap-5 rounded-[12px] border border-line bg-canvas p-5 transition-[border-color,box-shadow] duration-300 hover:border-sand/50 hover:shadow-[0_18px_40px_-24px_rgba(205,186,156,0.45)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-sand md:p-6 ${
        wide ? "md:flex-row md:items-center md:gap-8" : ""
      }`}
    >
      <div className={wide ? "md:w-[52%] md:shrink-0" : ""}>
        <ServiceDemo service={service} />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.05em] text-text-soft">
            <span className="inline-flex transition-transform duration-200 group-hover:scale-110">
              <CategoryIcon id={service.category} />
            </span>
            {category?.label}
          </span>
          {(service.badge || service.featured) && (
            <span className="rounded-full bg-nude px-3 py-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--color-base)]">
              {service.badge ?? solutions.featuredLabel}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[13px] font-medium text-sand">
            <Link
              href={serviceHref(locale, service.slug)}
              className="after:absolute after:inset-0 after:rounded-[12px] focus-visible:outline-none"
            >
              {service.name}
            </Link>
          </h3>
          <p className="text-xl font-medium leading-tight text-text">{service.headline}</p>
        </div>

        <p className="text-sm leading-relaxed text-text-soft">{service.support}</p>

        <ul className="flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-text-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-text">
          {solutions.viewSolutionLabel}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </motion.article>
  );
}
