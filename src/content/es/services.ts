import type { Service } from "../types";

export const services: Service[] = [
  {
    slug: "pagina-ventas-reservas",
    category: "vender",
    name: "Página de Ventas y Reservas",
    headline: "Que tu página venda y agende por ti.",
    support:
      "Cobra, reserva citas y responde dudas mientras tú atiendes tu negocio.",
    ctaLabel: "Quiero mi página",
    benefits: [
      "Landing de alta conversión con botón de pago o reserva con abono",
      "Cotizador instantáneo y chat en vivo incluidos",
      "Agenda sincronizada con recordatorios automáticos por WhatsApp",
    ],
    fromPrice: "Desde $199",
    levels: [
      {
        name: "Starter",
        price: "$199",
        includes: [
          "Landing de alta conversión",
          "Botón de pago o de reserva con abono",
          "Cotizador instantáneo",
          "Chat en vivo",
        ],
      },
      {
        name: "Pro",
        price: "$280",
        includes: [
          "Todo lo de Starter",
          "Embudo con seguimiento de eventos y remarketing",
          "Agenda sincronizada con recordatorios por WhatsApp",
          "Cronómetro de ofertas y editor de servicios",
        ],
      },
      {
        name: "Premium",
        price: "$390",
        includes: [
          "Todo lo de Pro",
          "Acceso de clientes con su cuenta",
          "Panel administrativo y reportes",
          "Pruebas A/B",
        ],
      },
    ],
  },
  {
    slug: "tienda-catalogo",
    category: "tienda",
    name: "Tienda y Catálogo Online",
    headline: "Que tu catálogo deje de solo verse y empiece a vender.",
    support:
      "Tu tienda abierta las 24 horas, con inventario al día y pedido directo a tu WhatsApp.",
    ctaLabel: "Quiero mi tienda",
    benefits: [
      "Presentación visual e interactiva, productos ilimitados en Premium",
      "Compra directa por WhatsApp o pasarela de pago",
      "Cotizador instantáneo y rescate de carritos incluidos desde Pro",
    ],
    fromPrice: "Desde $290",
    levels: [
      {
        name: "Starter",
        price: "$290",
        includes: [
          "Presentación visual e interactiva",
          "Compra directa por WhatsApp o pasarela de pago",
          "Hasta 50 productos",
          "Chatbot",
        ],
      },
      {
        name: "Pro",
        price: "$390",
        includes: [
          "Todo lo de Starter",
          "Cotizador y rescate de carritos por correo o WhatsApp",
          "Sincronización con CRM",
          "Hasta 100 productos y analítica básica",
        ],
      },
      {
        name: "Premium",
        price: "$540",
        includes: [
          "Todo lo de Pro",
          "App móvil instalable (PWA)",
          "Analítica avanzada",
          "Productos ilimitados y reportes automáticos",
        ],
      },
    ],
  },
  {
    slug: "sistema-administrativo",
    category: "controlar",
    name: "Sistema Administrativo Personalizado",
    headline: "Deja de administrar tu negocio a ciegas.",
    support:
      "Ganancias, inventario y vendedores en una sola pantalla. Te lo dejamos instalado, con tu marca y con capacitación en video.",
    ctaLabel: "Quiero verlo funcionando",
    benefits: [
      "Margen por producto automático y entradas y salidas al instante",
      "Cuentas por cobrar y por pagar en una sola pantalla",
      "Instalación, primer mes, asesoría, videos de uso y traspaso de información",
    ],
    fromPrice: "Desde $450",
    levels: [
      {
        name: "Base",
        price: "$450",
        includes: [
          "Un módulo a elegir, por ejemplo ganancias e inventario",
          "Instalación y primer mes",
          "Asesoría y videos de uso",
          "Instrucciones y traspaso de información",
        ],
      },
      {
        name: "Completo",
        price: "$750",
        includes: [
          "Dos o más módulos",
          "Cuentas por cobrar y por pagar",
          "Multimoneda",
        ],
      },
      {
        name: "Premium",
        price: "A convenir",
        includes: [
          "Todo lo de Completo",
          "Portal de clientes",
          "Conciliación de pagos",
        ],
      },
    ],
  },
  {
    slug: "plataformas-medida",
    category: "crear",
    name: "Plataformas a la Medida",
    headline: "Tienes una idea y no sabes cómo ejecutarla. La ejecutamos por ti.",
    support:
      "Mini apps, apps, SaaS o marca blanca. Te entregamos todo instalado y con todos los derechos.",
    ctaLabel: "Cuéntame mi idea",
    benefits: [
      "Alcance, instalación y tiempos definidos según tu idea",
      "21 días de soporte con ajustes y personalización incluidos",
      "Licencia de reventa pactada por escrito en cada caso",
    ],
    fromPrice: "Desde $600",
    levels: [
      {
        name: "A la medida",
        price: "Desde $600",
        includes: [
          "Mini apps, apps, SaaS o marca blanca",
          "Cotización según la idea",
          "21 días de soporte incluido",
        ],
      },
    ],
  },
  {
    slug: "revenue-autopilot",
    category: "crear",
    name: "Revenue Autopilot",
    headline: "Toda tu operación, automatizada.",
    support:
      "La plataforma de reservas, pagos y atención que trabaja por ti mientras duermes.",
    ctaLabel: "Quiero la plataforma completa",
    benefits: [
      "Plataforma de reservas con precios dinámicos",
      "Pagos en línea y facturación",
      "Portal de clientes",
      "Agente de IA en WhatsApp incluido",
    ],
    fromPrice: "Desde $4,900",
    badge: "Mejor retorno",
    levels: [
      {
        name: "Revenue Autopilot",
        price: "Desde $4,900",
        includes: [
          "Plataforma de reservas con precios dinámicos",
          "Pagos en línea y facturación",
          "Portal de clientes",
          "Agente de IA en WhatsApp incluido",
        ],
      },
    ],
  },
  {
    slug: "saas-white-label",
    category: "crear",
    name: "SaaS White Label",
    headline: "Multitenant. Revende a tus propios clientes.",
    support:
      "La misma plataforma que usamos en Cleaning Angels, con tu marca y tus precios.",
    ctaLabel: "Convertirme en proveedor SaaS",
    benefits: [
      "Arquitectura multitenant",
      "Tu marca y tus precios, para revender a tus clientes",
      "Cobros con Stripe Connect",
      "Panel de administración propio",
    ],
    fromPrice: "Desde $4,900",
    levels: [
      {
        name: "SaaS White Label",
        price: "Desde $4,900",
        includes: [
          "Arquitectura multitenant",
          "Tu marca y tus precios, para revender a tus clientes",
          "Cobros con Stripe Connect",
          "Panel de administración propio",
        ],
      },
    ],
  },
  {
    slug: "amazon-tiendas",
    category: "amazon",
    name: "Tiendas en Amazon",
    headline: "Vende en Amazon sin perderte en el proceso.",
    support:
      "Abrimos tu cuenta, optimizamos tus productos y armamos tu publicidad para que te encuentren.",
    ctaLabel: "Quiero vender en Amazon",
    benefits: [
      "Cuenta de vendedor, verificación y método de cobro listos",
      "Listings optimizados con palabras clave",
      "A+ Content, campañas iniciales y reporte del primer mes en Premium",
    ],
    fromPrice: "Desde $150",
    levels: [
      {
        name: "Starter, Apertura",
        price: "$150",
        includes: [
          "Cuenta de vendedor y verificación",
          "Método de cobro",
          "Lista de cumplimiento",
        ],
      },
      {
        name: "Pro, Listings",
        price: "$270",
        includes: [
          "Todo lo de Starter",
          "5 listings optimizados",
          "Palabras clave",
        ],
      },
      {
        name: "Premium, Ventas",
        price: "$440",
        includes: [
          "Todo lo de Pro",
          "A+ Content en 3 productos",
          "Campañas iniciales de publicidad",
          "Reporte del primer mes",
        ],
      },
    ],
  },
  {
    slug: "shopify-tiendas",
    category: "tienda",
    name: "Tiendas Shopify",
    headline: "Tu tienda en Shopify, lista para recibir pedidos.",
    support:
      "Diseño, productos, pagos y envíos configurados, y una sesión para que aprendas a manejarla.",
    ctaLabel: "Quiero mi tienda Shopify",
    benefits: [
      "Tienda base con tema de marca y pasarela y envíos listos",
      "Rescate de carritos, WhatsApp, SEO básico y analítica desde Pro",
      "Instagram, TikTok y Facebook Shops en Premium, con capacitación",
    ],
    fromPrice: "Desde $150",
    levels: [
      {
        name: "Starter",
        price: "$150",
        includes: [
          "Tienda base con tema de marca",
          "Hasta 20 productos",
          "Pasarela y envíos",
        ],
      },
      {
        name: "Pro",
        price: "$260",
        includes: [
          "Hasta 100 productos",
          "Rescate de carritos y WhatsApp",
          "SEO básico y analítica",
        ],
      },
      {
        name: "Premium",
        price: "$420",
        includes: [
          "Tema avanzado",
          "Instagram, TikTok y Facebook Shops",
          "Correos automáticos",
          "2 sesiones de capacitación",
        ],
      },
    ],
  },
  {
    slug: "amazon-afiliados",
    category: "amazon",
    name: "Amazon Afiliados",
    headline: "Gana comisiones recomendando lo que la gente ya compra.",
    support:
      "Armamos tu sitio de reseñas y comparativas para que tu contenido trabaje todos los días.",
    ctaLabel: "Quiero empezar",
    benefits: [
      "Alta en el programa y enlaces con seguimiento",
      "Sitio de reseñas y comparativas con SEO básico",
      "Plan de contenido para redes en Premium",
    ],
    fromPrice: "Desde $99",
    levels: [
      {
        name: "Starter",
        price: "$99",
        includes: [
          "Alta en el programa",
          "Landing de un nicho",
          "Enlaces con seguimiento y aviso de afiliado",
        ],
      },
      {
        name: "Pro",
        price: "$190",
        includes: [
          "Sitio de hasta 10 páginas de reseñas y comparativas",
          "SEO básico",
          "Enlaces con seguimiento",
        ],
      },
      {
        name: "Premium",
        price: "$320",
        includes: [
          "Todo lo de Pro",
          "15 artículos",
          "Plan de contenido para redes",
        ],
      },
    ],
  },
  {
    slug: "identidad-marca",
    category: "marca-contenido",
    name: "Identidad de Marca",
    headline: "Antes de vender más, que se vea que vale la pena comprarte.",
    support:
      "Logo, colores, tipografía y plantillas para que tu marca se vea seria en todos tus canales.",
    ctaLabel: "Quiero mi marca",
    benefits: [
      "Logo y sistema visual coherente",
      "Plantillas para redes",
      "Puerta de entrada al resto del catálogo",
    ],
    fromPrice: "Desde $60",
    levels: [
      {
        name: "Básica",
        price: "$60",
        includes: ["Logo", "Colores", "Tipografía"],
      },
      {
        name: "Completa",
        price: "$120",
        includes: [
          "Todo lo de Básica",
          "Sistema visual completo",
          "Plantillas para redes",
        ],
      },
    ],
  },
  {
    slug: "contenido-redes",
    category: "marca-contenido",
    name: "Contenido y Redes",
    headline: "Contenido de nivel profesional, publicado a tiempo.",
    support:
      "Imágenes, videos y textos hechos con inteligencia artificial y revisados por una persona.",
    ctaLabel: "Quiero contenido",
    benefits: [
      "Imágenes, videos y textos por pieza",
      "Gestión de redes a convenir",
      "Calendario de publicaciones al día",
    ],
    fromPrice: "Desde $35",
    levels: [
      {
        name: "Contenido",
        price: "Desde $35",
        includes: ["Imágenes, videos y textos por pieza"],
      },
      {
        name: "Gestión de redes",
        price: "A convenir",
        includes: ["Calendario y publicación continua"],
      },
    ],
  },
  {
    slug: "asesoria-mentoria",
    category: "acompanamiento",
    name: "Asesoría y Mentoría",
    headline: "Un plan claro para tu negocio y alguien que te acompaña a ejecutarlo.",
    support: "Sesiones individuales o en grupo, con seguimiento semanal.",
    ctaLabel: "Quiero mi asesoría",
    benefits: [
      "Individual: 31 días con seguimiento semanal",
      "Grupal: 14 semanas, con 8 personas",
      "Hoja de ruta con hitos claros",
    ],
    fromPrice: "Desde $97",
    levels: [
      {
        name: "Individual",
        price: "$250",
        includes: ["31 días", "Seguimiento semanal"],
      },
      {
        name: "Grupal",
        price: "$97",
        includes: ["14 semanas", "Grupo de 8 personas"],
      },
    ],
  },
  {
    slug: "auditoria-ventas",
    category: "acompanamiento",
    name: "Auditoría de Ventas",
    headline: "Descubre qué te está frenando las ventas.",
    support:
      "Revisamos tu tienda y tus redes y te decimos los 3 problemas que más te cuestan, sin compromiso.",
    ctaLabel: "Pedir mi auditoría gratis",
    benefits: [
      "Revisión de tienda y redes",
      "Los 3 problemas que más cuestan, priorizados",
      "Sin compromiso",
    ],
    fromPrice: "Gratis",
    levels: [
      {
        name: "Auditoría",
        price: "Gratis",
        includes: ["Revisión de tienda y redes", "Los 3 problemas principales"],
      },
    ],
  },
];

export const complementaryServices = [
  { name: "Social Commerce", note: "Se vende junto a la tienda", price: "$80" },
];
