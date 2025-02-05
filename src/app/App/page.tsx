'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaChartLine, FaUserShield, FaBolt } from "react-icons/fa";
import Blog from '../Components/Blogs';

export default function App() {
  const [activeImage, setActiveImage] = useState("/phone1.png");

  const features = [
    {
      icon: <FaChartLine className="text-3xl text-blue-500" />,
      title: "Real-time Stock Analysis",
      description: "Get real-time stock insights and analysis powered by AI.",
      image: "/phone1.png"
    },
    {
      icon: <FaUserShield className="text-3xl text-green-500" />,
      title: "Secure Transactions",
      description: "Your investments are protected with end-to-end encryption.",
      image: "/phone2.png"
    },
    {
      icon: <FaBolt className="text-3xl text-yellow-500" />,
      title: "Fast Execution",
      description: "Instant order execution to help you stay ahead in the market.",
      image: "/phone3.png"
    }
  ];

  return (
    <div className='container mx-auto '>
      <section 
        className="relative w-full flex items-center bg-black/70 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/bg.jpg')" }} >
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }} 
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
              Elevate Your <span className="text-green-500">Trading</span> Experience
            </h1>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Stay ahead in the stock market with real-time updates, expert insights, and seamless trading tools.
            </p>
            <button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-400 transition">
              Get Started
            </button>
          </motion.div>

          {/* Right SVG Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }} 
            className="w-full md:w-1/2 flex justify-center"
          >
            <img src="/app.svg" alt="Stock Trading Illustration" className="w-80 md:w-[450px] lg:w-[500px] py-8 h-auto" />
          </motion.div>

        </div>
      </section>

      {/**second section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-8">
        
        {/* Left Section: Mobile Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="relative w-96 md:w-[550px] lg:w-[500px] h-auto"
        >
          {/* Mobile Background */}
          <img src="/mobile1.png" alt="Mobile Mockup" className="w-full h-auto" />

          {/* Screenshots inside mobile */}
          <div className="absolute top-[4%] left-[19%] w-[57%] h-[73%]  overflow-hidden object-cover rounded-e-3xl">
            <Image 
              src={activeImage} 
              alt="App Screenshot" 
              width={300} 
              height={500} 
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Right Section: Info Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="flex flex-row gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }} 
              onMouseEnter={() => setActiveImage(feature.image)}
              onMouseLeave={() => setActiveImage("/phone1.png")}
              className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
            >
              {feature.icon}
              <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
<div className='py-8'>
  <Blog/>
</div>
    </div>
  );
}