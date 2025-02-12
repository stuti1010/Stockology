import React from 'react';
import Image from 'next/image';

const content = [
  {
    title: 'Diversified Investment',
    description:
      'Mutual funds pool money from multiple investors to invest in a variety of assets like stocks, bonds, and commodities. This diversification helps spread risk, reducing the impact of market fluctuations on individual investments while offering stable returns over time.',
    image: '/mf1.jpg',
  },
  {
    title: 'Professional Fund Management',
    description:
      'Managed by experienced professionals, mutual funds ensure that investments are backed by thorough market research, risk analysis, and data-driven strategies.',
    image: '/mf7.jpg',
  },
  {
    title: 'Systematic Investment Plan (SIP)',
    description:
      'SIPs allow investors to contribute fixed amounts at regular intervals, helping to build wealth gradually while taking advantage of rupee cost averaging.',
    image: '/mf6.jpg',
  },
  {
    title: 'Liquidity & Accessibility',
    description:
      'Unlike fixed deposits or real estate investments, mutual funds offer easy entry and exit, ensuring investors can redeem their investments whenever needed.',
    image: '/mf2.jpg',
  },
  {
    title: 'Tax-Saving Benefits',
    description:
      'Certain mutual funds, such as Equity-Linked Savings Schemes (ELSS), offer tax benefits under Section 80C of the Income Tax Act.',
    image: '/mf3.jpg',
  },
  {
    title: 'Risk-Adjusted Returns',
    description:
      'Mutual funds cater to different risk appetites, offering equity funds for aggressive investors, debt funds for conservative investors, and hybrid funds for balance.',
    image: '/mf.jpg',
  },
];

const MutualFunds = () => {
  return (
    <div className='container mx-auto p-6'>
      <div className='bg-[url(/background1.jpeg)] bg-no-repeat bg-cover bg-fixed py-4'>
        <h1 className='text-bold md:text-6xl  text-center'>Mutual Funds</h1>
        <p className='text-gray-700 text-lg text-center max-w-3xl mx-auto leading-tight py-2'>
          Mutual funds pool money from multiple investors to invest in diversified assets like stocks, bonds, and commodities. Professionally managed, they offer risk-adjusted returns, liquidity, and tax-saving benefits.
        </p>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6'>
          {content.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center bg-white p-4 shadow-md rounded-xl h-full'
            >
              <div className='relative w-full h-44 overflow-hidden rounded-lg'>
                <Image src={item.image} layout='fill' objectFit='cover' alt={item.title} />
              </div>
              <h2 className='text-xl font-semibold mt-4'>{item.title}</h2>
              <p className='text-gray-600 mt-2'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
