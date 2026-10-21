"use client";

import { motion } from "motion/react";
import type { CatalogCategory, CatalogCategoryId } from "@/content/types";
import { CategoryIcon } from "./CategoryIcon";

export type CatalogFilter = CatalogCategoryId | "all";

export function ServiceFilters({
  categories,
  active,
  allLabel,
  onChange,
}: {
  categories: CatalogCategory[];
  active: CatalogFilter;
  allLabel: string;
  onChange: (filter: CatalogFilter) => void;
}) {
  const options: { id: CatalogFilter; label: string }[] = [
    { id: "all", label: allLabel },
    ...categories,
  ];

  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0">
      <div className="flex w-max gap-2 md:w-auto md:flex-wrap">
        {options.map((option) => {
          const isActive = option.id === active;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option.id)}
              className={`relative flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm transition-colors duration-200 ${
                isActive
                  ? "border-sand text-text"
                  : "border-line text-text-soft hover:border-line-strong hover:text-text"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="catalog-filter-pill"
                  transition={{ duration: 0.25, ease: [0.77, 0, 0.175, 1] }}
                  className="absolute inset-0 rounded-full bg-olive-panel"
                />
              )}
              <span className="relative flex items-center gap-2">
                {option.id !== "all" && <CategoryIcon id={option.id} size={16} />}
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
