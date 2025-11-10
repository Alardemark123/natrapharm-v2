'use client';

import { motion } from 'framer-motion';
import { Target, Users, Globe, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide accessible, affordable, and quality healthcare solutions that improve the lives of every Filipino.',
  },
  {
    icon: Heart,
    title: 'Our Vision',
    description: 'To be the most trusted pharmaceutical company in the Philippines, known for excellence and compassion.',
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A dedicated workforce of healthcare professionals committed to serving Filipino communities.',
  },
  {
    icon: Globe,
    title: 'Our Reach',
    description: 'Nationwide distribution network ensuring medicines reach every corner of the Philippines.',
  },
];

const timeline = [
  { year: '1990', event: 'Natrapharm was founded with a vision to transform Philippine healthcare' },
  { year: '2000', event: 'Expanded operations nationwide, establishing key distribution centers' },
  { year: '2010', event: 'Launched community health programs reaching over 1 million Filipinos' },
  { year: '2020', event: 'Pioneered innovative pharmaceutical research and development initiatives' },
  { year: '2025', event: 'Continuing our commitment to quality healthcare for all Filipinos' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #C62828 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over three decades, Natrapharm has been at the forefront of Philippine healthcare, 
              dedicated to improving lives through quality pharmaceutical products and services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold text-black mb-6">
                Building Healthier Communities
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Natrapharm was established with a singular purpose: to make quality healthcare accessible 
                to every Filipino family. What started as a modest pharmaceutical company has grown into 
                one of the nation's most trusted names in healthcare.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our commitment goes beyond manufacturing medicines. We invest in research, partner with 
                healthcare professionals, and run community programs that bring medical care to underserved 
                areas across the Philippines.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Natrapharm Team"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  data-testid={`value-card-${index}`}
                >
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
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
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three decades of dedication, innovation, and service to Filipino healthcare.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200 hidden lg:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  data-testid={`timeline-item-${index}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
                      <div className="font-display text-3xl font-bold text-red-600 mb-3">
                        {item.year}
                      </div>
                      <p className="text-base text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
