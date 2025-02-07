
'use client';
import React, { useState } from "react";

const journeyData = [
  { year: "2021",
     title: "Stockology Securities Pvt Ltd Incorporation", 
     content: "In 2021, Stockology was founded with a vision to simplify stock market insights for investors. From the beginning, we focused on delivering reliable market analysis, empowering traders with data-driven decisions.",
      width: "w-1/5",
       height: "h-40"
     },

  { year: "2022",
     title: "Launch Stockology Mobile Application",
      content: "In 2022, Stockology expanded its reach by establishing a training institute in Bhopal, empowering aspiring traders with in-depth market knowledge. Our institute became a hub for financial education, equipping individuals with the skills to navigate the stock market confidently.",
       width: "w-2/5",
     height: "h-52" 
    },

  { year: "2023", 
    title: "Offline Training Institute Setup",
     content: "In 2023, we established offline education initiatives to empower aspiring traders with in-depth market knowledge. Our expert-led sessions provided hands-on training, bridging the gap between theory and real-world stock market strategies.",
      width: "w-3/5",
       height: "h-64"
     },
  { year: "2025",
     title: "Got Licence Of NSE For Stock Broking",
      content: "In 2025, Stockology achieved a major milestone by securing its official stock broker license. This marked a new era of trust, compliance, and expanded investment opportunities for our clients.",
       width: "w-4/5", 
       height: "h-80"
     }
];

const Journey = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto h-screen w-screen ">
      <section className="py-6 bg-[url('/bg11.png')] bg-cover w-full h-full  " id="journey">
        <div>
            <div className="px-6 py-4">
          <h2 className="text-justify text-4xl font-bold mb-8">Our Journey</h2>
          <p className="text-gray-800 dark:text-neutral-300 text-sm md:text-base font-semibold max-w-lg">
          We&apos;ve been working on Aceternity for the past 3-4 years. Here&apos;s
          a timeline of my journey.It all started with a vision—to create a platform that simplifies the Indian stock market for both beginners and experienced traders.
        </p></div>
          <div className="relative flex items-end px-24 h-72 py-10">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`relative flex-1 ${item.width} ${item.height} group hover:bg-green-600 transition-all duration-300 ease-in-out flex flex-col justify-end items-center`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Year Label */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xl font-bold hover:border-x-8 hover:border-red-500 bg-green-600 text-white px-4 py-1 rounded-full">
                  {item.year}
                </div>

                {/* Growing Bars */}
                <div
                  className={`relative w-full ${item.height} bg-gradient-to-r from-red-600  to-green-600 text-white text-center rounded-t-lg flex flex-col justify-center items-center shadow-lg transition-all duration-300 ease-in-out group-hover:bg-green-700 `}
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                {/* Floating Description Box (Now Below the Bar) */}
                {hoveredIndex === index && (
                  <div className="absolute top-full mt-4 pt-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-80 text-center border-x-4 border-red-500 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-lg font-bold text-green-700">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
