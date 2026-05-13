import { motion } from "framer-motion";
import { Link } from "wouter";
import { FiArrowLeft, FiExternalLink, FiPlay } from "react-icons/fi";
import { useState } from "react";
import { videoProjects } from "../data/projects";

export default function VideoEditing() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
          className="mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase block mb-4">My Work</span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark-green leading-tight">
            Video Editing &<br />
            <em className="text-gold">Videography</em>
          </h1>
          <p className="mt-6 text-dark-green/60 max-w-xl leading-relaxed">
            A curated collection of cinematic video projects — from commercial productions and music videos to travel documentaries and brand storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:shadow-dark-green/10 transition-all duration-300"
              data-testid={`video-card-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-green/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white"
                  >
                    <FiPlay size={28} className="ml-1" />
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-dark-green mb-2">{project.title}</h3>
                <p className="text-dark-green/60 text-sm leading-relaxed mb-5">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-dark-green text-cream text-sm font-medium rounded-full hover:bg-gold transition-colors duration-300"
                  data-testid={`video-watch-btn-${project.id}`}
                >
                  Watch on YouTube <FiExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
