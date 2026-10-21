import { getDictionary } from "@/content";
import { isLocale } from "@/lib/locale";
import { ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Daniela Silva";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { hero, siteSettings } = getDictionary(isLocale(locale) ? locale : "es");
  return renderOg(hero.eyebrow, `${hero.headlinePrefix} ${hero.headlineAccent}`, siteSettings.name);
}
