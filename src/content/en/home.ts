import type {
  HeroContent,
  ProductFrameContent,
  SolutionsSectionContent,
} from "../types";

export const hero: HeroContent = {
  eyebrow: "Digital solutions built around you",
  headlinePrefix: "You have the idea. We turn it into",
  headlineAccent: "a business that sells.",
  support:
    "We develop your business idea and digitize your brand: sales pages, stores, admin systems, and custom platforms built around your needs, because we understand your business is different. Clear pricing, delivery in 7 days, guides and support included.",
  primaryCta: { label: "Tell me your idea", href: "#contacto" },
  secondaryCta: { label: "See solutions", href: "#soluciones" },
  trustBadge: "Clients in Colombia, Venezuela, Peru, Mexico, and the US",
};

export const productFrame: ProductFrameContent = {
  eyebrow: "In action",
  title: "This is what a business that sells itself looks like",
  caption: "Product preview",
  placeholderNote:
    "First visual proof of the product goes here (real screenshot or demo). Pending material from Daniela.",
};

export const solutions: SolutionsSectionContent = {
  eyebrow: "Solutions",
  title: "One solution for every part of your business",
  viewFullService: "See the full service",
  repeatAnimation: "Replay",
  showPriceLabel: "See price",
  hidePriceLabel: "Hide price",
  allFilterLabel: "All",
  tabs: [
    {
      id: "marca-contenido",
      tabLabel: "Brand & content",
      serviceSlug: "identidad-marca",
    },
    {
      id: "acompanamiento",
      tabLabel: "Guidance",
      serviceSlug: "asesoria-mentoria",
    },
    { id: "amazon", tabLabel: "Amazon", serviceSlug: "amazon-tiendas" },
    { id: "vender", tabLabel: "Sell", serviceSlug: "pagina-ventas-reservas" },
    { id: "tienda", tabLabel: "Store", serviceSlug: "tienda-catalogo" },
    {
      id: "controlar",
      tabLabel: "Custom Systems",
      serviceSlug: "sistema-administrativo",
    },
    { id: "crear", tabLabel: "Digital Strategy", serviceSlug: "plataformas-medida" },
  ],
};
