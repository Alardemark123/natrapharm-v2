'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  {
    name: 'Services',
    dropdown: [
      { name: 'Business Services', path: '/services/business_services' },
      { name: 'Natrapharm HIP', path: '/services/natrapharm_hip' },
    ],
  },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 mx-auto flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-[230px] h-[90px] md:w-[230px] md:h-[90px]"
          >
            <Image
              src="/logo/logo.png"
              alt="Natrapharm logo"
              fill
              priority
              className="object-contain object-left brightness-95 transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <span
                  className={`px-5 py-2 rounded-full text-l font-medium transition-all duration-300 uppercase cursor-pointer flex items-center gap-1 ${
                    pathname.startsWith('/services')
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name} <ChevronDown className="w-4 h-4" />
                </span>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 z-50 ${
                    dropdownOpen === link.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-red-600 hover:text-white rounded-t-lg transition-colors duration-300">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.path} href={link.path}>
                <span
                  className={`px-5 py-2 rounded-full text-l font-medium transition-all duration-300 uppercase ${
                    pathname === link.path
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex-shrink-0"
        >
          {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 py-4 flex flex-col space-y-2 w-full">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="w-full">
                  <span
                    className="flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-100 cursor-pointer w-full"
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === link.name ? null : link.name)
                    }
                  >
                    {link.name} <ChevronDown className="w-4 h-4" />
                  </span>
                  {dropdownOpen === link.name && (
                    <div className="flex flex-col pl-4 space-y-1 w-full">
                      {link.dropdown.map((item) => (
                        <Link key={item.path} href={item.path}>
                          <span
                            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-300 w-full"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.path} href={link.path}>
                  <span
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-100 w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
