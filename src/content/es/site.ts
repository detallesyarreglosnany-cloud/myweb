import type {
  FooterContent,
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
  { label: "Proyectos", href: "/es#proyectos" },
  { label: "Sobre mí", href: "/es#sobre-mi" },
  { label: "Recursos", href: "/es#recursos" },
];

export const footer: FooterContent = {
  solutionsTitle: "Soluciones",
  columns: [
    {
      title: "Recursos",
      links: [{ label: "Auditoría de Ventas gratis", href: "/es#recursos" }],
    },
    {
      title: "Empresa",
      links: [
        { label: "Proyectos", href: "/es#proyectos" },
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
  legal: `© ${new Date().getFullYear()} ${siteSettings.name}. Todos los derechos reservados. Desarrollado por Daniela Silva.`,
  languageLabel: "Idioma",
};
