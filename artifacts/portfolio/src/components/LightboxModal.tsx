import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { id: number; src: string; category?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function LightboxModal({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, images.length]);

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-50 p-2"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 text-white hover:text-gold transition-colors z-50 p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <div 
            className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={images[currentIndex].src}
              alt="Project view"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {images[currentIndex].category && (
              <div className="absolute bottom-[-40px] text-white/70 font-medium">
                {images[currentIndex].category}
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 text-white hover:text-gold transition-colors z-50 p-2"
          >
            <ChevronRight size={48} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
