import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/locale";
import { serviceHref } from "@/lib/catalog";
import { jsonLd, siteUrl } from "@/lib/site";
import { Hero } from "@/components/home/Hero";
import { ProductFrame } from "@/components/home/ProductFrame";
import { PainsStory } from "@/components/home/PainsStory";
import { ServiceCatalog } from "@/components/catalog/ServiceCatalog";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CaseStudy } from "@/components/home/CaseStudy";
import { AuditBand } from "@/components/home/AuditBand";
import { AboutMe } from "@/components/home/AboutMe";
import { ContactSection } from "@/components/home/ContactSection";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { siteSettings, solutions, services } = getDictionary(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteSettings.name,
    url: `${siteUrl}/${locale}`,
    founder: { "@type": "Person", name: "Daniela Silva" },
    areaServed: siteSettings.countries,
    sameAs: [siteSettings.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: solutions.title,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${siteUrl}${serviceHref(locale, service.slug)}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <Hero />
      <PainsStory />
      <ServiceCatalog />
      <CaseStudy />
      <ProductFrame />
      <ProcessSection />
      <AboutMe />
      <AuditBand />
      <ContactSection />
    </>
  );
}
