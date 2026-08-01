import { Instagram, Facebook } from "lucide-react";
import { NAV_LINKS, TREATMENTS } from "@/data/site";
import { useSite } from "@/context/SiteContext";

export default function Footer() {
  const { scrollTo, openBooking } = useSite();

  return (
    <footer data-testid="site-footer" className="bg-charcoal text-ivory border-t border-ivory/10 pt-24 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 mb-20">
          <div className="lg:col-span-5">
            <p className="font-serif text-4xl tracking-tight mb-4">
              HC <span className="italic text-champagne-light">Beauty &amp; Aesthetics</span>
            </p>
            <p className="text-ivory/50 font-light leading-relaxed max-w-sm">
              Luxury aesthetic treatments, designed around confidence.
              Oxfordshire, United Kingdom.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                data-testid="footer-instagram-link"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-ivory/20 flex items-center justify-center hover:border-champagne hover:text-champagne-light transition-colors duration-300"
              >
                <Instagram size={17} />
              </a>
              <a
                data-testid="footer-facebook-link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-ivory/20 flex items-center justify-center hover:border-champagne hover:text-champagne-light transition-colors duration-300"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-ivory/40 mb-6">Explore</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    data-testid={`footer-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => scrollTo(l.href)}
                    className="text-ivory/70 font-light hover:text-champagne-light transition-colors duration-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] tracking-[0.35em] uppercase text-ivory/40 mb-6">Treatments</p>
            <ul className="space-y-3">
              {TREATMENTS.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <button
                    data-testid={`footer-treatment-${t.id}`}
                    onClick={openBooking}
                    className="text-ivory/70 font-light hover:text-champagne-light transition-colors duration-300"
                  >
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          data-testid="footer-watermark"
          className="font-serif text-[16vw] leading-none text-center text-outline-ivory select-none pointer-events-none -mb-4"
          aria-hidden="true"
        >
          HC Beauty
        </p>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/40 font-light">
          <p>© {new Date().getFullYear()} HC Beauty &amp; Aesthetics. All rights reserved.</p>
          <p>Demonstration website — imagery shown for illustration only.</p>
        </div>
      </div>
    </footer>
  );
}
