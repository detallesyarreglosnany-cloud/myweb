import type { ReactElement } from "react";
import type { CatalogCategoryId } from "@/content/types";

const paths: Record<CatalogCategoryId, string> = {
  web: "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm0 3h18M6.5 6.5h.01M9 6.5h.01",
  apps: "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 15h2",
  systems: "M4 19h16M6 19V9m6 10V5m6 14v-6",
  ai: "M12 3v3m0 12v3M3 12h3m12 0h3M6.6 6.6l2.1 2.1m6.6 6.6 2.1 2.1m0-10.8-2.1 2.1m-6.6 6.6-2.1 2.1M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z",
  commerce: "M4 9V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3M4 9l1 10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1l1-10M4 9h16M9 13a2 2 0 0 0 4 0",
  brand: "M12 21a9 9 0 1 1 9-9c0 2-1.2 3-3 3h-1.5a1.5 1.5 0 0 0 0 3H17M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
};

export function CategoryIcon({ id, size = 18 }: { id: CatalogCategoryId; size?: number }): ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={paths[id]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
