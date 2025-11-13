'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pill, X } from 'lucide-react';

export default function ProductCard({ product, index }) {
  const [modalOpen, setModalOpen] = useState(false);

  // ✅ Prevent body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <>
   {/* Product Card */}
   <motion.div
    variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      initial="hidden"
      animate="visible"
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-[450px] flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.medicine_name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-[#e12328] text-white px-3 py-1 rounded-full text-xs font-semibold">
          {product.category.join(', ')}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title and Icon */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-[#e12328] rounded-lg flex items-center justify-center flex-shrink-0">
            <Pill className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-sans text-xl font-semibold text-black mt-1 group-hover:text-[#e12328] transition-colors duration-300">
              {product.medicine_name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
          {product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </p>

        {/* Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-[#e12328] hover:text-white transition-all duration-300 mt-auto"
        >
          View Details
        </button>
      </div>
    </motion.div>



      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* ✅ Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />

            {/* ✅ Modal content */}
            {/* Modal Content */}
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.25 }}
  className="fixed inset-0 z-[101] flex items-center justify-center p-4"
  onClick={(e) => e.stopPropagation()}
>
  <div className="bg-white rounded-2xl w-full max-w-[1700px] h-[90vh] flex flex-col p-6 md:p-8 relative shadow-2xl">
    <button
      onClick={() => setModalOpen(false)}
      className="absolute top-4 right-4 text-gray-400 hover:text-[#e12328] transition-colors"
    >
      <X size={28} />
    </button>

    <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden">
      {/* Left Side - Image */}
      <div className="flex flex-col items-center gap-4 mt-0 md:mt-[40px]">

        <img
          src={product.image}
          alt={product.medicine_name}
          className="w-full max-w-[300px] md:max-w-none h-auto"
        />
        {product.product_website && (
          <a 
            href={product.product_website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center text-sm text-[#e12328] hover:underline hover:text-[#c91d23] transition-colors"
          >
            Product Website: {product.product_website}
          </a>
        )}
      </div>

      {/* Right Side - Content */}
      <div className="md:w-2/3 space-y-4 overflow-y-auto pr-2 md:pr-4">
        <div>
          <h2 className="font-bold text-[#e12328] underline text-2xl md:text-3xl">
            {product.medicine_name}
          </h2>
          <p className="text-gray-600 font-medium">{product.brand_name}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>

        {[
          { label: 'Generic Name', items: [product.generic_name] || [] },
          { label: 'Regulatory Class', items: [product.regulatory] || [] },
          { label: 'Indications or Uses', items: product.indication || [] },
          { label: 'Dosage and Directions for Use', items: product.dosage_and_administration || [] },
          { label: 'Administration', items: product.administration || [] },
          { label: 'Formulation', items: product.formulation?.map(f =>
            `${f.note}: ${f.components.map(c => `${c.name} ${c.dosage}`).join(', ')}`
          ) || [] },
          { label: 'Pharmacodynamics', items: product.pharmacodynamics?.map(f =>
            `${f.components.map(c => `${c.name}: ${c.description}`).join(', ')}`
          ) || [] },
          { label: 'Pharmacokinetics', items: product.pharmacokinetics?.map(f =>
            `${f.components.map(c => `${c.name}: ${c.description}`).join(', ')}`
          ) || [] },
          { label: 'Warning', items: product.warning?.map(f =>
            `${f.components.map(c => `${c.name}: ${c.description}`).join(', ')}`
          ) || [] },
          { label: 'Precaution', items: product.precaution || [] },
          { label: 'Contraindication', items: product.contraindication || [] },
          { label: 'Special Precautions', items: product.special_precaution || [] },
          { label: 'Adverse Reactions', items: product.adverse_reaction || [] },
          { label: 'Interactions', items: product.interactions || [] },
          { label: 'Presentation & Packaging', items: product.presentation_packaging || [] },
        ]
          // 🔹 Filter: show only sections with valid items (non-empty, non-null, non-blank)
          .filter(
            section =>
              Array.isArray(section.items) &&
              section.items.some(item => item && item.trim() !== '')
          )
          .map((section, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="font-semibold text-[#e12328]">{section.label}:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>

    </div>
  </div>
</motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
