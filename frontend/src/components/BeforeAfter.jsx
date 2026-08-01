import { useRef, useState } from "react";
import { IMG } from "@/data/site";
import { Reveal, Eyebrow } from "@/components/Reveal";

const CASES = [
  { id: "glow", label: "Skin Radiance", img: IMG.beauty },
  { id: "refresh", label: "Refreshed Look", img: IMG.heroPortrait },
  { id: "care", label: "Skin Renewal", img: IMG.facial },
];

function CompareSlider({ img, label }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  };

  return (
    <div
      ref={ref}
      data-testid={`compare-slider-${label.toLowerCase().replace(/\s/g, "-")}`}
      className="relative w-full h-[30rem] md:h-[36rem] overflow-hidden rounded-[2rem] select-none cursor-ew-resize shadow-[0_40px_80px_-30px_rgba(26,26,26,0.35)]"
      onPointerDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <img src={img} alt={`${label} — after`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={img}
          alt={`${label} — before`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(0.75) brightness(0.88) contrast(0.92)" }}
          draggable={false}
        />
      </div>
      <div className="absolute top-0 bottom-0 w-px bg-ivory/90" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass border border-white/50 shadow-lg flex items-center justify-center">
          <span className="text-charcoal text-xs tracking-widest font-medium">⇔</span>
        </div>
      </div>
      <span className="absolute top-6 left-6 rounded-full bg-charcoal/60 backdrop-blur px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase text-ivory">
        Before
      </span>
      <span className="absolute top-6 right-6 rounded-full bg-champagne/90 px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase text-charcoal">
        After
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="results" data-testid="before-after-section" className="py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <Eyebrow>
            <span className="mx-auto">Before &amp; After</span>
          </Eyebrow>
          <h2 className="font-serif tracking-tight text-4xl md:text-5xl text-charcoal leading-tight">
            Real results, <span className="italic text-champagne-dark">gently achieved.</span>
          </h2>
          <p className="mt-5 text-charcoal-soft font-light">
            Drag the handle to compare. Demonstration imagery shown for illustration.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <CompareSlider img={CASES[current].img} label={CASES[current].label} />
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-8 flex justify-center gap-3">
            {CASES.map((c, i) => (
              <button
                key={c.id}
                data-testid={`compare-case-${c.id}`}
                onClick={() => setCurrent(i)}
                className={`rounded-full px-5 py-2 text-xs tracking-wide transition-all duration-300 ${
                  current === i
                    ? "bg-charcoal text-ivory"
                    : "bg-beige/60 text-charcoal-soft hover:bg-beige"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
