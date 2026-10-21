"use client";

import { useEffect, useRef, useState, ViewTransition, type ComponentType } from "react";
import { useInView } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import type { Service, ServiceDemoId } from "@/content/types";
import type { DemoProps } from "./demos/primitives";
import { AffiliateDemo, AmazonDemo, BookingDemo, ShopifyDemo, StoreDemo } from "./demos/WebDemos";
import { AppDemo, DashboardDemo, RevenueDemo, SaasDemo } from "./demos/SystemDemos";
import { AgentDemo, AutomationDemo } from "./demos/AiDemos";
import { AuditDemo, BrandDemo, ContentDemo, RoadmapDemo } from "./demos/BrandDemos";

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

export function ServiceDemo({ service }: { service: Service }) {
  const { dictionary } = useDictionary();
  const { solutions, demos } = dictionary;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const [run, setRun] = useState(0);
  const Demo = DEMOS[service.demo];

  return (
    <div className="flex flex-col gap-2">
      <ViewTransition name={`demo-${service.slug}`}>
        <div ref={ref} className="@container relative aspect-[16/10] w-full">
          {service.video ? (
            <DemoVideo src={service.video.src} poster={service.video.poster} label={service.name} />
          ) : (
            <div aria-hidden="true" className="h-full w-full">
              <Demo key={run} active={inView} copy={demos} />
            </div>
          )}
        </div>
      </ViewTransition>
      {!service.video && (
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="text-[11px] text-text-soft">{solutions.sampleDataLabel}</span>
          <button
            type="button"
            onClick={() => setRun((value) => value + 1)}
            className="min-h-[32px] rounded-full border border-line-strong px-3 text-[11px] text-text-soft transition-colors duration-200 hover:border-sand hover:text-text"
          >
            {solutions.replayLabel}
          </button>
        </div>
      )}
    </div>
  );
}
