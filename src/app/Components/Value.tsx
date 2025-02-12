import React from "react";
import Card from "./Card";

const Value = () => {
  return (
    <div
      className="container mx-auto px-3 md:py-24 py-10 bg-cover bg-center bg-no-repeat relative bg-[url('/background.jpeg')] " >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="md:grid grid-cols-2 md:gap-8 gap-4">
          {/* left - Banner Frame */}
          <div 
            className="flex flex-col justify-center sm:mt-0 mt-4 p-8   shadow-lg bg-no-repeat bg-center relative" 
            style={{
              backgroundImage: "url('/banner.jpg')",
              backgroundSize: "cover",
              maxWidth: "400px",
              width: "100%",
              height: "auto",
              borderRadius: "15px"
            }}
          >
            <div className="bg-white bg-opacity-55  rounded-md text-center">
              <h1 className="md:text-2xl text-xl lg:text-3xl font-semibold">
                We value trust above everything
              </h1>
              <p className="text-gray-800 lg:text-xl md:text-sm py-3">
                Discover why lakhs of customers choose to invest with STOCKOLOGY
              </p>
            </div>
          </div>
          
          {/* right */}
          <div className="flex justify-center"> 
            <div className='md:grid grid-cols-2 gap-8'>
              <div className='mt-5'><Card name={'Wealth Management'}/></div>
              <div className='mt-5'><Card name={'Equity Broking'}/> </div>
              <div className='mt-5'><Card name={'Swift Loans'}/></div>
              <div className='mt-5'><Card name={'Insurance Intellimart'}/></div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Value;
