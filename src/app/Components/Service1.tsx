import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import { FaPiggyBank, FaShieldAlt, FaChartLine, FaGraduationCap, FaBalanceScale, FaMobileAlt } from "react-icons/fa";
import Image from 'next/image';

const links=[
    {
      title: "IPO Investments",
      icon: (
        <FaChartLine className="h-full w-full text-neutral-500  hover:text-green-600   dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Mobile & Online Trading PLatfrom",
      icon: (
        <FaMobileAlt className="h-full w-full text-neutral-500  hover:text-green-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
    title: "Equity Brokery",
      icon: (
        <FaBalanceScale className="h-full w-full text-neutral-500  hover:text-green-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Mutual Funds",
      icon: (
        <FaPiggyBank className="h-full w-full text-neutral-500  hover:text-green-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Financial Education",
      icon: (
        <FaGraduationCap className="h-full w-full text-neutral-500  hover:text-green-600 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Insurance",
      icon: (
        <FaShieldAlt className="h-full w-full hover:text-green-600 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
]


const Service1 = () => {
  return (
    <div>
      <div className="flex items-center justify-center py- w-full ">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
    </div>
  )
}

export default Service1
