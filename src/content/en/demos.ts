import type { DemoCopy } from "../types";

export const demos: DemoCopy = {
  live: {
    booking: {
      title: "Deep cleaning",
      price: "$45",
      slots: ["Thu 9:00", "Fri 15:00", "Sat 10:00", "Sat 15:00"],
      pick: "Pick a time",
      confirm: "Confirm booking",
      success: "Booking confirmed. We sent you a reminder.",
    },
    store: {
      products: [
        { name: "Soy candle", price: "$18" },
        { name: "Handmade soap", price: "$9" },
        { name: "Gift set", price: "$32" },
      ],
      add: "Add",
      added: "Added",
      cart: "Cart",
      checkout: "Order on WhatsApp",
      sent: "Order sent with your cart details.",
    },
    agent: {
      name: "AI agent",
      online: "Online",
      typing: "Typing",
      prompts: [
        { question: "Do you have availability on Saturday?", answer: "Yes, at 10:00 or 15:00. Shall I book one for you?" },
        { question: "How much is the service?", answer: "Deep cleaning is $45. Want me to send you the details?" },
        { question: "How can I pay?", answer: "You can pay online when you book. I'll send the link once you confirm." },
      ],
    },
  },
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
