"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa"; // Importing icons from react-icons

const locations = [
  { name: "Indore", address: "621-623, Krishna Business Center, Vijay Nagar, 452010, Indore, Madhya Pradesh 452011" },
  { name: "Bhopal", address: "3RD FLOOR, Jyoti Complex, Zone-I, Maharana Pratap Nagar, Madhya Pradesh 462023 Bhopal" },
  // { name: "Chicago", address: "789 Michigan Ave, Chicago, USA" },
];

export default function SearchBar() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-black/75 rounded-3xl shadow-2xl overflow-hidden md:flex md:items-start md:gap-8 p-8 transform transition-all duration-500 hover:shadow-3xl">
        {/* Search Input */}
        <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
          <label className="block text-white font-semibold mb-4 text-lg">Select Location</label>
          <div className="relative">
            <select
              className="w-full p-4 pl-12 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 ease-in-out appearance-none bg-white shadow-sm hover:shadow-md"
              value={selectedLocation.name}
              onChange={(e) =>
                setSelectedLocation(locations.find((loc) => loc.name === e.target.value)!)
              }
            >
              {locations.map((loc) => (
                <option key={loc.name} value={loc.name} className="py-3">
                  {loc.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-500 text-xl" />
            </div>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <FaChevronDown className="text-gray-500 text-xl" />
            </div>
          </div>
        </div>

        {/* Address Display */}
        <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-green-400 to-green-300 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-green-600 rounded-full shadow-lg">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 ml-4">Address:</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">{selectedLocation.address}</p>
        </div>
      </div>
    </div>
  );
}