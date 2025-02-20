"use client";

import React from "react";
import { FaLocationDot, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
// import { motion } from "framer-motion";
import { IoMdMailUnread } from "react-icons/io";
import ContactForm from "@/components/Form";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md"; 
import SearchBar from "@/components/Search";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";


const teamMembers = [
  { name: "Alice Johnson", role: "CEO", image: "/a3.jpg" },
  { name: "Mark Smith", role: "CTO", image: "/team2.jpg" },
  { name: "Emily Davis", role: "Designer", image: "/team3.jpg" },
  { name: "John Doe", role: "Developer", image: "/team4.jpg" },
];

const Page = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !isPlaying) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 2000); // Auto-scroll every 3 seconds
    return () => clearInterval(autoplay);
  }, [emblaApi, isPlaying]);
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Stay connected—drop us a message, and we&apos;ll get back shortly.
          </motion.p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaLocationDot />,
              title: "Main Address",
              description:
                "621-623, Krishna Business Center, Vijay Nagar, 452010, Indore, Madhya Pradesh 452011",
              color: "bg-gradient-to-r from-green-600 to-green-500",
            },
            {
              icon: <MdAccessTimeFilled />,
              title: "Open Hours",
              description:
                "Between 9:30 AM to 6:30 PM Monday to Saturday",
              color: "bg-gradient-to-r from-blue-600 to-blue-500",
            },
            {
              icon: <IoMdMailUnread />,
              title: "Email Address",
              description: "support@stockology.com",
              color: "bg-gradient-to-r from-purple-600 to-purple-500",
            },
            {
              icon: <IoCall />,
              title: "Phone Number",
              description: "+44 7411532008",
              color: "bg-gradient-to-r from-red-600 to-red-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className={`p-5 rounded-full ${item.color} text-white text-4xl mb-6`}
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gradient-to-r from-green-500 to-blue-500">
          <ContactForm />
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Follow Us
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            Stay updated with our latest news and updates.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: <FaFacebook />, color: "text-blue-600" },
              { icon: <FaTwitter />, color: "text-blue-400" },
              { icon: <FaLinkedin />, color: "text-blue-700" },
              { icon: <FaInstagram />, color: "text-pink-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`text-4xl ${item.color} hover:scale-110 transition-all duration-300`}
                whileHover={{ rotate: 15 }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaborative Network Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            A Collaborative Network
          </h2>
          <p className="text-gray-600 text-xl">
            Branches and Partner Offices Working Together
          </p>
        </div>
        <SearchBar />
      </div> 

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-xl">
            Hear from our satisfied clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                <FaQuoteLeft className="text-4xl text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">
                  "Stockology has been a game-changer for our business. Their support is exceptional!"
                </p>
                <FaQuoteRight className="text-4xl text-gray-400 mt-4" />
                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  Client Name
                </h3>
                <p className="text-gray-500">CEO, Company Name</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Banner */}
      <div className="bg-gradient-to-r from-green-400 to-red-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Contact us today and let&apos;s build something amazing together.
          </p>
          <motion.button
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>



      {/* Map Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4525351225648!2d75.8946659753057!3d22.748581279366768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd017fM4c10db%3A0x46eab79a78b02055!2sKrishna%20business%20centre!5e0!3m2!1sen!2sin!4v1738587680128!5m2!1sen!2sin"
          className="w-full h-[500px] rounded-2xl shadow-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 text-xl">The people behind our success.</p>
      </div>

      <div
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <div className="flex gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-6 object-cover" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={scrollPrev} className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
          ◀
        </button>
        <button onClick={scrollNext} className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
          ▶
        </button>
      </div>
    </div>
    </div>
  );
};

export default Page;