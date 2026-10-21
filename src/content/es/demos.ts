import type { DemoCopy } from "../types";

export const demos: DemoCopy = {
  booking: {
    reserve: "Reservar",
    confirmed: "Cita agendada, abono recibido",
    days: ["L", "M", "X", "J", "V"],
  },
  store: { order: "Pedir por WhatsApp", stock: "Inventario", sent: "Pedido enviado" },
  shopify: { store: "Tu tienda", cart: "Carrito", pay: "Pagar" },
  amazon: {
    before: "Antes",
    after: "Después",
    titleBefore: "botella buena barata",
    titleAfter: "Botella térmica de acero, 750 ml",
    rank: "Posición",
  },
  affiliate: { review: "Reseña", cta: "Ver en Amazon", commission: "Comisión" },
  dashboard: { sales: "Ventas de hoy", margin: "Margen", alert: "Vence en 6 días" },
  app: { idea: "Mi idea", installed: "Instalado" },
  saas: { tenants: ["Marca A", "Marca B", "Marca C"], admin: "Panel de administración" },
  revenue: { steps: ["Reserva", "Pago", "Portal", "Agente IA"] },
  agent: {
    name: "Agente IA",
    question: "¿Tienen disponibilidad el sábado?",
    answer: "Sí, a las 10:00 o a las 15:00. ¿Te reservo una?",
  },
  automation: {
    trigger: "Nuevo pedido",
    steps: ["Factura", "Inventario", "Aviso al cliente"],
    done: "Completado",
  },
  brand: { template: "Plantilla para redes" },
  content: { calendar: "Calendario" },
  roadmap: { milestones: ["Diagnóstico", "Plan", "Ejecución", "Seguimiento"] },
  audit: {
    problems: ["Botón de compra escondido", "Productos sin precio", "Respuesta lenta"],
  },
};
