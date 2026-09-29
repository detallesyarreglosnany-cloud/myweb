import type { AboutContent, FlagshipProjectContent } from "../types";

export const about: AboutContent = {
  eyebrow: "Who's behind this",
  title: "I don't sell hours. I build assets that work for you.",
  body: [
    "AI systems builder and SaaS founder, with more than 8 years building digital infrastructure for businesses in Colombia, Venezuela, Peru, Mexico, and the United States.",
    "I don't just write code: I operate my own SaaS, Cleaning Angels, so I know exactly what it takes to keep a system alive after launch.",
    "Today I bring that same experience to sales pages, stores, admin systems, and custom platforms: clear pricing, real delivery, and the code is always yours.",
  ],
  highlights: [
    { value: "8+", label: "Years building digital systems" },
    { value: "50+", label: "Systems shipped" },
    { value: "$2.4M+", label: "In revenue influenced" },
    { value: "5 countries", label: "Colombia, Venezuela, Peru, Mexico, and the US" },
  ],
  photoAlt: "Daniela Silva, digital strategist",
};

export const flagshipProject: FlagshipProjectContent = {
  eyebrow: "Flagship project",
  title: "Cleaning Angels, in Washington D.C., Maryland, and Virginia",
  description:
    "A cleaning agency running more than 40 bookings a week, managed before through WhatsApp and paper. We designed, built, and operate the platform that automated everything: online booking, payments, a client portal, staff management, and automated communications.",
  stats: [
    { value: "−40%", label: "No shows" },
    { value: "+25%", label: "Bookings in 60 days" },
    { value: "15 hrs", label: "Saved per week" },
    { value: "28 days", label: "To launch" },
  ],
  linkLabel: "See the live site",
  linkHref: "https://cleaning.angelss.co",
};
