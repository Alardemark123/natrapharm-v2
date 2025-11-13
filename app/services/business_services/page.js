'use client';

import { motion } from 'framer-motion';
import { Truck, FlaskConical, Handshake, Heart } from 'lucide-react';
import Image from 'next/image';



export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="relative w-full h-96 md:h-screen mt-[-30px] mb-[-170px] md:mt-[-100px] md:mb-[-150px] overflow-hidden flex items-center justify-center">
                  {/* Background Image */}
                  <div className="absolute inset-0 -z-10">
                    <Image
                      src="/background/five.png"
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
            We provide <span className="text-[#e12328]">Sincere Service</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed mt-6">
            Nurturing Health and Well-being through Expert Sales, Nationwide Distribution, Regulatory Support, and Genuine Partnerships – Because Your Wellness Matters to Us.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
  {/* Decorative Background Pattern */}
  <div className="absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #C62828 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

  <div className="max-w-[1600px] mx-auto px-6">
    
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
      <span className="text-[#e12328] uppercase">Sales and Marketing</span>
    </h2>

    <p className="text-gray-600 mb-6 leading-relaxed text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
      Our highly skilled and adaptable salesforce possesses in-depth understanding and insight of the ever-evolving local pharmaceutical market. Divided into teams that focus on their respective therapeutic classes, they demonstrate specialized mastery while adhering to promotional ethical standards.
    </p>
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
    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent z-10" />

    <Image
      src="/background/s-1.png"
      alt="Natrapharm Founder"
      fill
      className="object-cover w-full h-full"
      priority
    />
  </motion.div>
  </div>


    
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
  {/* Image (left this time) */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]"
  >
    {/* Optional gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent z-10" />

    <Image
      src="/background/s-2.png"
      alt="Natrapharm Founder"
      fill
      className="object-cover w-full h-full"
      priority
    />
  </motion.div>

  {/* Text */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative text-center lg:text-left"
  >
    {/* Accent bar */}
    <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#e12328] to-[#e12328] rounded-full hidden lg:block" />

    <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
      <span className="text-[#e12328] uppercase">Distribution and Warehousing</span>
    </h2>

    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
      Our in-house nationwide distribution system ensures streamlined logistics to meet the demands of the market.
    </p>

    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
      Our warehouses are built in accordance to the strict requirements for Good Storage Practices (GSP) by the WHO. We control and monitor the temperature within the warehouse to keep it GSP compliant and assure ideal storage conditions for pharmaceuticals and healthcare products.
    </p>

    <p className="text-gray-600 leading-relaxed text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
      We also perform fast, single-point delivery to ensure availability of our products nationwide.
    </p>
  </motion.div>
</div>


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

    <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
      <span className="text-[#e12328] uppercase">Regulatory Services</span>
    </h2>

    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
      We provide effective end to end regulatory life cycle services to support new and existing product registration.
    </p>

    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
      Our regulatory affairs team keeps up to date with the dynamic local regulatory environment. With this we provide an effective registration pathway strategy for a rapid and successful registration of new products and marketing authorization transfer applications.
    </p>

    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
      Our pharmacovigilance system supports international pharmacovigilance requirements of our partners and follows strict adherence to adverse event reporting timelines.
    </p>
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
    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent z-10" />

    <Image
      src="/background/s-3.png"
      alt="Natrapharm Founder"
      fill
      className="object-cover w-full h-full"
      priority
    />
  </motion.div>
</div>



<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
  {/* Image (left this time) */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px]"
  >
    {/* Optional gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent z-10" />

    <Image
      src="/background/s-4.png"
      alt="Natrapharm Founder"
      fill
      className="object-cover w-full h-full"
      priority
    />
  </motion.div>

  {/* Text */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative text-center lg:text-left"
  >
    {/* Accent bar */}
    <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#e12328] to-[#e12328] rounded-full hidden lg:block" />

    <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
      <span className="text-[#e12328] uppercase">Licensing & Partnership</span>
    </h2>

    <p className="text-gray-600 leading-relaxed text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
      Maximize opportunities in the dynamic Philippine Pharmaceutical industry by partnering with us in our commitment to improving lives through quality healthcare.
    </p>
  </motion.div>
</div>



  </div>
      </section>


      <section className="relative overflow-hidden bg-gray-50 py-20">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Logo */}
            <img
              src="/logo/logo.png"
              alt="Natrapharm Logo"
              className="mx-auto w-32 mb-6"
            />

            <h1 className="font-sans text-5xl sm:text-6xl font-bold text-black">
              BE OUR <span className="text-[#e12328]">BUSINESS PARTNER</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed mt-6">
              Our hearts genuinely belong to our customers' health and business partners' trust. As you embark on a journey of growth and opportunities with us, you’re also championing our mission to improve lives through quality healthcare in our Inang Bayan, the Philippines. This partnership fuels our company’s legacy of deep-rooted Filipino love.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto"
          >
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#e12328] focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#e12328] focus:outline-none transition"
              />
            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#e12328] focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#e12328] focus:outline-none transition"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-[#e12328] focus:outline-none transition resize-none"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 text-[#e12328] border-gray-300 rounded focus:ring-[#e12328] focus:ring-2"
              />
              <label htmlFor="terms" className="ml-3 text-gray-600 text-sm">
                I agree to the <span className="text-[#e12328] font-medium">terms and conditions</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#e12328] text-white py-3 px-8 rounded-xl font-medium hover:bg-red-700 transition"
              >
                Send Message
              </button>
              <button
                type="reset"
                className="w-full sm:w-auto bg-gray-200 text-gray-700 py-3 px-8 rounded-xl font-medium hover:bg-gray-300 transition"
              >
                Reset
              </button>
            </div>
          </motion.form>
        </div>
      </section>


      
    </div>
  );
}
