import type {
  AuditBandContent,
  ContactContent,
  HeroContent,
  ProcessContent,
  ProductFrameContent,
  ServiceDetailContent,
  SolutionsSectionContent,
} from "../types";

export const hero: HeroContent = {
  eyebrow: "Soluciones digitales a tu medida",
  headlinePrefix: "Diseñamos y construimos los sistemas que tu negocio necesita para",
  headlineAccent: "vender, operar y crecer.",
  support:
    "Páginas, tiendas, sistemas, automatizaciones y plataformas hechas a la medida de cómo funciona tu negocio. Precio claro, entrega en 7 días, guías y soporte incluidos.",
  primaryCta: { label: "Explorar soluciones", href: "#soluciones" },
  secondaryCta: {
    label: "Diseñar mi solución",
    whatsappMessage:
      "Hola, Daniela. Quiero diseñar una solución a la medida de mi negocio.",
  },
  trustBadge: "Clientes en Colombia, Venezuela, Perú, México y EEUU",
  stage: {
    note: "Interfaces ilustrativas con datos ficticios",
    adminAlt: "Panel administrativo diseñado por Daniela Silva",
    appAlt: "Aplicación de catálogo móvil diseñada por Daniela Silva",
    feed: [
      { title: "Nuevo pedido", detail: "Pago confirmado" },
      { title: "Cita agendada", detail: "Recordatorio programado" },
      { title: "Factura enviada", detail: "Inventario actualizado" },
    ],
    booking: { title: "Reservar cita", slot: "Sáb · 10:00", status: "Confirmada" },
    flow: { label: "Automatización", steps: ["Pedido", "Factura", "Aviso"] },
    agent: {
      question: "¿Tienen disponibilidad el sábado?",
      answer: "Sí, a las 10:00. ¿Te la reservo?",
    },
  },
};

export const productFrame: ProductFrameContent = {
  eyebrow: "En acción",
  title: "Así se ve un negocio que vende solo",
  caption: "Vista previa del producto",
  placeholderNote:
    "Sistemas a medida, con IA integrada, pensados para digitalizar, asegurar y hacer crecer tu negocio.",
};

export const solutions: SolutionsSectionContent = {
  eyebrow: "Soluciones",
  title: "Una solución para cada parte de tu negocio",
  intro:
    "Explora cada solución como un producto: mira cómo funciona, qué incluye y cuánto cuesta.",
  allFilterLabel: "Todas",
  viewSolutionLabel: "Ver solución",
  featuredLabel: "Destacada",
  demoNote: "Las demostraciones usan datos ficticios para mostrar cómo funciona cada solución.",
  countLabel: "{count} soluciones",
  quickViewLabel: "Explorar",
  closeLabel: "Cerrar",
  problemLabel: "Qué resuelve",
  howLabel: "Cómo funciona",
  includesLabel: "Qué incluye",
  optionsLabel: "Opciones",
  customizeStandard: "Eliges el nivel que se ajusta a tu negocio y lo adaptamos a tu marca y tus procesos.",
  customizeProposal: "Se diseña a la medida: preparamos una propuesta según tus procesos y tu modelo de negocio.",
  tryLabel: "Pruébalo",
  categories: [
    {
      id: "web",
      label: "Web y conversión",
      description: "Páginas, catálogos y sitios pensados para que tus visitas reserven, compren o te escriban.",
    },
    {
      id: "apps",
      label: "Aplicaciones y plataformas",
      description: "Plataformas y aplicaciones construidas a la medida de tu modelo de negocio.",
    },
    {
      id: "systems",
      label: "Sistemas empresariales",
      description: "Tu operación, tus números y tu equipo en un solo lugar.",
    },
    {
      id: "ai",
      label: "IA y automatización",
      description: "Agentes y automatizaciones que atienden, responden y ejecutan tareas por ti.",
    },
    {
      id: "commerce",
      label: "Comercio e integraciones",
      description: "Tiendas en Shopify y Amazon conectadas con tu forma de vender.",
    },
    {
      id: "brand",
      label: "Marca, crecimiento y acompañamiento",
      description: "Identidad, contenido y acompañamiento para crecer con estrategia.",
    },
  ],
  customCta: {
    title: "¿No ves exactamente lo que necesitas?",
    support:
      "Cuéntanos cómo funciona tu negocio y diseñamos la solución a tu medida.",
    label: "Diseñar mi solución",
  },
};

export const serviceDetail: ServiceDetailContent = {
  homeLabel: "Inicio",
  solutionsLabel: "Soluciones",
  backLabel: "Volver a todas las soluciones",
  problemLabel: "El problema",
  problemCostLabel: "Lo que te cuesta",
  problemResultLabel: "El resultado",
  benefitsLabel: "Qué obtienes",
  levelsLabel: "Niveles y precios",
  previewLabel: "Vista del producto",
  faqLabel: "Preguntas frecuentes",
  ctaTitle: "¿Lo construimos para tu negocio?",
  ctaSupport: "Escríbenos por WhatsApp y te respondemos con el siguiente paso.",
  proposalCtaLabel: "Solicitar propuesta personalizada",
  relatedLabel: "Otras soluciones de esta categoría",
  whatsappStandard: "Hola, Daniela. Me interesa {service}. Quiero saber cómo empezar.",
  whatsappProposal: "Hola, Daniela. Quiero solicitar una propuesta para {service}.",
};

export const processSection: ProcessContent = {
  eyebrow: "Proceso",
  title: "Cómo trabajamos",
  steps: [
    {
      title: "Cuéntanos tu idea",
      description:
        "Nos escribes por WhatsApp y entendemos cómo funciona tu negocio hoy.",
    },
    {
      title: "La construimos",
      description:
        "Diseñamos y desarrollamos la solución a la medida de tus procesos.",
    },
    {
      title: "Te la entregamos instalada",
      description:
        "Con guías y soporte incluidos, para que la uses desde el primer día.",
    },
  ],
};

export const auditBand: AuditBandContent = {
  eyebrow: "Recursos",
  title: "Descubre qué te está frenando las ventas.",
  support:
    "Revisamos tu tienda y tus redes y te decimos los 3 problemas que más te cuestan, sin compromiso.",
  ctaLabel: "Pedir mi auditoría gratis",
  whatsappMessage: "Hola, Daniela. Quiero pedir mi auditoría de ventas gratis.",
};

export const contact: ContactContent = {
  eyebrow: "Contacto",
  title: "Escríbenos y empecemos.",
  support:
    "Cuéntanos qué necesitas por WhatsApp. También puedes ver nuestro trabajo en Instagram.",
  whatsappLabel: "Escribir por WhatsApp",
  instagramLabel: "Ver Instagram",
  form: {
    needLabel: "¿Qué necesitas construir?",
    otherOption: "Aún no lo sé",
    detailLabel: "Cuéntanos tu necesidad",
    detailPlaceholder: "Por ejemplo: tengo una tienda de ropa y quiero recibir pedidos y pagos en línea.",
    nameLabel: "Tu nombre (opcional)",
    submitLabel: "Enviar por WhatsApp",
    error: "Cuéntanos en una frase qué necesitas para poder ayudarte.",
    success: "Listo. Abrimos WhatsApp con tu mensaje para que solo tengas que enviarlo.",
    retryLabel: "Abrir WhatsApp de nuevo",
    template: "Hola, Daniela. {name}Necesito: {need}. {detail}",
    anonymous: "",
  },
};
