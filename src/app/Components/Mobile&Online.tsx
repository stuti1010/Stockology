import React from 'react';
import Image from 'next/image';
import { FaChartLine, FaShieldAlt, FaBell, FaMobileAlt, FaUser } from 'react-icons/fa';
import Link from 'next/link';

const features = [
  { icon: <FaMobileAlt className="text-white text-2xl" />, title: "Seamless Trading", desc: "Trade anywhere with real-time data & instant execution." },
  { icon: <FaUser className="text-white text-2xl" />, title: "User-Friendly Interface", desc: "Designed for all traders, from beginners to pros." },
  { icon: <FaChartLine className="text-white text-2xl" />, title: "Advanced Charting", desc: "AI-powered analytics & customizable charts." },
  { icon: <FaShieldAlt className="text-white text-2xl" />, title: "Secure Transactions", desc: "End-to-end encryption & biometric login." },
  { icon: <FaBell className="text-white text-2xl" />, title: "Real-Time Alerts", desc: "Stay updated with market movements & notifications." }
];

const MobileOnline = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/servicemobile2.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content Section */}
      <div className="relative container mx-auto px-6 py-8 text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mobile & Online Application Platform</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Image */}
          <div className="flex flex-col items-center">
            <Image 
              src="/servicemobile11.png" 
              width={650} 
              height={650} 
              className="rounded-lg max-w-full h-auto" 
              alt="Trading App" 
            />
            {/* Explore More Button */}
            <Link href="/App">
            <button  className= "mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Explore More
            </button>
            </Link>
          </div>

          {/* Right Section - Description & Features */}
          <div>
            <p className="text-lg text-gray-100 leading-relaxed mb-4">
              Experience seamless mobile and online trading with a user-friendly interface, secure transactions, and real-time market updates. Whether you&apos;re a beginner or an expert, our platform empowers you with advanced charting and AI-driven analytics.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-3 bg-white bg-opacity-20 rounded-2xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-full mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOnline;
