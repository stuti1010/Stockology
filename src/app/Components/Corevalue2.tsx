"use client";

import { motion } from "framer-motion";
import { FaChartLine, FaEye, FaRocket, FaSync, FaBook, FaBalanceScale, FaCrown, FaSun, FaSeedling, FaCoins } from 'react-icons/fa';

const CoreValues2 = () => {
  const leftValues = [
    { letter: 'S', title: 'Strategy', icon: <FaChartLine />, description: 'Smart investment planning to maximize gains.' },
    { letter: 'T', title: 'Transparency', icon: <FaEye />, description: 'Clear and honest information for trust.' },
    { letter: 'O', title: 'Opportunity', icon: <FaRocket />, description: 'Seizing the right market chances at the right time.' },
    { letter: 'C', title: 'Consistency', icon: <FaSync />, description: 'Steady growth and disciplined investing.' },
    { letter: 'K', title: 'Knowledge', icon: <FaBook />, description: 'Empowering with financial literacy and insights.' },
  ];

  const rightValues = [
    { letter: 'O', title: 'Objectivity', icon: <FaBalanceScale />, description: 'Unbiased analysis and fair decision-making.' },
    { letter: 'L', title: 'Leadership', icon: <FaCrown />, description: 'Guiding investors towards financial success.' },
    { letter: 'O', title: 'Optimism', icon: <FaSun />, description: 'Maintaining a positive mindset in trading.' },
    { letter: 'G', title: 'Growth', icon: <FaSeedling />, description: 'Focusing on long-term financial and personal growth.' },
    { letter: 'Y', title: 'Yield', icon: <FaCoins />, description: 'Maximizing returns through strategic investments.' },
  ];

  return (
    <div className="container mx-auto pb-4">
      <div className="bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 text-center text-white pt-8">
          Our <span className="text-green-400">Core Values</span>
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-100 max-w-2xl mx-auto pb-8">
          Who we are is reflected in what we practice. Our values are the guiding light for everything we do at STOCKOLOGY.
        </p>
        <div className="flex flex-col md:flex-row justify-center h-[580px] items-center px-4 shadow-lg relative">
          {/* Center Circle - Hidden on Small Screens */}
          <div className="absolute justify-center items-center w-40 h-40 md:w-60 md:h-60 bg-black text-white text-2xl md:text-4xl font-extrabold rounded-full shadow-2xl z-10 hidden md:flex">
            Stockology
          </div>
          
          {/* Left Side */}
          <div className="flex flex-col items-center space-y-1 md:absolute md:left-10 lg:left-24">
            {leftValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative flex flex-row-reverse items-center space-x-4"
              >
                <motion.div whileHover={{ scale: 1, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)" }}
                  className="bg-black/50 flex items-center rounded-3xl px-2 transition-all duration-300 ease-in-out">
                  <div className="w-12 h-12 flex justify-center items-center bg-green-500 text-white text-xl font-bold rounded-full border-2 border-white shadow-lg">
                    {value.letter}
                  </div>
                  <div className="bg-transparent text-white p-4 rounded-2xl shadow-lg w-48">
                    <div className="flex items-center space-x-2">
                      {value.icon}
                      <h3 className="font-bold text-lg">{value.title}</h3>
                    </div>
                    <p className="text-sm">{value.description}</p>
                  </div>
                </motion.div>
                <div className="hidden md:block absolute w-56 h-1 bg-green-500 left-full top-1/2 transform -translate-y-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-1 md:absolute md:right-10 lg:right-24">
            {rightValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative flex flex-row items-center space-x-4"
              >
                <div className="hidden md:block absolute w-56 h-1 bg-green-500 right-full top-1/2 transform -translate-y-1/2"></div>
                <motion.div whileHover={{ scale: 1, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)" }}
                  className="bg-black/50 flex items-center rounded-3xl px-2 transition-all duration-300 ease-in-out">
                  <div className="w-12 h-12 flex justify-center items-center bg-green-500 text-white text-xl font-bold rounded-full border-2 border-white shadow-lg">
                    {value.letter}
                  </div>
                  <div className="bg-transparent text-white p-4 rounded-2xl shadow-lg w-48">
                    <div className="flex items-center space-x-2">
                      {value.icon}
                      <h3 className="font-bold text-lg">{value.title}</h3>
                    </div>
                    <p className="text-sm">{value.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues2;