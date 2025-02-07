'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaEye, FaRocket, FaSync, FaBook, FaBalanceScale, FaCrown, FaSun, FaSeedling, FaCoins } from 'react-icons/fa';

const coreValues = [
  { letter: 'S', title: 'Strategy', icon: <FaChartLine />, description: 'Smart investment planning to maximize gains.' },
  { letter: 'T', title: 'Transparency', icon: <FaEye />, description: 'Clear and honest information for trust.' },
  { letter: 'O', title: 'Opportunity', icon: <FaRocket />, description: 'Seizing the right market chances at the right time.' },
  { letter: 'C', title: 'Consistency', icon: <FaSync />, description: 'Steady growth and disciplined investing.' },
  { letter: 'K', title: 'Knowledge', icon: <FaBook />, description: 'Empowering with financial literacy and insights.' },
  { letter: 'O', title: 'Objectivity', icon: <FaBalanceScale />, description: 'Unbiased analysis and fair decision-making.' },
  { letter: 'L', title: 'Leadership', icon: <FaCrown />, description: 'Guiding investors towards financial success.' },
  { letter: 'O', title: 'Optimism', icon: <FaSun />, description: 'Maintaining a positive mindset in trading.' },
  { letter: 'G', title: 'Growth', icon: <FaSeedling />, description: 'Focusing on long-term financial and personal growth.' },
  { letter: 'Y', title: 'Yield', icon: <FaCoins />, description: 'Maximizing returns through strategic investments.' },
];

export default function CoreValues1() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 pb-6 py-6">
      <section
        className="relative text-center px-4 pb-4 bg-gradient-to-r from-green-300   bg-opacity-80"
        style={{
          backgroundImage: 'url(banner11.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Our <span className="text-green-400">Core Values</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          Who we are is reflected in what we practice. Our values are the guiding light for everything we do at STOCKOLOGY.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {coreValues.map((value, index) => {
            const isFirstRow = index < 5; // First row (top 5 values)

            return (
              <div key={index} className="flex flex-col items-center relative">
                {/* Card */}
                <motion.div
                  className="relative flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 
                  bg-gradient-to-tr from-green-500 via-green-400 to-green-500 rounded-xl shadow-lg transition-all duration-300 ease-in-out"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span className="text-4xl sm:text-5xl font-bold text-white">
                    {value.letter}
                  </motion.span>
                  <motion.div className="flex flex-col items-center text-white mt-2 text-sm sm:text-base">
                    {value.icon}
                    <span className="text-xs sm:text-sm md:text-base">{value.title}</span>
                  </motion.div>
                </motion.div>

                {/* Description Box (Above for First Row, Below for Second Row) */}
                {hovered === index && (
                  <motion.div
                    initial={{ opacity: 0, y: isFirstRow ? -10 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: isFirstRow ? -10 : 10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={`absolute ${
                      isFirstRow ? 'bottom-[110%]' : 'top-[110%]'
                    } bg-green-600 text-white rounded-lg shadow-md w-40 sm:w-48 p-3 text-center`}
                  >
                    <p className="text-xs sm:text-sm font-semibold">{value.description}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
