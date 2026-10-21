import type { DemoCopy } from "../types";

export const demos: DemoCopy = {
  booking: {
    reserve: "Book",
    confirmed: "Booked, deposit received",
    days: ["M", "T", "W", "T", "F"],
  },
  store: { order: "Order on WhatsApp", stock: "Inventory", sent: "Order sent" },
  shopify: { store: "Your store", cart: "Cart", pay: "Pay" },
  amazon: {
    before: "Before",
    after: "After",
    titleBefore: "good cheap bottle",
    titleAfter: "Insulated steel bottle, 750 ml",
    rank: "Rank",
  },
  affiliate: { review: "Review", cta: "See on Amazon", commission: "Commission" },
  dashboard: { sales: "Today's sales", margin: "Margin", alert: "Expires in 6 days" },
  app: { idea: "My idea", installed: "Installed" },
  saas: { tenants: ["Brand A", "Brand B", "Brand C"], admin: "Admin panel" },
  revenue: { steps: ["Booking", "Payment", "Portal", "AI agent"] },
  agent: {
    name: "AI agent",
    question: "Do you have availability on Saturday?",
    answer: "Yes, at 10:00 or 15:00. Shall I book one for you?",
  },
  automation: {
    trigger: "New order",
    steps: ["Invoice", "Inventory", "Client notice"],
    done: "Completed",
  },
  brand: { template: "Social template" },
  content: { calendar: "Calendar" },
  roadmap: { milestones: ["Diagnosis", "Plan", "Execution", "Follow up"] },
  audit: {
    problems: ["Hidden buy button", "Products without prices", "Slow replies"],
  },
};
