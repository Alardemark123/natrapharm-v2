'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

// ✅ Separate backgrounds for desktop and mobile
const backgrounds = {
  desktop: [
    { src: '/background/one.png', position: 'object-center' },
    { src: '/background/two.png', position: 'object-top' },
    { src: '/background/three.png', position: 'object-[47%_50%]' }, // X: -350px, Y: center
    { src: '/background/four.png', position: 'object-[center_20%]' },
  ],
  mobile: [
    { src: '/background/one.png', position: 'object-[-2205px]' },
    { src: '/background/two.png', position: 'object-[-205px]' },
    { src: '/background/three.png', position: 'object-[-1105px]' },
    { src: '/background/four.png', position: 'object-[-200px]' },
  ],
};


export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 🔄 Detect mobile/desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ⏱ Background auto-change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.desktop.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bgSet = isMobile ? backgrounds.mobile : backgrounds.desktop;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 🌄 Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {bgSet.map((bg, index) => (
          <motion.div
            key={index}
            animate={{ opacity: currentBg === index ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={bg.src}
              alt={`Hero background ${index + 1}`}
              fill
              priority={index === 0}
              quality={100}
              sizes="100vw"
              className={`object-cover transition-transform duration-[2000ms] ease-out ${
                isMobile ? 'scale-100' : 'scale-105'
              } ${bg.position}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/80" />
          </motion.div>
        ))}
      </div>

      {/* ✨ Text Content */}
      <div className="relative z-10 max-w-screen mx-auto px-4 text-center text-white">
        {/* ✅ Desktop */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* ✅ Small image above heading */}
            {/* <div className="w-[500px] h-[150px] mx-auto mb-4 relative">
              <Image
                src="/logo/logo2.png" 
                alt="Natrapharm logo 2"
                fill
                className="object-contain"
                priority
              />
            </div> */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
            Nurturing Health With A Filipino Heart
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              As a proud Filipino company, our goal is to provide opportunities
              for the Filipinos, offering them access to quality medicines and
              meaningful careers.
            </p>
            <Link href="/about">
              <button className="group inline-flex items-center gap-2 bg-[#e12328] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-[#e12328] transition-all duration-300 hover:scale-105 shadow-2xl">
                Learn More
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* ✅ Mobile */}
        <div className="block md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3 leading-snug">
              Natrapharm
            </h1>
            <p className="text-sm sm:text-base mb-3 max-w-xs mx-auto leading-relaxed font-light">
              Providing opportunities and access to quality medicines for every Filipino.
            </p>
            <Link href="/about">
              <button className="group inline-flex items-center gap-2 bg-[#e12328] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-[#e12328] transition-all duration-300 hover:scale-105 shadow-lg">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 🔘 Background Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {bgSet.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBg(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentBg === index ? 'bg-white w-6 sm:w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
