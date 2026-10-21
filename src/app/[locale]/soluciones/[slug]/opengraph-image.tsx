import { getDictionary } from "@/content";
import { isLocale } from "@/lib/locale";
import { ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Daniela Silva";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const { services, solutions } = getDictionary(isLocale(locale) ? locale : "es");
  const service = services.find((item) => item.slug === slug) ?? services[0];
  const category = solutions.categories.find((c) => c.id === service.category);
  return renderOg(category?.label ?? "", service.name, service.headline);
}
