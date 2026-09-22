/**
 * Curvas y variantes compartidas, según DESIGN.md sección 7.
 * Nunca una entrada que arranca lenta, nunca escala cero:
 * solo transformación y opacidad.
 */
export const easeOut = [0.23, 1, 0.32, 1] as const;
export const easeInOut = [0.77, 0, 0.175, 1] as const;
export const easeDrawer = [0.32, 0.72, 0, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const cascade = (staggerSeconds = 0.06) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: staggerSeconds },
  },
});

export const cascadeItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};
