import { motion } from "framer-motion";
import { Link } from "wouter";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { uiDesignProjects } from "../data/projects";
import { LightboxModal } from "../components/LightboxModal";

const categories = ["All", "Mobile App", "Dashboard", "Landing Page", "Wireframe"];

export default function UIDesign() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? uiDesignProjects
    : uiDesignProjects.filter((p) => p.category === activeCategory);

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
            UI <em className="text-gold">Design</em>
          </h1>
          <p className="mt-6 text-dark-green/60 max-w-xl leading-relaxed">
            Digital interfaces crafted with purpose — mobile apps, web dashboards, landing pages, and wireframe explorations. Clean, intuitive, and beautiful.
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
              data-testid={`filter-btn-${cat.toLowerCase().replace(/\s/g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -6 }}
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-sm hover:shadow-xl hover:shadow-dark-green/10 transition-all duration-300"
              data-testid={`ui-card-${project.id}`}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={project.src}
                  alt={project.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="px-3 py-1 bg-cream text-dark-green text-xs font-semibold rounded-full border border-dark-green/10">
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
