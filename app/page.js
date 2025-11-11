'use client';

import HeroSection from '@/components/HeroSection';
import { Pill, Building2, Briefcase, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';

const highlights = [
  {
    icon: Building2,
    link: '/about',
    title: 'Our Company',
    description: 'A dedicated pharmaceutical organization aiming to improve healthcare for a stronger and better Philippines.',
  },
  {
    icon: Pill,
    link: '/products',
    title: 'Products',
    description: 'Know more about our quality products evaluated with high standards of safety and efficacy.',
  },
  {
    icon: Briefcase,
    link: '/services',
    title: 'Business Services',
    description: 'Navigate the market as you partner with a reliable organization through its global perspective and local expertise.',
  },
  {
    icon: Users,
    link: '/careers',
    title: 'Careers',
    description: 'Grow in a career that brings purpose, positive culture and steady growth – fulfilling and serving your country with pride.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};


// HIP START
const carouselItems = [
  {
    image: '/HIP/ScheduleAppointments.png',
    title: 'Schedule Appointments',
    description: 'Select preferred date, time, and type of consultation (face-to-face or telemedicine)',
  },
  {
    image: '/HIP/MedicalConsultationOnline.png',
    title: 'Medical Consultation Online',
    description: 'Consult your doctor from the safety of your home',
  },
  {
    image: '/HIP/EnsureReliablePrescriptions.png',
    title: 'Ensure Reliable Prescriptions',
    description: 'Our credible doctors will ensure safe, accurate prescriptions for you and your family.',
  },
  {
    image: '/HIP/MonitorYourHealth.png',
    title: 'Monitor Your Health',
    description: 'Record your daily weight, blood pressure, body temperature and more',
  }
];
// HIP END

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [visibleItems, setVisibleItems] = useState(3);


  const extendedCarousel = [...carouselItems, ...carouselItems]; // duplicate
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };
  

  // Optional: auto-slide every 5 seconds
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);      // Mobile
      else if (window.innerWidth < 1024) setVisibleItems(2); // Tablet
      else setVisibleItems(3);                               // Desktop
    };
  
    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <div>
      <HeroSection />
      

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  data-testid={`highlight-card-${index}`}
                  href={item.link}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative z-10">
                    {/* Icon + Title Horizontal */}
                    <div className="flex flex-row items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-sans text-xl font-semibold text-black">
                        {item.title}
                      </h3>
                    </div>

                    <p className="font-sans text-gray-600 text-sm  leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>

              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-10">
        {/* Logo */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-[250px] mx-auto mb-6 relative">
          <Image
            src="/logo/logo2.png"
            alt="Natrapharm logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="max-w-screen-md mx-auto text-center">
          {/* Description */}
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            As a proud Filipino company, our goal is to provide opportunities for the Filipinos, 
            offering them access to quality medicines and meaningful careers. 
            Our commitment is to touch the lives of every Filipino, contributing to the building 
            of a better community and a better country.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

       {/* Left Side - Logo + Description + Wave Background */}
        {/* Left Side - Logo + Description + Wave Background */}
        <div className="relative lg:col-span-4 flex flex-col items-center p-8 rounded-2xl overflow-hidden rounded-2xl bg-gradient-to-br from-white via-red-100 to-red-200 animate-wave">

          {/* Logo - Centered & Bigger */}
          <div className="w-64 h-20 relative mb-6">
            <Image
              src="/HIP/logo1.png"
              alt="Natrapharm Logo"
              fill
              className="object-contain object-center"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-gray-800 text-base sm:text-lg text-center leading-relaxed mb-3">
            Natrapharm Health Information Program (Natrapharm-HIP) is a public service by Natrapharm, Inc., aiming to enhance healthcare accessibility for Filipinos. During the pandemic, Natrapharm swiftly launched this platform, offering free virtual consultations with over 7,000 doctors nationwide across various specialties, addressing the medical crisis.
          </p>
          <p className="text-gray-800 text-base sm:text-lg text-center leading-relaxed mb-6">
            Today, Natrapharm-HIP persists, offering online and in-person appointments, along with seamless access to patient records and electronic prescriptions, furthering Natrapharm's commitment to community well-being.
          </p>

          {/* Signup Button - Centered & Smaller Font */}
          <Link href="/HIP">
            <button className="group inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl">
              Signup for free
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>



       {/* Right Side - 3 Column Carousel */}
<div className="relative w-full flex flex-col items-center lg:col-span-8">
  <div className="overflow-hidden w-full relative">
    {/* Optional Edge Fades for visual effect */}
    <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white pointer-events-none" />
    <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white pointer-events-none" />

    <motion.div
      className="flex gap-6"
      animate={{ x: `-${(currentIndex % extendedCarousel.length) * (100 / visibleItems)}%` }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {extendedCarousel.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[calc(100%/1-1rem)] sm:w-[calc(100%/2-1rem)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <div className="w-full h-48 relative mb-4">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-700 text-sm">{item.description}</p>
        </div>
      ))}
    </motion.div>
  </div>

  {/* Carousel Controls */}
  <div className="flex gap-4 mt-6">
    <button
      onClick={() =>
        setCurrentIndex((prev) =>
          prev === 0 ? extendedCarousel.length - visibleItems : prev - 1
        )
      }
      className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button
      onClick={() =>
        setCurrentIndex((prev) =>
          prev >= extendedCarousel.length - visibleItems ? 0 : prev + 1
        )
      }
      className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  </div>
</div>


      </div>
</section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-black mb-6">
              Why Choose Natrapharm?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing accessible, affordable, and quality healthcare solutions to every Filipino family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Cutting-edge research and development in pharmaceutical sciences',
                image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=srgb&fm=jpg&q=85',
              },
              {
                title: 'Quality',
                description: 'Strict quality control measures ensuring safety and efficacy',
                image: 'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?crop=entropy&cs=srgb&fm=jpg&q=85',
              },
              {
                title: 'Community',
                description: 'Healthcare programs supporting Filipino communities nationwide',
                image: 'https://images.pexels.com/photos/3923155/pexels-photo-3923155.jpeg',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
                data-testid={`feature-card-${index}`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-sans text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#e12328]">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-white mb-10 max-w-4xl mx-auto">
              Discover how Natrapharm can support your healthcare needs with quality pharmaceutical solutions.
            </p>
            <Link href="/contact">
              <button
                data-testid="cta-contact-button"
                className="inline-flex items-center gap-2 bg-white text-[#e12328] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get In Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
