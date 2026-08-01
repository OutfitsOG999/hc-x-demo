import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 44, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, light = false }) => (
  <p
    className={`text-xs tracking-[0.35em] uppercase font-medium mb-6 flex items-center gap-3 ${
      light ? "text-champagne-light" : "text-champagne-dark"
    }`}
  >
    <span className="inline-block w-8 h-px bg-champagne" />
    {children}
  </p>
);
