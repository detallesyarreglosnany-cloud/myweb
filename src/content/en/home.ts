import type {
  AuditBandContent,
  ContactContent,
  HeroContent,
  ProcessContent,
  ProductFrameContent,
  ServiceDetailContent,
  SolutionsSectionContent,
} from "../types";

export const hero: HeroContent = {
  eyebrow: "Digital solutions built around you",
  headlinePrefix: "We design and build the systems your business needs to",
  headlineAccent: "sell, operate, and grow.",
  support:
    "Websites, stores, systems, automations, and platforms built around how your business actually works. Clear pricing, delivery in 7 days, guides and support included.",
  primaryCta: { label: "Explore solutions", href: "#soluciones" },
  secondaryCta: {
    label: "Design my solution",
    whatsappMessage:
      "Hi, Daniela. I want to design a solution built around my business.",
  },
  trustBadge: "Clients in Colombia, Venezuela, Peru, Mexico, and the US",
  layers: {
    sales: "Sales",
    operations: "Operations",
    data: "Data",
    automation: "Automation",
  },
};

export const productFrame: ProductFrameContent = {
  eyebrow: "In action",
  title: "This is what a business that sells itself looks like",
  caption: "Product preview",
  placeholderNote:
    "Custom systems, built with AI, designed to digitize, secure, and grow your business.",
};

export const solutions: SolutionsSectionContent = {
  eyebrow: "Solutions",
  title: "One solution for every part of your business",
  intro:
    "Explore each solution like a product: see how it works, what it includes, and what it costs.",
  allFilterLabel: "All",
  viewSolutionLabel: "View solution",
  replayLabel: "Replay",
  sampleDataLabel: "Sample data",
  featuredLabel: "Featured",
  categories: [
    { id: "web", label: "Web & conversion" },
    { id: "apps", label: "Apps & platforms" },
    { id: "systems", label: "Business systems" },
    { id: "ai", label: "AI & automation" },
    { id: "commerce", label: "Commerce & integrations" },
    { id: "brand", label: "Brand, growth & guidance" },
  ],
  customCta: {
    title: "Don't see exactly what you need?",
    support:
      "Tell us how your business works and we'll design a solution built around it.",
    label: "Design my solution",
  },
};

export const serviceDetail: ServiceDetailContent = {
  homeLabel: "Home",
  solutionsLabel: "Solutions",
  backLabel: "Back to all solutions",
  problemLabel: "The problem",
  problemCostLabel: "What it costs you",
  problemResultLabel: "The result",
  benefitsLabel: "What you get",
  levelsLabel: "Levels and pricing",
  previewLabel: "Product view",
  faqLabel: "Frequently asked questions",
  ctaTitle: "Should we build it for your business?",
  ctaSupport: "Message us on WhatsApp and we'll reply with the next step.",
  proposalCtaLabel: "Request a custom proposal",
  relatedLabel: "Other solutions in this category",
  whatsappStandard: "Hi, Daniela. I'm interested in {service}. I'd like to know how to get started.",
  whatsappProposal: "Hi, Daniela. I'd like to request a proposal for {service}.",
};

export const processSection: ProcessContent = {
  eyebrow: "Process",
  title: "How we work",
  steps: [
    {
      title: "Tell us your idea",
      description:
        "You message us on WhatsApp and we learn how your business works today.",
    },
    {
      title: "We build it",
      description:
        "We design and develop the solution around your processes.",
    },
    {
      title: "We deliver it installed",
      description:
        "With guides and support included, so you can use it from day one.",
    },
  ],
};

export const auditBand: AuditBandContent = {
  eyebrow: "Resources",
  title: "Find out what's holding your sales back.",
  support:
    "We review your store and social media and tell you the 3 problems costing you the most, no strings attached.",
  ctaLabel: "Get my free audit",
  whatsappMessage: "Hi, Daniela. I'd like to get my free sales audit.",
};

export const contact: ContactContent = {
  eyebrow: "Contact",
  title: "Message us and let's get started.",
  support:
    "Tell us what you need on WhatsApp. You can also see our work on Instagram.",
  whatsappLabel: "Message on WhatsApp",
  instagramLabel: "View Instagram",
};
