import type { Service } from "../types";

export const services: Service[] = [
  {
    slug: "pagina-ventas-reservas",
    category: "vender",
    name: "Sales & Booking Page",
    headline: "A page that sells and books appointments for you.",
    support:
      "Take payments, book appointments, and answer questions while you run your business.",
    ctaLabel: "I want my page",
    benefits: [
      "High conversion landing with payment or deposit booking button",
      "Instant quote tool and live chat included",
      "Synced calendar with automatic WhatsApp reminders",
    ],
    fromPrice: "From $199",
    levels: [
      {
        name: "Starter",
        price: "$199",
        includes: [
          "High conversion landing",
          "Payment or deposit booking button",
          "Instant quote tool",
          "Live chat",
        ],
      },
      {
        name: "Pro",
        price: "$280",
        includes: [
          "Everything in Starter",
          "Funnel with event tracking and remarketing",
          "Synced calendar with WhatsApp reminders",
          "Offer countdown timer and service editor",
        ],
      },
      {
        name: "Premium",
        price: "$390",
        includes: [
          "Everything in Pro",
          "Customer accounts",
          "Admin panel and reports",
          "A/B testing",
        ],
      },
    ],
  },
  {
    slug: "tienda-catalogo",
    category: "tienda",
    name: "Online Store & Catalog",
    headline: "Your catalog, done looking pretty and starting to sell.",
    support:
      "Your store open 24 hours, with inventory up to date and orders straight to your WhatsApp.",
    ctaLabel: "I want my store",
    benefits: [
      "Visual, interactive presentation, up to unlimited products in Premium",
      "Direct purchase via WhatsApp or payment gateway",
      "Instant quote tool and cart recovery from Pro onward",
    ],
    fromPrice: "From $290",
    levels: [
      {
        name: "Starter",
        price: "$290",
        includes: [
          "Visual, interactive presentation",
          "Direct purchase via WhatsApp or payment gateway",
          "Up to 50 products",
          "Chatbot",
        ],
      },
      {
        name: "Pro",
        price: "$390",
        includes: [
          "Everything in Starter",
          "Quote tool and cart recovery by email or WhatsApp",
          "CRM sync",
          "Up to 100 products and basic analytics",
        ],
      },
      {
        name: "Premium",
        price: "$540",
        includes: [
          "Everything in Pro",
          "Installable mobile app (PWA)",
          "Advanced analytics",
          "Unlimited products and automatic reports",
        ],
      },
    ],
  },
  {
    slug: "sistema-administrativo",
    category: "controlar",
    name: "Custom Admin System",
    headline: "Stop running your business blind.",
    support:
      "Profits, inventory, and sales reps on a single screen. Delivered installed, branded, with video training.",
    ctaLabel: "I want to see it working",
    benefits: [
      "Automatic margin per product and real time entries and exits",
      "Receivables and payables on a single screen",
      "Installation, first month, coaching, tutorial videos, and data handover",
    ],
    fromPrice: "From $450",
    levels: [
      {
        name: "Base",
        price: "$450",
        includes: [
          "One module of your choice, for example profits and inventory",
          "Installation and first month",
          "Coaching and tutorial videos",
          "Instructions and data handover",
        ],
      },
      {
        name: "Complete",
        price: "$750",
        includes: [
          "Two or more modules",
          "Receivables and payables",
          "Multi currency",
        ],
      },
      {
        name: "Premium",
        price: "To be agreed",
        includes: [
          "Everything in Complete",
          "Customer portal",
          "Payment reconciliation",
        ],
      },
    ],
  },
  {
    slug: "plataformas-medida",
    category: "crear",
    name: "Custom Platforms",
    headline: "You have an idea and don't know how to build it. We build it for you.",
    support:
      "Mini apps, apps, SaaS, or white label. Delivered installed and with full rights.",
    ctaLabel: "Tell me my idea",
    benefits: [
      "Scope, installation, and timeline defined around your idea",
      "21 days of support with adjustments and customization included",
      "Resale license agreed in writing for each case",
    ],
    fromPrice: "From $600",
    levels: [
      {
        name: "Custom",
        price: "From $600",
        includes: [
          "Mini apps, apps, SaaS, or white label",
          "Quoted based on your idea",
          "21 days of support included",
        ],
      },
    ],
  },
  {
    slug: "amazon-tiendas",
    category: "amazon",
    name: "Amazon Stores",
    headline: "Sell on Amazon without getting lost in the process.",
    support:
      "We open your account, optimize your products, and set up your ads so people find you.",
    ctaLabel: "I want to sell on Amazon",
    benefits: [
      "Seller account, verification, and payment method ready",
      "Optimized listings with keywords",
      "A+ Content, initial campaigns, and first month report in Premium",
    ],
    fromPrice: "From $150",
    levels: [
      {
        name: "Starter, Launch",
        price: "$150",
        includes: [
          "Seller account and verification",
          "Payment method",
          "Compliance checklist",
        ],
      },
      {
        name: "Pro, Listings",
        price: "$270",
        includes: [
          "Everything in Starter",
          "5 optimized listings",
          "Keyword research",
        ],
      },
      {
        name: "Premium, Sales",
        price: "$440",
        includes: [
          "Everything in Pro",
          "A+ Content on 3 products",
          "Initial ad campaigns",
          "First month report",
        ],
      },
    ],
  },
  {
    slug: "shopify-tiendas",
    category: "tienda",
    name: "Shopify Stores",
    headline: "Your Shopify store, ready to take orders.",
    support:
      "Design, products, payments, and shipping configured, plus a session so you learn to run it.",
    ctaLabel: "I want my Shopify store",
    benefits: [
      "Base store with brand theme, payments and shipping ready",
      "Cart recovery, WhatsApp, basic SEO, and analytics from Pro",
      "Instagram, TikTok, and Facebook Shops in Premium, with training",
    ],
    fromPrice: "From $150",
    levels: [
      {
        name: "Starter",
        price: "$150",
        includes: [
          "Base store with brand theme",
          "Up to 20 products",
          "Payments and shipping",
        ],
      },
      {
        name: "Pro",
        price: "$260",
        includes: [
          "Up to 100 products",
          "Cart recovery and WhatsApp",
          "Basic SEO and analytics",
        ],
      },
      {
        name: "Premium",
        price: "$420",
        includes: [
          "Advanced theme",
          "Instagram, TikTok, and Facebook Shops",
          "Automated emails",
          "2 training sessions",
        ],
      },
    ],
  },
  {
    slug: "amazon-afiliados",
    category: "amazon",
    name: "Amazon Affiliates",
    headline: "Earn commissions recommending what people already buy.",
    support:
      "We build your review and comparison site so your content works for you every day.",
    ctaLabel: "I want to start",
    benefits: [
      "Program sign up and tracked links",
      "Review and comparison site with basic SEO",
      "Social content plan in Premium",
    ],
    fromPrice: "From $99",
    levels: [
      {
        name: "Starter",
        price: "$99",
        includes: [
          "Program sign up",
          "Single niche landing page",
          "Tracked links and affiliate disclosure",
        ],
      },
      {
        name: "Pro",
        price: "$190",
        includes: [
          "Site with up to 10 review and comparison pages",
          "Basic SEO",
          "Tracked links",
        ],
      },
      {
        name: "Premium",
        price: "$320",
        includes: [
          "Everything in Pro",
          "15 articles",
          "Social content plan",
        ],
      },
    ],
  },
  {
    slug: "identidad-marca",
    category: "marca-contenido",
    name: "Brand Identity",
    headline: "Before selling more, make it look worth buying from you.",
    support:
      "Logo, colors, typography, and templates so your brand looks serious everywhere.",
    ctaLabel: "I want my brand",
    benefits: [
      "Logo and consistent visual system",
      "Social media templates",
      "Gateway into the rest of the catalog",
    ],
    fromPrice: "From $60",
    levels: [
      {
        name: "Basic",
        price: "$60",
        includes: ["Logo", "Colors", "Typography"],
      },
      {
        name: "Complete",
        price: "$120",
        includes: [
          "Everything in Basic",
          "Complete visual system",
          "Social media templates",
        ],
      },
    ],
  },
  {
    slug: "contenido-redes",
    category: "marca-contenido",
    name: "Content & Social",
    headline: "Professional level content, published on time.",
    support:
      "Images, videos, and copy made with artificial intelligence and reviewed by a person.",
    ctaLabel: "I want content",
    benefits: [
      "Images, videos, and copy per piece",
      "Social media management to be agreed",
      "Publishing calendar up to date",
    ],
    fromPrice: "From $35",
    levels: [
      {
        name: "Content",
        price: "From $35",
        includes: ["Images, videos, and copy per piece"],
      },
      {
        name: "Social management",
        price: "To be agreed",
        includes: ["Calendar and ongoing publishing"],
      },
    ],
  },
  {
    slug: "asesoria-mentoria",
    category: "acompanamiento",
    name: "Coaching & Mentoring",
    headline: "A clear plan for your business and someone by your side to execute it.",
    support: "Individual or group sessions, with weekly follow up.",
    ctaLabel: "I want my coaching",
    benefits: [
      "Individual: 31 days with weekly follow up",
      "Group: 14 weeks, groups of 8 people",
      "Roadmap with clear milestones",
    ],
    fromPrice: "From $97",
    levels: [
      {
        name: "Individual",
        price: "$250",
        includes: ["31 days", "Weekly follow up"],
      },
      {
        name: "Group",
        price: "$97",
        includes: ["14 weeks", "Groups of 8 people"],
      },
    ],
  },
  {
    slug: "auditoria-ventas",
    category: "acompanamiento",
    name: "Sales Audit",
    headline: "Find out what's holding your sales back.",
    support:
      "We review your store and social media and tell you the 3 problems costing you the most, no strings attached.",
    ctaLabel: "Request my free audit",
    benefits: [
      "Store and social media review",
      "The 3 costliest problems, prioritized",
      "No strings attached",
    ],
    fromPrice: "Free",
    levels: [
      {
        name: "Audit",
        price: "Free",
        includes: ["Store and social media review", "Top 3 problems"],
      },
    ],
  },
];

export const complementaryServices = [
  { name: "Social Commerce", note: "Sold alongside the store", price: "$80" },
];
