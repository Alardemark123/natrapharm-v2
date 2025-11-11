'use client';

import { motion } from 'framer-motion';
import { Target, Users, Globe, Heart } from 'lucide-react';
import Image from 'next/image';


const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide accessible, affordable, and quality healthcare solutions that improve the lives of every Filipino.',
  },
  {
    icon: Heart,
    title: 'Our Vision',
    description: 'To be the most trusted pharmaceutical company in the Philippines, known for excellence and compassion.',
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A dedicated workforce of healthcare professionals committed to serving Filipino communities.',
  },
  {
    icon: Globe,
    title: 'Our Reach',
    description: 'Nationwide distribution network ensuring medicines reach every corner of the Philippines.',
  },
];

const timeline = [
  { year: '1990', event: 'Natrapharm was founded with a vision to transform Philippine healthcare' },
  { year: '2000', event: 'Expanded operations nationwide, establishing key distribution centers' },
  { year: '2010', event: 'Launched community health programs reaching over 1 million Filipinos' },
  { year: '2020', event: 'Pioneered innovative pharmaceutical research and development initiatives' },
  { year: '2025', event: 'Continuing our commitment to quality healthcare for all Filipinos' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative py-52 overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background/two.png"
          alt="Background"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.25 }} // visible but subtle
          priority
        />
        <div className="absolute inset-0 bg-white opacity-10" /> {/* softer overlay */}
      </div>

  <div className="max-w-screen-xl mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6">
      You Are At The <span className="text-[#e12328]">Heart</span> Of What <span className="text-[#e12328]">We Do</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
      More than just a national organization nurturing healthcare, Natrapharm Inc. and its business affiliate, Patriot Pharmaceuticals Corporation, carry this genuine compassion for Filipinos. Being at the heart of what we do ---- in every quality product we provide, in every sincere service we offer, and in every reliable partnership we build ---- all these to fulfill our dream, our mission: To nurture healthcare and improve the life of every Filipino.
      </p>
    </motion.div>
  </div>
      </section>


      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
  {/* Decorative Background Pattern */}
  <div className="absolute inset-0 -z-10 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #C62828 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

  <div className="max-w-[1600px] mx-auto px-6">
    {/* === Vision of Our Founder === */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Accent bar */}
        <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#e12328] to-[#e12328] rounded-full hidden lg:block" />

        <h2 className="font-display text-4xl font-bold text-black mb-6 text-center lg:text-left">
          <p className="mb-4">VISION OF OUR FOUNDER</p>
          <span className="text-[#e12328]">MR. RUDI T. RUNES</span>
        </h2>

        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          <span className="font-bold italic text-[#e12328]">Pangarap (Dream)</span>. All of this began with a dream to help by taking care of the health of the Filipino people and providing fruitful careers in the Philippines. We have been serving for over 35 years, continuously upholding a high level of quality healthcare through effective, safe, and affordable medicines.
        </p>

        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          <span className="font-bold italic text-[#e12328]">Pagmamahal (Love)</span>. It is Love that fuels our every action and decision. Love for our country. Love for the people. Love for the work we do. Love that resonates at the center of our journey, which started with the visionary zeal of our founder, <span className="font-bold italic text-[#e12328]">Mr. Rudi T. Runes</span>.
        </p>

        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          Our founder is more than just an inspiration. A teacher who selflessly shared his wisdom through hands-on training and people development. This fostered a thriving work environment — a vibrant work culture for our employees and organization.
        </p>

        <p className="text-base text-gray-600 leading-relaxed">
          Above all, Mr. Rudi T. Runes is a visionary dedicated to our significant role in Philippine society. He envisions Natrapharm as a source of hope, instilling a genuine Filipino heart and actively contributing to our Inang Bayan (Motherland).
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden ring-2 ring-[#e12328]"
        // style={{
        //   boxShadow: '30px 30px 40px -10px rgb(255, 141, 141)', // softer right-side glow
        // }}
        
      >
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent z-10" />
        <Image
          src="/about/FOUNDER.png"
          alt="Natrapharm Founder"
          width={500}
          height={500}
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>
    </div>

    {/* === Message of the Chairman === */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      {/* Image (left this time) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden ring-2 ring-red-100"
        // style={{
        //   boxShadow: '-30px 30px 40px -10px rgb(255, 141, 141)', // custom shadow: left + down + blur
        // }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent z-10" />
        
        <Image
          src="/about/CHAIRMANANDPRESIDENT.png"
          alt="Natrapharm Chairman and President"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-3xl "
          priority
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#e12328] to-[#e12328] rounded-full hidden lg:block" />

        <h2 className="font-display text-4xl font-bold text-black mb-6 text-center lg:text-left">
          <p className="mb-4">MESSAGE OF THE CHAIRMAN AND PRESIDENT</p>
          <span className="text-[#e12328]">MR. RUDI ANGELO P. RUNES</span>
        </h2>

        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          <span className="font-bold italic text-[#e12328]">Panalangin (Prayer)</span>. It is our prayer to the Almighty Creator that every Filipino will show and share their true Love for our country. We at Natrapharm firmly believe that this difference can be made through and with our people.
        </p>

        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          “I am honored to stand as a member of this loyal and dedicated group of professionals with an unwavering commitment to improving healthcare through quality products, sincere service, and reliable partnerships.”
        </p>

        <p className="text-base text-gray-600 leading-relaxed">
          As we venture into the next chapters of our organization, we will continue to be your genuine friends and steadfast partners. We will continue to enhance healthcare accessibility for our fellowmen — giving back to make a stronger and better Philippines.
        </p>
      </motion.div>
    </div>
  </div>
      </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-black mb-6 italic">
            "Improving Lives Through <span className="font-bold italic text-[#e12328]">Quality Healthcare</span>."
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This is our priority and mission.
            </p>
            <br />
            <br />
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Dahil sa bawat <span className="font-bold italic text-[#e12328]">pangarap</span>, sa bawat <span className="font-bold italic text-[#e12328]">pagmamahal</span>, sa bawat <span className="font-bold italic text-[#e12328]">panalangin</span>, at sa lahat ng <span className="font-bold italic text-[#e12328]">pagkakataon</span>, kayo ang nasa puso sa lahat ng aming adhikain. <br />
            (In every dream, in every love and in every prayer, you are at the heart of what we do at all times.)
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
          >
            <Image
              src="/logo/download.png"
              alt="Natrapharm Founder"
              width={250}
              height={250}
              className="object-cover mx-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-[1800px] mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">The Management Team</h2>
            <p className="text-gray-500 mt-2">Meet the leaders behind Natrapharm’s commitment to quality healthcare</p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "JBalthasar P. Gasgonia",
                position: "Chief Operating Officer and Chief Finance Officer",
                img: "/about/Gasgonia.png",
              },
              {
                name: "Stella V. Zapanta",
                position: "Vice President Human Resources and Administration",
                img: "/about/Zapanta.png",
              },
              {
                name: "Christina L. Ravelo",
                position: "Vice President Marketing and Business Development",
                img: "/about/Ravelo.png",
              },
              {
                name: "Zenda Laarni L. Duran",
                position: "Vice President Sales and Operations",
                img: "/about/Duran.png",
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-3xl"
              >
                {/* Image */}
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-[560px] object-cover transform group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10 text-white">
                  <h3 className="text-[25px] font-semibold">{person.name}</h3>
                  <p className="text-sm opacity-80">{person.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      
    </div>
  );
}
