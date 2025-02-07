"use client"
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoMdMailUnread } from "react-icons/io";
import ContactForm from "../Components/Form";
import { IoCall } from "react-icons/io5";

import { MdAccessTimeFilled } from "react-icons/md";
// import Contact from "../Components/Contact";
import SearchBar from "../Components/Search"

const page = () => {
  return (
    <div className="container mx-auto px-3">
    
    <div    className=" py-2 container mx-auto px-3 bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: "url('/background.jpeg')" }} 
  >    
  
   
   <div className="flex flex-col justify-center space-y-4 text-center  pt-10  ">
  
  <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
    Get In Touch 
  </h1>
  <h1 className="text-gray-600 md:text-lg text-base animate-fade-in">
    Stay connected—drop us a message, and we&apos;ll get back shortly.
  </h1>
  
  {/* <div className="w-24 h-1 bg-green-600 rounded-full animate-slide-in"></div> */}
</div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-5   transform transition-all duration-500  ">
        {/* Animated Heading Section */}
        {/* <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-green-600 md:text-xl text-lg font-medium animate-pulse">
            - Contact us with ease
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-bounce">
            Get In <span className="text-green-600">Touch</span>
          </h1>
          <h1 className="text-gray-600 md:text-lg text-base animate-fade-in">
            Stay connected—drop us a message, and we&apos;ll get back shortly.
          </h1>
          
          <div className="w-24 h-1 bg-green-600 rounded-full animate-slide-in"></div>
        </div> */}

<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 max-w-7xl mx-auto py-12 px-4 md:px-8">
      {[
        {
          icon: <FaLocationDot />,
          title: "Main Address",
          description: "621-623, Krishna Business Center, Vijay Nagar ,452010, Indore, Madhya Pradesh 452011",
          color: "from-green-600 to-green-500",
        },
        {
          icon: <MdAccessTimeFilled />,
          title: "Open",
          description: "Between 9:30 AM to 6:30 PM Monday to Saturday",
          color: "from-green-600 to-green-500",
        },
        {
          icon: <IoMdMailUnread />,
          title: "Email Address",
          description: "support@stockology.com",
          color: "from-green-600 to-green-500",
        },
        {
          icon: <IoCall />,
          title: "Phone Number",
          description: "+44 7411532008",
          color: "from-green-600 to-green-500",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col justify-center items-center gap-5 border md:py-10 py-6 px-4 shadow-lg rounded-xl bg-white hover:shadow-2xl transition-all duration-300 transform"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon motion triggered on card hover */}
          <motion.div
            className={`p-2 sm:p-2 lg:p-4 rounded-3xl shadow-md bg-gradient-to-r ${item.color} text-white text-2xl sm:text-2xl lg:text-4xl`}
            whileHover={{ y: -10, rotate: 10 }} // Moves only on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
          </motion.div>
          <div className="text-center">
            <h1 className="lg:text-2xl sm:texl-lg text-xl font-semibold text-gray-800">
              {item.title}
            </h1>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
        {/* Contact Form Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-green-100 rounded-xl shadow-lg -z-10 animate-pulse"></div>
          <ContactForm />
        </div>
      </div>
  
      <div className="md:my-20 my-8 max-w-7xl mx-auto">
        <div className="text-center my-10 ">
        <h1 className="md:text-5xl text-3xl font-semibold "> A Collaborative Network</h1>
        <p className="text-gray-800 my-3 md:text-xl">Branches and Partner Offices Working Together</p>
        </div>
        <SearchBar/></div>
     
        {/* <div className="md:mb-20 mb-8 max-w-7xl mx-auto"> <Contact/></div> */}
     
      {/* Map Section */}
      <div className="my-10 max-w-7xl mx-auto ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4525351225648!2d75.8946659753057!3d22.748581279366768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd017f4c10db%3A0x46eab79a78b02055!2sKrishna%20business%20centre!5e0!3m2!1sen!2sin!4v1738587680128!5m2!1sen!2sin" 
          className="w-full h-[350px] rounded-lg shadow-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
    </div>
   
    </div>
  );
};

export default page;