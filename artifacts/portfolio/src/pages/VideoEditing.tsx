import { motion } from "framer-motion";
import { Link } from "wouter";
import { FiArrowLeft, FiExternalLink, FiPlay } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { videoProjects, reelsProjects } from "../data/projects";

export default function VideoEditing() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [hoveredReelId, setHoveredReelId] = useState<number | null>(null);

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

        {/* YouTube Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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

        {/* Instagram Reels Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white">
              <FaInstagram size={16} />
            </span>
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Instagram Reels</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-green leading-tight mb-4">
            Short-Form <em className="text-gold">Content</em>
          </h2>
          <p className="text-dark-green/60 max-w-xl leading-relaxed">
            Vertical, punchy, and scroll-stopping — creative reels crafted for the Instagram format.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {reelsProjects.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              onHoverStart={() => setHoveredReelId(reel.id)}
              onHoverEnd={() => setHoveredReelId(null)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:shadow-dark-green/10 transition-all duration-300"
              data-testid={`reel-card-${reel.id}`}
            >
              {/* 9:16 portrait container */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Instagram gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2))" }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white">
                    <FiPlay size={20} className="ml-0.5" />
                  </div>
                </div>

                {/* Instagram badge */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white shadow-md">
                  <FaInstagram size={13} />
                </div>

                {/* Bottom title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold leading-snug line-clamp-2">{reel.title}</p>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-3">
                <p className="text-dark-green font-semibold text-sm leading-snug line-clamp-1 mb-2">{reel.title}</p>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white text-xs font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
                  data-testid={`reel-watch-btn-${reel.id}`}
                >
                  <FaInstagram size={11} /> View Reel
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
