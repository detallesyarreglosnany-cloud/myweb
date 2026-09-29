"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { fadeUp } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Testimonial } from "@/content/types";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col gap-4 rounded-[12px] border border-line bg-raised p-6">
      <p className="text-[15px] leading-relaxed text-text">
        <span className="text-nude">&ldquo;</span>
        {testimonial.quote}
        <span className="text-nude">&rdquo;</span>
      </p>
      <div className="mt-auto flex items-center gap-3 border-t border-line pt-4">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-line-strong">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-text">
            {testimonial.flag} {testimonial.name}
          </span>
          <span className="text-xs text-text-soft">
            {testimonial.country} · {testimonial.service}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { dictionary } = useDictionary();
  const { testimonials } = dictionary;
  const track = [...testimonials.items, ...testimonials.items];

  return (
    <section id="resultados" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-site">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-3"
        >
          <SectionLabel>{testimonials.eyebrow}</SectionLabel>
          <h2 className="max-w-xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-text md:text-[40px]">
            {testimonials.title}
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="marquee-track flex w-max gap-5 px-6">
          {track.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
