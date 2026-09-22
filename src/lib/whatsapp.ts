const PENDING_MARKER = "PENDIENTE_WHATSAPP";

export function isWhatsappPending(number: string): boolean {
  return number === PENDING_MARKER;
}

export function buildWhatsappLink(number: string, message: string): string {
  const digitsOnly = number.replace(/[^\d]/g, "");
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${digitsOnly}?${params.toString()}`;
}
