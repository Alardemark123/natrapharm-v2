'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-display text-9xl font-bold text-red-600 mb-4">
          404
        </h1>
        <h2 className="font-display text-4xl font-semibold text-black mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button
            data-testid="home-button-404"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
