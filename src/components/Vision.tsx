// "use client"
// import { useState } from "react";

// const MissionVisionToggle = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-center py-20 container mx-auto bg-gray-100 px-4">
//       <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
//         {/* Large Circle Button */}
//         <div
//           className={`w-60 h-60 lg:w-80 lg:h-80 bg-gray-300 shadow-xl rounded-full absolute transition-all duration-700 cursor-pointer flex flex-col items-center justify-center text-2xl lg:text-4xl font-bold text-gray-700 border-8 border-white hover:scale-105 ${
//             isOpen ? "-translate-x-40 lg:-translate-x-56" : "translate-x-0"
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="text-red-600 italic font-semibold">VISION</span>
//           <span className="">&</span>
//           <span className="text-green-500 italic font-semibold">MISSION</span>
//           <div className="flex mt-2 space-x-2">
//             <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gray-500 rounded-full"></span>
//             <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gray-500 rounded-full"></span>
//             <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gray-500 rounded-full"></span>
//             <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gray-500 rounded-full"></span>
//           </div>
//         </div>

//         {/* Vision & Mission Sections */}
//         <div className="flex flex-col w-full mt-48 lg:mt-0 lg:ml-36 space-y-4 lg:space-y-5">
//           <div className={`flex items-center bg-green-500 text-white rounded-tr-full shadow-lg p-4 lg:p-6 transition-all duration-700 ${
//             isOpen ? "w-full opacity-100" : "w-0 opacity-0 overflow-hidden"
//           }`}>
//             <span className="flex-grow text-lg lg:text-2xl font-bold">Vision</span>
//             <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-md">
//               <img src="/vision-icon.png" alt="Vision" className="w-8 h-8 lg:w-12 lg:h-12" />
//             </div>
//           </div>
//           <div className={`flex items-center bg-red-500 text-white rounded-br-full shadow-lg p-4 lg:p-6 transition-all duration-700 ${
//             isOpen ? "w-full opacity-100" : "w-0 opacity-0 overflow-hidden"
//           }`}>
//             <span className="flex-grow text-lg lg:text-2xl font-bold">Mission</span>
//             <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-md">
//               <img src="/mission-icon.png" alt="Mission" className="w-8 h-8 lg:w-12 lg:h-12" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MissionVisionToggle;

"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const Vision = () => {
  return (
    <motion.div
      className="container mx-auto md:py-10 py-5 px-3 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="md:grid grid-cols-3 gap-5 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {/* Vision */}
        <motion.div
          className="flex flex-col justify-center items-center text-center px-5  "
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <div className=" border border-green-200 p-5 rounded-xl shadow-lg shadow-green-100  hover:shadow-green-200  hover:shadow-2xl">
            {" "}
            <h1 className="md:text-4xl text-2xl font-bold mb-4">VISION</h1>
            <p className="text-gray-700 md:text-lg text-sm">
            Stockology aims to be India's most trusted plateform for empowering investors with real-time insights. 
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          variants={fadeInUp}
          whileHover={{ scale: 1 }} 
        >
          <motion.img
            src="/mission.png"
            alt="Stockology Vision & Mission"
            className="max-w-full h-auto "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6 },
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1 }}
          />
        </motion.div>

        {/* Mission */}
        <motion.div
          className="flex flex-col justify-center items-center text-center px-5"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <div className=" border border-green-200 p-5 rounded-xl shadow-lg shadow-green-100  hover:shadow-green-200  hover:shadow-2xl">
            <h1 className="md:text-4xl text-2xl font-bold mb-4">MISSION</h1>
            <p className="text-gray-700 md:text-lg text-sm">
              we aim to provide seamless access to stock market trends, investment strategies ensuring every user has power to navigate financial markets confidently.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Values */}
      <motion.div
        className="flex flex-col justify-center items-center text-center mt-10 px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        whileHover={{ scale: 1 }}
      >
        <div className=" border border-green-200 p-5 rounded-xl shadow-lg shadow-green-100  hover:shadow-green-200  hover:shadow-2xl">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">VALUES</h1>
          <p className="text-gray-700 max-w-lg md:text-lg text-sm">
             Stockology appears to initiate valuable investment strategies focusing on stock market analysis and investment approaches.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Vision;
