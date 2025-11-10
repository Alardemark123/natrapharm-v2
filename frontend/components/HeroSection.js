'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const backgrounds = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&q=85',
  'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?crop=entropy&cs=srgb&fm=jpg&q=85',
  'https://images.unsplash.com/photo-1641760372370-1c86b2f38842?crop=entropy&cs=srgb&fm=jpg&q=85',
  'https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg',
];

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Natrapharm
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 max-w-3xl mx-auto leading-relaxed font-light">
            Committed to improving Filipino lives through quality healthcare.
          </p>
          <p className="text-base sm:text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Leading pharmaceutical company dedicated to accessible, affordable, and world-class healthcare solutions.
          </p>
          <Link href="/about">
            <button
              data-testid="hero-cta-button"
              className="group inline-flex items-center gap-2 bg-red-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Learn More
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBg(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentBg === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            data-testid={`hero-indicator-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
