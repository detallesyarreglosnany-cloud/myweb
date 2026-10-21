import type { Service } from "../types";

export const services: Service[] = [
  {
    slug: "pagina-ventas-reservas",
    category: "web",
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
    tags: ["Reservas", "Pagos", "WhatsApp", "Cotizador"],
    demo: "booking",
    mode: "standard",
    problem: {
      situation:
        "Un negocio de servicios agenda por mensajes: idas y vueltas, horarios cruzados y clientes que confirman y no llegan. Ese espacio queda vacío y es dinero que no vuelve.",
      cost: "Cada cita fantasma es tiempo que no se puede revender, y cada minuto coordinando por chat es un minuto que no atiendes ni vendes.",
      result:
        "Recuperas las horas perdidas en el chat y tu agenda deja de tener espacios fantasma.",
    },
    faqs: [
      {
        question: "¿El cotizador tiene costo aparte?",
        answer: "No. El cotizador instantáneo va incluido desde el nivel Starter.",
      },
      {
        question: "¿Desde qué nivel se envían recordatorios por WhatsApp?",
        answer:
          "Desde el nivel Pro, con la agenda sincronizada y recordatorios automáticos.",
      },
    ],
  },
  {
    slug: "tienda-catalogo",
    category: "web",
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
    tags: ["Catálogo", "Pagos", "WhatsApp", "PWA", "CRM"],
    demo: "store",
    mode: "standard",
    photo: "/mockups/tienda-catalogo.jpg",
    problem: {
      situation:
        "Tienes buenos productos, pero los muestras en fotos sueltas por WhatsApp o en un PDF que no invita a comprar. El cliente mira y no siente el impulso de actuar.",
      cost: "Una venta que no se cierra en el momento del interés casi nunca se recupera.",
      result:
        "Dejas de exhibir productos y empiezas a convertir visitas en ventas en el momento.",
    },
    faqs: [
      {
        question: "¿Cuántos productos puedo tener?",
        answer:
          "Hasta 50 en Starter, hasta 100 en Pro e ilimitados en Premium.",
      },
      {
        question: "¿Se puede instalar como app en el teléfono?",
        answer:
          "Sí. El nivel Premium incluye la tienda como app móvil instalable (PWA).",
      },
      {
        question: "¿Hay complementos?",
        answer: "Sí. Social Commerce, $80, se vende junto a la tienda.",
      },
    ],
  },
  {
    slug: "amazon-afiliados",
    category: "web",
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
    tags: ["Afiliación", "SEO", "Comparativas"],
    demo: "affiliate",
    mode: "standard",
    faqs: [
      {
        question: "¿Me garantizan ingresos?",
        answer:
          "No. No prometemos ingresos: armamos el sitio, los enlaces con seguimiento y el contenido para que puedas generar comisiones.",
      },
    ],
  },
  {
    slug: "plataformas-medida",
    category: "apps",
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
    tags: ["Mini apps", "Apps", "SaaS", "Marca blanca"],
    demo: "app",
    mode: "proposal",
    photo: "/mockups/plataformas-medida.jpg",
    problem: {
      situation:
        "Tienes una idea de plataforma, app o software. Sabes qué quieres vender y a quién, pero no sabes qué herramientas usar ni cómo construirlo.",
      cost: "Una idea que no se ejecuta no factura. Armar un equipo completo cuesta mucho, y probar herramientas sueltas termina en meses perdidos.",
      result: "Tu idea sale al mercado sin que tengas que aprender a construirla.",
    },
    faqs: [
      {
        question: "¿Cómo se define el precio?",
        answer:
          "Parte desde $600. El alcance, la instalación y los tiempos se definen después de conocer tu idea.",
      },
      {
        question: "¿Qué soporte incluye?",
        answer: "21 días de soporte con ajustes y personalización.",
      },
      {
        question: "¿Puedo revender la plataforma?",
        answer: "Sí. La licencia de reventa se pacta por escrito en cada caso.",
      },
    ],
  },
  {
    slug: "saas-white-label",
    category: "apps",
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
    tags: ["SaaS", "Multitenant", "Marca blanca", "Stripe Connect"],
    demo: "saas",
    mode: "proposal",
    featured: true,
    photo: "/mockups/saas-white-label.jpg",
    faqs: [
      {
        question: "¿Puedo operarla con mi propia marca?",
        answer:
          "Sí. Es la misma plataforma de Cleaning Angels, con tu marca y tus precios, para revender a tus propios clientes.",
      },
      {
        question: "¿Cómo se cobra a mis clientes?",
        answer: "Los cobros se hacen con Stripe Connect.",
      },
    ],
  },
  {
    slug: "sistema-administrativo",
    category: "systems",
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
    tags: ["Ganancias", "Inventario", "Cuentas por cobrar", "Multimoneda"],
    demo: "dashboard",
    mode: "standard",
    featured: true,
    photo: "/mockups/sistema-administrativo.jpg",
    problem: {
      situation:
        "Llevas la contabilidad en la cabeza, en una libreta o en un Excel que se actualiza a fin de mes. El negocio sigue vendiendo y comprando, pero nadie sabe en tiempo real si hoy se ganó o se perdió dinero.",
      cost: "No es solo desorden, es dinero que se va sin que nadie lo vea: productos que vencen en el estante, ventas por debajo del margen real, tasas de cambio calculadas a ojo y compras decididas por instinto.",
      result:
        "Dejas de cuadrar cuentas y decides con datos del día, no del mes pasado.",
    },
    faqs: [
      {
        question: "¿Qué incluye la entrega?",
        answer:
          "Se entrega instalado, con primer mes, asesoría, videos de uso, instrucciones y traspaso de información.",
      },
      {
        question: "¿Puedo empezar con un solo módulo?",
        answer:
          "Sí. El nivel Base incluye un módulo a elegir, por ejemplo ganancias e inventario.",
      },
    ],
  },
  {
    slug: "revenue-autopilot",
    category: "ai",
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
    tags: ["Reservas", "Pagos", "Portal de clientes", "Agente IA"],
    demo: "revenue",
    mode: "proposal",
    featured: true,
    faqs: [
      {
        question: "¿El agente de IA tiene costo aparte?",
        answer: "No. El agente de IA en WhatsApp va incluido en la plataforma.",
      },
    ],
  },
  {
    slug: "agentes-ia-atencion",
    category: "ai",
    name: "Agentes de IA para Atención al Cliente",
    headline: "Que tus clientes reciban respuesta, aunque no estés en línea.",
    support:
      "Integramos un agente de IA que atiende a tus clientes dentro de tu página web o de tu sistema.",
    ctaLabel: "Quiero mi agente de IA",
    benefits: [
      "Integrado en tu página web o en tu sistema",
      "Responde las preguntas de tus clientes",
      "Alcance definido según tu negocio",
    ],
    fromPrice: "A cotizar",
    levels: [
      {
        name: "A la medida",
        price: "A cotizar",
        includes: [
          "Agente de IA para atención al cliente",
          "Integración en tu página web o tu sistema",
        ],
      },
    ],
    tags: ["Agente IA", "Atención al cliente", "Web", "Sistemas"],
    demo: "agent",
    mode: "proposal",
    faqs: [
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Se cotiza según tu proyecto, después de conocer tu negocio y dónde va a trabajar el agente.",
      },
    ],
  },
  {
    slug: "automatizacion-procesos",
    category: "ai",
    name: "Automatización de Procesos",
    headline: "Que las tareas repetitivas se hagan solas.",
    support:
      "Automatizamos procesos de tu negocio dentro de tu página web o de tus sistemas, para que tu equipo deje de hacerlos a mano.",
    ctaLabel: "Quiero automatizar",
    benefits: [
      "Procesos que hoy se hacen a mano, automatizados",
      "Funciona sobre tu página web o tus sistemas",
      "Alcance definido según tu operación",
    ],
    fromPrice: "A cotizar",
    levels: [
      {
        name: "A la medida",
        price: "A cotizar",
        includes: [
          "Automatización de procesos",
          "Integración con tu página web o tus sistemas",
        ],
      },
    ],
    tags: ["Automatización", "Procesos", "Web", "Sistemas"],
    demo: "automation",
    mode: "proposal",
    faqs: [
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Se cotiza según tu proyecto, después de conocer los procesos que quieres automatizar.",
      },
    ],
  },
  {
    slug: "shopify-tiendas",
    category: "commerce",
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
    tags: ["Shopify", "Pagos", "Envíos", "Redes sociales"],
    demo: "shopify",
    mode: "standard",
    photo: "/mockups/shopify-tiendas.jpg",
    faqs: [
      {
        question: "¿Quién paga la suscripción de Shopify?",
        answer: "La suscripción de Shopify la paga el cliente.",
      },
    ],
  },
  {
    slug: "amazon-tiendas",
    category: "commerce",
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
    tags: ["Amazon", "Listings", "Publicidad"],
    demo: "amazon",
    mode: "standard",
    faqs: [
      {
        question: "¿La publicidad está incluida?",
        answer: "No. La inversión en publicidad de Amazon la paga el cliente aparte.",
      },
      {
        question: "¿Desde qué país puedo vender?",
        answer:
          "Se ofrece a vendedores de cualquier país, sujeto a las reglas de Amazon.",
      },
    ],
  },
  {
    slug: "identidad-marca",
    category: "brand",
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
    tags: ["Logo", "Sistema visual", "Plantillas"],
    demo: "brand",
    mode: "standard",
    problem: {
      situation:
        "Muchos negocios pequeños arrancan con un logo hecho a las carreras, sin identidad visual consistente ni plantillas para redes.",
      cost: "Una marca que no se ve profesional genera desconfianza antes de que el cliente pruebe el producto.",
      result:
        "Ganas una primera impresión profesional y quedas listo para el siguiente paso.",
    },
    faqs: [
      {
        question: "¿Qué diferencia hay entre Básica y Completa?",
        answer:
          "Básica incluye logo, colores y tipografía. Completa suma el sistema visual completo y plantillas para redes.",
      },
    ],
  },
  {
    slug: "contenido-redes",
    category: "brand",
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
    tags: ["Contenido", "Redes sociales", "IA"],
    demo: "content",
    mode: "standard",
    faqs: [
      {
        question: "¿Cómo se cobra?",
        answer:
          "El contenido se cobra por pieza, desde $35. La gestión de redes se define a convenir.",
      },
    ],
  },
  {
    slug: "asesoria-mentoria",
    category: "brand",
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
    tags: ["Estrategia", "Hoja de ruta", "Seguimiento"],
    demo: "roadmap",
    mode: "standard",
    photo: "/mockups/asesoria-mentoria.jpg",
    faqs: [
      {
        question: "¿Cuánto dura?",
        answer:
          "La individual dura 31 días con seguimiento semanal. La grupal es de 14 semanas, con 8 personas.",
      },
    ],
  },
  {
    slug: "auditoria-ventas",
    category: "brand",
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
    tags: ["Gratis", "Diagnóstico"],
    demo: "audit",
    mode: "standard",
    faqs: [
      {
        question: "¿Tiene algún costo?",
        answer: "No. Es gratis y sin compromiso.",
      },
    ],
  },
];
