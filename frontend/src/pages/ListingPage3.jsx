import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function ListingPage3() {
  const navigate = useNavigate();

  // ✅ Add this function (it was missing)
  const handleAddListing = () => {
    // You can call API here later
    alert("Listing Added Successfully!");
    navigate("/"); // redirect to home after adding
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f5f5] flex justify-center py-10 relative">

      {/* Back Button */}
      <div
        onClick={() => navigate("/listingpage2")}
        className="w-12 h-12 bg-red-500 cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center hover:bg-red-600 transition"
      >
        <FaArrowLeftLong className="text-white text-lg" />
      </div>

      {/* Main Container */}
      <div className="w-[95%] max-w-[1100px] bg-white p-6 rounded-lg shadow-md">

        {/* Location */}
        <h2 className="text-2xl font-semibold mb-6">
          In CONNAUGHT PLACE, DELHI
        </h2>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">

          {/* Large Left Image */}
          <div className="md:col-span-2 h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="villa"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Side Images */}
          <div className="flex flex-col gap-3">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="kitchen"
              className="h-[170px] object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
              alt="living"
              className="h-[170px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xl font-semibold">
            1BHK WITH GARDEN VILLA, CONNAUGHT PLACE
          </h3>

          <p className="text-gray-600 text-lg">
            GARDEN VIEW
          </p>

          <p className="text-lg font-medium">
            Rs.20000/day
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleAddListing}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md transition"
        >
          Add Listing
        </button>

      </div>
    </div>
  );
}

export default ListingPage3;