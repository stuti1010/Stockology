import React from "react";
import Button from "@/components/Button";
import Value from "@/components/Value";



const User = () => {
  return (
    <div className="container mx-auto ">
      <div className=" px-3 md:py-24 py-10 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg1.jpeg')" }}>
        <h1 className="md:text-5xl text-2xl font-semibold text-center ">
          Manage Your Wealth On the Go{" "}
        </h1>
        <div className="flex flex-wrap justify-evenly  md:mt-20 mt-8 text-center">
          <div>
            <h1 className="md:text-4xl text-lg font-semibold">1.5+ Thousand</h1>
            <p className="text-green-500 font-semibold">App Downloads</p>
          </div>
          <div>
            <h1 className="md:text-4xl text-lg font-semibold">
              Fast & Secured
            </h1>
            <p className="text-green-500 font-semibold">App </p>
          </div>
          <div>
            <h1 className="md:text-4xl text-lg font-semibold">8K + Users</h1>
            <p className="text-green-500 font-semibold">Rated Till Now</p>
          </div>
        </div>
        <div className="md:mt-14 mt-8  flex justify-center">
          <Button name={"Google Play"} href={""} image={"/google.svg"} />
          <span className="mx-5">
            <Button name={"Apple store"} href={""} image={"/app.png"} />
          </span>
        </div>
      </div>
       <Value/>
    </div>
  );
};

export default User;
