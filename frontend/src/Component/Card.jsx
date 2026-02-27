import React from "react";

function Card({ title, landmark, image1, rent, city }) {
  return (
    <div className="w-[330px] max-w-[85%] h-[380px] flex flex-col rounded-xl cursor-pointer bg-white shadow-lg overflow-hidden">

      {/* Image Section */}
      <div className="w-full h-[65%] bg-gray-200">
        <img
          src={image1 || "https://via.placeholder.com/400"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col gap-1">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-gray-600 text-sm">{city}</p>
        <p className="text-gray-500 text-sm">{landmark}</p>
        <p className="font-bold mt-1">₹ {rent}</p>
      </div>

    </div>
  );
}

export default Card;