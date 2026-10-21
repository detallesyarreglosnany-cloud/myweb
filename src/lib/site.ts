export const siteUrl = "https://myweb-opal-seven.vercel.app";

/** Serializa JSON-LD sin permitir que "<" cierre la etiqueta script. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
