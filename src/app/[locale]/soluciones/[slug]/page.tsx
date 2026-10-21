import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { isLocale, locales } from "@/lib/locale";
import { serviceHref } from "@/lib/catalog";
import { jsonLd, siteUrl } from "@/lib/site";
import { ServiceDetail } from "@/components/catalog/ServiceDetail";

export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return getDictionary(params.locale).services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/soluciones/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const { services, siteSettings } = getDictionary(locale);
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  const title = `${service.name} | ${siteSettings.name}`;
  return {
    title,
    description: service.support,
    alternates: {
      canonical: serviceHref(locale, slug),
      languages: Object.fromEntries(locales.map((code) => [code, serviceHref(code, slug)])),
    },
    openGraph: {
      title,
      description: service.support,
      url: serviceHref(locale, slug),
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

function fixedPrice(price: string): string | null {
  const match = price.match(/^\$([\d,]+)$/);
  return match ? match[1].replace(/,/g, "") : null;
}

export default async function ServicePage({
  params,
}: PageProps<"/[locale]/soluciones/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const { services, solutions, siteSettings } = getDictionary(locale);
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const offers = service.levels.flatMap((level) => {
    const price = fixedPrice(level.price);
    return price
      ? [{ "@type": "Offer", name: level.name, price, priceCurrency: "USD" }]
      : [];
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.support,
    serviceType: solutions.categories.find((c) => c.id === service.category)?.label,
    url: `${siteUrl}${serviceHref(locale, slug)}`,
    provider: { "@type": "Person", name: "Daniela Silva", url: `${siteUrl}/${locale}` },
    areaServed: siteSettings.countries,
    ...(offers.length > 0 ? { offers } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <ServiceDetail slug={slug} />
    </>
  );
}
