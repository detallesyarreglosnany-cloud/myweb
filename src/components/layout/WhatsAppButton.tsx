"use client";

import { useDictionary } from "@/lib/dictionary-context";
import { buildWhatsappLink, isWhatsappPending } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.32 2 11.65c0 1.95.6 3.76 1.63 5.28L2 22l5.24-1.58a10.2 10.2 0 0 0 4.76 1.18c5.52 0 10-4.32 10-9.65C22 6.32 17.52 2 12 2Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M16.7 13.4c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.33-1.6-1.49-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  const { dictionary, locale } = useDictionary();
  const { siteSettings } = dictionary;
  const pending = isWhatsappPending(siteSettings.whatsappNumber);
  const href = pending
    ? undefined
    : buildWhatsappLink(
        siteSettings.whatsappNumber,
        siteSettings.whatsappDefaultMessage,
      );
  const label = locale === "es" ? "Hablemos" : "Let's talk";
  const pendingLabel =
    locale === "es"
      ? "Número de WhatsApp pendiente"
      : "WhatsApp number pending";

  return (
    <>
      <a
        href={href ?? "#"}
        aria-disabled={pending || undefined}
        target={pending ? undefined : "_blank"}
        rel={pending ? undefined : "noopener noreferrer"}
        title={pending ? pendingLabel : label}
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-sand text-[var(--color-base)] shadow-none transition-colors hover:bg-nude md:flex"
      >
        <WhatsAppIcon />
        <span className="sr-only">{pending ? pendingLabel : label}</span>
      </a>

      <a
        href={href ?? "#"}
        aria-disabled={pending || undefined}
        target={pending ? undefined : "_blank"}
        rel={pending ? undefined : "noopener noreferrer"}
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 items-center justify-center gap-2 bg-sand text-[var(--color-base)] md:hidden"
      >
        <WhatsAppIcon />
        <span className="text-[15px] font-medium">
          {pending ? pendingLabel : label}
        </span>
      </a>
    </>
  );
}
