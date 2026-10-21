"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { easeOut } from "@/lib/motion";
import type { HeroStageContent } from "@/content/types";

interface Motion {
  scroll: MotionValue<number>;
  factor: MotionValue<number>;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}

/**
 * Una capa de la composición. `depth` define cuánto se desplaza con el scroll
 * y con el cursor: las capas más cercanas se mueven más, eso crea la profundidad.
 */
function Layer({
  depth,
  delay,
  motionValues,
  className,
  children,
}: {
  depth: number;
  delay: number;
  motionValues: Motion;
  className: string;
  children: ReactNode;
}) {
  const { scroll, factor, pointerX, pointerY } = motionValues;
  // Las capas del fondo bajan y las del frente suben: así se separan al hacer scroll.
  const y = useTransform([scroll, factor], ([p, f]: number[]) => -p * (depth - 8) * 9 * f);
  const px = useTransform(pointerX, (v) => v * depth);
  const py = useTransform(pointerY, (v) => v * depth);

  return (
    <motion.div style={{ y }} className={`absolute ${className}`}>
      <motion.div style={{ x: px, y: py }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay, ease: easeOut }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="size-[1em] shrink-0" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="var(--color-olive)" />
      <path d="M4.5 8.2 7 10.6l4.6-5" stroke="var(--color-base)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const widget =
  "rounded-[10px] border border-line-strong bg-base/95 text-text shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)] @2xl:rounded-[1cqw]";

/** Notificaciones que se suceden como en un negocio en marcha. */
function Feed({ items, running }: { items: HeroStageContent["feed"]; running: boolean }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 2600);
    return () => clearInterval(id);
  }, [running, items.length]);
  const item = items[index];

  return (
    <div className={`${widget} overflow-hidden p-[3cqw] @2xl:p-[1.1cqw]`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: easeOut }}
          className="flex items-center gap-[2.4cqw] @2xl:gap-[0.9cqw]"
        >
          <span className="flex size-[8cqw] shrink-0 items-center justify-center rounded-full bg-olive-panel text-[3.6cqw] @2xl:size-[2.8cqw] @2xl:text-[1.2cqw]">
            <Check />
          </span>
          <span className="flex flex-col">
            <span className="text-[3.6cqw] font-medium @2xl:text-[1.15cqw]">{item.title}</span>
            <span className="text-[3cqw] text-text-soft @2xl:text-[0.95cqw]">{item.detail}</span>
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** Pasos de una automatización que se encienden en secuencia. */
function Flow({ flow, running }: { flow: HeroStageContent["flow"]; running: boolean }) {
  const [step, setStep] = useState(flow.steps.length - 1);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setStep((s) => (s + 1) % flow.steps.length), 900);
    return () => clearInterval(id);
  }, [running, flow.steps.length]);

  return (
    <div className={`${widget} flex flex-col gap-[2cqw] p-[3cqw] @2xl:gap-[0.8cqw] @2xl:p-[1.1cqw]`}>
      <span className="text-[2.8cqw] uppercase tracking-[0.08em] text-sand @2xl:text-[0.85cqw]">{flow.label}</span>
      <div className="flex items-center">
        {flow.steps.map((label, i) => (
          <span key={label} className="flex flex-1 items-center last:flex-none">
            <span
              className={`rounded-full border px-[2.4cqw] py-[1cqw] text-[3cqw] transition-colors duration-300 @2xl:px-[0.8cqw] @2xl:py-[0.35cqw] @2xl:text-[1cqw] ${
                i <= step ? "border-sand bg-sand text-[var(--color-base)]" : "border-line-strong text-text-soft"
              }`}
            >
              {label}
            </span>
            {i < flow.steps.length - 1 && (
              <span className="relative mx-[1.4cqw] h-px flex-1 bg-line-strong @2xl:mx-[0.5cqw]">
                <span
                  className={`absolute inset-0 origin-left bg-sand transition-transform duration-500 ${i < step ? "scale-x-100" : "scale-x-0"}`}
                />
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroStage({ stage }: { stage: HeroStageContent }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.2 });
  const running = inView && !reduce;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const factor = useMotionValue(1);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const pointerY = useSpring(rawY, { stiffness: 60, damping: 20 });
  const motionValues: Motion = { scroll: scrollYProgress, factor, pointerX, pointerY };

  useEffect(() => {
    factor.set(reduce ? 0 : 1);
    const node = ref.current;
    if (!node || reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      rawX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
      rawY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, factor, rawX, rawY]);

  return (
    <div className="relative">
      <div ref={ref} className="@container relative aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[16/8.4]">
        {/* Panel de operación de un proyecto, detrás */}
        <Layer depth={4} delay={0.35} motionValues={motionValues} className="hidden @2xl:block left-0 top-[40%] w-[34%]">
          <div className="overflow-hidden rounded-[1cqw] border border-line opacity-80">
            <Image src="/mockups/case-operacion.jpg" alt="" width={932} height={418} className="h-auto w-full" sizes="400px" />
          </div>
        </Layer>

        {/* Panel administrativo, protagonista */}
        <Layer depth={8} delay={0.15} motionValues={motionValues} className="left-0 top-[12%] w-[86%] @2xl:left-[16%] @2xl:top-[4%] @2xl:w-[58%]">
          <div className="overflow-hidden rounded-[10px] border border-line-strong bg-canvas shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] @2xl:rounded-[1.2cqw]">
            <div className="flex items-center gap-[1.4cqw] border-b border-line px-[3cqw] py-[2cqw] @2xl:gap-[0.5cqw] @2xl:px-[1cqw] @2xl:py-[0.7cqw]">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-[1.8cqw] rounded-full bg-line-strong @2xl:size-[0.6cqw]" />
              ))}
              <span className="ml-[2cqw] rounded-full bg-raised px-[2.4cqw] py-[0.6cqw] text-[2.6cqw] text-text-soft @2xl:ml-[0.8cqw] @2xl:px-[0.9cqw] @2xl:py-[0.2cqw] @2xl:text-[0.85cqw]">
                admin.tunegocio.com
              </span>
            </div>
            <Image
              src="/mockups/hero-admin.jpg"
              alt={stage.adminAlt}
              width={870}
              height={560}
              priority
              className="h-auto w-full"
              sizes="(min-width: 1024px) 680px, 90vw"
            />
          </div>
        </Layer>

        {/* Aplicación móvil */}
        <Layer depth={14} delay={0.5} motionValues={motionValues} className="right-0 top-[30%] w-[34%] @2xl:right-[4%] @2xl:top-0 @2xl:w-[19%]">
          <div className="overflow-hidden rounded-[18px] border-[3px] border-[#20291b] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] @2xl:rounded-[2.2cqw] @2xl:border-[0.5cqw]">
            <Image src="/mockups/hero-app.jpg" alt={stage.appAlt} width={385} height={805} className="h-auto w-full" sizes="(min-width: 1024px) 220px, 34vw" />
          </div>
        </Layer>

        {/* Notificaciones */}
        <Layer depth={18} delay={0.75} motionValues={motionValues} className="right-[4%] top-0 w-[60%] @2xl:right-[25%] @2xl:top-[8%] @2xl:w-[21%]">
          <div aria-hidden="true">
            <Feed items={stage.feed} running={running} />
          </div>
        </Layer>

        {/* Reserva confirmada */}
        <Layer depth={12} delay={0.9} motionValues={motionValues} className="hidden @2xl:block bottom-[4%] left-[3%] w-[20%]">
          <div aria-hidden="true" className={`${widget} flex flex-col gap-[0.7cqw] p-[1.1cqw]`}>
            <span className="text-[0.85cqw] uppercase tracking-[0.08em] text-sand">{stage.booking.title}</span>
            <div className="grid grid-cols-5 gap-[0.35cqw]">
              {Array.from({ length: 10 }, (_, i) => (
                <span key={i} className={`h-[1.5cqw] rounded-[0.3cqw] ${i === 6 ? "bg-sand" : "bg-raised"}`} />
              ))}
            </div>
            <span className="flex items-center justify-between text-[1.05cqw]">
              <span>{stage.booking.slot}</span>
              <span className="flex items-center gap-[0.4cqw] text-olive">
                <Check />
                {stage.booking.status}
              </span>
            </span>
          </div>
        </Layer>

        {/* Automatización */}
        <Layer depth={10} delay={1.05} motionValues={motionValues} className="bottom-[2%] left-0 w-[76%] @2xl:bottom-[3%] @2xl:left-[30%] @2xl:w-[30%]">
          <div aria-hidden="true">
            <Flow flow={stage.flow} running={running} />
          </div>
        </Layer>

        {/* Agente de IA */}
        <Layer depth={20} delay={1.2} motionValues={motionValues} className="hidden @2xl:block bottom-[12%] right-0 w-[25%]">
          <div aria-hidden="true" className="flex flex-col gap-[0.5cqw] text-[1cqw]">
            <span className="self-end rounded-[0.9cqw] border border-line-strong bg-raised px-[1cqw] py-[0.6cqw] text-text">
              {stage.agent.question}
            </span>
            <span className="self-start rounded-[0.9cqw] bg-olive-panel px-[1cqw] py-[0.6cqw] text-text">
              {stage.agent.answer}
            </span>
          </div>
        </Layer>
      </div>
      <p className="mt-3 text-right text-[11px] text-text-soft">{stage.note}</p>
    </div>
  );
}
