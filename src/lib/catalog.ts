import type { CatalogCategory, Locale, Service } from "@/content/types";

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
