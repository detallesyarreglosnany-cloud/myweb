import Link from "next/link";
import { getDictionary } from "@/content";
import type { Locale } from "@/content/types";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Footer({ locale }: { locale: Locale }) {
  const { footer, siteSettings } = getDictionary(locale);

  return (
    <footer className="mt-auto border-t border-line bg-raised pb-20 md:pb-0">
      <div className="container-site grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
        {footer.columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-text-soft">{column.title}</h3>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text hover:text-sand"
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
    </footer>
  );
}
