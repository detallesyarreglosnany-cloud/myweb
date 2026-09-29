import type {
  FooterContent,
  MegaMenuCategory,
  NavLink,
  SiteSettings,
} from "../types";

export const siteSettings: SiteSettings = {
  name: "Daniela Silva, Estrategia Digital",
  whatsappNumber: "+584221754245",
  whatsappDefaultMessage:
    "Hola, Daniela. Quiero contarte mi idea y ver cómo la convertimos en un negocio que vende.",
  email: "PENDIENTE_CORREO",
  instagram: "https://instagram.com/danieladigital3.0",
  instagramHandle: "@danieladigital3.0",
  countries: ["Colombia", "Venezuela", "Perú", "México", "Estados Unidos"],
};

export const primaryNav: NavLink[] = [
  { label: "Soluciones", href: "/es#soluciones" },
  { label: "Planes", href: "/es#planes" },
  { label: "Proyectos", href: "/es#proyectos" },
  { label: "Resultados", href: "/es#resultados" },
  { label: "Recursos", href: "/es#recursos" },
];

export const megaMenu: MegaMenuCategory[] = [
  {
    id: "marca-contenido",
    label: "Marca y contenido",
    services: [
      {
        label: "Identidad de Marca",
        promise: "Antes de vender más, que se vea que vale la pena comprarte.",
        href: "/es#soluciones",
      },
      {
        label: "Contenido y Redes",
        promise: "Contenido de nivel profesional, publicado a tiempo.",
        href: "/es#soluciones",
      },
    ],
  },
  {
    id: "acompanamiento",
    label: "Acompañamiento",
    services: [
      {
        label: "Asesoría y Mentoría",
        promise: "Un plan claro para tu negocio y alguien que te acompaña a ejecutarlo.",
        href: "/es#soluciones",
      },
      {
        label: "Auditoría de Ventas",
        promise: "Descubre qué te está frenando las ventas. Gratis.",
        href: "/es#soluciones",
      },
    ],
  },
  {
    id: "amazon",
    label: "Amazon",
    services: [
      {
        label: "Tiendas en Amazon",
        promise: "Vende en Amazon sin perderte en el proceso.",
        href: "/es#soluciones",
      },
      {
        label: "Amazon Afiliados",
        promise: "Gana comisiones recomendando lo que la gente ya compra.",
        href: "/es#soluciones",
      },
    ],
  },
  {
    id: "vender",
    label: "Vender",
    services: [
      {
        label: "Página de Ventas y Reservas",
        promise: "Que tu página venda y agende por ti.",
        href: "/es#soluciones",
      },
    ],
  },
  {
    id: "tienda",
    label: "Tienda",
    services: [
      {
        label: "Tienda y Catálogo Online",
        promise: "Que tu catálogo deje de solo verse y empiece a vender.",
        href: "/es#soluciones",
      },
      {
        label: "Tiendas Shopify",
        promise: "Tu tienda en Shopify, lista para recibir pedidos.",
        href: "/es#soluciones",
      },
    ],
  },
  {
    id: "controlar",
    label: "Sistemas personalizados",
    services: [
      {
        label: "Sistema Administrativo Personalizado",
        promise: "Deja de administrar tu negocio a ciegas.",
        href: "/es#soluciones",
      },
    ],
  },
  {
    id: "crear",
    label: "Estrategia digital",
    services: [
      {
        label: "Plataformas a la Medida",
        promise: "Tienes una idea y no sabes cómo ejecutarla. La ejecutamos por ti.",
        href: "/es#soluciones",
      },
    ],
  },
];

export const footer: FooterContent = {
  columns: [
    {
      title: "Soluciones",
      links: megaMenu.flatMap((category) =>
        category.services.map((service) => ({
          label: service.label,
          href: service.href,
        })),
      ),
    },
    {
      title: "Recursos",
      links: [{ label: "Auditoría de Ventas gratis", href: "/es#recursos" }],
    },
    {
      title: "Empresa",
      links: [
        { label: "Proyectos", href: "/es#proyectos" },
        { label: "Resultados", href: "/es#resultados" },
        { label: "Sobre mí", href: "/es#sobre-mi" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "WhatsApp", href: "/es#contacto" },
        { label: siteSettings.instagramHandle, href: siteSettings.instagram },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} ${siteSettings.name}. Todos los derechos reservados.`,
  languageLabel: "Idioma",
};
