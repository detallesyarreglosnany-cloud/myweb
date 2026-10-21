"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { groupByCategory, serviceHref } from "@/lib/catalog";
import { easeOut } from "@/lib/motion";
import { CategoryIcon } from "@/components/catalog/CategoryIcon";

export function MegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { dictionary, locale } = useDictionary();
  const groups = groupByCategory(dictionary.solutions.categories, dictionary.services);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className="absolute inset-x-0 top-full z-40 border-b border-line bg-canvas"
          onMouseLeave={onClose}
        >
          <div className="container-site grid grid-cols-2 gap-x-8 gap-y-8 py-10 lg:grid-cols-3">
            {groups.map(({ category, services }) => (
              <div key={category.id} className="flex flex-col gap-3">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.06em] text-sand">
                  <CategoryIcon id={category.id} size={16} />
                  {category.label}
                </span>
                <ul className="flex flex-col gap-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={serviceHref(locale, service.slug)}
                        onClick={onClose}
                        className="block rounded-lg py-1.5 text-[15px] text-text transition-colors hover:text-sand"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
