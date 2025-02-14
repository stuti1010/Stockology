// components/IPO.js
import Image from 'next/image'; // Importing Image component for handling images
import Link from 'next/link';

export default function IPO() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Heading */}
      <div className="flex justify-start items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">IPO Investment Opportunities</h2>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Left Section (Image/Graphics) */}
        <div className="grid md:grid-cols-2 gap-4 grid-cols-2 items-left ">
         
          <Image
            src="/IPO1.jpg" 
            alt="IPO Image"
            width={200}
            height={200}
            className="h-60 w-full object-cover rounded-lg"
          />
          <Image
            src="/IPO.jpg" 
            alt="IPO Image"
            width={200}
            height={200}
            className="h-60 w-full object-cover rounded-lg"
          />

          <Image
            src="/IPO2.jpg" 
            alt="IPO Image"
            width={200}
            height={200}
            className="h-60 w-full object-cover rounded-lg"
          />
          <Image
            src="/IPO4.jpg" 
            alt="IPO Image"
            width={200}
            height={200}
            className="h-60 w-full object-cover rounded-lg"
          />
        </div>

        {/* Right Section (IPO Value Points) */}
        <div className="flex-1 space-y-8 text-gray-700">
          <h3 className="text-3xl font-semibold">Why Invest in IPOs?</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-500">✔</span>
              <span>Opportunity for High Returns</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✔</span>
              <span>Exposure to Emerging Companies</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✔</span>
              <span>Access to Early-Stage Growth</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500">✔</span>
              <span>Potential for Long-Term Value</span>
            </li>
          </ul>
          
          {/* Description */}
          <p className="text-base text-gray-600 mt-4">
            Investing in IPOs offers the chance to participate in the growth of companies as they go public. 
            However, it&apos;s important to research and evaluate each IPO carefully.
          </p>

          {/* Explore More Button */}
          <Link href="/IPOInvestments">
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">
            Explore More
          </button></Link>
        </div>
      </div>
    </div>
  );
}
