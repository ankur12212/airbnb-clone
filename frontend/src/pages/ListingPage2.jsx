import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GiFamilyHouse } from "react-icons/gi";
import { MdApartment, MdOutlineVilla } from "react-icons/md";
import { FaHotel, FaHome } from "react-icons/fa";

function ListingPage2() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const categories = [
    { name: "Villa", icon: <MdOutlineVilla size={28} /> },
    { name: "Apartment", icon: <MdApartment size={28} /> },
    { name: "Hotel", icon: <FaHotel size={28} /> },
    { name: "House", icon: <FaHome size={28} /> },
    { name: "Family Home", icon: <GiFamilyHouse size={28} /> },
    { name: "Studio", icon: <MdApartment size={28} /> },
    { name: "Penthouse", icon: <MdOutlineVilla size={28} /> },
    { name: "Guest House", icon: <FaHome size={28} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative p-6">

      {/* Back Button */}
      <div
        onClick={() => navigate("/listingpage1")}
        className="w-10 h-10 bg-red-500 cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center hover:bg-red-600 transition"
      >
        <FaArrowLeftLong className="text-white" />
      </div>

      {/* Badge */}
      <div className="px-6 py-2 text-sm bg-red-500 text-white rounded-full absolute top-6 right-6 shadow-md">
        Select Category
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 space-y-8">

        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Which of these best describes your place?
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item.name)}
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl cursor-pointer border transition duration-200 
                ${
                  selected === item.name
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 hover:border-red-400"
                }`}
            >
              <div
                className={`${
                  selected === item.name
                    ? "text-red-500"
                    : "text-gray-600"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-sm font-medium">{item.name}</h3>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            disabled={!selected}
            onClick={() => navigate("/listingpage3")}
            className={`px-8 py-2 rounded-lg text-white transition duration-200 
              ${
                selected
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingPage2;