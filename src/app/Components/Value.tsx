import React from "react";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";

const Value = () => {
  return (
    <div
      className="container mx-auto px-3 md:py-24 py-10 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/background.jpeg')" }} // Add your background image path here
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="md:grid grid-cols-2 md:gap-8 gap-4">
          {/* left */}
          <div className="flex justify-center"> {/* Center the grid container */}
  <div className="grid grid-cols-2 gap-8 "> {/* Limit width and center */}
    <Card
      title="850k"
      description="Employee"
      icon={<FaUsers className="text-green-700" />}
    />
    <Card
      title="1.2M"
      description="Customers"
      icon={<FaUsers className="text-red-700" />}
    />
    <Card
      title="850k"
      description="Employee"
      icon={<FaUsers className="text-red-700" />}
    />
    <Card
      title="850k"
      description="Employee"
      icon={<FaUsers className="text-green-700" />}
    />
  </div>
</div>
          {/* right */}
          <div className="flex flex-col justify-center sm:mt-0 mt-4">
            <h1 className="md:text-5xl text-2xl font-semibold ">
              We value trust above everything
            </h1>
            <p className="text-gray-800 md:text-2xl py-3">
              Discover why lakhs of customers choose to invest with STOCKOLOGY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;