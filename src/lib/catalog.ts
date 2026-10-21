import type { CatalogCategory, CatalogCategoryId, Locale, Service } from "@/content/types";

export function serviceHref(locale: Locale, slug: string): string {
  return `/${locale}/soluciones/${slug}`;
}

export function groupByCategory(
  categories: CatalogCategory[],
  services: Service[],
): { category: CatalogCategory; services: Service[] }[] {
  return categories
    .map((category) => ({
      category,
      services: services.filter((service) => service.category === category.id),
    }))
    .filter((group) => group.services.length > 0);
}

export function fillTemplate(template: string, service: Service): string {
  return template.replace("{service}", service.name);
}

/** Superficie visual de cada familia: un ERP no se presenta igual que una tienda o un agente de IA. */
export const categorySurface: Record<CatalogCategoryId, string> = {
  web: "surface-paper",
  apps: "surface-device",
  systems: "surface-blueprint",
  ai: "surface-matrix",
  commerce: "surface-sand",
  brand: "surface-editorial",
};
