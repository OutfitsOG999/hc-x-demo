import { motion } from "framer-motion";
import { JOURNEY } from "@/data/site";
import { Reveal, Eyebrow } from "@/components/Reveal";

export default function Journey() {
  return (
    <section id="journey" data-testid="journey-section" className="py-28 lg:py-40 bg-matte relative grain">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <Eyebrow>
            <span className="mx-auto">The Treatment Journey</span>
          </Eyebrow>
          <h2 className="font-serif tracking-tight text-4xl md:text-5xl text-charcoal leading-tight">
            From first hello to
            <span className="italic text-champagne-dark"> final glow.</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-beige-dark/60" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-champagne origin-top"
          />

          {JOURNEY.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <div
                data-testid={`journey-step-${step.num}`}
                className={`relative flex items-start gap-8 md:gap-0 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ivory border border-champagne flex items-center justify-center font-serif text-sm text-champagne-dark shadow-sm z-10">
                  {step.num}
                </div>
                <div className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-soft font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
