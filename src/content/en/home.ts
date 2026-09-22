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
    "We design sales pages, stores, systems, and custom platforms. Delivered installed and with full rights.",
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
  tabs: [
    { id: "vender", tabLabel: "Sell", serviceSlug: "pagina-ventas-reservas" },
    { id: "tienda", tabLabel: "Store", serviceSlug: "tienda-catalogo" },
    { id: "amazon", tabLabel: "Amazon", serviceSlug: "amazon-tiendas" },
    { id: "controlar", tabLabel: "Control", serviceSlug: "sistema-administrativo" },
    { id: "crear", tabLabel: "Build", serviceSlug: "plataformas-medida" },
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
  ],
};
