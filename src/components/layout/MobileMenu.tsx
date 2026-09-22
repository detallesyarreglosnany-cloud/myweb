"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { easeDrawer, cascade, cascadeItem } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { buildWhatsappLink, isWhatsappPending } from "@/lib/whatsapp";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { dictionary, locale } = useDictionary();
  const { siteSettings } = dictionary;
  const whatsappHref = isWhatsappPending(siteSettings.whatsappNumber)
    ? undefined
    : buildWhatsappLink(
        siteSettings.whatsappNumber,
        siteSettings.whatsappDefaultMessage,
      );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label={locale === "es" ? "Cerrar menú" : "Close menu"}
            className="fixed inset-0 z-40 bg-base/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col gap-8 border-l border-line bg-canvas p-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: easeDrawer }}
          >
            <motion.ul
              className="flex flex-col gap-1"
              variants={cascade(0.05)}
              initial="hidden"
              animate="show"
            >
              {dictionary.primaryNav.map((link) => (
                <motion.li key={link.href} variants={cascadeItem}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-3 text-lg text-text hover:bg-raised"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-auto flex flex-col gap-6">
              <LanguageSwitcher />
              <Button
                href={whatsappHref ?? "#"}
                variant="primary"
                className="w-full"
              >
                {locale === "es" ? "Hablemos" : "Let's talk"}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
