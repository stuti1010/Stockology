import React from "react";
import { IoCall } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { FaInstagram, FaAngleRight, FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12 container mx-auto">
      <div className=" mx-auto max-w-7xl px-4">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/stklogo.png"
            alt="Stockology Logo"
            className="w-[130px] h-[100px] object-cover"
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-8">
          {/* Services */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">Services</h1>
            <ul className="space-y-2">
              {[
                "Broking",
                "Wealth Planning",
                "Insurance",
                "Distribution",
                "Capital Advisory",
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleRight className="text-white mr-2" />
                  <Link
                    href="#"
                    className="text-white hover:text-green-300 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">Company</h1>
            <ul className="space-y-2">
              {["Our Team", "Investor", "Calculator"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleRight className="text-white mr-2" />
                  <Link
                    href="#"
                    className="text-white hover:text-green-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offering */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">Offering</h1>
            <ul className="space-y-2">
              {["Technical", "Blog", "Pricing", "Terms & Conditions"].map(
                (item, index) => (
                  <li key={index} className="flex items-center">
                    <FaAngleRight className="text-white mr-2" />
                    <Link
                      href="#"
                      className="text-white hover:text-green-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">Quick Links</h1>
            <ul className="space-y-2">
              {["Privacy Policy", "Refund Policy", "Terms & Conditions"].map(
                (item, index) => (
                  <li key={index} className="flex items-center">
                    <FaAngleRight className="text-white mr-2" />
                    <Link
                      href="#"
                      className="text-white hover:text-green-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Address & Contact */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">Address</h1>
           
            <div className="space-y-2">
            <div className="flex items-center">
                <FaLocationDot className="text-white mr-2" />
                <Link
                  href="tel:+9145567899"
                  className="text-white hover:text-green-300 transition-colors"
                >
                  Krishna Business center,Indore
                </Link>
              </div>
            <div className="flex items-center ">
                <MdAccessTimeFilled className="text-white mr-2 text-xl" />
                <Link
                  href="tel:+9145567899"
                  className="text-white hover:text-green-300 transition-colors"
                >
                 Monday - Saturday: 10:00 am - 7:00 pm 
                
                </Link>
              </div>
              <div className="flex items-center">
                <IoCall className="text-white mr-2" />
                <Link
                  href="tel:+9145567899"
                  className="text-white hover:text-green-300 transition-colors"
                >
                  +9145567899
                </Link>
              </div>
              
              <div className="flex items-center">
                <IoIosMailUnread className="text-white mr-2" />
                <Link
                  href="mailto:stockology@gmail.com"
                  className="text-white hover:text-green-300 transition-colors"
                >
                  stockology@gmail.com
                </Link>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                className="text-white hover:text-green-300 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-300 transition-colors"
              >
                <LuFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-300 transition-colors"
              >
                <FaXTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
          
        </div>

     
      </div>
    </div>
  );
};

export default Footer;