import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { useSite } from "@/context/SiteContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking, scrollTo } = useSite();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <motion.header
        data-testid="main-nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          scrolled ? "glass border-b border-white/30 shadow-[0_8px_30px_rgba(26,26,26,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <button
            data-testid="nav-logo"
            onClick={() => scrollTo("#top")}
            className="flex items-baseline gap-2 group"
          >
            <span className="font-serif text-3xl tracking-tight text-charcoal">HC</span>
            <span className="hidden sm:block text-[10px] tracking-[0.35em] uppercase text-charcoal-soft group-hover:text-champagne-dark transition-colors duration-300">
              Beauty &amp; Aesthetics
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => go(l.href)}
                className="relative text-sm text-charcoal-light hover:text-charcoal transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-champagne after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              data-testid="book-consultation-nav-btn"
              onClick={openBooking}
              className="hidden sm:inline-flex items-center rounded-full bg-charcoal text-ivory text-sm px-6 py-2.5 hover:bg-champagne-dark transition-colors duration-300"
            >
              Book Consultation
            </button>
            <button
              data-testid="mobile-menu-btn"
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ivory flex flex-col"
          >
            <div className="h-20 px-6 flex items-center justify-between">
              <span className="font-serif text-3xl text-charcoal">HC</span>
              <button data-testid="mobile-menu-close-btn" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <X size={24} className="text-charcoal" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  onClick={() => go(l.href)}
                  className="text-left font-serif text-4xl py-3 text-charcoal hover:text-champagne-dark transition-colors duration-300"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                data-testid="mobile-book-btn"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
                className="mt-8 w-fit rounded-full bg-charcoal text-ivory px-8 py-4 text-sm tracking-wide"
              >
                Book Consultation
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
