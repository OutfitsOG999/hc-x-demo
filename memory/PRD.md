# PRD — HC Beauty & Aesthetics Demo Homepage

## Original Problem Statement
Build an award-winning, production-quality demo homepage for premium aesthetics clinic "HC Beauty & Aesthetics" (Oxfordshire) to showcase to the business owner. Must look like a £15k+ agency site (Apple × Dior × Aesop × Charlotte Tilbury): matte white/warm ivory/beige/champagne gold/charcoal, serif + sans typography, premium animations (Framer Motion, Lenis, GSAP-level polish), subtle Three.js 3D, kinetic hero with masked line-by-line reveal, editorial marquee, numbered manifesto chapters, before/after comparison sliders, treatment journey timeline, testimonial carousel, luxury FAQ, Instagram preview, contact/booking CTA, premium footer, floating booking button, sticky nav. Believable copy, no fake claims. Fully responsive.

## Architecture
- Frontend: React (CRA/craco), Tailwind CSS, Framer Motion, Lenis smooth scroll, react-fast-marquee, Three.js + React Three Fiber + drei (lazy-loaded hero scene), shadcn/ui (Dialog, Accordion), sonner toasts, lucide-react icons.
- Backend: FastAPI, MongoDB (motor). `POST /api/bookings` + `GET /api/bookings` store consultation enquiries.
- Content: centralised in `src/data/site.js` (images, treatments, chapters, journey, reviews, FAQs, nav).

## User Personas
- Clinic owner (Hannah) evaluating the demo as a sales example.
- Prospective client (25–55, Oxfordshire) browsing treatments and booking a consultation.

## Core Requirements (static)
- Luxury light aesthetic, champagne gold accents, Playfair Display + DM Sans.
- Signature on-load moment: loader + masked hero headline reveal.
- All sections listed above; booking CTA always visible (nav + floating button + modal).
- No template card grids; asymmetric editorial layouts.

## Implemented (2026-08-01)
- Luxury loading screen with HC monogram reveal.
- Kinetic hero: masked line-by-line headline, mouse parallax portrait in arch frame, R3F 3D scene (gold rings, glass bottle, gold particles, custom Lightformer environment), glass rating badge, scroll indicator.
- Slow editorial marquee ribbon.
- Trust bar (4 value props), interactive treatments index (hover-crossfading sticky image panel, 6 treatments with guide prices).
- Before/After draggable comparison slider (3 switchable cases, filter-based demo comparison).
- Why Choose: dark manifesto section, 4 numbered chapters, outlined gold numerals, sticky image.
- Meet the Specialist profile with quote and glass name card.
- Treatment Journey: animated gold timeline, 4 alternating steps.
- Reviews: auto-advancing luxury carousel (5 reviews, pause on hover).
- Luxury FAQ accordion (6 Q&As).
- Instagram feed preview grid (6 images, hover states).
- Contact & Booking CTA (dark, contact details) + premium footer with giant outlined watermark.
- Floating booking button (appears after hero, pulse ring) + booking modal posting to `/api/bookings` with success/error toasts.
- Backend booking enquiry endpoints with validation (EmailStr, field lengths).
- SEO meta, Google Fonts, custom Tailwind palette, grain texture, custom scrollbar, Lenis momentum scrolling.

## Verification
- `POST /api/bookings` returns 200 with stored document; `GET /api/bookings` confirms persistence (tested via external URL).
- All 15 image URLs return HTTP 200.
- Screenshot-tested: hero, treatments hover, before/after, why-choose, specialist, journey, reviews, contact, footer, mobile hero, full booking modal submit flow (toast confirmed).

## Backlog
- P0: None blocking.
- P1: Real before/after client photography; real Instagram feed embed; owner-provided copy (real name, prices, address, phone); Google Maps embed.
- P2: Treatment detail pages, blog/skincare journal, online booking calendar integration (e.g. Fresha), email notifications on new enquiry (Resend), Lighthouse performance pass (image srcset, font subsetting).

## Next Tasks
1. Swap placeholder contact details/images for real business assets.
2. Add email notification when a booking enquiry arrives.
3. Add treatment detail pages.
