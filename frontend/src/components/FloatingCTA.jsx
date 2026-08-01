import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarHeart } from "lucide-react";
import { useSite } from "@/context/SiteContext";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { openBooking } = useSite();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          data-testid="floating-book-btn"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={openBooking}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 rounded-full bg-charcoal text-ivory pl-5 pr-7 py-4 shadow-[0_20px_50px_rgba(26,26,26,0.35)] hover:bg-champagne-dark transition-colors duration-300"
        >
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex w-10 h-10 rounded-full bg-champagne/40 animate-pulse-ring" />
            <CalendarHeart size={20} className="relative text-champagne-light" />
          </span>
          <span className="text-sm tracking-wide">Book Consultation</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
