"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';


const VisionAndMision = [
    { image: 'vision14.png', text: 'Stockology aims to be India’s most trusted and user-friendly stock market platform, providing real-time data, expert analysis, and interactive tools for traders and investors. We envision a future where financial literacy and smart investing are accessible to everyone—from beginners to seasoned market players.', name: 'Our Vision' },
    { image: 'vision14.png', text: 'At Stockology, our mission is to empower investors and traders with cutting-edge insights, real-time market data, and expert analysis tailored for the Indian stock market. We aim to simplify financial decision-making by providing a seamless, intuitive platform where users can access market trends, educational content, and personalized strategies.', name: 'Our Mision' },
  ];

const Visionandmision = () => {
  return (
    <div className='container mx-auto' 
    style={{
        backgroundImage: 'url(banner111.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        padding: '30px',
        margin: '0 auto',
        transition: 'background-image 1s ease-in-out',
      }}>
      <div className="mt-16">
        <h2 className="  font-bold mb-8 mt-3 text-center"><span className='bg-white py-3 px-3 md:rounded-3xl rounded-lg text-xl md:text-4xl'>Our  <span className='text-green-600'>Vision</span>  And  <span className='text-red-600 '>Mision</span> </span></h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full max-w-3xl mx-auto"
        >
          {VisionAndMision.map((VisionAndMision, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-green-100  text-black  text-bold text-center rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={VisionAndMision.image} alt="Testimonial" className="mx-auto w-24 h-24 rounded-full mb-4" />
                <h4 className="text-2xl font-bold ">{VisionAndMision.name}</h4>
                <hr className="mx-auto w-20 h-4 border-black my-4" />
                <p className="text-lg font-semibold">{VisionAndMision.text}</p>
                
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Visionandmision
