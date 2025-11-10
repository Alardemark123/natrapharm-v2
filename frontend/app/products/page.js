'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Search } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    name: 'Natrapharm Paracetamol 500mg',
    category: 'Pain Relief',
    description: 'Fast-acting pain relief and fever reducer for adults and children',
    image: 'https://images.unsplash.com/photo-1611072965169-e1534f6f300c?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    name: 'Natrapharm Vitamin C 1000mg',
    category: 'Vitamins & Supplements',
    description: 'Immune system support with high-potency vitamin C',
    image: 'https://images.unsplash.com/photo-1595432576728-94e0e94a7663?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    name: 'Natrapharm Antibiotic Plus',
    category: 'Antibiotics',
    description: 'Broad-spectrum antibiotic for bacterial infections',
    image: 'https://images.unsplash.com/photo-1611072965169-e1534f6f300c?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    name: 'Natrapharm Cough Syrup',
    category: 'Respiratory Care',
    description: 'Soothing relief for cough and throat irritation',
    image: 'https://images.unsplash.com/photo-1595432576728-94e0e94a7663?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    name: 'Natrapharm Multivitamins',
    category: 'Vitamins & Supplements',
    description: 'Complete daily nutrition with essential vitamins and minerals',
    image: 'https://images.unsplash.com/photo-1611072965169-e1534f6f300c?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    name: 'Natrapharm Anti-Hypertensive',
    category: 'Cardiovascular',
    description: 'Blood pressure management for hypertension patients',
    image: 'https://images.unsplash.com/photo-1595432576728-94e0e94a7663?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    name: 'Natrapharm Diabetes Care',
    category: 'Diabetes Management',
    description: 'Blood sugar control medication for diabetic patients',
    image: 'https://images.unsplash.com/photo-1611072965169-e1534f6f300c?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    name: 'Natrapharm Probiotic Complex',
    category: 'Digestive Health',
    description: 'Gut health support with beneficial bacteria strains',
    image: 'https://images.unsplash.com/photo-1595432576728-94e0e94a7663?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    name: 'Natrapharm Joint Relief',
    category: 'Pain Relief',
    description: 'Anti-inflammatory support for joint pain and arthritis',
    image: 'https://images.unsplash.com/photo-1611072965169-e1534f6f300c?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
];

const categories = ['All', 'Pain Relief', 'Vitamins & Supplements', 'Antibiotics', 'Respiratory Care', 'Cardiovascular', 'Diabetes Management', 'Digestive Health'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality pharmaceutical products designed to meet the healthcare needs of every Filipino family.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-12">
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-base"
                data-testid="product-search-input"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  data-testid={`category-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
