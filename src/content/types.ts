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
  secondaryCta: { label: string; whatsappMessage: string };
  trustBadge: string;
  stage: HeroStageContent;
}

/** Textos de la composición del hero. Todo es ilustrativo, con datos ficticios. */
export interface HeroStageContent {
  note: string;
  adminAlt: string;
  appAlt: string;
  feed: { title: string; detail: string }[];
  booking: { title: string; slot: string; status: string };
  flow: { label: string; steps: string[] };
  agent: { question: string; answer: string };
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
  intro: string;
  situationLabel: string;
  costLabel: string;
  solutionLabel: string;
  resultLabel: string;
  ctaLabel: string;
  items: Pain[];
}

export interface ServiceLevel {
  name: string;
  price: string;
  includes: string[];
}

export type CatalogCategoryId =
  | "web"
  | "apps"
  | "systems"
  | "ai"
  | "commerce"
  | "brand";

export type ServiceDemoId =
  | "booking"
  | "store"
  | "shopify"
  | "amazon"
  | "affiliate"
  | "dashboard"
  | "app"
  | "saas"
  | "revenue"
  | "agent"
  | "automation"
  | "brand"
  | "content"
  | "roadmap"
  | "audit";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProblem {
  situation: string;
  cost: string;
  result: string;
}

export interface Service {
  slug: string;
  category: CatalogCategoryId;
  name: string;
  headline: string;
  support: string;
  ctaLabel: string;
  benefits: string[];
  fromPrice: string;
  levels: ServiceLevel[];
  tags: string[];
  demo: ServiceDemoId;
  /** "proposal": desarrollo complejo, se contrata pidiendo propuesta. */
  mode: "standard" | "proposal";
  faqs: ServiceFaq[];
  problem?: ServiceProblem;
  photo?: string;
  video?: { src: string; poster: string };
  featured?: boolean;
  badge?: string;
}

export interface CatalogCategory {
  id: CatalogCategoryId;
  label: string;
  description: string;
}

export interface SolutionsSectionContent {
  eyebrow: string;
  title: string;
  intro: string;
  categories: CatalogCategory[];
  allFilterLabel: string;
  viewSolutionLabel: string;
  featuredLabel: string;
  demoNote: string;
  countLabel: string;
  quickViewLabel: string;
  closeLabel: string;
  problemLabel: string;
  howLabel: string;
  includesLabel: string;
  optionsLabel: string;
  customizeStandard: string;
  customizeProposal: string;
  tryLabel: string;
  customCta: { title: string; support: string; label: string };
}

export interface ServiceDetailContent {
  homeLabel: string;
  solutionsLabel: string;
  backLabel: string;
  problemLabel: string;
  problemCostLabel: string;
  problemResultLabel: string;
  benefitsLabel: string;
  levelsLabel: string;
  previewLabel: string;
  faqLabel: string;
  ctaTitle: string;
  ctaSupport: string;
  proposalCtaLabel: string;
  relatedLabel: string;
  whatsappStandard: string;
  whatsappProposal: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

export interface AuditBandContent {
  eyebrow: string;
  title: string;
  support: string;
  ctaLabel: string;
  whatsappMessage: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  support: string;
  whatsappLabel: string;
  instagramLabel: string;
  form: {
    needLabel: string;
    otherOption: string;
    detailLabel: string;
    detailPlaceholder: string;
    nameLabel: string;
    submitLabel: string;
    error: string;
    success: string;
    retryLabel: string;
    /** {name}, {need} y {detail} se reemplazan al enviar. */
    template: string;
    anonymous: string;
  };
}

export interface AboutHighlight {
  label: string;
  value: string;
}

export interface AboutPerspective {
  label: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  problemLabel: string;
  problemText: string;
  solutionLabel: string;
  solutionText: string;
  outcomes: string[];
  closingLine: string;
  experienceEyebrow: string;
  experienceIntro: string;
  experienceYears: string;
  experienceProcess: string;
  cleaningAngelsCta: string;
  perspectivesIntro: string;
  perspectives: AboutPerspective[];
  highlights: AboutHighlight[];
  closingTitleLead: string;
  closingTitleAccent: string;
  closingCta: string;
  photoAlt: string;
  role: string;
}

export interface FlagshipStat {
  value: string;
  label: string;
}

export interface FlagshipProjectContent {
  eyebrow: string;
  title: string;
  location: string;
  contextLabel: string;
  context: string;
  problemLabel: string;
  problem: string;
  solutionLabel: string;
  solution: string;
  flowsLabel: string;
  flows: string[];
  resultsLabel: string;
  stats: FlagshipStat[];
  screenshotAlt: string;
  screenshotCaption: string;
  linkLabel: string;
  linkHref: string;
  licenseLabel: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface FooterContent {
  solutionsTitle: string;
  columns: FooterColumn[];
  legal: string;
  languageLabel: string;
}

export interface DemoCopy {
  live: {
    booking: { title: string; price: string; slots: string[]; pick: string; confirm: string; success: string };
    store: { products: { name: string; price: string }[]; add: string; added: string; cart: string; checkout: string; sent: string };
    agent: { name: string; online: string; typing: string; prompts: { question: string; answer: string }[] };
  };
  booking: { reserve: string; confirmed: string; days: string[] };
  store: { order: string; stock: string; sent: string };
  shopify: { store: string; cart: string; pay: string };
  amazon: { before: string; after: string; titleBefore: string; titleAfter: string; rank: string };
  affiliate: { review: string; cta: string; commission: string };
  dashboard: { sales: string; margin: string; alert: string };
  app: { idea: string; installed: string };
  saas: { tenants: string[]; admin: string };
  revenue: { steps: string[] };
  agent: { name: string; question: string; answer: string };
  automation: { trigger: string; steps: string[]; done: string };
  brand: { template: string };
  content: { calendar: string };
  roadmap: { milestones: string[] };
  audit: { problems: string[] };
}
