import { Quote } from "lucide-react";
import { IMG } from "@/data/site";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { useSite } from "@/context/SiteContext";

export default function Specialist() {
  const { openBooking } = useSite();

  return (
    <section id="specialist" data-testid="specialist-section" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-beige/50 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center relative">
        <div className="lg:col-span-5 relative">
          <Reveal>
            <div className="absolute -top-6 -left-6 w-full h-full rounded-[2rem] border border-champagne/40" />
            <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[7rem] shadow-[0_40px_80px_-30px_rgba(26,26,26,0.3)]">
              <img
                src={IMG.specialist}
                alt="Hannah Collins, founder and lead aesthetic practitioner"
                className="w-full h-[32rem] object-cover hover:scale-105 transition-transform duration-[1.4s] ease-out"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 glass border border-white/40 rounded-2xl px-6 py-5 shadow-xl animate-float-soft">
              <p className="font-serif text-lg text-charcoal">Hannah Collins</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-champagne-dark mt-1">
                Founder &amp; Lead Practitioner
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <Eyebrow>Meet the Specialist</Eyebrow>
            <h2 className="font-serif tracking-tight text-4xl md:text-5xl text-charcoal leading-tight mb-8">
              The hands behind
              <br />
              <span className="italic text-champagne-dark">the results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-charcoal-soft font-light leading-relaxed max-w-xl mb-6">
              Hannah founded HC Beauty &amp; Aesthetics with a simple belief:
              aesthetic treatment should feel like care, not commerce. With
              years of clinical experience and advanced training in injectable
              treatments, she is known for a gentle technique and an honest,
              natural-first approach.
            </p>
            <p className="text-charcoal-soft font-light leading-relaxed max-w-xl mb-10">
              Every client begins with a proper conversation — because
              understanding your face, your skin and what confidence means to
              you matters far more than any single treatment.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="relative border-l-2 border-champagne pl-8 py-2 mb-10 max-w-xl">
              <Quote size={20} className="text-champagne absolute -left-2.5 -top-3 bg-ivory rounded-full" />
              <p className="font-serif italic text-xl md:text-2xl text-charcoal leading-relaxed">
                "My favourite compliment is when a client's friends can't tell
                what they've had done — only that they look wonderfully well."
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <button
              data-testid="specialist-book-btn"
              onClick={openBooking}
              className="group relative rounded-full border border-charcoal px-9 py-4 text-sm tracking-wide text-charcoal overflow-hidden"
            >
              <span className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative group-hover:text-ivory transition-colors duration-500">
                Book a Consultation with Hannah
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
