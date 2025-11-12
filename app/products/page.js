'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Search, ChevronLeft, ChevronRight, ChevronDown  } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';


// --- REUSABLE DROPDOWN (for both Category & Owner) ---
const Dropdown = ({ label, items, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = items.filter((i) =>
    i.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full px-4 py-2 text-left rounded-xl flex justify-between items-center font-medium text-sm 
          transition-all duration-300 border border-gray-200 
          ${open ? 'bg-gray-100 shadow-inner' : 'bg-gray-50 hover:bg-gray-100'}
        `}
      >
        <span className={`truncate ${selected ? 'text-gray-800' : 'text-gray-400'}`}>
          {selected || label}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-2 text-gray-500 flex items-center"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-full bg-white/95 backdrop-blur border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Search Box */}
            <div className="flex items-center gap-2 p-2 border-b border-gray-100 bg-gray-50/60">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${label.toLowerCase()}...`}
                className="flex-1 bg-transparent text-sm focus:outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Options */}
            <div className="max-h-64 overflow-auto p-2">
              {filtered.length ? (
                filtered.map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200
                      ${
                        selected === item
                          ? 'bg-red-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    {item}
                  </motion.button>
                ))
              ) : (
                <p className="text-gray-400 text-sm text-center py-4">
                  No results found.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- MAIN COMPONENT ---
const DisplayProduct = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOwner, setSelectedOwner] = useState('All');
  const [take, setTake] = useState(6);
  const [skip, setSkip] = useState(0);
  const [categories, setCategories] = useState([]);
  const [owners, setOwners] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search: searchQuery,
        category: selectedCategory,
        owner: selectedOwner,
        take: take.toString(),
        skip: skip.toString(),
      });

      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();

      setProducts(data.products || []);
      setTotal(data.total || 0);
      setOwners(data.owners || ['All']);
      setCategories(data.categories || ['All']);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory, selectedOwner, take, skip]);

  const totalPages = Math.ceil(total / take);
  const currentPage = Math.floor(skip / take) + 1;

  // 🧠 Filter categories based on selected owner (client-side)
  const filteredCategories = useMemo(() => {
    if (selectedOwner === 'All') return categories;
    const relatedProducts = products.filter(
      (p) => p.owner && p.owner.toLowerCase() === selectedOwner.toLowerCase()
    );

    const set = new Set();
    relatedProducts.forEach((p) =>
      p.category?.forEach((c) => set.add(c))
    );

    return ['All', ...Array.from(set)];
  }, [selectedOwner, products, categories]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDE FILTERS */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#e12328]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSkip(0);
                }}
                className="w-full pl-12 pr-4 py-3 border border-[#e12328] rounded-full focus:outline-none focus:ring-2 focus:ring-[#e12328] focus:border-transparent text-base"
              />
            </div>

            {/* Owner Dropdown */}
            <p className="text-gray-500 text-[14px] mb-[-20px]">Selected Products: {selectedOwner}</p>
            <Dropdown
              label="Select Products"
              items={owners}
              selected={selectedOwner}
              setSelected={(owner) => {
                setSelectedOwner(owner);
                setSelectedCategory('All');
                setSkip(0);
              }}
            />

            {/* Category Dropdown (filtered by owner) */}
            <p className="text-gray-500 text-[14px] mb-[-20px]">Selected Category: {selectedCategory}</p>
            <Dropdown
              label="Select Category"
              items={filteredCategories}
              selected={selectedCategory}
              setSelected={(cat) => {
                setSelectedCategory(cat);
                setSkip(0);
              }}
            />

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setSkip(Math.max(0, skip - take))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-[#e12328] text-[#e12328] rounded hover:bg-[#e12328] hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#e12328] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-[#e12328] font-medium">
                {currentPage}/{totalPages || 1} of {total}
              </span>

              <button
                onClick={() =>
                  setSkip(Math.min(skip + take, (totalPages - 1) * take))
                }
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-3 py-2 border border-[#e12328] text-[#e12328] rounded hover:bg-[#e12328] hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#e12328] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE PRODUCTS */}
          <div className="lg:col-span-9">
            {loading ? (
              <p className="text-center text-gray-500 py-20">
                Loading products...
              </p>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-20">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};



export default function Products() {

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-96 md:h-screen mt-[-30px] mb-[-170px] md:mt-[-100px] md:mb-[-150px] overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="/background/product.png"
                alt="Background"
                fill
                className="object-contain object-center"
                // style={{ opacity: 0.25 }} // visible but subtle
                priority
              />
              <div className="absolute inset-0 bg-white opacity-10" /> {/* softer overlay */}
            </div>
      </section>

      <section className="relative  overflow-hidden ">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-6xl font-bold text-black">
            We provide <span className="text-[#e12328]">Quality Products</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed mt-6">
            Natrapharm provides bioequivalent medicines to ensure safety and efficacy.</p>
          </motion.div>
        </div>
      </section>
      

      <DisplayProduct />
    </div>
  );
}
