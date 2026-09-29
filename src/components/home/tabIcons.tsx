import type { ReactElement } from "react";

const icons: Record<string, ReactElement> = {
  vender: (
    <path
      d="M4 9h16M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-16 0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M9 13l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  tienda: (
    <path
      d="M4 9V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3M4 9l1 10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1l1-10M4 9h16M9 13a2 2 0 0 0 4 0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  amazon: (
    <path
      d="M5 8h14l-1.5 10.5a1 1 0 0 1-1 .9H7.5a1 1 0 0 1-1-.9L5 8Zm3 0a4 4 0 0 1 8 0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  controlar: (
    <path
      d="M4 19h16M6 19V9m6 10V5m6 14v-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  crear: (
    <path
      d="M12 3c2.5 2 4 5 4 8.5S14.5 18 12 21c-2.5-3-4-6-4-9.5S9.5 5 12 3Zm0 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "marca-contenido": (
    <path
      d="M12 21a9 9 0 1 1 9-9c0 2-1.2 3-3 3h-1.5a1.5 1.5 0 0 0 0 3H17M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  acompanamiento: (
    <path
      d="M4 18v-1a4 4 0 0 1 4-4h1m7 5v-1a4 4 0 0 0-4-4h-1m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export function TabIcon({ id }: { id: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {icons[id] ?? icons.vender}
    </svg>
  );
}
