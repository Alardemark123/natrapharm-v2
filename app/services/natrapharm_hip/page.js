'use client';

import { motion } from 'framer-motion';
import { Truck, FlaskConical, Handshake, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const handleConfirm = () => {
    // Open external link
    window.open("https://natrapharm.hips-md.com/findoctorv2/", "_blank");
    setShowModal(false);
  };
  return (
    <div className="min-h-screen">
      <section className="py-[240px] relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
       {/* Decorative Background Pattern */}
       <div className="absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #C62828 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
     
       <div className="max-w-screen-xl mx-auto px-6">
         
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
       {/* Text */}
       <motion.div
         initial={{ opacity: 0, x: -30 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="relative text-center lg:text-left"
       >
         {/* Accent bar */}
         <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#e12328] to-[#e12328] rounded-full hidden lg:block" />
     
         <h2 className="font-sans text-3xl sm:text-6xl font-bold text-black mb-6">
           <span className="text-[#e12328] uppercase">Natrapharm-HIP</span>
         </h2>
     
         <p className="text-gray-600 mb-6 leading-relaxed text-md sm:text-md max-w-xl mx-auto lg:mx-0">
         Imagine a virtual clinic where you can safely and conveniently access over 7,000+ credible doctors, each highly skilled in their field of expertise. Experts who carry the same level of love and care for the health of your parents, children, spouse, and you. Specialists who believe in our mission the way you do.         </p>
         <p className="text-gray-600 mb-6 leading-relaxed text-md sm:text-md max-w-xl mx-auto lg:mx-0">
         We made Natrapharm-HIP accessible for everyone for FREE so that every Filipino can access quality healthcare. Because for us, this is more than a program. This showcases our “Pagka-Filipino” — who always look forward to a better and healthier Philippines.         </p>
         <p className="text-gray-600 mb-6 leading-relaxed text-md sm:text-md max-w-xl mx-auto lg:mx-0">
         Together, let’s conveniently access quality healthcare.         </p>

         <button onClick={() => setShowModal(true)} className="bg-[#e12328] text-white py-3 px-8 rounded-xl font-medium hover:bg-red-700 transition">
           FIND YOUR DOCTOR TODAY
         </button>
       </motion.div>
     
       {/* Image */}
       <motion.div
         initial={{ opacity: 0, x: 30 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]"
       >
         {/* Gradient overlay */}
         {/* <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent z-10" /> */}
     
         <Image
           src="/background/hip1.png"
           alt="Natrapharm Founder"
           fill
           className="object-contain w-full h-full"
           priority
         />
       </motion.div>
       </div>
     
       </div>

       
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-lg">
            <h3 className="text-xl font-bold text-black mb-4">Are you sure?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to leave the Natrapharm website?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="bg-[#e12328] text-white py-2 px-6 rounded-xl font-medium hover:bg-red-700 transition"
              >
                Go to Website
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 text-gray-700 py-2 px-6 rounded-xl font-medium hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </section>









      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* Item 1 */}
            <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-lg overflow-visible">
              <h3 className="text-2xl font-bold text-black mb-4">Schedule Appointments</h3>
              <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
                <Image
                  src="/logo/sc.png"
                  alt="Schedule Appointment"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Select preferred date, time, and type of consultation (face-to-face or telemedicine)
              </p>

              {/* Wavey SVG Background */}
              <svg
                className="absolute bottom-[-24px] left-0 w-full h-24 sm:h-32 md:h-56 -translate-y-6 rounded-3xl"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="#e12328"
                  fillOpacity="0.25"
                  d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,192C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L0,320Z"
                />
              
                
              </svg>
            </div>

            {/* Item 2 */}
            <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-lg overflow-visible">
              <h3 className="text-2xl font-bold text-black mb-4">Medical Consultation Online</h3>
              <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
                <Image
                  src="/logo/online.png"
                  alt="Medical Consultation"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Consult your doctor from the safety of your home
              </p>
              <svg
                className="absolute bottom-[-24px] left-0 w-full h-24 sm:h-32 md:h-56 -translate-y-6 rounded-3xl"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path fill="#e12328" fillOpacity="0.25" d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,192C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L0,320Z"/>
                {/* <path fill="#e12328" fillOpacity="0.15" d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,133.3C840,117,960,139,1080,165.3C1200,192,1320,224,1380,240L1440,256L0,256Z"/>
                <path fill="#e12328" fillOpacity="0.1" d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,160C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L0,192Z"/> */}
              </svg>
            </div>

            {/* Item 3 */}
            <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-lg overflow-visible">
              <h3 className="text-2xl font-bold text-black mb-4">Ensure Reliable Prescriptions</h3>
              <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
                <Image
                  src="/logo/prescrip.png"
                  alt="Reliable Prescriptions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our credible doctors will ensure safe, accurate prescriptions for you and your family.
              </p>
              <svg
                className="absolute bottom-[-24px] left-0 w-full h-24 sm:h-32 md:h-56 -translate-y-6 rounded-3xl"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path fill="#e12328" fillOpacity="0.25" d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,192C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L0,320Z"/>
                {/* <path fill="#e12328" fillOpacity="0.15" d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,133.3C840,117,960,139,1080,165.3C1200,192,1320,224,1380,240L1440,256L0,256Z"/>
                <path fill="#e12328" fillOpacity="0.1" d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,160C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L0,192Z"/> */}
              </svg>
            </div>

            {/* Item 4 */}
            <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-lg overflow-visible">
              <h3 className="text-2xl font-bold text-black mb-4">Monitor Your Health</h3>
              <div className="w-full h-48 mb-4 relative rounded-xl overflow-hidden">
                <Image
                  src="/logo/monitor.png"
                  alt="Monitor Health"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Record your daily weight, blood pressure, body temperature and more
              </p>
              <svg
                className="absolute bottom-[-24px] left-0 w-full h-24 sm:h-32 md:h-56 -translate-y-6 rounded-3xl"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path fill="#e12328" fillOpacity="0.25" d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,192C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L0,320Z"/>
                {/* <path fill="#e12328" fillOpacity="0.15" d="M0,224L60,229.3C120,235,240,245,360,224C480,203,600,149,720,133.3C840,117,960,139,1080,165.3C1200,192,1320,224,1380,240L1440,256L0,256Z"/>
                <path fill="#e12328" fillOpacity="0.1" d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,160C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L0,192Z"/> */}
              </svg>
            </div>

          </div>
        </div>
      </section>





    </div>
  );
}
