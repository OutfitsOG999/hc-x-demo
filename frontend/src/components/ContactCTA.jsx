import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useSite } from "@/context/SiteContext";

const DETAILS = [
  { icon: Phone, label: "Call or WhatsApp", value: "01865 123 456" },
  { icon: Mail, label: "Email", value: "hello@hcbeautyaesthetics.co.uk" },
  { icon: MapPin, label: "Location", value: "Oxfordshire, United Kingdom" },
  { icon: Clock, label: "Hours", value: "Tuesday – Saturday, by appointment" },
];

export default function ContactCTA() {
  const { openBooking } = useSite();

  return (
    <section id="contact" data-testid="contact-section" className="py-28 lg:py-40 bg-charcoal text-ivory relative overflow-hidden">
      <div className="absolute -top-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-champagne/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs tracking-[0.35em] uppercase text-champagne-light font-medium mb-8 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-champagne" />
                Begin Your Journey
              </p>
              <h2 className="font-serif tracking-tight text-4xl md:text-6xl leading-[1.08] mb-8">
                Your most confident
                <br />
                skin is <span className="italic text-champagne-light">one conversation</span>
                <br />
                away.
              </h2>
              <p className="text-ivory/60 font-light leading-relaxed max-w-md mb-12">
                Book a relaxed, no-pressure consultation and discover what
                subtle, expertly-delivered treatment could do for you.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <button
                data-testid="contact-book-btn"
                onClick={openBooking}
                className="group relative rounded-full bg-champagne text-charcoal px-10 py-5 text-sm tracking-wide font-medium overflow-hidden"
              >
                <span className="absolute inset-0 bg-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative">Book Your Consultation</span>
              </button>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-8">
              {DETAILS.map((d, i) => (
                <Reveal key={d.label} delay={0.1 + i * 0.08}>
                  <div data-testid={`contact-detail-${i}`} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-full border border-ivory/20 flex items-center justify-center group-hover:border-champagne group-hover:bg-champagne/10 transition-colors duration-500 shrink-0">
                      <d.icon size={18} className="text-champagne-light" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-ivory/40 mb-1">{d.label}</p>
                      <p className="text-ivory/90 font-light">{d.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
