import type { AboutContent, FlagshipProjectContent } from "../types";

export const about: AboutContent = {
  eyebrow: "Quién está detrás",
  title: "No vendo horas. Construyo activos que trabajan por ti.",
  body: [
    "Creadora de sistemas de IA y fundadora de un SaaS propio, con más de 6 años construyendo infraestructura digital para negocios en Colombia, Venezuela, Perú, México y Estados Unidos.",
    "No solo escribo código: opero mi propio SaaS, Cleaning Angels, así que sé exactamente lo que cuesta mantener un sistema vivo después del lanzamiento.",
    "Hoy pongo esa misma experiencia al servicio de páginas de ventas, tiendas, sistemas administrativos y plataformas a la medida: precio claro y entrega real.",
  ],
  highlights: [
    { value: "6+", label: "Años construyendo sistemas digitales" },
    { value: "50+", label: "Sistemas entregados" },
    { value: "5 países", label: "Colombia, Venezuela, Perú, México y EEUU" },
  ],
  photoAlt: "Daniela Silva, estratega digital",
};

export const flagshipProject: FlagshipProjectContent = {
  eyebrow: "Proyecto estrella",
  title: "Cleaning Angels, en Washington D.C., Maryland y Virginia",
  description:
    "Una agencia de limpieza con más de 40 reservas semanales, gestionadas antes por WhatsApp y papel. Diseñamos, construimos y operamos la plataforma que automatizó todo: reservas en línea, pagos, portal de clientes, gestión de personal y comunicaciones automáticas.",
  stats: [
    { value: "−40%", label: "Citas perdidas" },
    { value: "+25%", label: "Reservas en 60 días" },
    { value: "15 h", label: "Ahorradas por semana" },
    { value: "28 días", label: "Hasta el lanzamiento" },
  ],
  linkLabel: "Ver el sitio en vivo",
  linkHref: "https://cleaning.angelss.co",
};
