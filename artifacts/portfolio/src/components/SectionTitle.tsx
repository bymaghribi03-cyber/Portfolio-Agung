import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="mb-16 text-center max-w-2xl mx-auto">
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-sm font-medium tracking-wider uppercase mb-4 block ${light ? 'text-gold' : 'text-gold'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-heading font-semibold ${light ? 'text-cream' : 'text-dark-green'}`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
