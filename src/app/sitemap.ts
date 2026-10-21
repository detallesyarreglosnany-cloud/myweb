import type { MetadataRoute } from "next";
import { getDictionary } from "@/content";
import { locales } from "@/lib/locale";
import { serviceHref } from "@/lib/catalog";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: {
      languages: Object.fromEntries(locales.map((code) => [code, `${siteUrl}/${code}`])),
    },
  }));

  const services: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getDictionary(locale).services.map((service) => ({
      url: `${siteUrl}${serviceHref(locale, service.slug)}`,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, `${siteUrl}${serviceHref(code, service.slug)}`]),
        ),
      },
    })),
  );

  return [...home, ...services];
}
