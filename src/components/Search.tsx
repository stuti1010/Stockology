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
    <div className="md:flex items-start md:gap-20 gap-5 p-6 flex-col md:flex-row">
      {/* Search Input */}
      <div className="w-full md:w-1/2 relative">
        <label className="block text-gray-700 font-semibold mb-2">Select Location</label>
        <div className="relative">
          <select
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out hover:border-green-500 appearance-none bg-white"
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
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaMapMarkerAlt className="text-gray-500" />
          </div>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FaChevronDown className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Address Display */}
      <div className="w-full md:w-1/2 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-lg mt-4 md:mt-0 transform transition-all duration-500 hover:scale-105">
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-green-600 text-2xl mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Address:</h2>
        </div>
        <p className="text-gray-700 text-lg">{selectedLocation.address}</p>
      </div>
    </div>
  );
}