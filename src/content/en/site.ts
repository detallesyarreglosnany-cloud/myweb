import type {
  FooterContent,
  NavLink,
  SiteSettings,
} from "../types";

export const siteSettings: SiteSettings = {
  name: "Daniela Silva, Digital Strategy",
  whatsappNumber: "+584221754245",
  whatsappDefaultMessage:
    "Hi, Daniela. I want to tell you my idea and see how we turn it into a business that sells.",
  email: "PENDIENTE_CORREO",
  instagram: "https://instagram.com/danieladigital3.0",
  instagramHandle: "@danieladigital3.0",
  countries: ["Colombia", "Venezuela", "Peru", "Mexico", "United States"],
};

export const primaryNav: NavLink[] = [
  { label: "Solutions", href: "/en#soluciones" },
  { label: "Projects", href: "/en#proyectos" },
  { label: "About me", href: "/en#sobre-mi" },
  { label: "Resources", href: "/en#recursos" },
];

export const footer: FooterContent = {
  solutionsTitle: "Solutions",
  columns: [
    {
      title: "Resources",
      links: [{ label: "Free Sales Audit", href: "/en#recursos" }],
    },
    {
      title: "Company",
      links: [
        { label: "Projects", href: "/en#proyectos" },
        { label: "About", href: "/en#sobre-mi" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "WhatsApp", href: "/en#contacto" },
        { label: siteSettings.instagramHandle, href: siteSettings.instagram },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} ${siteSettings.name}. All rights reserved. Developed by Daniela Silva.`,
  languageLabel: "Language",
};
