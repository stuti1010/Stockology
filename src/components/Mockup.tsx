"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import React, { useEffect, useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

const Mockup = () => {
  const words = [
    {
      text: "Stockology secure your future  ",
    },
    {
      text: "start investing now",
      className: "text-green-500 ",
    },
  ];

  const placeholders = ["Enter your number", "Enter your number"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  // State for the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of images to slide
  const images = [
    "/mockup.svg",
    "/md3.jpg",
    "/mockup.svg",
  ];

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="container mx-auto bg-gray-100 rounded-2xl md:py-[86px] py-10 relative z-10">
      <div className="md:grid grid-cols-2 max-w-7xl mx-auto sm:py-0 py-5 relative z-10">
        {/* Left Side */}
        <div className="border bg-white mx-8 my-8 rounded-3xl">
          <div className="px-7 md:py-24 py-14">
            <div className="flex flex-col">
              <TypewriterEffectSmooth words={words} />
            </div>
            <p className="text-xl font-medium text-gray-700">
              Trusted by 1.3 Crore+ Indians
            </p>
            <div className="pt-6">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
            <p className="text-sm text-gray-700 pt-3">
              By continuing, I accept stockology T&C and Privacy policy
            </p>
          </div>
        </div>

        {/* Right Side - Image Slider */}
        <div className="mx-8 my-8 flex justify-center items-center relative overflow-hidden">
          <div className="relative w-full h-[450px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 object-contain ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Mockup;