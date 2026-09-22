"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, otherLocale } from "@/lib/locale";
import { useDictionary } from "@/lib/dictionary-context";
import type { Locale } from "@/content/types";

function swapLocaleInPath(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || `/${target}`;
}

export function LanguageSwitcher() {
  const { locale } = useDictionary();
  const pathname = usePathname();
  const next = otherLocale(locale);

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((code) => (
        <Link
          key={code}
          href={swapLocaleInPath(pathname, code)}
          aria-current={code === locale ? "true" : undefined}
          className={`px-2 py-1 uppercase tracking-wide transition-colors ${
            code === locale
              ? "text-sand"
              : "text-text-soft hover:text-text"
          }`}
        >
          {code}
        </Link>
      ))}
      <span className="sr-only">
        {locale === "es" ? `Cambiar a ${next}` : `Switch to ${next}`}
      </span>
    </div>
  );
}
