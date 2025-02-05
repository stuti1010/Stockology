import React from "react";
import { IoCall } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { FaInstagram, FaAngleRight, FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { footerData } from "../footerData"

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 container mx-auto">
      <div className="mx-auto max-w-7xl px-4">
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
              {footerData.services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleRight className="text-white mr-2" />
                  <Link
                    href={service.path}
                    className="text-white hover:text-green-300 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">Company</h1>
            <ul className="space-y-2">
              {footerData.company.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleRight className="text-white mr-2" />
                  <Link
                    href={item.path}
                    className="text-white hover:text-green-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offering */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">Offering</h1>
            <ul className="space-y-2">
              {footerData.offering.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleRight className="text-white mr-2" />
                  <Link
                    href={item.path}
                    className="text-white hover:text-green-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h1>
            <ul className="space-y-2">
              {footerData.quickLinks.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleRight className="text-white mr-2" />
                  <Link
                    href={item.path}
                    className="text-white hover:text-green-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Contact */}
          <div>
            <h1 className="text-xl font-semibold text-white mb-4">Address</h1>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaLocationDot className="text-white mr-2" />
                <p>{footerData.contact.address}</p>
              </div>
              <div className="flex items-center">
                <MdAccessTimeFilled className="text-white mr-2 text-xl" />
                <p>{footerData.contact.workingHours}</p>
              </div>
              <div className="flex items-center">
                <IoCall className="text-white mr-2" />
                <Link
                  href={`tel:${footerData.contact.phone}`}
                  className="text-white hover:text-green-300 transition-colors"
                >
                  {footerData.contact.phone}
                </Link>
              </div>
              <div className="flex items-center">
                <IoIosMailUnread className="text-white mr-2" />
                <Link
                  href={`mailto:${footerData.contact.email}`}
                  className="text-white hover:text-green-300 transition-colors"
                >
                  {footerData.contact.email}
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {footerData.socialLinks.map((social, index) => {
                const IconComponent =
                  social.icon === "FaInstagram"
                    ? FaInstagram
                    : social.icon === "LuFacebook"
                    ? LuFacebook
                    : FaXTwitter;
                return (
                  <Link
                    key={index}
                    href={social.path}
                    className="text-white hover:text-green-300 transition-colors"
                  >
                    <IconComponent className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sm:mt-0 mt-3">
          <h1 className="text-gray-300">
           
            <span className=" font-semibold text-white">
              Choiceinternational. CIN
            </span>
            - U65929MP2021PTC058908
          </h1>
          <h1 className="text-gray-300">
           
            <span className=" font-semibold text-white">
            NSE
            </span>
             - 90434
          </h1>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>©2023 Stockology. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
