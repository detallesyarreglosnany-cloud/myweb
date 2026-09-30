"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function PhotoMockup({
  src,
  alt,
  aspectClassName = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  aspectClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-[10px] border border-line ${aspectClassName}`}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </motion.div>
    </motion.div>
  );
}
