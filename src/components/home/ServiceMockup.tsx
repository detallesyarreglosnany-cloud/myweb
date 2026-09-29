"use client";

import type { ReactElement } from "react";
import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, delay },
  }),
};

function VenderMockup() {
  const days = Array.from({ length: 7 });
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="grid grid-cols-7 gap-2">
        {days.map((_, i) => (
          <motion.span
            key={i}
            custom={0.1 + i * 0.05}
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className={`flex h-8 w-8 items-center justify-center rounded-md text-xs ${
              i === 4
                ? "bg-sand text-[var(--color-base)] font-medium"
                : "bg-canvas text-text-soft"
            }`}
          >
            {i === 4 ? (
              <motion.span
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6, ease: easeOut }}
              >
                12
              </motion.span>
            ) : (
              i + 1
            )}
          </motion.span>
        ))}
      </div>
      <motion.div
        custom={1.1}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-text"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-olive" />
        Cita agendada, abono recibido
      </motion.div>
    </div>
  );
}

function TiendaMockup() {
  const items = Array.from({ length: 4 });
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="grid grid-cols-4 gap-3">
        {items.map((_, i) => (
          <motion.div
            key={i}
            custom={0.1 + i * 0.12}
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="h-14 w-14 rounded-lg border border-line bg-canvas"
          />
        ))}
      </div>
      <motion.div
        custom={0.9}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-sm font-medium text-[var(--color-base)]"
      >
        Pedido enviado por WhatsApp
      </motion.div>
    </div>
  );
}

function AmazonMockup() {
  return (
    <div className="flex w-full max-w-[260px] flex-col gap-3">
      {["Título optimizado", "Viñeta de beneficio", "Viñeta de beneficio"].map(
        (line, i) => (
          <motion.div
            key={line + i}
            custom={0.1 + i * 0.15}
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="h-2.5 rounded-full bg-canvas"
            style={{ width: `${90 - i * 15}%` }}
          />
        ),
      )}
      <div className="mt-2 flex items-end gap-1">
        <span className="text-xs text-text-soft">Posición</span>
        <motion.div
          initial={{ scaleX: 0.15 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: easeOut }}
          className="h-2 flex-1 origin-left rounded-full bg-olive"
        />
      </div>
    </div>
  );
}

function ControlarMockup() {
  const bars = [0.5, 0.9, 0.7];
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex h-20 items-end gap-3">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0.05 }}
            animate={{ scaleY: h }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease: easeOut }}
            className="w-6 origin-bottom rounded-t-md bg-olive-panel"
            style={{ height: 80 }}
          />
        ))}
      </div>
      <motion.div
        custom={0.9}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-text"
      >
        <motion.span
          className="h-2 w-2 rounded-full"
          initial={{ backgroundColor: "var(--color-olive)" }}
          animate={{ backgroundColor: "#c96b4a" }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        Vence en 6 días
      </motion.div>
    </div>
  );
}

function CrearMockup() {
  const boxes = Array.from({ length: 3 });
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-3">
        {boxes.map((_, i) => (
          <motion.div
            key={i}
            initial={{ borderStyle: "dashed", opacity: 0.5 }}
            animate={{ borderStyle: "solid", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.25, ease: easeOut }}
            className="h-16 w-12 rounded-md border-2 border-line-strong bg-canvas"
          />
        ))}
      </div>
      <motion.div
        custom={1.3}
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="rounded-full bg-nude px-4 py-2 text-sm font-medium text-[var(--color-base)]"
      >
        Instalado
      </motion.div>
    </div>
  );
}

function MarcaMockup() {
  const colors = ["var(--color-sand)", "var(--color-nude)", "var(--color-olive)"];
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-3">
        {colors.map((c, i) => (
          <motion.span
            key={c}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.2, ease: easeOut }}
            className="h-10 w-10 rounded-full"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <svg width="140" height="28" viewBox="0 0 140 28" fill="none">
        <motion.path
          d="M2 20 C 20 4, 40 4, 55 16 S 90 28, 110 12 S 130 6, 138 14"
          stroke="var(--color-sand)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: easeOut }}
        />
      </svg>
    </div>
  );
}

function AcompanamientoMockup() {
  const steps = Array.from({ length: 4 });
  return (
    <div className="flex w-full max-w-[220px] items-center">
      {steps.map((_, i) => (
        <div key={i} className="flex flex-1 items-center last:flex-none">
          <motion.span
            initial={{ backgroundColor: "var(--color-canvas)" }}
            animate={{ backgroundColor: "var(--color-olive)" }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.3 }}
            className="h-3 w-3 shrink-0 rounded-full border border-line-strong"
          />
          {i < steps.length - 1 && (
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.3, ease: easeOut }}
              className="h-px flex-1 origin-left bg-line-strong"
            />
          )}
        </div>
      ))}
    </div>
  );
}

const mockups: Record<string, () => ReactElement> = {
  vender: VenderMockup,
  tienda: TiendaMockup,
  amazon: AmazonMockup,
  controlar: ControlarMockup,
  crear: CrearMockup,
  "marca-contenido": MarcaMockup,
  acompanamiento: AcompanamientoMockup,
};

export function ServiceMockup({ tabId }: { tabId: string }) {
  const Mockup = mockups[tabId] ?? VenderMockup;
  return (
    <div className="flex min-h-[240px] items-center justify-center px-6 py-12">
      <Mockup />
    </div>
  );
}
