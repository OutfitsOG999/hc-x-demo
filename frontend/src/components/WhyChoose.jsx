import { CHAPTERS, IMG } from "@/data/site";
import { Reveal, Eyebrow } from "@/components/Reveal";

export default function WhyChoose() {
  return (
    <section id="why" data-testid="why-choose-section" className="py-28 lg:py-40 bg-charcoal text-ivory relative grain overflow-hidden">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-champagne/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow light>Why Choose HC</Eyebrow>
                <h2 className="font-serif tracking-tight text-4xl md:text-5xl leading-tight mb-8">
                  A clinic built on
                  <br />
                  <span className="italic text-champagne-light">quiet confidence.</span>
                </h2>
                <p className="text-ivory/60 font-light leading-relaxed max-w-sm mb-12">
                  Four principles guide every appointment, every treatment and
                  every conversation at HC Beauty &amp; Aesthetics.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="overflow-hidden rounded-[2rem] rounded-tr-[6rem] shadow-2xl">
                  <img
                    src={IMG.room}
                    alt="Calm, private treatment room at HC Beauty & Aesthetics"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-[1.2s] ease-out"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.num} delay={i * 0.08}>
                <div
                  data-testid={`chapter-${c.num}`}
                  className={`group py-10 border-t border-ivory/10 flex gap-8 md:gap-14 items-start ${
                    i % 2 === 1 ? "md:pl-16" : ""
                  } ${i === CHAPTERS.length - 1 ? "border-b" : ""}`}
                >
                  <span className="font-serif text-5xl md:text-6xl text-outline-gold leading-none shrink-0 group-hover:text-champagne group-hover:[-webkit-text-stroke:0px] transition-all duration-500">
                    {c.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-champagne-light transition-colors duration-500">
                      {c.title}
                    </h3>
                    <p className="text-ivory/55 font-light leading-relaxed max-w-md">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
