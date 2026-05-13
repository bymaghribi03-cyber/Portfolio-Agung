import { Link } from "wouter";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-dark-green text-cream" id="contact" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-gold mb-4">ANM</h3>
            <p className="text-cream/70 leading-relaxed text-sm mb-6">
              A creative professional crafting compelling visual stories through video, design, and UI. Based in Yogyakarta, Indonesia.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/agungmaghribi/", label: "Instagram" },
                { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/agungmaghribi", label: "LinkedIn" },
                { icon: <FaPinterest size={20} />, href: "https://pin.it/5BXuP9KLK", label: "Pinterest" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#B8860B" }}
                  className="text-cream/60 hover:text-gold transition-colors"
                  aria-label={s.label}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                    data-testid={`footer-nav-${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-cream/60 text-sm">
                <FiMail className="text-gold shrink-0" />
                <span>agungmaghribi1009@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-cream/60 text-sm">
                <FiPhone className="text-gold shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-cream/60 text-sm">
                <FiMapPin className="text-gold shrink-0" />
                <span>Yogyakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-6 uppercase tracking-wider text-xs">Get the Latest Info</h4>
            <p className="text-cream/60 text-sm mb-4">Subscribe for updates on new projects and creative insights.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-gold transition-colors"
                data-testid="footer-newsletter-input"
              />
              <button
                className="px-4 py-2 bg-gold text-white rounded-full text-sm font-medium hover:bg-white hover:text-dark-green transition-colors"
                data-testid="footer-newsletter-btn"
              >
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            © 2024 Agung Maghribi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/projects/video-editing" className="text-cream/40 hover:text-gold text-sm transition-colors">
              Video Editing
            </Link>
            <Link href="/projects/graphic-design" className="text-cream/40 hover:text-gold text-sm transition-colors">
              Graphic Design
            </Link>
            <Link href="/projects/ui-design" className="text-cream/40 hover:text-gold text-sm transition-colors">
              UI Design
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
