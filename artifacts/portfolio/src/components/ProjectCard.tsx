import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  delay?: number;
}

export function ProjectCard({ title, category, image, href, delay = 0 }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-3xl overflow-hidden h-[400px] w-full"
    >
      <Link href={href} className="absolute inset-0 z-10 cursor-pointer" aria-label={`View ${title} projects`}>
        <span className="sr-only">View {title}</span>
      </Link>
      
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
      )}
      
      <img 
        src={image} 
        alt={title} 
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/20 to-transparent transition-opacity duration-300" />
      
      <div className="absolute top-6 left-6 z-20">
        <span className="px-4 py-2 bg-cream/90 backdrop-blur-sm text-dark-green text-xs font-semibold rounded-full uppercase tracking-wider">
          {category}
        </span>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">
        <div>
          <h3 className="text-3xl font-heading font-semibold text-cream mb-2 group-hover:text-gold transition-colors">{title}</h3>
          <p className="text-cream/80 text-sm">Explore Collection</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-cream transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowRight size={24} />
        </div>
      </div>
    </motion.div>
  );
}
