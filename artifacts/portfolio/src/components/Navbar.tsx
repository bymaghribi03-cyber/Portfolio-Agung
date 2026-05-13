import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tools" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl shadow-dark-green/10 border border-white/50"
            : "bg-white/70 backdrop-blur-md shadow-md border border-white/30"
        }`}
        data-testid="navbar"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-2xl text-gold tracking-tight" data-testid="nav-logo">
            ANM
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-dark-green hover:text-gold transition-colors duration-200 rounded-full hover:bg-cream"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-6 py-2 bg-gold text-white text-sm font-semibold rounded-full hover:bg-dark-green transition-colors duration-300 shadow-md"
              data-testid="nav-hire-btn"
            >
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden p-2 text-dark-green"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="nav-hamburger"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark-green/98 backdrop-blur-xl flex flex-col items-center justify-center"
            data-testid="mobile-menu"
          >
            <button
              className="absolute top-6 right-6 text-cream"
              onClick={() => setMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-4xl font-heading font-semibold text-cream hover:text-gold transition-colors"
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-4 px-10 py-4 bg-gold text-white text-lg font-semibold rounded-full"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
