"use client";

import React, { useState } from "react";

const Timeline = () => {
  const timelineData = [
    {
      title: "Stockology Securities Pvt Ltd Incorporation",
      content:
        "In 2021, Stockology was founded with a vision to simplify stock market insights for investors. From the beginning, we focused on delivering reliable market analysis, empowering traders with data-driven decisions.",
      number: 2021,
    },
    {
      title: "Launch Stockology Mobile Application",
      content:
        "In 2022, Stockology expanded its reach by establishing a training institute in Bhopal, empowering aspiring traders with in-depth market knowledge. Our institute became a hub for financial education, equipping individuals with the skills to navigate the stock market confidently.",
      number: 2022,
    },
    {
      title: "Offline Training Institute Setup",
      content:
        " In 2023, we established offline education initiatives to empower aspiring traders with in-depth market knowledge. Our expert-led sessions provided hands-on training, bridging the gap between theory and real-world stock market strategies.",
      number: 2023,
    },
    {
      title: "Got Licence Of NSE For Stock Broking",
      content:
        "In 2025, Stockology achieved a major milestone by securing its official stock broker license. This marked a new era of trust, compliance, and expanded investment opportunities for our clients.",
      number: 2025,
    },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto   bg-[url('/download.jpg')] bg-no-repeat bg-cover">
    <section className="py-8" id="timeline">
      <div className="px-4 max-w-7xl  mx-auto">
        <h2 className="text-justify text-3xl  font-bold mb-6">Our Journey</h2>
        <p className="text-gray-800 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          We&apos;ve been working on Aceternity for the past 3-4 years. Here&apos;s
          a timeline of my journey.
        </p>
        </div>
        <div className="relative w-full flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute w-1 bg-gradient-to-b from-green-500 to-red-500 h-full left-1/2 transform -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-evenly w-full max-w-4xl py-3"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Title on the Left */}
              <h3 className="w-1/3 text-center text-sm font-semibold bg-green-50 py-4 px-3 rounded-xl shadow-md text-black">
                {item.title}
              </h3>

              {/* Year Icon in the Center */}
              <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full text-xl font-semibold">
                {item.number}
              </div>

              {/* Description on the Right (Visible on Hover) */}
              <div
                className={`w-1/3 p-4 bg-green-50 text-black shadow-md rounded-lg text-sm transition-opacity duration-300 ${
                  hoverIndex === index ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      
    </section>
    </div>

  );
};

export default Timeline;
