export const IMG = {
  heroPortrait:
    "https://images.unsplash.com/photo-1611451444023-7fe9d86fe1d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwd29tYW4lMjBjbGVhciUyMHNraW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODU2MTk1NzF8MA&ixlib=rb-4.1.0&q=85",
  reception:
    "https://images.unsplash.com/photo-1781513144825-aa1e284c5950?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhZXN0aGV0aWMlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwwfHx8fDE3ODU2MTk1NzF8MA&ixlib=rb-4.1.0&q=85",
  room: "https://images.pexels.com/photos/16571735/pexels-photo-16571735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  product:
    "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBza2luY2FyZSUyMGNvc21ldGljJTIwYm90dGxlfGVufDB8fHx8MTc4NTYxOTU3MXww&ixlib=rb-4.1.0&q=85",
  gold: "https://images.unsplash.com/photo-1729006557274-d955ca21fe0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwYWJzdHJhY3QlMjBnb2xkJTIwbGlxdWlkfGVufDB8fHx8MTc4NTYxOTU3MXww&ixlib=rb-4.1.0&q=85",
  facial:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
  salon:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
  beauty:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
  serum:
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
  cream:
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop",
  products:
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop",
  mask: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1200&auto=format&fit=crop",
  bottle:
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
  specialist:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
};

export const TREATMENTS = [
  {
    id: "anti-wrinkle",
    num: "01",
    name: "Anti-Wrinkle Injections",
    tag: "Botox®",
    desc: "Soften fine lines and expression wrinkles with precise, natural-looking muscle relaxation.",
    price: "from £180",
    img: IMG.facial,
  },
  {
    id: "lip-filler",
    num: "02",
    name: "Lip Filler",
    tag: "Shape & Hydration",
    desc: "Subtle volume, definition and balance — tailored to your natural lip shape, never overdone.",
    price: "from £220",
    img: IMG.beauty,
  },
  {
    id: "dermal-fillers",
    num: "03",
    name: "Dermal Fillers",
    tag: "Contour & Restore",
    desc: "Restore lost volume and gently sculpt cheeks, jawline and chin with premium hyaluronic fillers.",
    price: "from £200",
    img: IMG.heroPortrait,
  },
  {
    id: "skin-boosters",
    num: "04",
    name: "Skin Boosters",
    tag: "Deep Hydration",
    desc: "Injectable hydration that improves skin quality, elasticity and glow from within.",
    price: "from £250",
    img: IMG.serum,
  },
  {
    id: "facials",
    num: "05",
    name: "Luxury Facials",
    tag: "Medical-Grade Skincare",
    desc: "Bespoke clinical facials designed around your skin — deep cleansing, renewal and radiance.",
    price: "from £75",
    img: IMG.mask,
  },
  {
    id: "consultation",
    num: "06",
    name: "Skin Consultation",
    tag: "Start Here",
    desc: "A relaxed, no-pressure conversation about your skin, your goals and the right path forward.",
    price: "£30 · redeemable",
    img: IMG.room,
  },
];

export const CHAPTERS = [
  {
    num: "01",
    title: "Honest, medical-led advice",
    desc: "Every recommendation begins with your face, your skin and your goals — never a sales target. If a treatment isn't right for you, we'll tell you.",
  },
  {
    num: "02",
    title: "Natural-looking results",
    desc: "Our philosophy is enhancement, not alteration. The best work is the kind nobody can quite put their finger on — you, on your very best day.",
  },
  {
    num: "03",
    title: "Unrushed, private appointments",
    desc: "You'll never feel like a number. Appointments are generously timed, one-to-one and completely confidential, in a calm clinical setting.",
  },
  {
    num: "04",
    title: "Aftercare that follows up",
    desc: "Your journey doesn't end at the door. Every treatment includes tailored aftercare guidance and a personal follow-up to check on your results.",
  },
];

export const JOURNEY = [
  {
    num: "01",
    title: "Consultation & Skin Analysis",
    desc: "We begin with a relaxed conversation and a close look at your skin — understanding your concerns, history and what 'confidence' means to you.",
  },
  {
    num: "02",
    title: "Your Bespoke Plan",
    desc: "You receive a personalised treatment plan with honest guidance, transparent pricing and realistic expectations. No pressure, ever.",
  },
  {
    num: "03",
    title: "Treatment Day",
    desc: "Your treatment is performed with meticulous care in our calm, clinical treatment room — most appointments take under an hour.",
  },
  {
    num: "04",
    title: "Aftercare & Review",
    desc: "We check in after your treatment and invite you back for a complimentary review, making sure you're delighted with your results.",
  },
];

export const REVIEWS = [
  {
    name: "Sophie M.",
    treatment: "Lip Filler",
    text: "I was so nervous about looking 'done', but the result is exactly what I asked for — subtle, balanced and completely me. The whole experience felt calm and unhurried.",
  },
  {
    name: "Rachel T.",
    treatment: "Anti-Wrinkle Injections",
    text: "From the consultation onwards everything was explained so clearly. Three weeks on and my forehead looks refreshed, not frozen. I've already recommended two friends.",
  },
  {
    name: "Emma W.",
    treatment: "Skin Boosters",
    text: "My skin genuinely glows. What I appreciated most was the honesty — I was talked out of a treatment I didn't need and into one that actually suited my skin.",
  },
  {
    name: "Charlotte D.",
    treatment: "Luxury Facial",
    text: "The most beautiful treatment room and the most relaxing hour I've had in years. My skin felt incredible for weeks afterwards. Worth every penny.",
  },
  {
    name: "Priya K.",
    treatment: "Dermal Fillers",
    text: "Professional, gentle and so knowledgeable. The follow-up message the next day was such a thoughtful touch. I wouldn't trust anyone else with my face.",
  },
];

export const FAQS = [
  {
    q: "Do aesthetic treatments hurt?",
    a: "Most clients describe only mild, brief discomfort. We use fine needles, topical numbing cream where appropriate, and a gentle, unhurried technique to keep you comfortable throughout.",
  },
  {
    q: "How long do results last?",
    a: "It depends on the treatment. Anti-wrinkle injections typically last 3–4 months, dermal fillers 6–18 months, and skin boosters around 6 months. We'll give you honest, realistic timeframes at your consultation.",
  },
  {
    q: "Is there any downtime?",
    a: "Most treatments involve little to no downtime. You may experience mild redness, swelling or small bruises for a few days — we'll talk you through exactly what to expect and how to care for your skin afterwards.",
  },
  {
    q: "What happens at the consultation?",
    a: "A relaxed, no-pressure conversation about your skin and goals, followed by a tailored recommendation. Consultations are £30, fully redeemable against your first treatment.",
  },
  {
    q: "Are you qualified and insured?",
    a: "Yes. All treatments are carried out by a fully trained, insured aesthetic practitioner using premium, CE-marked products sourced from registered UK pharmacies.",
  },
  {
    q: "What if I need to cancel or rearrange?",
    a: "Life happens — we simply ask for 48 hours' notice to rearrange or cancel your appointment, and we'll always do our best to find you a new time that suits.",
  },
];

export const NAV_LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#results" },
  { label: "Why Us", href: "#why" },
  { label: "Specialist", href: "#specialist" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
