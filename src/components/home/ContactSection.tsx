"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDictionary } from "@/lib/dictionary-context";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { cascade, cascadeItem, easeOut } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

/** Cierre: el visitante describe lo que necesita y se abre WhatsApp con el mensaje listo. */
export function ContactSection() {
  const { dictionary, locale } = useDictionary();
  const { contact, siteSettings, hero, solutions } = dictionary;
  const f = contact.form;
  const id = useId();
  const options = [...solutions.categories.map((category) => category.label), f.otherOption];

  const [need, setNeed] = useState(options[options.length - 1]);
  const [detail, setDetail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [href, setHref] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (detail.trim().length < 8) {
      setStatus("error");
      return;
    }
    const intro = name.trim() ? (locale === "es" ? `Soy ${name.trim()}. ` : `I'm ${name.trim()}. `) : f.anonymous;
    const message = f.template
      .replace("{name}", intro)
      .replace("{need}", need)
      .replace("{detail}", detail.trim());
    const link = buildWhatsappLink(siteSettings.whatsappNumber, message);
    setHref(link);
    setStatus("sent");
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-[10px] border border-line-strong bg-base px-4 text-[16px] text-text placeholder:text-text-soft/70 transition-colors duration-200 focus:border-sand focus:outline-none";

  return (
    <section id="contacto" className="container-site scroll-mt-24 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-[20px] border border-line bg-canvas p-6 md:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <motion.div
          variants={cascade(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-start gap-5"
        >
          <motion.div variants={cascadeItem}>
            <SectionLabel>{contact.eyebrow}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={cascadeItem}
            className="text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] text-text md:text-[56px]"
          >
            {contact.title}
          </motion.h2>
          <motion.p variants={cascadeItem} className="max-w-md text-[17px] leading-[1.6] text-text-soft">
            {contact.support}
          </motion.p>
          <motion.div variants={cascadeItem} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button href={buildWhatsappLink(siteSettings.whatsappNumber, siteSettings.whatsappDefaultMessage)} variant="ghost">
              {contact.whatsappLabel}
            </Button>
            <Button href={siteSettings.instagram} variant="ghost">
              {contact.instagramLabel} {siteSettings.instagramHandle}
            </Button>
          </motion.div>
          <motion.div variants={cascadeItem} className="mt-auto">
            <Pill>{hero.trustBadge}</Pill>
          </motion.div>
        </motion.div>

        <motion.form
          noValidate
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex flex-col gap-6 rounded-[16px] border border-line-strong bg-base p-5 md:p-7"
        >
          <fieldset className="flex flex-col gap-3">
            <legend className="mb-3 text-[15px] font-medium text-text">{f.needLabel}</legend>
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <label
                  key={option}
                  className="relative flex min-h-[40px] cursor-pointer items-center rounded-full border border-line-strong px-3.5 text-[13px] text-text-soft transition-colors duration-200 hover:border-sand has-[:checked]:border-sand has-[:checked]:bg-sand has-[:checked]:text-[var(--color-base)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sand"
                >
                  <input
                    type="radio"
                    name={`${id}-need`}
                    value={option}
                    checked={need === option}
                    onChange={() => setNeed(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-detail`} className="text-[15px] font-medium text-text">
              {f.detailLabel}
            </label>
            <textarea
              id={`${id}-detail`}
              rows={4}
              value={detail}
              onChange={(event) => {
                setDetail(event.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder={f.detailPlaceholder}
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? `${id}-error` : undefined}
              className={`${field} resize-y py-3 ${status === "error" ? "border-[#d98b7a]" : ""}`}
            />
            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  id={`${id}-error`}
                  role="alert"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[13px] text-[#e7a595]"
                >
                  {f.error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-name`} className="text-[15px] font-medium text-text">
              {f.nameLabel}
            </label>
            <input
              id={`${id}-name`}
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={`${field} min-h-[48px]`}
            />
          </div>

          <div aria-live="polite" className="flex flex-col gap-3">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-sand px-6 text-[15px] font-medium text-[var(--color-base)] transition-colors duration-200 hover:bg-nude"
            >
              {f.submitLabel}
              <span aria-hidden="true">→</span>
            </motion.button>
            <AnimatePresence>
              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="flex flex-col gap-1 rounded-[10px] border border-olive/50 bg-olive-panel px-4 py-3 text-sm text-text"
                >
                  {f.success}
                  <a href={href} target="_blank" rel="noopener noreferrer" className="link-underline self-start text-sand">
                    {f.retryLabel}
                  </a>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
