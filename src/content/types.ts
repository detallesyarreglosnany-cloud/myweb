/**
 * Formas de contenido tipado para la Fase 1 (sin Sanity).
 * Cada tipo aquí replica, a propósito, la forma de un futuro documento
 * de Sanity descrito en ADR 02, para que la Fase 2 solo cambie el origen
 * de los datos y no la forma en la que los componentes los consumen.
 */

export type Locale = "es" | "en";

export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuServiceLink {
  label: string;
  promise: string;
  href: string;
}

export interface MegaMenuCategory {
  id: string;
  label: string;
  services: MegaMenuServiceLink[];
}

export interface SiteSettings {
  name: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  countries: string[];
}

export interface HeroContent {
  eyebrow: string;
  headlinePrefix: string;
  headlineAccent: string;
  support: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustBadge: string;
}

export interface ProductFrameContent {
  eyebrow: string;
  title: string;
  caption: string;
  placeholderNote: string;
}

export interface Pain {
  id: string;
  quote: string;
  solutionSlug: string;
}

export interface PainsSectionContent {
  eyebrow: string;
  title: string;
  items: Pain[];
}

export interface ServiceLevel {
  name: string;
  price: string;
  includes: string[];
}

export interface Service {
  slug: string;
  category: string;
  name: string;
  headline: string;
  support: string;
  ctaLabel: string;
  benefits: string[];
  fromPrice: string;
  levels: ServiceLevel[];
  badge?: string;
}

export interface SolutionTab {
  id: string;
  tabLabel: string;
  serviceSlug: string;
}

export interface SolutionsSectionContent {
  eyebrow: string;
  title: string;
  tabs: SolutionTab[];
  viewFullService: string;
  repeatAnimation: string;
  showPriceLabel: string;
  hidePriceLabel: string;
  allFilterLabel: string;
}

export interface AboutHighlight {
  label: string;
  value: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  body: string[];
  highlights: AboutHighlight[];
  photoAlt: string;
}

export interface FlagshipStat {
  value: string;
  label: string;
}

export interface FlagshipProjectContent {
  eyebrow: string;
  title: string;
  description: string;
  stats: FlagshipStat[];
  linkLabel: string;
  linkHref: string;
}

export interface Testimonial {
  name: string;
  country: string;
  flag: string;
  quote: string;
  service: string;
  avatar: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  items: Testimonial[];
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface FooterContent {
  columns: FooterColumn[];
  legal: string;
  languageLabel: string;
}
