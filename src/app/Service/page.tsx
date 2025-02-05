"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { FaPiggyBank, FaShieldAlt, FaChartLine, FaGraduationCap, FaBalanceScale, FaMobileAlt } from "react-icons/fa";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import MutualFunds from "../Components/MutualFunds";
import IPO from "../Components/IPO";
import FinancialEducation from "../Components/FinancialEducation";
import Service1 from "../Components/Service1";
import Insurance from "../Components/Insurance";
import MobileOnline from "../Components/Mobile&Online";


const page = () => {

    const services = [
        { title: "Equity Broking", description: "Strategic tax planning to minimize liabilities and maximize returns." },
        { title: "Mutual Funds", description: "Comprehensive audit support to ensure compliance and accuracy." },
        { title: "Financial Education", description: "Expert advice tailored to your unique financial situation." },
        { title: "IPO Investment", description: "Get early access to high-growth companies and invest in Initial Public Offerings (IPOs)." },
      ];

      const services1 = [
        {
          title: "  Equity Broking ",description: "Trade with confidence using our low-cost and high-speed equity broking services.",
          icon: <FaBalanceScale /> ,
           bg:"bg-black",
        },
        {
          title: "Mutual Funds",description:"Diversify your investments with top-rated mutual funds and maximize your returns.",
           icon: <FaPiggyBank />,
          bg: "bg-black",
        },
        {
          title: "Financial Education",description:"Learn stock market strategies, trading techniques, and investment fundamentals.",
           icon: <FaGraduationCap />,
          bg: "bg-black",
        },
        {
          title: "Insurance",description:  "Protect your future with comprehensive insurance plans for life, health, and wealth.", 
           icon: <FaShieldAlt />,
          bg: "bg-black",
        },
        {
          title: "IPO Investments",description: "Get early access to high-growth companies and invest in Initial Public Offerings (IPOs).",
            icon: <FaChartLine />,
          bg: "bg-black",
        },
        {
          title: "Mobile & Online Trading PLatfrom",description: "Trade anytime, anywhere with our powerful mobile and online trading platforms.",
            icon: <FaMobileAlt />,
          bg: "bg-black",
        },
      ];

const content=[
  {
    title:"Comprehensive Market Research",
    description:"We believe in empowering investors with the right knowledge. Our team conducts thorough market research, analyzing both macroeconomic and microeconomic factors to provide actionable insights. We guide you on how to navigate market trends and help you understand the dynamics of different sectors and stocks.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/service15.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Personalized Investment Strategies",
    description:
      "Every investor has unique financial goals and risk tolerance. Our equity broking services are designed to create customized investment strategies that align with your objectives. Whether you're looking for long-term growth or short-term gains, we ensure that your portfolio is optimized to meet your financial needs.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/service11.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Risk Management",
    description:
      "Our expert brokers are trained to assess and mitigate risks, ensuring that you are well-positioned in the market. We emphasize the importance of diversification and hedging strategies to minimize exposure to volatility. Whether it's through stock options, stop-loss strategies, or asset allocation, we work with you to balance risk and reward.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/service14.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title:"Real-Time Trade Execution",
    description:
    "Speed and efficiency are crucial when it comes to trading. Our platform provides real-time execution of trades, ensuring that you never miss an opportunity in the market. With the help of our advanced technology, you can quickly and confidently execute trades, whether it's a buy, sell, or short position.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/service13.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title:"Customer Support and Education",
    description:
    "We don’t just provide services; we build relationships with our clients. Our dedicated customer support team is available to answer your queries, whether you’re a beginner or a seasoned investor. Additionally, we offer educational resources to help you understand the stock market better, including webinars, articles, and tutorials.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/service12.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  }
];

      const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (

    <div className="container mx-auto px-4 md:px-10 py-8 md:py-16">
      {/**first section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <img
          src="/service.jpg"
          alt="office image"
          className="w-full max-w-5xl rounded-3xl shadow-xl"
        />
      </motion.div>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center py-12"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 ">Our Services</h3>
        <p className="mt-4 text-lg text-gray-700">
          We offer a range of tax consulting services tailored to your needs.
        </p>
      

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-3xl shadow-lg border-l-8 border-green-500 hover:shadow-2xl hover:bg-gradient-to-r from-green-600 to-red-600 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold">{service.title}</h4>
            <p className="mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
      </motion.section>
      </div>
{/**second section */}
<div className="pt-8">
<div className="text-center mb-16 pt-2">
        <h2 className="text-4xl font-bold tracking-wide text-black">
          We Provide Variety Of Services
        </h2>
        <p className="text-gray-900 text-semibold mt-3">
          We offer a variety of services to help your business grow.
        </p>
      </div>
      <Service1/>
</div>
      
{/**third section */}
<div className="py-6 ">
  <div>
  <h1 className="text-bold md:text-6xl pt-8 py-4">Equity Broking</h1>
  <div className="md:max-w-[650px] w-full py-3">
  <p className="text-gray-700 text-lg leading-tight">
          We provide personalized equity broking services, enabling investors to make informed decisions about buying and selling shares in the stock market. Our expert brokers assist you in maximizing returns while minimizing risks.
        </p></div>
  </div>
  <div className="p-10 text-black  w-full">
  <div className=" inset-0 bg-black/30"></div> 
  <StickyScroll content={content} contentClassName=" bg-gray-200 " />
</div>
</div>
{/**fourth section  */}
<div className="py-4">
  <MutualFunds/>
</div>
<div className="py-4">
  <IPO/>
</div>
<div className="py-4">
  <FinancialEducation/>
</div>
{/* <div className="py-4">
  <Insurance/>
</div> */}
<div className="py-4">
<MobileOnline/>
</div>
    </div>
  );
};



export default page;
