'use client';

import { motion } from 'framer-motion';
import { Truck, FlaskConical, Handshake, Heart } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Pharmaceutical Distribution',
    description: 'Comprehensive distribution network delivering medicines to healthcare facilities nationwide',
    features: [
      'Cold chain logistics for temperature-sensitive products',
      'Real-time inventory tracking and management',
      'Same-day delivery to Metro Manila',
      'Nationwide coverage to remote areas',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    description: 'Cutting-edge pharmaceutical research advancing healthcare innovation',
    features: [
      'New drug formulation and development',
      'Clinical trials and safety studies',
      'Quality assurance and testing',
      'Collaboration with international research institutions',
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    icon: Handshake,
    title: 'Healthcare Partnerships',
    description: 'Strategic collaborations with hospitals, clinics, and healthcare providers',
    features: [
      'Supply chain optimization consulting',
      'Healthcare professional training programs',
      'Product education and seminars',
      'Partnership programs for pharmacies',
    ],
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    icon: Heart,
    title: 'Community Programs',
    description: 'Healthcare initiatives supporting underserved Filipino communities',
    features: [
      'Free medical missions in rural areas',
      'Health education campaigns',
      'Medicine donation programs',
      'Scholarship grants for aspiring healthcare workers',
    ],
    image: 'https://images.pexels.com/photos/3923155/pexels-photo-3923155.jpeg',
  },
];

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical solutions supporting healthcare providers and communities across the Philippines.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                data-testid={`service-section-${index}`}
              >
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-black mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Partner With Natrapharm
            </h2>
            <p className="text-lg text-red-100 mb-10 max-w-2xl mx-auto">
              Join our network of healthcare providers and discover how our services can support your organization.
            </p>
            <button
              data-testid="services-cta-button"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Contact Our Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
