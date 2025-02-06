import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { ShimmerButtonDemo } from "./Dematebutton";

const Bigblogcard = () => {
  // Array of blog posts
  const blogData = [
    {
      id: 1,
      image: "/md3.jpg",
      date: "12/4/2025",
      mainHeading: "Stock Market Trends for 2025",
      paragraph:
        "The stock market is evolving rapidly, and investors need to stay ahead of the trends. In this article, we discuss key insights into market movements and investment strategies...",
    },
  
  ];

  return (
    <div className="py-12 max-w-7xl mx-auto px-5">
      {/* Blog Header */}
      <div className="text-center">
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900 tracking-tight">
          Latest <span className="text-green-500">Blog</span> Posts
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Stay updated with the latest insights on the stock market
        </p>
      </div>

      {/* Breadcrumbs */}
      <div className="flex justify-center md:justify-start items-center text-gray-500 text-sm mt-6">
        <Link href="/" className="hover:text-green-600 transition">
          Home
        </Link>
        <FaChevronRight className="mx-2 text-xs" />
        <Link href="/" className="hover:text-green-600 transition">
          Blog
        </Link>
      </div>

      {/* Blog Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {/* Main Blog Content - Looping through the blogData array */}
        <div className="lg:col-span-2 space-y-10">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <Image
                src={blog.image}
                alt="Blog Image"
                width={1200}
                height={600}
                className="w-full md:h-[500px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900">{blog.mainHeading}</h2>
                <div className="flex items-center text-gray-500 text-sm mt-3">
                  <MdOutlineDateRange className="text-lg mr-2" />
                  {blog.date}
                </div>
                <p className="mt-5 text-lg text-gray-700 leading-relaxed">{blog.paragraph}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar (Ad Section) */}
        <div className="bg-gradient-to-br from-red-100 to-green-200 h-fit rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-center">
            Invest with India's No. 1 Stock Broker
          </h2>
          <p className="text-gray-900 mt-3 text-center">
            Join 10 Cr+ Indians and start your investing journey today.
          </p>

          <div className="relative w-full h-60 mt-6 rounded-xl overflow-hidden">
            <Image src="/md3.jpg" alt="Ad Image" layout="fill" objectFit="cover" />
          </div>

          <div className="md:my-10 my-5">
            <ShimmerButtonDemo text="Open Demat Account" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bigblogcard;
