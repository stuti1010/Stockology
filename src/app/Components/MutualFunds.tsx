import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';


const content=[
    {
        title:" Diversified Investment",
        description:
        "Mutual funds pool money from multiple investors to invest in a variety of assets like stocks, bonds, and commodities. This diversification helps spread risk, reducing the impact of market fluctuations on individual investments while offering stable returns over time.",
        content:(
<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mf1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
        ),
    },
    {
        title:" Professional Fund Management",
        description:
        " Managed by experienced professionals, mutual funds ensure that investments are backed by thorough market research, risk analysis, and data-driven strategies. Fund managers continuously monitor market trends and adjust portfolios to maximize growth and minimize losses.",
        content:(
<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mf7.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
        ),
    },
    {
        title:" Systematic Investment Plan (SIP)",
        description:
        "SIPs allow investors to contribute fixed amounts at regular intervals, helping to build wealth gradually while taking advantage of rupee cost averaging. This disciplined approach to investing helps mitigate market volatility and instills financial consistency.",
        content:(
<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mf6.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
        ),
    },
    {
        title:" Liquidity & Accessibility",
        description:
        " Unlike fixed deposits or real estate investments, mutual funds offer easy entry and exit, ensuring investors can redeem their investments whenever needed. Most mutual funds provide quick redemption facilities, making them ideal for both short-term and long-term financial planning.",
        content:(
<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mf2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
        ),
    },
    {
        title:" Tax-Saving Benefits",
        description:
        "Certain mutual funds, such as Equity-Linked Savings Schemes (ELSS), offer tax benefits under Section 80C of the Income Tax Act, helping investors reduce taxable income while simultaneously growing their wealth over the long term.",
        content:(
<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mf3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
        ),
    },
    {
        title:"  Risk-Adjusted Returns",
        description:
        " Mutual funds cater to different risk appetites, offering equity funds for aggressive investors, debt funds for conservative investors, and hybrid funds for those seeking a balance between stability and growth. Investors can choose a fund that aligns with their financial goals and risk tolerance.",
        content:(
<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mf.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
        ),
    },
]


const MutualFunds = () => {
  return (
    <div className='container mx-auto '>
      <div className=" bg-[url(/background1.jpeg)] bg-no-repeat bg-cover relative bg-fixed ">
        <div>
        <h1 className="text-bold md:text-6xl py-4">Mutual Funds</h1>
        <div className="md:max-w-[650px] w-full py-3">
        <p className="text-gray-700 text-lg leading-tight">
        Mutual funds pool money from multiple investors to invest in diversified assets like stocks, bonds, and commodities. Professionally managed, they offer risk-adjusted returns, liquidity, and tax-saving benefits. Investors can choose from equity, debt, or hybrid funds based on their financial goals and risk appetite. With options like SIPs for disciplined investing, mutual funds provide a cost-effective and transparent way to grow wealth over time.
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

export default MutualFunds
