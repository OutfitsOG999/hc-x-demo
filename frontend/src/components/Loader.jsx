import { motion } from "framer-motion";

const letters = "HC".split("");

export default function Loader() {
  return (
    <motion.div
      data-testid="loader-screen"
      className="fixed inset-0 z-[100] bg-ivory flex flex-col items-center justify-center"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex overflow-hidden">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-7xl md:text-8xl text-charcoal tracking-tight"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-3 text-[11px] tracking-[0.5em] uppercase text-charcoal-soft"
      >
        Beauty &amp; Aesthetics
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 h-px w-40 origin-left bg-champagne"
      />
    </motion.div>
  );
}
