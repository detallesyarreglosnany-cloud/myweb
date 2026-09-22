"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { easeOut } from "@/lib/motion";

export function MegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { dictionary } = useDictionary();

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
          <div className="container-site grid grid-cols-1 gap-8 py-10 md:grid-cols-[280px_1fr]">
            <ul className="flex flex-col gap-1">
              {dictionary.megaMenu.map((category) => (
                <li key={category.id}>
                  <span className="block rounded-lg px-3 py-2 text-sm font-medium text-text-soft">
                    {category.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {dictionary.megaMenu.map((category) =>
                category.services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    onClick={onClose}
                    className="group block border-b border-line pb-4"
                  >
                    <span className="block text-[15px] font-medium text-text group-hover:text-sand">
                      {service.label}
                    </span>
                    <span className="mt-1 block text-sm text-text-soft">
                      {service.promise}
                    </span>
                  </Link>
                )),
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
