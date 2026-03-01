import React from "react";

function Card({ title, landmark, image1, rent, city }) {
  return (
    <div className="w-full max-w-[320px] cursor-pointer group">

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image1 || "https://via.placeholder.com/500"}
          alt={title}
          className="w-full h-[260px] object-cover rounded-2xl group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="mt-3 space-y-1">
        <h2 className="font-semibold text-[15px] text-gray-900">
          In {city}
        </h2>

        <p className="text-gray-600 text-sm">
          {title}
        </p>

        <p className="text-gray-500 text-sm">
          {landmark}
        </p>

        <p className="font-semibold text-gray-900 mt-1">
          ₹{rent}/day
        </p>
      </div>

    </div>
  );
}

export default Card;