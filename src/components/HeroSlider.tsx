'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@/navigation';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=2000',
    key: 'slide1',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=2000',
    key: 'slide2',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
    key: 'slide3',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1591333139245-2b41d6820631?auto=format&fit=crop&q=80&w=2000',
    key: 'slide4',
  },
];

const HeroSlider = () => {
  const t = useTranslations('Hero');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'linear' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
              >
                {t(`${slides[current].key}.title`)}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide"
              >
                {t(`${slides[current].key}.subtitle`)}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Link
                  href="/products"
                  className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-widest font-medium"
                >
                  {t(`${slides[current].key}.cta`)}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 flex space-x-4 z-20">
        <button
          onClick={prevSlide}
          className="p-3 border border-white/20 text-white hover:bg-white hover:text-primary transition-all rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 border border-white/20 text-white hover:bg-white hover:text-primary transition-all rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-10 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-300 ${
              current === index ? 'w-12 bg-white' : 'w-6 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
