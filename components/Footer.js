'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
  ],
  support: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '#' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ],
};

export default function Footer() {
  const [showConfirm, setShowConfirm] = useState(false);

  // handle click event sa Facebook icon
  const handleFacebookClick = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  // kapag confirmed, redirect to Facebook
  const confirmRedirect = () => {
    setShowConfirm(false);
    window.open('https://www.facebook.com/natrapharminc', '_blank');
  };

  return (
    <footer className="bg-white text-gray-800 relative">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Description */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="w-48 h-20 relative mb-4">
              <Image
                src="/logo/logo.png"
                alt="Natrapharm Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Committed to improving Filipino lives through quality healthcare solutions.
            </p>

            {/* Facebook Icon */}
            <button
              onClick={handleFacebookClick}
              className="inline-flex items-center justify-center w-10 h-10 border border-[#e12328] rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110 hover:border-[#e12328]"
            >
              <Facebook className="w-5 h-5 text-gray-700 transition-colors duration-300 hover:text-[#e12328]" />
            </button>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={link.path + idx}>
                  <Link href={link.path}>
                    <span className="text-sm text-gray-600 relative transition-all duration-300 hover:text-[#e12328] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#e12328] after:transition-all after:duration-300 hover:after:w-full">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={link.path + idx}>
                  <Link href={link.path}>
                    <span className="text-sm text-gray-600 relative transition-all duration-300 hover:text-[#e12328] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#e12328] after:transition-all after:duration-300 hover:after:w-full">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+63 (02) 8123 4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@natrapharm.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Makati City, Metro Manila</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#e12328] pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Natrapharm Demo. All rights reserved. Version 3.1
          </p>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-3xl border-2 border-[#e12328] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-12 max-w-3xl w-full text-center">
      {/* Title */}
      <h3 className="text-3xl font-bold mb-6 text-gray-800 tracking-wide">⚠️ ALERT</h3>

      {/* Message */}
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Are you sure you want to leave the <span className="font-semibold text-[#e12328]">Natrapharm</span> website 
        and go to the official <span className="font-semibold">Natrapharm Facebook page?</span>
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 flex-wrap">
        <button
          onClick={confirmRedirect}
          className="px-8 py-3 bg-[#e12328] text-white text-base font-medium rounded-xl shadow-md hover:bg-[#c81f23] transition-all duration-300 hover:scale-105"
        >
          Go to Facebook Page
        </button>

        <button
          onClick={() => setShowConfirm(false)}
          className="px-8 py-3 bg-gray-200 text-gray-700 text-base font-medium rounded-xl hover:bg-gray-300 transition-all duration-300 hover:scale-105"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}


    </footer>
  );
}
