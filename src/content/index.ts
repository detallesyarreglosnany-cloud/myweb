import * as es from "./es/site";
import * as esServices from "./es/services";
import * as esPains from "./es/pains";
import * as esHome from "./es/home";
import * as esAbout from "./es/about";
import * as esTestimonials from "./es/testimonials";
import * as esDemos from "./es/demos";

import * as en from "./en/site";
import * as enServices from "./en/services";
import * as enPains from "./en/pains";
import * as enHome from "./en/home";
import * as enAbout from "./en/about";
import * as enTestimonials from "./en/testimonials";
import * as enDemos from "./en/demos";

import type { Locale } from "./types";

const dictionaries = {
  es: {
    ...es,
    ...esServices,
    ...esPains,
    ...esHome,
    ...esAbout,
    ...esTestimonials,
    ...esDemos,
  },
  en: {
    ...en,
    ...enServices,
    ...enPains,
    ...enHome,
    ...enAbout,
    ...enTestimonials,
    ...enDemos,
  },
} as const;

export type Dictionary = (typeof dictionaries)["es"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export * from "./types";
