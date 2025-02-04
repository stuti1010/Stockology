"use client";
 
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { FaCheckCircle } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { TbSteam } from "react-icons/tb";
import { GiHiveMind } from "react-icons/gi";
import { SiKnowledgebase } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaUserLock } from "react-icons/fa";
import { FaUsersRays } from "react-icons/fa6";
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      icon: < AiOutlineStock className="text-green-500 text-5xl" />,
    title: <span>
    <span className="text-red-700 text-2xl">S</span>uccess
  </span>,
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      icon: <TbSteam className="text-green-500 text-5xl" />,
    title:<span>
    <span className="text-red-700 text-2xl">T</span>eam Work
  </span>, 
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    icon: < GiHiveMind  className="text-green-500 text-5xl" />,
    title: <span>
    <span className="text-red-700 text-2xl">O</span>pen Mind Set
  </span>, 
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      icon: < FaUserLock className="text-green-500 text-5xl" />,
    title:<span>
    <span className="text-red-700 text-2xl">C</span>ommitement
  </span>,  
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      icon: <SiKnowledgebase className="text-green-500 text-5xl" />,
    title: <span>
    <span className="text-red-700 text-2xl">K</span>nowledge
  </span>, 
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      icon: < FaUsersRays className="text-green-500 text-5xl" />,
    title:<span>
    <span className="text-red-700 text-2xl">O</span>rganization
  </span>,  
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      icon: <FaRegLightbulb className="text-green-500 text-5xl" />,
    title:<span>
    <span className="text-red-700 text-2xl">L</span>earning
  </span>,  
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      icon: <FaCheckCircle className="text-green-500 text-5xl" />,
    title:<span>
    <span className="text-red-700 text-2xl">O</span>bjective
  </span>,  
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      icon: <GiGrowth className="text-green-500 text-5xl" />,
    title:<span>
    <span className="text-red-700 text-2xl">G</span>rowth
  </span>,  
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      icon: <BsFillLightningChargeFill className="text-green-500 text-5xl" />,
    title: <span>
    <span className="text-red-700 text-2xl">Y</span>es to success
  </span>, 
  },
];

const Corevalue = () => {
  return (
    <div className="container mx-auto md:py-24 py-14 ">
      <h1 className="text-center text-3xl md:text-5xl pb-5  font-semibold">Our Core Values</h1>
      <p className="text-xl text-center md:pb-20 pd-10 text-gray-800">Who we are is reflected in what we practice. Our values are the guiding light for everything we do at STOCKOLOGY.</p>
       <div className=" rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

export default Corevalue
