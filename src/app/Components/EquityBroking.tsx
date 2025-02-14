import Image from "next/image";
import React from "react";

const content = [
  {
    title: "Future And Options",
    description:
      "Futures and Options (F&O) are derivatives that allow traders to hedge risks, leverage capital, and maximize returns in the stock market.",
    image: "/service15.jpg",
  },
  {
    title: "IPO Investments",
    description:
      "An IPO is the process through which a private company offers its shares to the public for the first time. Investing in IPOs can be a great way to enter at an early stage and gain long-term returns.",
    image: "/service11.jpg",
  },
  {
    title: "NRI & NRO Acoounts",
    description:
      "We provide seamless stock market access for Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs). Whether you want to trade stocks, invest in IPOs, or diversify through mutual funds, our NRI/NRO trading accounts offer convenience and flexibility.",
    image: "/service14.jpg",
  },
  {
    title: "Equity Trading",
    description:
      "Equity trading involves buying and selling stocks in the stock market to gain returns. As a shareholder, you own a part of the company and benefit from its growth through capital appreciation and dividends.",
    image: "/service13.jpg",
  },
  
];

const EquityBroking = () => {
  return (
    <div className="py-10 px-5 md:px-16 container mx-auto">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Equity Broking</h1>
        <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
          We provide personalized equity broking services, enabling investors to make informed decisions about buying and selling shares while maximizing returns and minimizing risks.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6">
            {/* Image on alternating sides */}
            {index % 2 === 1 ? (
              <>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src={item.image}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md object-cover w-full"
                    alt={item.title}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="md:w-1/2">
                  <Image
                    src={item.image}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md object-cover w-full"
                    alt={item.title}
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquityBroking;
