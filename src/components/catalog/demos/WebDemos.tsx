"use client";

import { motion } from "motion/react";
import {
  appear,
  Bar,
  BrowserChrome,
  CheckDot,
  DemoRoot,
  fillX,
  press,
  rise,
  type DemoProps,
} from "./primitives";

export function BookingDemo({ active, copy }: DemoProps) {
  const t = copy.booking;
  return (
    <DemoRoot active={active}>
      <BrowserChrome url="tunegocio.com/reservar">
        <div className="grid h-full grid-cols-[1fr_1.3fr] gap-[3cqw] p-[3.5cqw]">
          <motion.div variants={rise(0.1)} className="flex flex-col gap-[1.6cqw]">
            <span className="h-[2.2cqw] w-[80%] rounded-full bg-text/80" />
            <Bar className="w-full" />
            <Bar className="w-[65%]" />
            <span className="mt-[1cqw] text-[4cqw] font-semibold text-sand">$45</span>
            <motion.span
              variants={press(0.9)}
              className="mt-auto self-start rounded-full bg-sand px-[3cqw] py-[1.2cqw] text-[2.4cqw] font-medium text-[var(--color-base)]"
            >
              {t.reserve}
            </motion.span>
          </motion.div>
          <motion.div variants={rise(0.3)} className="grid grid-cols-5 content-start gap-[1cqw]">
            {t.days.map((day, i) => (
              <span key={`${day}-${i}`} className="text-center text-[2cqw] text-text-soft">
                {day}
              </span>
            ))}
            {Array.from({ length: 15 }, (_, i) => (
              <span
                key={i}
                className="relative h-[4.5cqw] overflow-hidden rounded-[0.8cqw] border border-line bg-raised"
              >
                {i === 7 && (
                  <motion.span variants={appear(1.3)} className="absolute inset-0 bg-sand" />
                )}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={rise(1.8, 8)}
          className="absolute bottom-[3cqw] right-[3cqw] flex items-center gap-[1.4cqw] rounded-[1.4cqw] border border-line-strong bg-raised px-[2.4cqw] py-[1.4cqw] text-[2.3cqw] text-text"
        >
          <CheckDot />
          {t.confirmed}
        </motion.div>
      </BrowserChrome>
    </DemoRoot>
  );
}

export function StoreDemo({ active, copy }: DemoProps) {
  const t = copy.store;
  return (
    <DemoRoot active={active}>
      <BrowserChrome url="tutienda.com">
        <div className="grid h-full grid-cols-3 content-start gap-[2cqw] p-[3cqw]">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              variants={rise(0.1 + i * 0.08)}
              className="flex flex-col gap-[1cqw] rounded-[1.2cqw] border border-line bg-raised p-[1.4cqw]"
            >
              <span className="h-[8cqw] rounded-[0.8cqw] bg-olive-panel" />
              <Bar className="w-[75%]" />
              {i === 1 ? (
                <motion.span
                  variants={press(1.1)}
                  className="rounded-full bg-sand py-[0.6cqw] text-center text-[1.7cqw] font-medium text-[var(--color-base)]"
                >
                  {t.order}
                </motion.span>
              ) : (
                <span className="text-[2cqw] text-sand">$24</span>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={rise(1.5, 8)}
          className="absolute bottom-[3cqw] left-[3cqw] flex items-center gap-[1.2cqw] rounded-[1.4cqw] border border-line-strong bg-raised px-[2.2cqw] py-[1.2cqw] text-[2.2cqw] text-text"
        >
          <CheckDot />
          {t.sent}
        </motion.div>
        <div className="absolute bottom-[3cqw] right-[3cqw] rounded-[1.4cqw] border border-line-strong bg-base px-[2.2cqw] py-[1.2cqw] text-[2.2cqw] text-text-soft">
          {t.stock}{" "}
          <span className="relative inline-block w-[3.4cqw] text-text">
            <motion.span
              variants={{ start: { opacity: 1 }, end: { opacity: 0, transition: { delay: 1.7, duration: 0.25 } } }}
              className="absolute inset-0"
            >
              12
            </motion.span>
            <motion.span variants={appear(1.9)}>11</motion.span>
          </span>
        </div>
      </BrowserChrome>
    </DemoRoot>
  );
}

export function ShopifyDemo({ active, copy }: DemoProps) {
  const t = copy.shopify;
  return (
    <DemoRoot active={active}>
      <BrowserChrome url="tumarca.myshopify.com">
        <div className="flex h-full flex-col gap-[2cqw] p-[3cqw]">
          <motion.div
            variants={rise(0.1)}
            className="flex items-center justify-between rounded-[1.2cqw] border border-line bg-raised px-[2.4cqw] py-[1.6cqw]"
          >
            <span className="text-[2.6cqw] font-semibold text-text">{t.store}</span>
            <span className="flex gap-[1.4cqw]">
              <Bar className="w-[6cqw]" />
              <Bar className="w-[6cqw]" />
            </span>
          </motion.div>
          <div className="grid flex-1 grid-cols-[1fr_0.8fr] gap-[2cqw]">
            <motion.div variants={rise(0.5)} className="grid grid-cols-2 gap-[1.6cqw]">
              {Array.from({ length: 4 }, (_, i) => (
                <span key={i} className="rounded-[1cqw] border border-line bg-olive-panel" />
              ))}
            </motion.div>
            <motion.div
              variants={rise(0.9)}
              className="flex flex-col gap-[1.4cqw] rounded-[1.2cqw] border border-line-strong bg-raised p-[2cqw]"
            >
              <span className="text-[2.3cqw] font-medium text-text">{t.cart}</span>
              <Bar className="w-full" />
              <Bar className="w-[70%]" />
              <motion.span
                variants={rise(1.3)}
                className="mt-auto rounded-full bg-sand py-[1cqw] text-center text-[2.2cqw] font-medium text-[var(--color-base)]"
              >
                {t.pay}
              </motion.span>
            </motion.div>
          </div>
        </div>
      </BrowserChrome>
    </DemoRoot>
  );
}

export function AmazonDemo({ active, copy }: DemoProps) {
  const t = copy.amazon;
  return (
    <DemoRoot active={active}>
      <div className="grid h-full grid-cols-2 gap-[2.4cqw]">
        <motion.div
          variants={rise(0.1)}
          className="flex flex-col gap-[1.4cqw] rounded-[2cqw] border border-line bg-base p-[2.6cqw]"
        >
          <span className="text-[2cqw] uppercase tracking-[0.06em] text-text-soft">{t.before}</span>
          <span className="h-[12cqw] rounded-[1cqw] bg-raised" />
          <span className="text-[2.2cqw] text-text-soft">{t.titleBefore}</span>
          <Bar className="w-[40%]" />
        </motion.div>
        <motion.div
          variants={rise(0.3)}
          className="flex flex-col gap-[1.2cqw] rounded-[2cqw] border border-sand/50 bg-base p-[2.6cqw]"
        >
          <span className="text-[2cqw] uppercase tracking-[0.06em] text-sand">{t.after}</span>
          <span className="h-[12cqw] rounded-[1cqw] bg-olive-panel" />
          <motion.span variants={rise(0.6)} className="text-[2.3cqw] font-medium text-text">
            {t.titleAfter}
          </motion.span>
          {[0.85, 1, 1.15].map((delay) => (
            <motion.span key={delay} variants={rise(delay)} className="flex items-center gap-[1cqw]">
              <span className="size-[1cqw] rounded-full bg-olive" />
              <Bar className="w-[70%]" />
            </motion.span>
          ))}
          <div className="mt-auto flex items-center gap-[1.4cqw]">
            <span className="text-[1.9cqw] text-text-soft">{t.rank}</span>
            <span className="h-[1.6cqw] flex-1 overflow-hidden rounded-full bg-raised">
              <motion.span
                variants={fillX(1.3, 1)}
                className="block h-full w-[78%] origin-left rounded-full bg-sand"
              />
            </span>
          </div>
        </motion.div>
      </div>
    </DemoRoot>
  );
}

export function AffiliateDemo({ active, copy }: DemoProps) {
  const t = copy.affiliate;
  return (
    <DemoRoot active={active}>
      <BrowserChrome url="tusresenas.com">
        <div className="grid h-full grid-cols-[1.4fr_1fr] gap-[3cqw] p-[3.4cqw]">
          <motion.div variants={rise(0.1)} className="flex flex-col gap-[1.4cqw]">
            <span className="text-[2cqw] uppercase tracking-[0.06em] text-sand">{t.review}</span>
            <span className="h-[2.2cqw] w-[85%] rounded-full bg-text/80" />
            <span className="text-[2.6cqw] tracking-[0.2em] text-nude">★★★★★</span>
            <Bar className="w-full" />
            <Bar className="w-[90%]" />
            <Bar className="w-[70%]" />
            <motion.span
              variants={press(1)}
              className="mt-auto self-start rounded-full bg-sand px-[2.6cqw] py-[1.1cqw] text-[2.2cqw] font-medium text-[var(--color-base)]"
            >
              {t.cta}
            </motion.span>
          </motion.div>
          <motion.div
            variants={rise(0.4)}
            className="flex flex-col justify-center gap-[1cqw] rounded-[1.6cqw] border border-line-strong bg-raised p-[2.4cqw]"
          >
            <span className="text-[2cqw] text-text-soft">{t.commission}</span>
            <span className="relative h-[6cqw] text-[5cqw] font-semibold text-text">
              <motion.span
                variants={{ start: { opacity: 1 }, end: { opacity: 0, transition: { delay: 1.3, duration: 0.25 } } }}
                className="absolute inset-0"
              >
                $0
              </motion.span>
              <motion.span variants={appear(1.5)} className="absolute inset-0 text-sand">
                $12
              </motion.span>
            </span>
          </motion.div>
        </div>
      </BrowserChrome>
    </DemoRoot>
  );
}
