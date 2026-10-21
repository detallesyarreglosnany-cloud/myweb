"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import type { DemoCopy } from "@/content/types";

/**
 * Versiones interactivas de algunas demos. Funcionan solo en el navegador,
 * con datos ficticios: no envían nada a ningún sistema real.
 */
export interface LiveDemoProps {
  copy: DemoCopy;
}

const panel = "flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-base text-text";

function Spinner() {
  return (
    <motion.span
      aria-hidden="true"
      className="inline-block size-4 rounded-full border-2 border-[var(--color-base)]/30 border-t-[var(--color-base)]"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
    />
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="size-5 shrink-0" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="var(--color-olive)" />
      <path d="M4.5 8.2 7 10.6l4.6-5" stroke="var(--color-base)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Simula una espera corta, como la de una petición real, y la cancela si el componente se desmonta. */
function useDelayedAction() {
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (ms: number, action: () => void) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(action, ms);
  };
}

export function LiveBooking({ copy }: LiveDemoProps) {
  const t = copy.live.booking;
  const [slot, setSlot] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const later = useDelayedAction();

  const confirm = () => {
    setStatus("loading");
    later(800, () => setStatus("done"));
  };

  return (
    <div className={panel}>
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <span className="text-[15px] font-medium">{t.title}</span>
        <span className="text-lg font-semibold text-sand">{t.price}</span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <span className="text-[13px] text-text-soft">{t.pick}</span>
        <div className="grid grid-cols-2 gap-2">
          {t.slots.map((item) => {
            const selected = slot === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setSlot(item);
                  setStatus("idle");
                }}
                className={`min-h-[44px] rounded-[10px] border text-sm transition-colors duration-200 ${
                  selected
                    ? "border-sand bg-sand text-[var(--color-base)]"
                    : "border-line-strong text-text hover:border-sand"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="mt-auto min-h-[48px]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            {status === "done" ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="flex items-center gap-2 rounded-[10px] border border-olive/50 bg-olive-panel px-4 py-3 text-sm"
              >
                <Check />
                {slot} · {t.success}
              </motion.p>
            ) : (
              <motion.button
                key="confirm"
                type="button"
                disabled={!slot || status === "loading"}
                onClick={confirm}
                whileTap={{ scale: 0.97 }}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-sand text-sm font-medium text-[var(--color-base)] transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "loading" && <Spinner />}
                {t.confirm}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function LiveStore({ copy }: LiveDemoProps) {
  const t = copy.live.store;
  const [cart, setCart] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const later = useDelayedAction();

  const toggle = (name: string) => {
    setStatus("idle");
    setCart((items) => (items.includes(name) ? items.filter((i) => i !== name) : [...items, name]));
  };
  const total = t.products
    .filter((product) => cart.includes(product.name))
    .reduce((sum, product) => sum + Number(product.price.replace(/[^\d.]/g, "")), 0);

  return (
    <div className={panel}>
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <span className="text-[15px] font-medium">{t.cart}</span>
        <motion.span
          key={cart.length}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.25, ease: easeOut }}
          className="flex min-w-7 items-center justify-center rounded-full bg-sand px-2 py-0.5 text-xs font-semibold text-[var(--color-base)]"
          aria-live="polite"
        >
          {cart.length}
        </motion.span>
      </div>
      <ul className="flex flex-col divide-y divide-line px-5">
        {t.products.map((product) => {
          const added = cart.includes(product.name);
          return (
            <li key={product.name} className="flex items-center gap-3 py-3">
              <span aria-hidden="true" className="size-10 shrink-0 rounded-[8px] bg-olive-panel" />
              <span className="flex flex-1 flex-col">
                <span className="text-sm">{product.name}</span>
                <span className="text-xs text-sand">{product.price}</span>
              </span>
              <button
                type="button"
                aria-pressed={added}
                onClick={() => toggle(product.name)}
                className={`min-h-[40px] min-w-[96px] rounded-full border px-3 text-xs transition-colors duration-200 ${
                  added ? "border-olive bg-olive-panel text-text" : "border-line-strong text-text hover:border-sand"
                }`}
              >
                {added ? `✓ ${t.added}` : t.add}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto p-5 pt-3" aria-live="polite">
        {status === "done" ? (
          <p className="flex items-center gap-2 rounded-[10px] border border-olive/50 bg-olive-panel px-4 py-3 text-sm">
            <Check />
            {t.sent}
          </p>
        ) : (
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            disabled={cart.length === 0 || status === "loading"}
            onClick={() => {
              setStatus("loading");
              later(800, () => setStatus("done"));
            }}
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-sand text-sm font-medium text-[var(--color-base)] transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === "loading" && <Spinner />}
            {t.checkout} {total > 0 && `· $${total}`}
          </motion.button>
        )}
      </div>
    </div>
  );
}

interface Message {
  from: "client" | "agent";
  text: string;
}

export function LiveAgent({ copy }: LiveDemoProps) {
  const t = copy.live.agent;
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const later = useDelayedAction();
  const pending = t.prompts.filter((prompt) => !messages.some((m) => m.text === prompt.question));

  const ask = (question: string, answer: string) => {
    setMessages((list) => [...list, { from: "client", text: question }]);
    setTyping(true);
    later(900, () => {
      setTyping(false);
      setMessages((list) => [...list, { from: "agent", text: answer }]);
    });
  };

  return (
    <div className={panel}>
      <div className="flex items-center gap-3 border-b border-line px-5 py-4">
        <span className="flex size-8 items-center justify-center rounded-full bg-olive-panel text-[11px] font-semibold text-sand">
          IA
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-medium">{t.name}</span>
          <span className="flex items-center gap-1.5 text-[11px] text-text-soft">
            <span className="size-1.5 rounded-full bg-olive" />
            {t.online}
          </span>
        </span>
      </div>
      <div className="flex min-h-[150px] flex-1 flex-col justify-end gap-2 p-5" aria-live="polite">
        <AnimatePresence initial={false}>
          {messages.map((message, i) => (
            <motion.p
              key={`${message.from}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className={`max-w-[85%] rounded-[12px] px-3.5 py-2.5 text-sm ${
                message.from === "client"
                  ? "self-end border border-line-strong bg-raised"
                  : "self-start bg-olive-panel"
              }`}
            >
              {message.text}
            </motion.p>
          ))}
          {typing && (
            <motion.span
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1 self-start rounded-[12px] bg-olive-panel px-3.5 py-3"
            >
              <span className="sr-only">{t.typing}</span>
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-text-soft"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15 }}
                />
              ))}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line p-4">
        {pending.map((prompt) => (
          <button
            key={prompt.question}
            type="button"
            disabled={typing}
            onClick={() => ask(prompt.question, prompt.answer)}
            className="min-h-[40px] rounded-full border border-line-strong px-3.5 text-left text-xs text-text transition-colors duration-200 hover:border-sand disabled:opacity-50"
          >
            {prompt.question}
          </button>
        ))}
      </div>
    </div>
  );
}
