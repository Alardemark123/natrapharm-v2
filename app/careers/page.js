'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase } from 'lucide-react';

const jobs = [
  {
    position: 'Pharmaceutical Sales Representative',
    department: 'Sales & Marketing',
    location: 'Manila, Philippines',
    type: 'Full-time',
    description: 'Drive sales growth by building relationships with healthcare professionals and promoting our pharmaceutical products.',
  },
  {
    position: 'Quality Assurance Specialist',
    department: 'Quality Control',
    location: 'Quezon City, Philippines',
    type: 'Full-time',
    description: 'Ensure product quality and compliance with pharmaceutical regulations and industry standards.',
  },
  {
    position: 'Research Scientist',
    department: 'Research & Development',
    location: 'Makati, Philippines',
    type: 'Full-time',
    description: 'Lead innovative pharmaceutical research projects and contribute to new drug development initiatives.',
  },
  {
    position: 'Supply Chain Manager',
    department: 'Logistics',
    location: 'Pasig, Philippines',
    type: 'Full-time',
    description: 'Optimize pharmaceutical distribution operations and manage nationwide supply chain networks.',
  },
  {
    position: 'Clinical Research Associate',
    department: 'Clinical Trials',
    location: 'Manila, Philippines',
    type: 'Full-time',
    description: 'Coordinate clinical trials and ensure compliance with regulatory requirements and protocols.',
  },
  {
    position: 'Regulatory Affairs Specialist',
    department: 'Regulatory Compliance',
    location: 'Taguig, Philippines',
    type: 'Full-time',
    description: 'Manage regulatory submissions and maintain compliance with FDA Philippines requirements.',
  },
];

const benefits = [
  'Competitive salary packages',
  'Health insurance coverage',
  'Professional development programs',
  'Performance bonuses',
  'Work-life balance initiatives',
  'Employee wellness programs',
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-red-50 to-white overflow-hidden">
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
              Build Your Career
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our team of healthcare professionals dedicated to improving Filipino lives through quality pharmaceutical solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-black text-center mb-6">
              Why Join Natrapharm?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200"
                  data-testid={`benefit-item-${index}`}
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                  <span className="text-base text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl font-bold text-black mb-4">
                Open Positions
              </h2>
              <p className="text-base text-gray-600">
                Explore exciting career opportunities and find your perfect role.
              </p>
            </motion.div>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  data-testid={`job-card-${index}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-2xl font-semibold text-black group-hover:text-red-600 transition-colors duration-300">
                          {job.position}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    <div className="lg:flex-shrink-0">
                      <button
                        data-testid={`apply-button-${index}`}
                        className="w-full lg:w-auto px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-md"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button
              data-testid="general-application-button"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Submit General Application
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
