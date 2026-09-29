import type {
  HeroContent,
  ProductFrameContent,
  SolutionsSectionContent,
} from "../types";

export const hero: HeroContent = {
  eyebrow: "Soluciones digitales a tu medida",
  headlinePrefix: "Tienes la idea. Nosotros la convertimos en",
  headlineAccent: "un negocio que vende.",
  support:
    "Diseñamos páginas de ventas, tiendas, sistemas y plataformas a tu medida. Te lo entregamos instalado y con todos los derechos.",
  primaryCta: { label: "Cuéntame tu idea", href: "#contacto" },
  secondaryCta: { label: "Ver soluciones", href: "#soluciones" },
  trustBadge: "Clientes en Colombia, Venezuela, Perú, México y EEUU",
};

export const productFrame: ProductFrameContent = {
  eyebrow: "En acción",
  title: "Así se ve un negocio que vende solo",
  caption: "Vista previa del producto",
  placeholderNote:
    "Aquí va la primera prueba visual del producto (captura real o demo). Pendiente de material de Daniela.",
};

export const solutions: SolutionsSectionContent = {
  eyebrow: "Soluciones",
  title: "Una solución para cada parte de tu negocio",
  viewFullService: "Ver el servicio completo",
  repeatAnimation: "Repetir",
  tabs: [
    {
      id: "marca-contenido",
      tabLabel: "Marca y contenido",
      serviceSlug: "identidad-marca",
    },
    {
      id: "acompanamiento",
      tabLabel: "Acompañamiento",
      serviceSlug: "asesoria-mentoria",
    },
    { id: "amazon", tabLabel: "Amazon", serviceSlug: "amazon-tiendas" },
    { id: "vender", tabLabel: "Vender", serviceSlug: "pagina-ventas-reservas" },
    { id: "tienda", tabLabel: "Tienda", serviceSlug: "tienda-catalogo" },
    {
      id: "controlar",
      tabLabel: "Sistemas personalizados",
      serviceSlug: "sistema-administrativo",
    },
    { id: "crear", tabLabel: "Estrategia digital", serviceSlug: "plataformas-medida" },
  ],
};
