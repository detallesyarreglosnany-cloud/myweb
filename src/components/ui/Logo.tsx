import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/types";

export function Logo({
  locale,
  height = 40,
}: {
  locale: Locale;
  height?: number;
}) {
  const width = Math.round((height * 1200) / 446);

  return (
    <Link href={`/${locale}`} className="shrink-0" aria-label="Daniela Silva">
      <Image
        src="/logo.png"
        alt="Daniela Silva"
        width={width}
        height={height}
        priority
        className="h-auto"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
