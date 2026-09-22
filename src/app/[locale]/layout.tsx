import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { isLocale, locales } from "@/lib/locale";
import { DictionaryProvider } from "@/lib/dictionary-context";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { siteSettings, hero } = getDictionary(locale);
  return {
    title: siteSettings.name,
    description: hero.support,
  };
}

export default async function LocaleLayout({
  params,
  children,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale);
  const skipLabel = locale === "es" ? "Saltar al contenido" : "Skip to content";

  return (
    <DictionaryProvider locale={locale} dictionary={dictionary}>
      <HtmlLangSync locale={locale} />
      <a href="#contenido" className="skip-link">
        {skipLabel}
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
      <WhatsAppButton />
    </DictionaryProvider>
  );
}
