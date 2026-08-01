import Marquee from "react-fast-marquee";

const ITEMS = [
  "Anti-Wrinkle Injections",
  "Lip Filler",
  "Skin Boosters",
  "Dermal Fillers",
  "Luxury Facials",
  "Natural Results",
  "Oxfordshire",
];

export default function EditorialMarquee() {
  return (
    <div data-testid="editorial-marquee" className="bg-beige/60 border-y border-beige-dark/40 py-6 overflow-hidden">
      <Marquee speed={35} gradient={false} pauseOnHover>
        {ITEMS.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-serif italic text-2xl md:text-3xl text-charcoal/80 px-10 whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-champagne inline-block" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
