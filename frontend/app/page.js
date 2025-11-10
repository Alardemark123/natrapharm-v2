'use client';

import HeroSection from '@/components/HeroSection';
import { Package, Award, Truck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const highlights = [
  {
    icon: Award,
    title: 'Trusted Pharmaceutical Company',
    description: 'Over 30 years of excellence in healthcare',
  },
  {
    icon: Package,
    title: 'Quality Medicines',
    description: 'World-class standards in every product',
  },
  {
    icon: Truck,
    title: 'Nationwide Distribution',
    description: 'Reliable delivery across the Philippines',
  },
  {
    icon: Users,
    title: 'Career Opportunities',
    description: 'Join our growing team of healthcare professionals',
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

export default function Home() {
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
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  data-testid={`highlight-card-${index}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-6">
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
                  <h3 className="font-display text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-red-100 mb-10 max-w-2xl mx-auto">
              Discover how Natrapharm can support your healthcare needs with quality pharmaceutical solutions.
            </p>
            <Link href="/contact">
              <button
                data-testid="cta-contact-button"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
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
