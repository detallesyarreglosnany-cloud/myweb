import type {
  FooterContent,
  MegaMenuCategory,
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
  { label: "Plans", href: "/en#planes" },
  { label: "Projects", href: "/en#proyectos" },
  { label: "Results", href: "/en#resultados" },
  { label: "Resources", href: "/en#recursos" },
];

export const megaMenu: MegaMenuCategory[] = [
  {
    id: "marca-contenido",
    label: "Brand & content",
    services: [
      {
        label: "Brand Identity",
        promise: "Before selling more, make it look worth buying from you.",
        href: "/en#soluciones",
      },
      {
        label: "Content & Social",
        promise: "Professional level content, published on time.",
        href: "/en#soluciones",
      },
    ],
  },
  {
    id: "acompanamiento",
    label: "Guidance",
    services: [
      {
        label: "Coaching & Mentoring",
        promise: "A clear plan for your business and someone by your side to execute it.",
        href: "/en#soluciones",
      },
      {
        label: "Sales Audit",
        promise: "Find out what's holding your sales back. Free.",
        href: "/en#soluciones",
      },
    ],
  },
  {
    id: "amazon",
    label: "Amazon",
    services: [
      {
        label: "Amazon Stores",
        promise: "Sell on Amazon without getting lost in the process.",
        href: "/en#soluciones",
      },
      {
        label: "Amazon Affiliates",
        promise: "Earn commissions recommending what people already buy.",
        href: "/en#soluciones",
      },
    ],
  },
  {
    id: "vender",
    label: "Sell",
    services: [
      {
        label: "Sales & Booking Page",
        promise: "A page that sells and books appointments for you.",
        href: "/en#soluciones",
      },
    ],
  },
  {
    id: "tienda",
    label: "Store",
    services: [
      {
        label: "Online Store & Catalog",
        promise: "Your catalog, done looking pretty and starting to sell.",
        href: "/en#soluciones",
      },
      {
        label: "Shopify Stores",
        promise: "Your Shopify store, ready to take orders.",
        href: "/en#soluciones",
      },
    ],
  },
  {
    id: "controlar",
    label: "Custom Systems",
    services: [
      {
        label: "Custom Admin System",
        promise: "Stop running your business blind.",
        href: "/en#soluciones",
      },
    ],
  },
  {
    id: "crear",
    label: "Digital Strategy",
    services: [
      {
        label: "Custom Platforms",
        promise: "You have an idea and don't know how to build it. We build it for you.",
        href: "/en#soluciones",
      },
    ],
  },
];

export const footer: FooterContent = {
  columns: [
    {
      title: "Solutions",
      links: megaMenu.flatMap((category) =>
        category.services.map((service) => ({
          label: service.label,
          href: service.href,
        })),
      ),
    },
    {
      title: "Resources",
      links: [{ label: "Free Sales Audit", href: "/en#recursos" }],
    },
    {
      title: "Company",
      links: [
        { label: "Projects", href: "/en#proyectos" },
        { label: "Results", href: "/en#resultados" },
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
  legal: `© ${new Date().getFullYear()} ${siteSettings.name}. All rights reserved.`,
  languageLabel: "Language",
};
