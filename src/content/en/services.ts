import type { Service } from "../types";

export const services: Service[] = [
  {
    slug: "pagina-ventas-reservas",
    category: "web",
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
    tags: ["Booking", "Payments", "WhatsApp", "Quote tool"],
    demo: "booking",
    mode: "standard",
    problem: {
      situation: "A service business books by message: back and forth, crossed time slots, and clients who confirm and don't show up. That slot stays empty, and that's money that doesn't come back.",
      cost: "Every no show is time you can't resell, and every minute coordinating by chat is a minute you're not serving or selling.",
      result: "You win back the hours lost in chat and your calendar stops having ghost slots.",
    },
    faqs: [
      {
        question: "Does the quote tool cost extra?",
        answer: "No. The instant quote tool is included from the Starter level.",
      },
      {
        question: "From which level are WhatsApp reminders sent?",
        answer: "From the Pro level, with the synced calendar and automatic reminders.",
      },
    ],
  },
  {
    slug: "tienda-catalogo",
    category: "web",
    name: "Online Store & Catalog",
    headline: "Your catalog, done looking pretty and starting to sell.",
    support:
      "Your store open 24 hours, with inventory up to date and orders straight to your WhatsApp.",
    ctaLabel: "I want my store",
    benefits: [
      "Visual, interactive presentation, unlimited products in Premium",
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
    tags: ["Catalog", "Payments", "WhatsApp", "PWA", "CRM"],
    demo: "store",
    mode: "standard",
    photo: "/mockups/tienda-catalogo.jpg",
    problem: {
      situation: "You have good products, but you show them in loose photos on WhatsApp or in a PDF that doesn't invite anyone to buy. The client looks and doesn't feel the urge to act.",
      cost: "A sale that doesn't close at the moment of interest is almost never recovered.",
      result: "You stop displaying products and start turning visits into sales on the spot.",
    },
    faqs: [
      {
        question: "How many products can I have?",
        answer: "Up to 50 in Starter, up to 100 in Pro, and unlimited in Premium.",
      },
      {
        question: "Can it be installed as an app on a phone?",
        answer: "Yes. The Premium level includes the store as an installable mobile app (PWA).",
      },
      {
        question: "Are there add ons?",
        answer: "Yes. Social Commerce, $80, sold together with the store.",
      },
    ],
  },
  {
    slug: "amazon-afiliados",
    category: "web",
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
    tags: ["Affiliate", "SEO", "Comparisons"],
    demo: "affiliate",
    mode: "standard",
    faqs: [
      {
        question: "Do you guarantee income?",
        answer: "No. We don't promise income: we build the site, the tracked links, and the content so you can earn commissions.",
      },
    ],
  },
  {
    slug: "plataformas-medida",
    category: "apps",
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
    tags: ["Mini apps", "Apps", "SaaS", "White label"],
    demo: "app",
    mode: "proposal",
    photo: "/mockups/plataformas-medida.jpg",
    problem: {
      situation: "You have an idea for a platform, app, or software. You know what you want to sell and to whom, but you don't know which tools to use or how to build it.",
      cost: "An idea that isn't built doesn't bill. Hiring a full team costs a lot, and testing loose tools ends in lost months.",
      result: "Your idea reaches the market without you having to learn how to build it.",
    },
    faqs: [
      {
        question: "How is the price defined?",
        answer: "It starts from $600. Scope, installation, and timeline are defined after we understand your idea.",
      },
      {
        question: "What support is included?",
        answer: "21 days of support with adjustments and customization.",
      },
      {
        question: "Can I resell the platform?",
        answer: "Yes. The resale license is agreed in writing for each case.",
      },
    ],
  },
  {
    slug: "saas-white-label",
    category: "apps",
    name: "SaaS White Label",
    headline: "Multitenant. Resell to your own clients.",
    support:
      "The same platform we run for Cleaning Angels, with your brand and your pricing.",
    ctaLabel: "Become a SaaS provider",
    benefits: [
      "Multitenant architecture",
      "Your brand and your pricing, resold to your own clients",
      "Payments with Stripe Connect",
      "Your own admin panel",
    ],
    fromPrice: "From $4,900",
    levels: [
      {
        name: "SaaS White Label",
        price: "From $4,900",
        includes: [
          "Multitenant architecture",
          "Your brand and your pricing, resold to your own clients",
          "Payments with Stripe Connect",
          "Your own admin panel",
        ],
      },
    ],
    tags: ["SaaS", "Multitenant", "White label", "Stripe Connect"],
    demo: "saas",
    mode: "proposal",
    featured: true,
    photo: "/mockups/saas-white-label.jpg",
    faqs: [
      {
        question: "Can I run it under my own brand?",
        answer: "Yes. It's the same platform as Cleaning Angels, with your brand and your pricing, to resell to your own clients.",
      },
      {
        question: "How do my clients pay?",
        answer: "Payments run through Stripe Connect.",
      },
    ],
  },
  {
    slug: "sistema-administrativo",
    category: "systems",
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
    tags: ["Profits", "Inventory", "Receivables", "Multi currency"],
    demo: "dashboard",
    mode: "standard",
    featured: true,
    photo: "/mockups/sistema-administrativo.jpg",
    problem: {
      situation: "You keep the books in your head, in a notebook, or in a spreadsheet updated at the end of the month. The business keeps selling and buying, but nobody knows in real time whether today made or lost money.",
      cost: "It's not just disorder, it's money leaving without anyone seeing it: products expiring on the shelf, sales below real margin, exchange rates guessed by eye, and purchases decided on instinct.",
      result: "You stop reconciling accounts and decide with today's data, not last month's.",
    },
    faqs: [
      {
        question: "What does delivery include?",
        answer: "It's delivered installed, with the first month, coaching, tutorial videos, instructions, and data handover.",
      },
      {
        question: "Can I start with a single module?",
        answer: "Yes. The Base level includes one module of your choice, for example profits and inventory.",
      },
    ],
  },
  {
    slug: "revenue-autopilot",
    category: "ai",
    name: "Revenue Autopilot",
    headline: "Your entire operation, automated.",
    support:
      "The booking, payment, and support platform that works for you while you sleep.",
    ctaLabel: "I want the full platform",
    benefits: [
      "Booking platform with dynamic pricing",
      "Online payments and invoicing",
      "Client portal",
      "WhatsApp AI agent included",
    ],
    fromPrice: "From $4,900",
    badge: "Best ROI",
    levels: [
      {
        name: "Revenue Autopilot",
        price: "From $4,900",
        includes: [
          "Booking platform with dynamic pricing",
          "Online payments and invoicing",
          "Client portal",
          "WhatsApp AI agent included",
        ],
      },
    ],
    tags: ["Booking", "Payments", "Client portal", "AI agent"],
    demo: "revenue",
    mode: "proposal",
    featured: true,
    faqs: [
      {
        question: "Does the AI agent cost extra?",
        answer: "No. The WhatsApp AI agent is included in the platform.",
      },
    ],
  },
  {
    slug: "agentes-ia-atencion",
    category: "ai",
    name: "AI Customer Service Agents",
    headline: "Your clients get an answer, even when you're offline.",
    support:
      "We integrate an AI agent that serves your clients inside your website or your system.",
    ctaLabel: "I want my AI agent",
    benefits: [
      "Integrated into your website or your system",
      "Answers your clients' questions",
      "Scope defined around your business",
    ],
    fromPrice: "Quoted",
    levels: [
      {
        name: "Custom",
        price: "Quoted",
        includes: [
          "AI agent for customer service",
          "Integration into your website or your system",
        ],
      },
    ],
    tags: ["AI agent", "Customer service", "Web", "Systems"],
    demo: "agent",
    mode: "proposal",
    faqs: [
      {
        question: "How much does it cost?",
        answer: "It's quoted per project, after we understand your business and where the agent will work.",
      },
    ],
  },
  {
    slug: "automatizacion-procesos",
    category: "ai",
    name: "Process Automation",
    headline: "Let repetitive tasks run themselves.",
    support:
      "We automate your business processes inside your website or your systems, so your team stops doing them by hand.",
    ctaLabel: "I want to automate",
    benefits: [
      "Processes done by hand today, automated",
      "Runs on your website or your systems",
      "Scope defined around your operation",
    ],
    fromPrice: "Quoted",
    levels: [
      {
        name: "Custom",
        price: "Quoted",
        includes: [
          "Process automation",
          "Integration with your website or your systems",
        ],
      },
    ],
    tags: ["Automation", "Processes", "Web", "Systems"],
    demo: "automation",
    mode: "proposal",
    faqs: [
      {
        question: "How much does it cost?",
        answer: "It's quoted per project, after we understand the processes you want to automate.",
      },
    ],
  },
  {
    slug: "shopify-tiendas",
    category: "commerce",
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
    tags: ["Shopify", "Payments", "Shipping", "Social media"],
    demo: "shopify",
    mode: "standard",
    photo: "/mockups/shopify-tiendas.jpg",
    faqs: [
      {
        question: "Who pays the Shopify subscription?",
        answer: "The client pays the Shopify subscription.",
      },
    ],
  },
  {
    slug: "amazon-tiendas",
    category: "commerce",
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
    tags: ["Amazon", "Listings", "Ads"],
    demo: "amazon",
    mode: "standard",
    faqs: [
      {
        question: "Is advertising included?",
        answer: "No. The client pays the Amazon ad spend separately.",
      },
      {
        question: "Which countries can I sell from?",
        answer: "It's offered to sellers from any country, subject to Amazon's rules.",
      },
    ],
  },
  {
    slug: "identidad-marca",
    category: "brand",
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
    tags: ["Logo", "Visual system", "Templates"],
    demo: "brand",
    mode: "standard",
    problem: {
      situation: "Many small businesses start with a logo made in a rush, with no consistent visual identity and no social media templates.",
      cost: "A brand that doesn't look professional creates distrust before the client tries the product.",
      result: "You make a professional first impression and you're ready for the next step.",
    },
    faqs: [
      {
        question: "What's the difference between Basic and Complete?",
        answer: "Basic includes logo, colors, and typography. Complete adds the full visual system and social media templates.",
      },
    ],
  },
  {
    slug: "contenido-redes",
    category: "brand",
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
    tags: ["Content", "Social media", "AI"],
    demo: "content",
    mode: "standard",
    faqs: [
      {
        question: "How is it priced?",
        answer: "Content is priced per piece, from $35. Social media management is agreed case by case.",
      },
    ],
  },
  {
    slug: "asesoria-mentoria",
    category: "brand",
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
    tags: ["Strategy", "Roadmap", "Follow up"],
    demo: "roadmap",
    mode: "standard",
    photo: "/mockups/asesoria-mentoria.jpg",
    faqs: [
      {
        question: "How long does it last?",
        answer: "Individual lasts 31 days with weekly follow up. Group runs 14 weeks, with 8 people.",
      },
    ],
  },
  {
    slug: "auditoria-ventas",
    category: "brand",
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
    tags: ["Free", "Diagnosis"],
    demo: "audit",
    mode: "standard",
    faqs: [
      {
        question: "Does it cost anything?",
        answer: "No. It's free and no strings attached.",
      },
    ],
  },
];
