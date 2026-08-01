import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import "@/App.css";
import { SiteContext } from "@/context/SiteContext";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/Marquee";
import TrustBar from "@/components/TrustBar";

const Treatments = lazy(() => import("@/components/Treatments"));
const BeforeAfter = lazy(() => import("@/components/BeforeAfter"));
const WhyChoose = lazy(() => import("@/components/WhyChoose"));
const Specialist = lazy(() => import("@/components/Specialist"));
const Journey = lazy(() => import("@/components/Journey"));
const Reviews = lazy(() => import("@/components/Reviews"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Instagram = lazy(() => import("@/components/Instagram"));
const ContactCTA = lazy(() => import("@/components/ContactCTA"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingCTA = lazy(() => import("@/components/FloatingCTA"));
const BookingModal = lazy(() => import("@/components/BookingModal"));

const LOADER_MS = 900;

function App() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    // Skip Lenis on touch / reduced-motion — native scroll is smoother there
    if (prefersReduced || isCoarse) return undefined;

    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true, autoRaf: true });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADER_MS);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -70, duration: 1.2 });
      return;
    }
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SiteContext.Provider value={{ openBooking: () => setBookingOpen(true), scrollTo }}>
      <div className="App">
        <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
        <Navbar />
        <main>
          <Hero />
          <EditorialMarquee />
          <TrustBar />
          <Suspense fallback={null}>
            <Treatments />
            <BeforeAfter />
            <WhyChoose />
            <Specialist />
            <Journey />
            <Reviews />
            <FAQ />
            <Instagram />
            <ContactCTA />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <FloatingCTA />
        </Suspense>
        <Suspense fallback={null}>
          {bookingOpen && (
            <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
          )}
        </Suspense>
        <Toaster position="top-center" richColors />
      </div>
    </SiteContext.Provider>
  );
}

export default App;
