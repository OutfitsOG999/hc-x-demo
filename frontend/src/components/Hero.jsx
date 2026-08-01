import { lazy, Suspense, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import { IMG } from "@/data/site";
import { useSite } from "@/context/SiteContext";

const HeroScene = lazy(() => import("@/components/HeroScene"));

const LINES = [
  { text: "Luxury Aesthetic", italic: false },
  { text: "Treatments, Designed", italic: false },
  { text: "Around Confidence.", italic: true },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { openBooking, scrollTo } = useSite();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const imgX = useTransform(sx, [-1, 1], [-14, 14]);
  const imgY = useTransform(sy, [-1, 1], [-10, 10]);
  const ringX = useTransform(sx, [-1, 1], [22, -22]);
  const ringY = useTransform(sy, [-1, 1], [16, -16]);

  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden grain"
    >
      <div className="absolute inset-0 opacity-90 hidden md:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full bg-beige/50 blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-[28rem] h-[28rem] rounded-full bg-champagne-light/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 grid lg:grid-cols-12 gap-16 items-center w-full">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.8, ease: EASE }}
            className="text-xs tracking-[0.4em] uppercase text-champagne-dark font-medium mb-8 flex items-center gap-3"
          >
            <span className="inline-block w-10 h-px bg-champagne" />
            Oxfordshire's Premier Aesthetics Clinic
          </motion.p>

          <h1 className="font-serif tracking-tight text-charcoal text-5xl sm:text-6xl lg:text-7xl leading-[1.04]">
            {LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 2.45 + i * 0.14, duration: 1.05, ease: EASE }}
                  className={`block ${line.italic ? "italic text-champagne-dark" : ""}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.9, ease: EASE }}
            className="mt-8 max-w-md text-base md:text-lg text-charcoal-soft font-light leading-relaxed"
          >
            Medical-led aesthetic treatments in a calm, private setting — where
            every result is subtle, considered and entirely your own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.15, duration: 0.9, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <button
              data-testid="hero-book-consultation-btn"
              onClick={openBooking}
              className="group relative rounded-full bg-charcoal text-ivory px-9 py-4 text-sm tracking-wide overflow-hidden"
            >
              <span className="absolute inset-0 bg-champagne-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative">Book Consultation</span>
            </button>
            <button
              data-testid="hero-explore-treatments-btn"
              onClick={() => scrollTo("#treatments")}
              className="group text-sm tracking-wide text-charcoal flex items-center gap-2"
            >
              <span className="border-b border-charcoal/40 pb-0.5 group-hover:border-champagne group-hover:text-champagne-dark transition-colors duration-300">
                Explore Treatments
              </span>
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1.2, ease: EASE }}
            className="relative"
          >
            <motion.div
              style={{ x: ringX, y: ringY }}
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-champagne/50 animate-spin-slow"
            />
            <motion.div style={{ x: imgX, y: imgY }} className="relative">
              <div className="overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-[0_40px_80px_-20px_rgba(26,26,26,0.25)]">
                <img
                  src={IMG.heroPortrait}
                  alt="Elegant woman with clear, radiant skin"
                  className="w-full h-[34rem] object-cover scale-105"
                  loading="eager"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.8, ease: EASE }}
                className="absolute -bottom-6 -left-10 glass rounded-2xl px-6 py-4 shadow-[0_20px_50px_rgba(26,26,26,0.12)] border border-white/40 animate-float-soft"
                data-testid="hero-rating-badge"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-champagne text-champagne" />
                  ))}
                </div>
                <p className="text-xs text-charcoal-light">Loved by clients across Oxfordshire</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        data-testid="hero-scroll-indicator"
        onClick={() => scrollTo("#trust")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal-soft hover:text-champagne-dark transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
