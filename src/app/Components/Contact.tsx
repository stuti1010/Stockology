import React from 'react'
import { Vortex } from '@/components/ui/vortex';
import { footerData } from "../footerData";
import Link from 'next/link';
import { IoCall } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";

const Contact = () => {
  return (
    <div>
     <div className="w-[calc(100%-4rem)] mx-auto rounded-3xl  h-[25rem] overflow-hidden">
      <Vortex
        backgroundColor=""
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Customer Support
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        We are devoted to solving your queries and concerns, quickly and to your satisfaction.
        </p>
        <div  className="flex flex-col sm:flex-row items-center gap-6 mt-6">
          
          <div className="flex items-center md:text-2xl">
                <IoCall className="text-white mr-2 " />
                <Link
                  href={`tel:${footerData.contact.phone}`}
                  className="text-white hover:text-green-300 transition-colors"
                >
                  {footerData.contact.phone}
                </Link>
              </div>
              <div className="flex items-center md:text-2xl">
                <IoIosMailUnread className="text-white mr-2" />
                <Link
                  href={`mailto:${footerData.contact.email}`}
                  className="text-white hover:text-green-300 transition-colors"
                >
                  {footerData.contact.email}
                </Link>
              </div>
          
        </div>
      </Vortex>
    </div> 
    </div>
  )
}

export default Contact
