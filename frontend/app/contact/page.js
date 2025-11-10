'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+63 (02) 8123 4567', '+63 917 123 4567'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@natrapharm.com', 'support@natrapharm.com'],
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Healthcare Avenue', 'Makati City, Metro Manila 1200'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - no actual backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or need assistance? Our team is here to help you with all your pharmaceutical needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                  data-testid={`contact-info-${index}`}
                >
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  {item.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-sm text-gray-600 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold text-black mb-6">
                Send Us a Message
              </h2>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will respond to your inquiry as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                    placeholder="Juan Dela Cruz"
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                    placeholder="juan@example.com"
                    data-testid="contact-email-input"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                    placeholder="Product Inquiry"
                    data-testid="contact-subject-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base resize-none"
                    placeholder="Please tell us how we can help you..."
                    data-testid="contact-message-input"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl"
                  data-testid="contact-submit-button"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-12"
            >
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="font-display text-3xl font-bold mb-6">
                    Visit Our Office
                  </h3>
                  <p className="text-base text-red-100 mb-8 leading-relaxed">
                    We welcome you to visit our headquarters. Our team is ready to discuss how Natrapharm can support your healthcare needs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Main Office</p>
                        <p className="text-sm text-red-100">
                          123 Healthcare Avenue<br />
                          Makati City, Metro Manila 1200<br />
                          Philippines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&q=85"
                    alt="Natrapharm Office"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
