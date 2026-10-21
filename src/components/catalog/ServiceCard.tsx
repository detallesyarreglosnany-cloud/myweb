"use client";

import Link from "next/link";
import type { PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { categorySurface, serviceHref } from "@/lib/catalog";
import { easeOut } from "@/lib/motion";
import type { Service } from "@/content/types";
import { ServiceDemo } from "./ServiceDemo";

interface CardProps {
  service: Service;
  onExplore: (service: Service, trigger: HTMLElement) => void;
}

function Arrow() {
  return (
    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  );
}

function CardActions({ service, onExplore }: CardProps) {
  const { dictionary, locale } = useDictionary();
  const { solutions } = dictionary;
  return (
    <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-3">
      <button
        type="button"
        onClick={(event) => onExplore(service, event.currentTarget)}
        aria-haspopup="dialog"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-text px-5 text-sm font-medium text-[var(--color-base)] transition-colors duration-200 hover:bg-sand"
      >
        {solutions.quickViewLabel}
        <span aria-hidden="true">+</span>
      </button>
      <Link
        href={serviceHref(locale, service.slug)}
        className="group inline-flex min-h-[44px] items-center gap-2 text-sm text-text-soft transition-colors duration-200 hover:text-text"
      >
        {solutions.viewSolutionLabel}
        <span className="sr-only">: {service.name}</span>
        <Arrow />
      </Link>
    </div>
  );
}

/** Pieza principal de cada capítulo: demo grande que se inclina siguiendo el cursor. */
export function LeadCard({ service, onExplore, flip }: CardProps & { flip: boolean }) {
  const { dictionary } = useDictionary();
  const { solutions } = dictionary;
  const reduce = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
    rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 6);
  };
  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-line bg-canvas md:grid-cols-[1.15fr_1fr]">
      <div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`${categorySurface[service.category]} flex items-center p-5 [perspective:1200px] md:p-8 ${flip ? "md:order-2" : ""}`}
      >
        <motion.div style={{ rotateX, rotateY }} className="w-full">
          <ServiceDemo service={service} morph />
        </motion.div>
      </div>
      <div className="flex flex-col gap-3 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {(service.badge || service.featured) && (
            <span className="rounded-full bg-nude px-3 py-1 text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--color-base)]">
              {service.badge ?? solutions.featuredLabel}
            </span>
          )}
          <span className="text-[13px] font-medium text-sand">{service.name}</span>
        </div>
        <h4 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-text md:text-[30px]">
          {service.headline}
        </h4>
        <p className="text-[15px] leading-relaxed text-text-soft">{service.support}</p>
        <ul className="flex flex-wrap gap-1.5 pt-1">
          {service.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] text-text-soft">
              {tag}
            </li>
          ))}
        </ul>
        <p className="pt-2 text-lg font-semibold text-text">{service.fromPrice}</p>
        <CardActions service={service} onExplore={onExplore} />
      </div>
    </article>
  );
}

/** Soluciones secundarias del capítulo: más compactas, con la demo como miniatura. */
export function CompactCard({ service, onExplore, wide }: CardProps & { wide: boolean }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={`group flex h-full flex-col overflow-hidden rounded-[16px] border border-line bg-canvas transition-colors duration-300 hover:border-line-strong ${
        wide ? "sm:col-span-2 sm:flex-row" : ""
      }`}
    >
      <div
        className={`${categorySurface[service.category]} p-4 transition-[padding] duration-300 group-hover:p-3 ${
          wide ? "sm:flex sm:w-[46%] sm:shrink-0 sm:items-center" : ""
        }`}
      >
        <div className="w-full">
          <ServiceDemo service={service} morph />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-[13px] font-medium text-sand">{service.name}</span>
        <h4 className="text-lg font-medium leading-snug text-text">{service.headline}</h4>
        <p className="text-sm leading-relaxed text-text-soft">{service.support}</p>
        <p className="pt-1 text-[15px] font-semibold text-text">{service.fromPrice}</p>
        <CardActions service={service} onExplore={onExplore} />
      </div>
    </motion.article>
  );
}
