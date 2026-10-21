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
  stage: {
    note: "Illustrative interfaces with sample data",
    adminAlt: "Admin panel designed by Daniela Silva",
    appAlt: "Mobile catalog app designed by Daniela Silva",
    feed: [
      { title: "New order", detail: "Payment confirmed" },
      { title: "Appointment booked", detail: "Reminder scheduled" },
      { title: "Invoice sent", detail: "Inventory updated" },
    ],
    booking: { title: "Book a visit", slot: "Sat · 10:00", status: "Confirmed" },
    flow: { label: "Automation", steps: ["Order", "Invoice", "Notice"] },
    agent: {
      question: "Do you have availability on Saturday?",
      answer: "Yes, at 10:00. Shall I book it?",
    },
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
  featuredLabel: "Featured",
  demoNote: "Demos use sample data to show how each solution works.",
  countLabel: "{count} solutions",
  quickViewLabel: "Explore",
  closeLabel: "Close",
  problemLabel: "What it solves",
  howLabel: "How it works",
  includesLabel: "What's included",
  optionsLabel: "Options",
  customizeStandard: "You choose the level that fits your business and we adapt it to your brand and processes.",
  customizeProposal: "Built to measure: we prepare a proposal based on your processes and business model.",
  tryLabel: "Try it",
  categories: [
    {
      id: "web",
      label: "Web & conversion",
      description: "Pages, catalogs, and sites designed so your visitors book, buy, or message you.",
    },
    {
      id: "apps",
      label: "Apps & platforms",
      description: "Platforms and apps built around your business model.",
    },
    {
      id: "systems",
      label: "Business systems",
      description: "Your operation, your numbers, and your team in one place.",
    },
    {
      id: "ai",
      label: "AI & automation",
      description: "Agents and automations that serve, reply, and run tasks for you.",
    },
    {
      id: "commerce",
      label: "Commerce & integrations",
      description: "Shopify and Amazon stores connected to the way you sell.",
    },
    {
      id: "brand",
      label: "Brand, growth & guidance",
      description: "Identity, content, and guidance to grow with strategy.",
    },
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
  form: {
    needLabel: "What do you need to build?",
    otherOption: "Not sure yet",
    detailLabel: "Tell us what you need",
    detailPlaceholder: "For example: I run a clothing store and want to receive orders and payments online.",
    nameLabel: "Your name (optional)",
    submitLabel: "Send on WhatsApp",
    error: "Tell us in one sentence what you need so we can help.",
    success: "Done. We opened WhatsApp with your message, so you only need to send it.",
    retryLabel: "Open WhatsApp again",
    template: "Hi, Daniela. {name}I need: {need}. {detail}",
    anonymous: "",
  },
};
