import { Instagram as InstagramIcon } from "lucide-react";
import { IMG } from "@/data/site";
import { Reveal, Eyebrow } from "@/components/Reveal";

const POSTS = [
  { img: IMG.product, alt: "Luxury skincare bottle" },
  { img: IMG.serum, alt: "Hydrating serum dropper" },
  { img: IMG.mask, alt: "Relaxing facial treatment" },
  { img: IMG.cream, alt: "Nourishing cream texture" },
  { img: IMG.salon, alt: "Inside the clinic" },
  { img: IMG.spa, alt: "Calm spa details" },
];

export default function Instagram() {
  return (
    <section id="instagram" data-testid="instagram-section" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow>Follow Along</Eyebrow>
            <h2 className="font-serif tracking-tight text-4xl md:text-5xl text-charcoal leading-tight">
              Life inside <span className="italic text-champagne-dark">the clinic.</span>
            </h2>
          </div>
          <a
            data-testid="instagram-follow-link"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-charcoal/20 px-6 py-3 text-sm text-charcoal hover:border-champagne hover:text-champagne-dark transition-colors duration-300"
          >
            <InstagramIcon size={16} />
            @hcbeauty.aesthetics
          </a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {POSTS.map((p, i) => (
            <Reveal key={i} delay={i * 0.07} className={i % 3 === 1 ? "md:mt-10" : ""}>
              <a
                data-testid={`instagram-post-${i}`}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-center justify-center">
                  <InstagramIcon
                    size={26}
                    className="text-ivory opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
