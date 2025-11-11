'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';


const CategoryDropdown = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const filteredCategories = categories.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full">
      {/* Dropdown button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-2 text-left bg-gray-100 rounded-full shadow-md flex justify-between items-center font-medium text-sm hover:bg-gray-200 transition"
      >
        {selectedCategory || 'Select Category'}
        <span className="ml-2">{open ? '▲' : '▼'}</span>
      </button>

      {/* Dropdown list */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-auto">
          {/* Search input */}
          <div className="p-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search categories..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-2 px-2 pb-2">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full font-medium text-sm text-left transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))
            ) : (
              <p className="text-gray-400 text-sm px-4 py-2">No categories found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const DisplayProduct = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [take, setTake] = useState(5);
  const [skip, setSkip] = useState(0);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search: searchQuery,
        category: selectedCategory,
        take: take.toString(),
        skip: skip.toString(),
      });

      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();

      setProducts(data.products || []);
      setTotal(data.total || 0);
      setCategories(data.categories || ['All']);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory, take, skip]);

  const totalPages = Math.ceil(total / take); 
const currentPage = Math.floor(skip / take) + 1;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDE */}
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

  {/* Categories */}
  <CategoryDropdown
    categories={categories}
    selectedCategory={selectedCategory}
    setSelectedCategory={(cat) => {
      setSelectedCategory(cat);
      setSkip(0); // resets to first page
    }}
    // You may need to pass custom color classes inside CategoryDropdown for active/hover states
  />

  {/* Pagination */}
  <div className="flex justify-between items-center mt-6">
    <button
      onClick={() => setSkip(Math.max(0, skip - take))}
      disabled={currentPage === 1} // disable if first page
      className="px-3 py-2 border border-[#e12328] text-[#e12328] rounded hover:bg-[#e12328] hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#e12328] transition-colors"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>

    <span className="text-[#e12328] font-medium">{currentPage}/{totalPages}</span>

    <button
      onClick={() => setSkip(Math.min(skip + take, (totalPages - 1) * take))}
      disabled={currentPage === totalPages} // disable if last page
      className="px-3 py-2 border border-[#e12328] text-[#e12328] rounded hover:bg-[#e12328] hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#e12328] transition-colors"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
</div>


          {/* RIGHT SIDE */}
          <div className="lg:col-span-9">
            {loading ? (
              <p className="text-center text-gray-500 py-20">Loading products...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            )}

            {products.length === 0 && !loading && (
              <p className="text-center text-gray-500 py-20">No products found.</p>
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
      <section className="relative py-52 overflow-hidden ">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="/background/product.png"
                alt="Background"
                fill
                className="object-cover object-center"
                // style={{ opacity: 0.25 }} // visible but subtle
                priority
              />
              <div className="absolute inset-0 bg-white opacity-10" /> {/* softer overlay */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
      
      
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
