import React from 'react'
import Image from 'next/image'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'

const content=[
    {
            title:"  Budgeting & Saving",
            description:
            " Learning how to budget is the foundation of good financial management. A budget helps track income and expenses, ensuring that individuals live within their means. Saving, on the other hand, is essential for future security, emergency funds, and investments.",
            content:(
    <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/FE3.jpg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
            ),
        },
        {
                title:" Investing",
                description:
                " Understanding investing principles enables individuals to grow their wealth over time. It includes learning about stocks, bonds, mutual funds, real estate, and other investment vehicles. The more knowledgeable you are, the better equipped you'll be to build a diversified and profitable investment portfolio.",
                content:(
        <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                  src="/FE1.jpg"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                  alt="linear board demo"
                />
              </div>
                ),
            },
            {
                    title:" Debt Management",
                    description:
                    " Financial education teaches individuals how to manage and reduce debt. Whether it's credit card debt, student loans, or mortgages, understanding how to tackle debt efficiently can prevent it from becoming a financial burden.",
                    content:(
            <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                      src="/FE2.jpg"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                      alt="linear board demo"
                    />
                  </div>
                    ),
                },
                {
                        title:"  Financial Planning",
                        description:
                        "Proper financial planning helps individuals set clear financial goals and devise strategies to achieve them. This includes planning for retirement, purchasing a home, or funding education. Financial planning also involves creating a safety net through insurance and savings.",
                        content:(
                <div className="h-full w-full  flex items-center justify-center text-white">
                        <Image
                          src="/FE.jpg"
                          width={300}
                          height={300}
                          className="h-full w-full object-cover"
                          alt="linear board demo"
                        />
                      </div>
                        ),
                    },
]

const FinancialEducation = () => {
  return (
    <div className='container mx-auto'>
      <div className='container mx-auto '>
            <div className=" bg-[url(/background1.jpeg)] bg-no-repeat bg-cover relative bg-fixed ">
              <div>
              <h1 className="text-bold md:text-6xl py-4">Financial Education</h1>
              <div className="md:max-w-[650px] w-full py-3">
              <p className="text-gray-700 text-lg leading-tight">
              Financial education empowers individuals to make informed decisions about managing their money. It includes understanding budgeting, saving, investing, and managing debt effectively. With proper financial knowledge, individuals can plan for their future, navigate the complexities of financial markets, and achieve their long-term financial goals. A solid foundation in financial education helps prevent poor financial choices, reduce financial stress, and increase overall well-being. 
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

export default FinancialEducation
