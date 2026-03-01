import React, { useContext } from "react";
import { ListingDataContext } from "../Context/ListingContext";
import { useNavigate } from "react-router-dom";

function MyListing() {
  const { listingData } = useContext(ListingDataContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-[120px] px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        My Listings
      </h1>

      {listingData?.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500 text-lg">
            You have not added any listings yet.
          </p>
          <button
            onClick={() => navigate("/listing")}
            className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Add New Listing
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {listingData?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image1}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-red-500 font-bold">
                    ₹{item.price} / night
                  </span>

                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/edit/${item._id}`)}
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Edit
                    </button>

                    <button
                      className="text-red-500 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyListing;