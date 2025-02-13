
"use client"
import { useState } from "react";

const MissionVisionToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center py-20 container mx-auto bg-gray-100 px-4">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Large Circle Button */}
        <div
          className={`w-60 h-60 lg:w-80 lg:h-80 bg-gray-300 shadow-xl rounded-full absolute transition-all duration-700 cursor-pointer flex flex-col items-center justify-center text-2xl lg:text-4xl font-bold text-gray-700 border-8 border-white hover:scale-105 ${
            isOpen ? "-translate-x-40 lg:-translate-x-56" : "translate-x-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-red-600 italic font-semibold">VISION</span>
          <span className="">&</span>
          <span className="text-green-500 italic font-semibold">MISSION</span>
          <div className="flex mt-2 space-x-2">
            <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gray-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gray-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gray-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-gray-500 rounded-full"></span>
          </div>
        </div>

        {/* Vision & Mission Sections */}
        <div className="flex flex-col w-full mt-48 lg:mt-0 lg:ml-36 space-y-4 lg:space-y-5">
          <div className={`flex items-center bg-green-500 text-white rounded-tr-full shadow-lg p-4 lg:p-6 transition-all duration-700 ${
            isOpen ? "w-full opacity-100" : "w-0 opacity-0 overflow-hidden"
          }`}>
            <span className="flex-grow text-lg lg:text-2xl font-bold">Vision</span>
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src="/vision-icon.png" alt="Vision" className="w-8 h-8 lg:w-12 lg:h-12" />
            </div>
          </div>
          <div className={`flex items-center bg-red-500 text-white rounded-br-full shadow-lg p-4 lg:p-6 transition-all duration-700 ${
            isOpen ? "w-full opacity-100" : "w-0 opacity-0 overflow-hidden"
          }`}>
            <span className="flex-grow text-lg lg:text-2xl font-bold">Mission</span>
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src="/mission-icon.png" alt="Mission" className="w-8 h-8 lg:w-12 lg:h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionToggle;
