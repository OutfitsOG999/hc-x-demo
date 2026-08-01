import { Star, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  { icon: Star, title: "5-Star Rated", desc: "Consistently five-star reviews from real clients" },
  { icon: ShieldCheck, title: "Qualified & Insured", desc: "Fully trained practitioner, premium CE-marked products" },
  { icon: HeartHandshake, title: "Honest Advice", desc: "Recommendations led by your skin, never by sales" },
  { icon: MapPin, title: "Oxfordshire Based", desc: "A calm, private clinic setting close to home" },
];

export default function TrustBar() {
  return (
    <section id="trust" data-testid="trust-section" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <h2 className="font-serif tracking-tight text-3xl md:text-5xl text-charcoal leading-tight">
            Trusted by hundreds of happy clients{" "}
            <span className="italic text-champagne-dark">across Oxfordshire.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div data-testid={`trust-item-${i}`} className="group">
                <div className="w-12 h-12 rounded-full border border-champagne/40 flex items-center justify-center mb-5 group-hover:bg-champagne/10 transition-colors duration-500">
                  <item.icon size={20} className="text-champagne-dark" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-soft font-light leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
