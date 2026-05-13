import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../data/projects";
import { motion } from "framer-motion";

export function TestimonialSlider() {
  return (
    <section className="py-24 bg-cream" id="testimonials" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-gold block mb-4"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-semibold text-dark-green"
          >
            The Impact Of My Work
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div
                  className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full"
                  data-testid={`testimonial-card-${t.id}`}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-gold" size={16} />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-8 text-sm italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-dark-green text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #032D1F;
          opacity: 0.3;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #B8860B;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
