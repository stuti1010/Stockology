"use client"
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoMdMailUnread } from "react-icons/io";
import ContactForm from "../Components/Form";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import SearchBar from "../Components/Search"
import Contact from "../Components/Contact";


const page = () => {
  return (
    <div className="container mx-auto ">
      
    <div    className=" py-2 container mx-auto px-3 bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: "url('/')" }} 
  >    

      {/* Hero Section */}
      <div className="relative max-w-full mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 bg-cover bg-no-repeat items-center gap-8 p-5   transform transition-all duration-500"
       style={{ backgroundImage: "url('/contact1.jpg')" }} >
        {/* Animated Heading Section */} 
         <div className="flex flex-col justify-center space-y-4">
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
        </div>

<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 max-w-7xl bg-gradient-to-r from-green-300 to-red-300 mx-auto py-6 px-4 md:px-5">
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
    </div>
        {/* Contact Form Section */}
        <div className=" justify-center space-y-4 text-center pb-5  py-3 pt-4">
  
  <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
    Reach Us & Connect 
  </h1>
  <h1 className="text-gray-600 md:text-lg text-base animate-fade-in">
    Stay connected—drop us a message, and we&apos;ll get back shortly.
  </h1>
</div>
        <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-green-500 to-red-500">
      {/* Wave Cut Banner Background at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L80,170C160,180,320,200,480,192C640,184,800,144,960,138.7C1120,133,1280,171,1360,192L1440,213L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Customer Support Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8  items-center">
        {/* Left Section - Contact Info */}
        
          <ContactForm/>
      

        {/* Right Section - Animated Design */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center pb-24 pr-10"
>
  <div className="relative w-64 h-64 lg:w-96 lg:h-96">
    {/* Blurred Background Layer */}
    <div className="absolute w-full h-full bg-gradient-to-br from-green-500 to-red-500 rounded-full opacity-30 blur-2xl"></div>

    {/* Video Container */}
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Video */}
      <video
        src="/contactus.mp4"
        className="w-full h-full object-cover rounded-lg opacity-60 backdrop-blur-md"
        loop
        autoPlay
        muted
        playsInline
      />

      {/* Title Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-white text-xl lg:text-2xl font-bold drop-shadow-lg">
          For Any Queries, Contact  
        </h2>
        <h3 className="text-yellow-300 text-lg lg:text-xl font-semibold mt-1">
          Stockology Support Team
        </h3>
      </div>
    </div>
  </div>
</motion.div>

      </div>
    </div>
      
  {/* Searchbar section */}
<div className="md:my-16 py-6 max-w-full   relative overflow-hidden">
  <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm">
   
    <div
      className="absolute inset-0 bg-cover bg-black/70 bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/search.svg')", 
        backgroundSize: "cover",  
        backgroundPosition: "left center",  
        filter: "blur(2px)",
        width:"100%" 
      }}
    ></div>
  </div>

  {/* Section Header with Animation */}
  <div className="text-center my-10 relative z-10">
    <h1 className="md:text-5xl text-3xl font-extrabold text-gray-950 leading-tight tracking-wide animate-fade-in">
      A Collaborative Network
    </h1>
    <p className="text-gray-800 my-3 md:text-xl font-medium">
      Branches and Partner Offices Working Together
    </p>
  </div>

  {/* SearchBar Component */}
  <SearchBar />
</div>


     
        <div className=" max-w-7xl mx-auto "> <Contact/></div>
     
      
      
    </div>
    {/* Map Section */}
    <div className="mt-5 max-w-full mx-auto pb-5 px-10 rounded-lg ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4525351225648!2d75.8946659753057!3d22.748581279366768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd017f4c10db%3A0x46eab79a78b02055!2sKrishna%20business%20centre!5e0!3m2!1sen!2sin!4v1738587680128!5m2!1sen!2sin" 
          className="w-full h-[400px] rounded-lg shadow-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
   
    </div>
  );
};

export default page;