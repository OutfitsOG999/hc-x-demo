import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TREATMENTS } from "@/data/site";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { useSite } from "@/context/SiteContext";

export default function Treatments() {
  const [active, setActive] = useState(0);
  const { openBooking } = useSite();

  return (
    <section id="treatments" data-testid="treatments-section" className="py-28 lg:py-40 bg-matte relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Featured Treatments</Eyebrow>
              <h2 className="font-serif tracking-tight text-4xl md:text-5xl text-charcoal leading-tight mb-16">
                Considered treatments,
                <br />
                <span className="italic text-champagne-dark">never conveyor-belt.</span>
              </h2>
            </Reveal>

            <div>
              {TREATMENTS.map((t, i) => (
                <Reveal key={t.id} delay={i * 0.06}>
                  <button
                    data-testid={`treatment-row-${t.id}`}
                    onMouseEnter={() => setActive(i)}
                    onClick={openBooking}
                    className={`group w-full text-left py-7 border-t border-beige-dark/50 flex items-center gap-6 transition-colors duration-500 ${
                      i === TREATMENTS.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span
                      className={`font-serif text-sm transition-colors duration-500 ${
                        active === i ? "text-champagne-dark" : "text-charcoal-soft/60"
                      }`}
                    >
                      {t.num}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-serif text-2xl md:text-3xl tracking-tight transition-all duration-500 ${
                          active === i ? "text-charcoal translate-x-2" : "text-charcoal/70"
                        }`}
                      >
                        {t.name}
                      </span>
                      <span className="block mt-1 text-xs tracking-[0.2em] uppercase text-charcoal-soft/70">
                        {t.tag}
                      </span>
                    </span>
                    <span className="hidden md:block text-sm text-charcoal-soft font-light">{t.price}</span>
                    <span
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                        active === i
                          ? "bg-charcoal border-charcoal text-ivory rotate-0"
                          : "border-beige-dark text-charcoal-soft -rotate-45"
                      }`}
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-32">
              <Reveal delay={0.2}>
                <div className="relative h-[36rem] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(26,26,26,0.3)]">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={TREATMENTS[active].img}
                      src={TREATMENTS[active].img}
                      alt={TREATMENTS[active].name}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-ivory/90 text-sm font-light leading-relaxed max-w-xs">
                      {TREATMENTS[active].desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
