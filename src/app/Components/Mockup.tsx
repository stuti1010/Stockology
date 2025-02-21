"use client";

import { motion } from "framer-motion";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { RiStockFill } from "react-icons/ri";

const Mockup = () => {
  
   
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const placeholders = ["Enter your number", "Enter your number"];

  return (
    <div className="container mx-auto  rounded-2xl md:py-[86px] py-10 relative px-3 z-10">
      <div className="md:grid grid-cols-2 max-w-7xl mx-auto sm:py-0 py-5 relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="md:text-6xl leading-snug text-3xl font-bold">
            Stockology{" "}
            <span className="text-green-500"> secure your future </span>
            start investing now
          </h1>
          <p className="font-sans md:text-xl py-3 text-gray-800">
            Shape Your Future with Smart Investments
          </p>
          <div className="">
            {/* Card 1 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex my-5 md:mb-10 justify-center border p-3 rounded-xl shadow-lg bg-green-50 items-center"
            >
              <h1 className="md:text-5xl text-green-700 text-xl font-bold mr-2">
                <RiStockFill />
              </h1>
              <p className="text-gray-700 w-[400px] md:text-lg text-xs">
                Trade smartly, invest With Strategy — Stockology, Your Trusted
                Brokerage Partner.
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
           
            <div className="">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>

            <p className="text-sm mt-5 text-gray-600">
              <span className="text-red-500">* </span>By continuing, I accept
              Stockology
              <a href="#" className="text-green-600 underline">
                T&C and Privacy policy
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Image Slider */}
      </div>
      <div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Mockup;