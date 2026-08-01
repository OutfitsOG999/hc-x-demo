import { useEffect, useRef, useState } from "react";
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
import Treatments from "@/components/Treatments";
import BeforeAfter from "@/components/BeforeAfter";
import WhyChoose from "@/components/WhyChoose";
import Specialist from "@/components/Specialist";
import Journey from "@/components/Journey";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Instagram from "@/components/Instagram";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BookingModal from "@/components/BookingModal";

function App() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (target) => {
    lenisRef.current?.scrollTo(target, { offset: -70, duration: 1.4 });
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
          <Treatments />
          <BeforeAfter />
          <WhyChoose />
          <Specialist />
          <Journey />
          <Reviews />
          <FAQ />
          <Instagram />
          <ContactCTA />
        </main>
        <Footer />
        <FloatingCTA />
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
        <Toaster position="top-center" richColors />
      </div>
    </SiteContext.Provider>
  );
}

export default App;
