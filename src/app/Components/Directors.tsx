"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

const teamMembers = [
  {
    id: 1,
    name: "Mr Aniket Shukla",
    role: "CEO & Founder",
    image: "/admin.jpeg",
    description: "Visionary leader with 10+ years of experience in tech innovation.",
  },
  {
    id: 2,
    name: "Mr Manish Kumar",
    role: "Director",
    image: "/admin.jpeg",
    description: "Expert in AI and machine learning, driving technological advancements.",
  },
  {
    id: 3,
    name: "Abhishek Sahu",
    role: "Director",
    image: "/admin.jpeg",
    description: "Creative mind behind our stunning user interfaces and experiences.",
  },
];

export default function MeetOurDirectors() {
  const [activeDirector, setActiveDirector] = useState(teamMembers[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDirector((prev) => (prev === teamMembers.length ? 1 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentDirector = teamMembers.find((member) => member.id === activeDirector);

  return (
    <div className="py-10 px-4 md:px-10 container mx-auto text-center">
      <h1 className="md:text-4xl text-2xl font-bold text-gray-900 md:mb-8">Board of Directors</h1>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 gap-4">
        {/* Circular Layout with Icons */}
        <div className="relative w-full md:w-1/2 h-[400px] flex items-center justify-center">
        {/* Background Image with Text */}
        <div className="absolute inset-0 z-0">
            <img
              src="/bg.png"
              alt="Background"
              className="w-full h-full object-contain opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="md:text-3xl text-2xl  font-bold text-black">Stockology</h2>
            </div>
          </div>

          {/* Circular Positioned Icons */}
          {teamMembers.map((member, index) => {
            const angle = (360 / teamMembers.length) * index;
            const radius = 140;

            return (
              <div
                key={member.id}
                className="absolute flex items-center justify-center cursor-pointer transition-transform"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
                onClick={() => setActiveDirector(member.id)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={clsx(
                    "w-10 h-10 md:w-16 md:h-16 rounded-full object-cover border-2 shadow-md transition-all transform hover:scale-110",
                    activeDirector === member.id
                      ? "border-black scale-125 shadow-lg"
                      : "border-gray-300 grayscale opacity-75"
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Director Details Card */}
        <Card className="w-72 md:w-1/3 h-auto bg-white shadow-lg rounded-xl border border-gray-200 p-6 transition-all transform hover:scale-105">
          <CardContent>
            <div className="flex flex-col items-center text-center">
              <img
                src={currentDirector?.image}
                alt={currentDirector?.name}
                className="md:w-24 md:h-24 h-20 w-20 rounded-full border-2 border-black shadow-lg mb-2"
              />
              <h2 className="text-xl font-semibold text-gray-900 ">{currentDirector?.name}</h2>
              <p className="text-green-600 font-medium">{currentDirector?.role}</p>
              <p className="mt-3 text-gray-600">{currentDirector?.description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
