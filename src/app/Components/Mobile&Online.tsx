import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from 'next/image'


const content=[
    {
            title:" Seamless Trading Anytime, Anywhere",
            description:
            " In today’s fast-paced financial markets, having access to a robust mobile and online trading platform is essential. With our cutting-edge trading application, investors can trade stocks, commodities, and derivatives with just a few taps. Whether you're at home or on the go, our platform ensures a seamless trading experience with real-time data, advanced charting tools, and instant order execution.",
            content:(
    <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/insurance.jpg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
            ),
        },
        {
                title:"User-Friendly Interface for All Traders",
                description:
                "Our trading platform is designed for both beginners and experienced traders. The intuitive user interface simplifies order placement, portfolio management, and market analysis. Whether you are a first-time investor or a seasoned trader, our app provides a smooth and efficient experience.",
                content:(
        <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                  src="/insurance2.jpg"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                  alt="linear board demo"
                />
              </div>
                ),
            },
            {
                    title:" Advanced Charting and Market Analysis",
                    description:
                    " Make informed decisions with real-time market data and advanced charting tools. Our platform offers multiple technical indicators, customizable charts, and AI-powered analytics to help you identify trends and maximize your trading potential.",
                    content:(
            <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                      src="/insurance3.jpg"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="linear board demo"
                    />
                  </div>
                    ),
                },
                {
                        title:" Secure & Fast Transactions",
                        description:
                        "Security is our top priority. Our application is equipped with end-to-end encryption, two-factor authentication, and biometric login features to ensure the highest level of security for your investments. Experience fast deposits, withdrawals, and seamless fund transfers without any hassle.",
                        content:(
                <div className="h-full w-full  flex items-center justify-center text-white">
                        <Image
                          src="/insurance1.jpg"
                          width={300}
                          height={300}
                          className="h-full w-full object-cover"
                          alt="linear board demo"
                        />
                      </div>
                        ),
                    },
                    {
                        title:" Personalized Alerts & Notifications",
                        description:
                        "Stay updated with real-time market alerts, price movements, and trade execution updates. Customize your notifications to track your favorite stocks, upcoming IPOs, and market news, ensuring you never miss an opportunity.",
                        content:(
                <div className="h-full w-full  flex items-center justify-center text-white">
                        <Image
                          src="/insurance1.jpg"
                          width={300}
                          height={300}
                          className="h-full w-full object-cover"
                          alt="linear board demo"
                        />
                      </div>
                        ),
                    },
]

const MobileOnline = () => {
  return (
    <div className='container mx-auto'>
          <div className='container mx-auto '>
                <div className="  ">
                  <div>
                  <h1 className="text-bold md:text-6xl py-4">Mobile & Online Application Platform </h1>
                  <div className="md:max-w-[650px] w-full py-3">
                  <p className="text-gray-700 text-lg leading-tight">
                  Insurance is a financial safety net that protects individuals and businesses from unexpected losses. It functions on the principle of risk-sharing, where a policyholder pays a premium to an insurance company in exchange for financial coverage against unforeseen events like accidents, health issues, property damage, or legal liabilities.
                     </p></div>
                  </div>
                  <div className="p-10 text-black  w-full py-4">
                  <div className=" inset-0 bg-black/30"></div> 
                  <StickyScroll content={content} contentClassName="" />
                </div>
                </div>
              </div>
        </div>
    
  )
}

export default MobileOnline;
