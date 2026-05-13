import { motion } from "framer-motion";
import { Link } from "wouter";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { graphicDesignProjects } from "../data/projects";
import { LightboxModal } from "../components/LightboxModal";

const categories = ["All", "Social Media", "Poster"];

export default function GraphicDesign() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? graphicDesignProjects
    : graphicDesignProjects.filter((p) => p.category === activeCategory);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-dark-green/60 hover:text-gold transition-colors text-sm font-medium"
            data-testid="back-btn"
          >
            <FiArrowLeft /> Back to Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase block mb-4">My Work</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark-green leading-tight">
            Graphic <em className="text-gold">Designer</em>
          </h1>
          <p className="mt-6 text-dark-green/60 max-w-xl leading-relaxed">
            Visual design work spanning brand identities, poster design, social media content, and banner campaigns. Each piece tells a unique visual story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-dark-green text-cream"
                  : "bg-white text-dark-green border border-dark-green/20 hover:border-gold hover:text-gold"
              }`}
              data-testid={`filter-btn-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              onClick={() => handleImageClick(i)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
              data-testid={`graphic-card-${project.id}`}
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-2">
                <span className="text-cream text-sm font-semibold leading-snug">{project.title}</span>
                <span className="px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filtered}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
