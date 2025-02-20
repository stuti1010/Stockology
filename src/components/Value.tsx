// import React from "react";

// import Card from "./Card"


// const Value = () => {
//   return (
//     <div
//       className="container mx-auto px-3 md:py-24 py-10 bg-cover bg-center bg-no-repeat relative"
//       style={{ backgroundImage: "url('/background.jpeg')" }} 
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-white bg-opacity-20"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="md:grid grid-cols-2 md:gap-8 gap-4">
//           {/* left */}
//           <div className="flex justify-center"> {/* Center the grid container */}
//           <div className='md:grid grid-cols-2 gap-8'>
//        <div className='mt-5'><Card name={'Wealth Management'}/></div>
//        <div className='mt-5'><Card name={'Equity Broking'}/> </div>
//         <div className='mt-5'><Card name={'Swift Loans'}/></div>
//        <div className='mt-5'><Card name={'Insurance Intellimart'}/></div>
//        </div>

// </div>
//           {/* right */}
//           <div className="flex flex-col justify-center sm:mt-0 mt-4" >
//             <h1 className="md:text-3xl text-2xl   lg:text-5xl font-semibold ">
//               We value trust above everything
//             </h1>
//             <p className="text-gray-800 lg:text-2xl md:text-lg  py-3">
//               Discover why lakhs of customers choose to invest with STOCKOLOGY
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Value;


"use client";

import { motion } from "framer-motion";
import { 
  FaChartLine, FaEye, FaRocket, FaSync, FaBook, 
  FaBalanceScale, FaCrown, FaSun, FaSeedling, FaCoins 
} from 'react-icons/fa';

// Reusable Component for Each Value
const ValueCard = ({ letter, title, icon, description, isRight }: {
  letter: string;
  title: string;
  icon: JSX.Element;
  description: string;
  isRight?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: isRight ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 100 }}
    className={`relative flex items-center space-x-2 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}
  >
    {isRight && (
      <div className="hidden lg:block absolute w-56 h-1 bg-green-500 right-full top-1/2 transform -translate-y-1/2" aria-hidden="true"></div>
    )}
    <motion.div whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)" }}
      className="bg-black/50 flex items-center rounded-3xl px-2 transition-all duration-300 ease-in-out">
      <div className="w-12 h-12 flex justify-center items-center bg-green-500 text-white text-xl font-bold rounded-full border-2 border-white shadow-lg">
        {letter}
      </div>
      <div className="bg-transparent text-white p-4 rounded-2xl shadow-lg w-48">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
    {!isRight && (
      <div className="hidden lg:block absolute w-56 h-1 bg-green-500 left-full top-1/2 transform -translate-y-1/2" aria-hidden="true"></div>
    )}
  </motion.div>
);

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
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white pt-8">
          Our <span className="text-green-400">Core Values</span>
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-100 max-w-2xl mx-auto md:pb-8 pb-3 px-3">
          Who we are is reflected in what we practice. Our values are the guiding light for everything we do at STOCKOLOGY.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center px-4 shadow-lg relative space-y-8 md:space-y-2 md:h-[620px] sm:pb-0 pb-4">

          {/* Center Circle - Hidden on Small Screens */}
          <div className="absolute justify-center items-center w-40 h-40 lg:w-60 lg:h-60 bg-black text-white text-2xl lg:text-4xl font-extrabold rounded-full shadow-2xl z-10 hidden md:flex">
            Stockology
          </div>

          {/* Left Side */}
          <div className="flex flex-col items-center space-y-6 md:space-y-2 md:absolute md:left-10 lg:left-24 w-full md:w-auto">
            {leftValues.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-6 md:space-y-2 md:absolute md:right-10 lg:right-24 w-full md:w-auto">
            {rightValues.map((value, index) => (
              <ValueCard key={index} {...value} isRight />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoreValues2;
