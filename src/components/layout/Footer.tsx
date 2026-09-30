"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { getDictionary } from "@/content";
import type { Locale } from "@/content/types";
import { fadeUp } from "@/lib/motion";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Logo } from "@/components/ui/Logo";

export function Footer({ locale }: { locale: Locale }) {
  const { footer, siteSettings } = getDictionary(locale);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={fadeUp.show.transition}
      className="mt-auto border-t border-line bg-raised pb-20 md:pb-0"
    >
      <div className="container-site grid grid-cols-2 gap-10 py-16 md:grid-cols-5">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <Logo locale={locale} height={40} />
        </div>
        {footer.columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-text-soft">{column.title}</h3>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-text hover:text-sand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-site flex flex-col gap-4 border-t border-line py-6 text-sm text-text-soft md:flex-row md:items-center md:justify-between">
        <span>{footer.legal}</span>
        <div className="flex items-center gap-4">
          <span>{siteSettings.instagramHandle}</span>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.footer>
  );
}
