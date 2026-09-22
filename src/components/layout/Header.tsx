"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useDictionary } from "@/lib/dictionary-context";
import { buildWhatsappLink, isWhatsappPending } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const { dictionary, locale } = useDictionary();
  const { siteSettings, primaryNav } = dictionary;
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = isWhatsappPending(siteSettings.whatsappNumber)
    ? undefined
    : buildWhatsappLink(
        siteSettings.whatsappNumber,
        siteSettings.whatsappDefaultMessage,
      );

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? "border-b border-line bg-base/90" : "border-b border-transparent"
      }`}
    >
      <div className="container-site relative flex h-20 items-center justify-between">
        <Link href={`/${locale}`} className="text-lg font-semibold text-text">
          {siteSettings.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {primaryNav.map((link) => (
            <div
              key={link.href}
              onMouseEnter={
                link.href.includes("#soluciones")
                  ? () => setMegaMenuOpen(true)
                  : undefined
              }
            >
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-text-soft transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Button href={whatsappHref ?? "#"}>
            {locale === "es" ? "Hablemos" : "Let's talk"}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-text md:hidden"
          aria-label={locale === "es" ? "Abrir menú" : "Open menu"}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path
              d="M0 1H18M0 7H18M0 13H18"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <MegaMenu open={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      </div>

      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
