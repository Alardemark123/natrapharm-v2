'use client';

import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      data-testid={`product-card-${index}`}
    >
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold text-black mb-2 group-hover:text-red-600 transition-colors duration-300">
              {product.name}
            </h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {product.description}
        </p>
        <button
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
          data-testid={`product-details-button-${index}`}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
