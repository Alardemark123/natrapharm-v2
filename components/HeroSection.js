'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center md:items-start overflow-hidden">
      {/* Desktop Background (hidden on mobile) */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/background/one.png"
          alt="Hero background"
          fill
          className="object-contain object-right"
          priority
          quality={100}
        />
        {/* White fade overlay only on the left */}
        <div className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-white to-transparent pointer-events-none" />
      </div>

      {/* Desktop Content */}
      <div className="relative z-10 hidden md:flex w-full px-6 text-left flex-col justify-center h-[80vh] min-h-[700px] space-y-6 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start justify-center space-y-6"
        >
          <h1 className="font-sans font-display text-5xl sm:text-6xl md:text-[85px] lg:text-[85px] xl:text-[85px] font-bold leading-tight">
            NURTURING HEALTH
          </h1>
          <h2 className="font-sans font-display text-3xl sm:text-5xl md:text-[85px] lg:text-[85px] xl:text-[85px] font-bold leading-tight">
            WITH A <span className="text-[#e12328]">FILIPINO HEART</span>
          </h2>
          <p className="font-sans font-display text-[18px] leading-tight text-black drop-shadow-[0_0_4px_white]">
            More than just a national organization nurturing healthcare, Natrapharm Inc. and its business affiliate, Patriot Pharmaceuticals Corporation, carry this genuine compassion for Filipinos. Being at the heart of what we do ---- in every quality product we provide, in every sincere service we offer, and in every reliable partnership we build ---- all these to fulfill our dream, our mission: To nurture healthcare and improve the life of every Filipino.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-row gap-4">
            <Link href="/about">
              <button className="inline-flex items-center gap-2 bg-[#e12328] text-white px-5 py-2.5 rounded-full font-semibold text-base hover:bg-[#c11f24] transition-colors duration-300 shadow-md">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-white text-[#e12328] border border-[#e12328] px-5 py-2.5 rounded-full font-semibold text-base hover:bg-[#e12328] hover:text-white transition-colors duration-300 shadow-md">
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden w-full flex flex-col items-center text-center space-y-6  py-8">
        {/* Image at top */}
        <div className="w-full h-[300px] relative">
          <Image
            src="/background/one.png"
            alt="Hero image"
            fill
            className="object-contain object-center"
            priority
            quality={100}
          />
        </div>

        {/* Content below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center justify-center max-w-[600px] padding-6" 
        >
          <h1 className="font-sans font-display text-3xl sm:text-3xl font-bold leading-snug uppercase">
            Nurturing Health
          </h1>
          <h2 className="font-sans font-display text-3xl sm:text-3xl font-bold leading-snug uppercase">
            With a <span className="text-[#e12328]">Filipino Heart</span>
          </h2>
          <p className="font-sans font-display text-[16px] leading-relaxed text-black drop-shadow-[0_0_4px_white]">
            More than just a national organization nurturing healthcare, Natrapharm Inc. and its business affiliate, Patriot Pharmaceuticals Corporation, carry this genuine compassion for Filipinos. Being at the heart of what we do ---- in every quality product we provide, in every sincere service we offer, and in every reliable partnership we build ---- all these to fulfill our dream, our mission: To nurture healthcare and improve the life of every Filipino.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mt-4 justify-center">
            <Link href="/about">
              <button className="inline-flex items-center justify-center gap-2 bg-[#e12328] text-white px-5 py-2.5 rounded-full font-semibold text-base hover:bg-[#c11f24] transition-colors duration-300 shadow-md">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-[#e12328] border border-[#e12328] px-5 py-2.5 rounded-full font-semibold text-base hover:bg-[#e12328] hover:text-white transition-colors duration-300 shadow-md">
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
