import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { REVIEWS } from "@/data/site";
import { Reveal, Eyebrow } from "@/components/Reveal";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const review = REVIEWS[index];

  return (
    <section id="reviews" data-testid="reviews-section" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-champagne-light/25 blur-3xl" />
      <div
        className="mx-auto max-w-4xl px-6 lg:px-10 text-center relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal>
          <Eyebrow>
            <span className="mx-auto">Client Reviews</span>
          </Eyebrow>
          <h2 className="font-serif tracking-tight text-4xl md:text-5xl text-charcoal leading-tight mb-16">
            Kind words, <span className="italic text-champagne-dark">honestly earned.</span>
          </h2>
        </Reveal>

        <div className="min-h-[16rem] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              data-testid="review-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex justify-center gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-champagne text-champagne" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed tracking-tight max-w-3xl">
                "{review.text}"
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-medium text-charcoal">{review.name}</p>
                <p className="text-xs tracking-[0.25em] uppercase text-champagne-dark mt-1">{review.treatment}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            data-testid="review-prev-btn"
            onClick={() => setIndex((index - 1 + REVIEWS.length) % REVIEWS.length)}
            className="w-12 h-12 rounded-full border border-beige-dark flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-colors duration-300"
            aria-label="Previous review"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                data-testid={`review-dot-${i}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-champagne" : "w-1.5 bg-beige-dark"
                }`}
              />
            ))}
          </div>
          <button
            data-testid="review-next-btn"
            onClick={() => setIndex((index + 1) % REVIEWS.length)}
            className="w-12 h-12 rounded-full border border-beige-dark flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-colors duration-300"
            aria-label="Next review"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
