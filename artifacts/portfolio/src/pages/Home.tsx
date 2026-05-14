import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobepremierepro, SiAdobephotoshop, SiCanva } from "react-icons/si";
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { Video, Palette, Monitor } from "lucide-react";
import profileImg from "@assets/2.png";
import aboutImg from "@assets/3.png";
import aeLogo from "@assets/AE_1778679475633.png";
import aiLogo from "@assets/AI_1778679475633.png";
import prLogo from "@assets/PR_1778679475634.png";
import psLogo from "@assets/PS_1778679475635.png";
import cdrLogo from "@assets/CDR_1778679475634.png";
import figmaLogo from "@assets/FIGMA_1778679475634.png";
import canvaLogo from "@assets/Canva_1778679475634.png";
import capcutLogo from "@assets/CapCut_1778679475634.png";
import { SectionTitle } from "../components/SectionTitle";
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { MarqueeSection } from "../components/MarqueeSection";

const tools = [
  { name: "After Effects", logo: aeLogo },
  { name: "Illustrator", logo: aiLogo },
  { name: "Premiere Pro", logo: prLogo },
  { name: "Photoshop", logo: psLogo },
  { name: "CorelDRAW", logo: cdrLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Canva", logo: canvaLogo },
  { name: "CapCut", logo: capcutLogo },
];

const floatingBadges = [
  { label: "Video Editor", top: "15%", right: "%" },
  { label: "UI Designer", top: "60%", right: "-12%" },
  { label: "Graphic designer", bottom: "55%", left: "-10%" },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Projects Done" },
  { value: "20+", label: "Happy Clients" },
];

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section id="home" className="min-h-screen bg-cream flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-8">
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  Hello There ✦
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading md:text-6xl lg:text-7xl font-bold text-dark-green tracking-tight mr-[-68px] mb-[23px] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px] text-[60px]"
                data-testid="hero-heading"
              >
                I'm{" "}
                <span className="text-gold italic">Agung Maghribi</span>{" "}
                <span className="block mt-1">Creative Visual Specialist</span>
                <span className="block text-4xl md:text-5xl lg:text-5xl mt-2 font-medium text-dark-green/70">
                  Based in Yogyakarta.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-dark-green/60 text-lg leading-relaxed mb-10 max-w-lg pl-[0px] pr-[0px] mr-[0px]"
              >I’m a creative visual professional with 4+ years of experience in video editing, videography, and graphic design. Passionate about turning ideas into impactful and engaging visual content.</motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <a
                  href="#projects"
                  className="px-8 py-4 bg-gold text-white font-semibold rounded-full hover:bg-dark-green transition-colors duration-300 shadow-lg shadow-gold/30 flex items-center gap-2"
                  data-testid="hero-cta-work"
                >
                  View My Work <FiArrowRight />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-dark-green text-dark-green font-semibold rounded-full hover:bg-dark-green hover:text-cream transition-all duration-300"
                  data-testid="hero-cta-hire"
                >
                  Hire Me
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-5"
              >
                {[
                  { icon: <FaInstagram size={22} />, href: "https://www.instagram.com/agungmaghribi/", label: "Instagram" },
                  { icon: <FaLinkedin size={22} />, href: "https://www.linkedin.com/in/agungmaghribi", label: "LinkedIn" },
                  { icon: <FaPinterest size={22} />, href: "https://pin.it/5BXuP9KLK", label: "Pinterest" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-11 h-11 rounded-full border border-dark-green/20 flex items-center justify-center text-dark-green/60 hover:text-gold hover:border-gold transition-colors"
                    aria-label={s.label}
                    data-testid={`hero-social-${s.label.toLowerCase()}`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <div className="relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-[3rem] bg-gold/10 blur-3xl scale-110" />
                <div className="absolute -inset-3 rounded-[3rem] border-2 border-gold/20 rotate-3" />
                <div className="absolute -inset-6 rounded-[3rem] border border-gold/10 -rotate-3" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className={`rounded-[3rem] overflow-hidden w-72 h-80 md:w-96 md:h-[500px] ${!imageLoaded ? "bg-gray-200 animate-pulse" : ""}`}>
                    <img
                      src={profileImg}
                      alt="Agung Maghribi"
                      className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                      onLoad={() => setImageLoaded(true)}
                      data-testid="hero-profile-img"
                    />
                  </div>
                </motion.div>

                {floatingBadges.map((badge, i) => (
                  <motion.div
                    key={badge.label}
                    style={{ top: badge.top, right: badge.right, bottom: badge.bottom, left: badge.left }}
                    className="absolute z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                    transition={{
                      opacity: { delay: 0.5 + i * 0.2, duration: 0.4 },
                      scale: { delay: 0.5 + i * 0.2, duration: 0.4 },
                      y: { delay: i * 0.5, duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-dark-green text-sm font-semibold rounded-full shadow-xl border border-white/50">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      {badge.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE */}
      <MarqueeSection />
      {/* SERVICES */}
      <section id="services" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Services I Provide" subtitle="What I Do" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Video Editing & Videography"
              description="Cinematic storytelling through expert video editing, color grading, motion graphics, and professional videography. From commercials to documentaries."
              icon={<Video size={28} />}
              delay={0}
            />
            <ServiceCard
              title="Graphic Design"
              description="Bold visual identities, stunning poster design, social media content, brand materials, and print designs that communicate with elegance and purpose."
              icon={<Palette size={28} />}
              delay={0.1}
            />
            <ServiceCard
              title="UI Design"
              description="Intuitive, beautiful digital interfaces — from mobile apps to web dashboards. Clean wireframes, interactive prototypes, and pixel-perfect final designs."
              icon={<Monitor size={28} />}
              delay={0.2}
            />
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section id="about" className="py-24 bg-dark-green">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl scale-125" />
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold/40 shadow-2xl shadow-gold/20"
                >
                  <img
                    src={aboutImg}
                    alt="Agung Maghribi"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    data-testid="about-img"
                  />
                </motion.div>
                {["Creative", "Detail-Oriented", "Passionate"].map((label, i) => (
                  <motion.span
                    key={label}
                    style={{ top: `${20 + i * 30}%`, right: i % 2 === 0 ? "-20%" : "auto", left: i % 2 !== 0 ? "-20%" : "auto" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    animate={{ y: [0, -5, 0] }}
                    className="absolute px-3 py-1.5 bg-gold text-white text-xs font-semibold rounded-full shadow-lg"
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-gold text-sm font-medium tracking-widest uppercase block mb-4">About Me</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-cream mb-6">
                Who is{" "}
                <em className="text-gold not-italic">Agung?</em>
              </h2>
              <p className="text-cream/70 leading-relaxed mb-4">
                I am a Video Editor, Videographer, and Graphic Designer focused on creating engaging and impactful creative solutions. With 3+ years of experience crafting projects from concept to completion, I am dedicated to producing work that inspires and delivers.
              </p>
              <p className="text-cream/70 leading-relaxed mb-10">
                Based in Yogyakarta, I work with brands, startups, and agencies to bring their visual stories to life — through motion, print, and digital design. My approach combines technical precision with an editorial eye for aesthetics.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}>
                    <p className="font-heading text-4xl font-bold text-gold mb-1">{stat.value}</p>
                    <p className="text-cream/60 text-xs uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-full hover:bg-white hover:text-dark-green transition-all duration-300"
                data-testid="about-cta"
              >
                Get In Touch <FiArrowRight />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* TOOLS */}
      <section id="tools" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Exploring the Tools" subtitle="My Toolkit" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-gold/15 transition-all duration-300 cursor-default group"
                data-testid={`tool-${tool.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-14 h-14 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(184,134,11,0.5)] transition-all duration-300"
                />
                <span className="text-dark-green/70 text-xs font-medium text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="My Latest Projects" subtitle="My Portfolio" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProjectCard
              title="Video Editing & Videography"
              category="Motion"
              image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
              href="/projects/video-editing"
              delay={0}
            />
            <ProjectCard
              title="Graphic Designer"
              category="Design"
              image="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
              href="/projects/graphic-design"
              delay={0.1}
            />
            <ProjectCard
              title="UI Design"
              category="Digital"
              image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
              href="/projects/ui-design"
              delay={0.2}
            />
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <TestimonialSlider />
      {/* CONTACT */}
      <section id="contact" className="py-24 bg-dark-green">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-sm font-medium tracking-widest uppercase block mb-4"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-cream"
            >
              Let's Connect There
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: <FiMail />, label: "Email", value: "agungmaghribi1009@gmail.com" },
                { icon: <FiPhone />, label: "Phone", value: "+62 812 3456 7890" },
                { icon: <FiMapPin />, label: "Location", value: "Yogyakarta, Indonesia" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-5" data-testid={`contact-${item.label.toLowerCase()}`}>
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-cream/40 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-cream font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 pt-4">
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
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all"
                    aria-label={s.label}
                    data-testid={`contact-social-${s.label.toLowerCase()}`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full gap-4 text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold text-2xl">
                    <FiSend />
                  </div>
                  <h3 className="font-heading text-2xl text-cream font-semibold">Message Sent!</h3>
                  <p className="text-cream/60">I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-cream placeholder-cream/40 focus:outline-none focus:border-gold transition-colors text-sm"
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-cream placeholder-cream/40 focus:outline-none focus:border-gold transition-colors text-sm"
                      data-testid="contact-email-input"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-cream placeholder-cream/40 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                      data-testid="contact-message-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-white font-semibold rounded-xl hover:bg-white hover:text-dark-green transition-all duration-300 flex items-center justify-center gap-2"
                    data-testid="contact-submit-btn"
                  >
                    <FiSend /> Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
