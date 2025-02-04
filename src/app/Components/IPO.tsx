import React from 'react'
import Image from 'next/image'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const content=[
   {
          title:" Understanding IPOs",
           description:
           " An Initial Public Offering (IPO) is when a private company offers its shares to the public for the first time. This transition from private to public allows investors to purchase shares and become part of the company’s growth. IPOs often signal expansion and can offer early investment opportunities.",
           content:(
   <div className="h-full w-full  flex items-center justify-center text-white">
           <Image
             src="/IPO1.jpg"
             width={300}
             height={300}
             className="h-full w-full object-cover"
             alt="linear board demo"
           />
         </div>
           ),
       },
       {
               title:" Early Investment Opportunity",
               description:
               "Investing in an IPO gives you the chance to buy shares before they hit the open market, offering potential for significant gains as the company grows. However, early investments require careful research and understanding of the company’s potential.",
               content:(
       <div className="h-full w-full  flex items-center justify-center text-white">
               <Image
                 src="/IPO3.jpg"
                 width={300}
                 height={300}
                 className="h-full w-full object-cover"
                 alt="linear board demo"
               />
             </div>
               ),
           },
           {
                   title:" Growth Potential",
                   description:
                   " Companies launching IPOs typically have strong growth prospects, which can provide exciting opportunities for investors. However, predicting success requires an understanding of the company and its industry, as these opportunities come with both reward and risk.",
                   content:(
           <div className="h-full w-full  flex items-center justify-center text-white">
                   <Image
                     src="/IPO.jpg"
                     width={300}
                     height={300}
                     className="h-full w-full object-cover"
                     alt="linear board demo"
                   />
                 </div>
                   ),
               },
               {
                       title:"Risk & Volatility",
                       description:
                       " IPOs come with higher risk, as stock prices can fluctuate significantly in the early stages. It’s important to evaluate the company’s fundamentals and understand the risks involved before investing.",
                       content:(
               <div className="h-full w-full  flex items-center justify-center text-white">
                       <Image
                         src="/IPO4.jpg"
                         width={300}
                         height={300}
                         className="h-full w-full object-cover"
                         alt="linear board demo"
                       />
                     </div>
                       ),
                   },
                   {
                    title:"Allocation & Listing Gains",
                    description:
                    " Investors may experience listing gains if the IPO stock opens at a premium compared to the offering price. However, IPOs don't always guarantee immediate returns, and long-term growth potential should be considered.",
                    content:(
            <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                      src="/IPO2.jpg"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="linear board demo"
                    />
                  </div>
                    ),
                },
]

const IPO = () => {
  return (
    <div className='container mx-auto'>
      <div className=" ">
              <div>
              <h1 className="text-bold md:text-6xl py-4">IPO Investments</h1>
              <div className="md:max-w-[650px] w-full py-3">
              <p className="text-gray-700 text-lg leading-tight">
              An Initial Public Offering (IPO) is the process through which a private company offers its shares to the public for the first time. This marks the company's transition from being privately owned to publicly traded, typically on a stock exchange.Companies pursue IPOs to raise capital for expansion, pay off debt, or fund other strategic initiatives. By offering shares to the public, they can access a larger pool of investors and gain the capital needed to fuel growth.
                    </p></div>
              </div>
              <div className="p-10 text-black  w-full py-4">
              <div className=" inset-0 bg-black/30"></div> 
              <StickyScroll content={content} contentClassName="" />
            </div>
            </div>
    </div>
  )
}

export default IPO
