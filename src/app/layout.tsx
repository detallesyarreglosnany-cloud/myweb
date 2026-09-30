import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniela Silva, Estrategia Digital",
  description:
    "Soluciones digitales a tu medida: páginas de ventas, tiendas, sistemas y plataformas, entregadas instaladas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base text-text">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
