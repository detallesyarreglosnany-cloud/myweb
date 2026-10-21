"use client";

import { useEffect, useRef, ViewTransition, type ComponentType, type ReactNode } from "react";
import { useInView } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import type { Service, ServiceDemoId } from "@/content/types";
import type { DemoProps } from "./demos/primitives";
import { AffiliateDemo, AmazonDemo, BookingDemo, ShopifyDemo, StoreDemo } from "./demos/WebDemos";
import { AppDemo, DashboardDemo, RevenueDemo, SaasDemo } from "./demos/SystemDemos";
import { AgentDemo, AutomationDemo } from "./demos/AiDemos";
import { AuditDemo, BrandDemo, ContentDemo, RoadmapDemo } from "./demos/BrandDemos";
import { LiveAgent, LiveBooking, LiveStore, type LiveDemoProps } from "./demos/LiveDemos";

const DEMOS: Record<ServiceDemoId, ComponentType<DemoProps>> = {
  booking: BookingDemo,
  store: StoreDemo,
  shopify: ShopifyDemo,
  amazon: AmazonDemo,
  affiliate: AffiliateDemo,
  dashboard: DashboardDemo,
  app: AppDemo,
  saas: SaasDemo,
  revenue: RevenueDemo,
  agent: AgentDemo,
  automation: AutomationDemo,
  brand: BrandDemo,
  content: ContentDemo,
  roadmap: RoadmapDemo,
  audit: AuditDemo,
};

/** Demos que el visitante puede usar con sus propias manos. */
const LIVE_DEMOS: Partial<Record<ServiceDemoId, ComponentType<LiveDemoProps>>> = {
  booking: LiveBooking,
  store: LiveStore,
  agent: LiveAgent,
};

export function hasLiveDemo(service: Service): boolean {
  return service.demo in LIVE_DEMOS;
}

function DemoVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (inView) video.play().catch(() => {});
    else video.pause();
  }, [inView]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className="h-full w-full rounded-[2cqw] object-cover"
    />
  );
}

function Morph({ name, children }: { name?: string; children: ReactNode }) {
  return name ? <ViewTransition name={name}>{children}</ViewTransition> : <>{children}</>;
}

/**
 * Demo animada de un servicio. Se reproduce cada vez que entra en pantalla.
 * `interactive` muestra la versión que el visitante puede usar, si existe.
 * `morph` conecta la demo de la tarjeta con la de la ficha al navegar; solo
 * una instancia por página puede tenerlo activo.
 */
export function ServiceDemo({
  service,
  interactive = false,
  morph = false,
}: {
  service: Service;
  interactive?: boolean;
  morph?: boolean;
}) {
  const { dictionary } = useDictionary();
  const { demos } = dictionary;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.45 });
  const Live = LIVE_DEMOS[service.demo];

  if (interactive && Live && !service.video) {
    return (
      <Morph name={morph ? `demo-${service.slug}` : undefined}>
        <div className="min-h-[300px] w-full">
          <Live copy={demos} />
        </div>
      </Morph>
    );
  }

  const Demo = DEMOS[service.demo];
  return (
    <Morph name={morph ? `demo-${service.slug}` : undefined}>
      <div ref={ref} className="@container relative aspect-[16/10] w-full">
        {service.video ? (
          <DemoVideo src={service.video.src} poster={service.video.poster} label={service.name} />
        ) : (
          <div aria-hidden="true" className="h-full w-full">
            <Demo active={inView} copy={demos} />
          </div>
        )}
      </div>
    </Morph>
  );
}
