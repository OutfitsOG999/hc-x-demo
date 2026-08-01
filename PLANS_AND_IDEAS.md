# HC Beauty & Aesthetics — Plans & Ideas Roadmap

This document captures the planned next steps and ideas for evolving the demo
homepage into the clinic's real, production website. Each item explains **what**
it is, **why** it matters, and **how** it would be implemented in this codebase.

Current state: fully working luxury demo homepage (React + FastAPI + MongoDB).
All content is centralised in `frontend/src/data/site.js`, which makes swapping
demo content for real content straightforward.

---

## 1. Real Business Details (P1 — do first)

**What:** Replace all placeholder demo content with the owner's real information.

**Why:** The demo currently uses invented details (specialist name "Hannah
Collins", phone "01865 123 456", guide prices, stock photography, sample
reviews). Before showing the site to real clients, everything must be genuine.

**How it's done:**
- Open `frontend/src/data/site.js` — this single file holds all editable content:
  - `TREATMENTS` — update names, descriptions and real prices.
  - `REVIEWS` — replace with real client reviews (with permission).
  - `FAQS` — adjust answers to match actual clinic policy.
- Contact details live in `frontend/src/components/ContactCTA.jsx` (the
  `DETAILS` array) and `frontend/src/components/Footer.jsx`.
- Specialist name, photo and bio: `frontend/src/components/Specialist.jsx`
  (copy) and the `specialist` image URL in `site.js`.
- Real photography: replace the Unsplash URLs in `site.js` with the clinic's
  own photos. For best results, upload them to object storage (or `public/`)
  and reference local paths — this also improves page speed and removes
  third-party image dependencies.
- No backend changes needed. Hot reload applies changes instantly.

---

## 2. Enquiry Email Alerts (P1)

**What:** When someone submits the booking form, the owner receives an instant
email with the client's details.

**Why:** Right now enquiries are only stored in the database — the owner would
have to manually check. Email alerts mean no enquiry is ever missed.

**How it's done:**
- Use the **Resend** integration (Emergent-managed, no API key purchase needed).
- Backend change in `backend/server.py`, inside the `create_booking` endpoint:
  after saving to MongoDB, send an email via Resend containing name, phone,
  email, treatment, preferred date and message.
- The owner's receiving email address is stored as a new environment variable
  in `backend/.env` (e.g. `CLINIC_NOTIFICATION_EMAIL=...`) — never hardcoded.
- Implementation follows the Resend playbook from the integration expert
  (install library, send via the Emergent-managed sender, verify delivery).
- Frontend needs no changes — the form already shows a success toast.

---

## 3. Treatment Detail Pages (P2)

**What:** Each treatment (Anti-Wrinkle, Lip Filler, Dermal Fillers, Skin
Boosters, Facials, Consultation) gets its own dedicated page with deeper
information: how it works, what to expect, full pricing, aftercare, FAQs.

**Why:** Great for SEO (each page can rank for searches like "lip filler
Oxfordshire"), and gives nervous clients the depth they need before booking.

**How it's done:**
- Routing: `react-router-dom` is already installed. Add routes in
  `frontend/src/App.js`, e.g. `/treatments/lip-filler`.
- Create a `TreatmentPage` component that reads the treatment `id` from the URL
  and renders from an extended data structure in `site.js` (add fields like
  `longDesc`, `pricing`, `aftercare`, `faqs` per treatment).
- Treatment rows in `Treatments.jsx` change from opening the booking modal to
  linking to the detail page (with a "Book" CTA on each page).
- Keep the same design language: serif headings, generous spacing, scroll
  reveals, and the shared Navbar/Footer.

---

## 4. Live Instagram Feed (P2)

**What:** The Instagram preview grid updates automatically from the clinic's
real Instagram account.

**Why:** Keeps the site feeling alive and current without manual updates; the
grid is already designed and waiting at `frontend/src/components/Instagram.jsx`.

**How it's done:**
- Requires the clinic's Instagram Business/Creator account connected via the
  Meta for Developers platform (Instagram Basic Display / Graph API).
- Backend: add an endpoint (e.g. `GET /api/instagram`) that fetches recent
  posts using a long-lived access token stored in `backend/.env`, caches the
  result (e.g. for 1 hour) to stay within rate limits.
- Frontend: `Instagram.jsx` fetches from that endpoint on load and falls back
  to the current static grid if the API is unavailable.
- The owner must provide Meta app credentials — this is the only manual setup.

---

## 5. Real Before & After Gallery (P1 when photography exists)

**What:** Replace the demonstration comparison slider with genuine client
before/after photos.

**Why:** Real results are the single most persuasive element for an aesthetics
clinic. The slider UI is already built and tested.

**How it's done:**
- Obtain written client consent for each photo pair (essential for a medical
  aesthetics business).
- Take photos with consistent lighting, angle and distance.
- Update the `CASES` array in `frontend/src/components/BeforeAfter.jsx` —
  each case takes a separate `beforeImg` and `afterImg` (the component already
  supports two distinct images; the demo currently reuses one image with a
  filter).
- Remove the "Demonstration imagery" disclaimer once real photos are in.

---

## 6. Online Booking Calendar (P2)

**What:** Clients pick a real available time slot instead of just requesting
a callback.

**Why:** Reduces back-and-forth and no-shows; expected by many clients.

**How it's done:**
- Option A (simplest): embed an existing booking platform the clinic uses
  (Fresha, Booksy, Timely) via a link or iframe behind the current
  "Book Consultation" buttons.
- Option B (custom): build availability slots into the backend (a `slots`
  collection in MongoDB), a calendar picker in the booking modal using the
  existing shadcn `calendar` component, and confirmation emails via Resend
  (see idea 2).
- Option A is recommended for launch; Option B only if the clinic wants full
  control.

---

## 7. Google Maps & Local SEO (P2)

**What:** Embedded map in the contact section plus local SEO markup.

**Why:** "Aesthetics clinic near me" searches are the clinic's biggest source
of new clients; a map and structured data directly improve local rankings.

**How it's done:**
- Embed Google Maps in `ContactCTA.jsx` (iframe embed needs no API key).
- Add JSON-LD structured data (`LocalBusiness` / `MedicalClinic` schema) to
  `public/index.html` with real address, hours and phone.
- Create/optimise the Google Business Profile to match the website details.

---

## 8. Performance & Launch Hardening (P2)

**What:** Final polish before going live as the real site.

**How it's done:**
- Self-host the clinic's optimised images (WebP, sized correctly) instead of
  hot-linked stock URLs.
- Run Lighthouse and address anything below 95 (the 3D hero scene is already
  lazy-loaded to protect initial load).
- Add a privacy policy and cookie note (required once real client data and
  any analytics are collected).
- Point the clinic's real domain at the deployment and enable HTTPS.

---

## Priority Summary

| Order | Item | Effort | Impact |
|-------|------|--------|--------|
| 1 | Real business details | Low | Essential |
| 2 | Enquiry email alerts | Low | High |
| 3 | Real before/after photos | Low (needs photos) | High |
| 4 | Google Maps & local SEO | Low | High |
| 5 | Treatment detail pages | Medium | Medium–High |
| 6 | Live Instagram feed | Medium | Medium |
| 7 | Online booking calendar | Medium–High | Medium |
| 8 | Performance & launch hardening | Medium | Essential at launch |
