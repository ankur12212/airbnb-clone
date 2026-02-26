import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ListingDataContext } from "../context/ListingContext";

function ListingPage1() {
  const navigate = useNavigate();

  const {
    title,
    setTitle,
    description,
    setDescription,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
  } = useContext(ListingDataContext);

  // Image Handlers
  const handleImage1 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBackEndImage1(file);
    setFrontEndImage1(URL.createObjectURL(file));
  };

  const handleImage2 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBackEndImage2(file);
    setFrontEndImage2(URL.createObjectURL(file));
  };

  const handleImage3 = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBackEndImage3(file);
    setFrontEndImage3(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/listingpage2");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative p-6">

      {/* Back Button */}
      <div
        onClick={() => navigate("/")}
        className="w-10 h-10 bg-red-500 cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center hover:bg-red-600 transition"
      >
        <FaArrowLeftLong className="text-white" />
      </div>

      {/* Badge */}
      <div className="px-6 py-2 text-sm bg-red-500 text-white rounded-full absolute top-6 right-6 shadow-md">
        Setup Your Home
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-3">
          Basic Listing Information
        </h2>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Title</label>
          <input
            type="text"
            value={title}
            placeholder="e.g. Modern 1BHK Villa with Garden View"
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Description</label>
          <textarea
            rows="4"
            value={description}
            placeholder="Describe your property, amenities, nearby attractions, and why guests will love staying here..."
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400"
            required
          ></textarea>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-4">
          <input type="file" onChange={handleImage1} required />
          <input type="file" onChange={handleImage2} required />
          <input type="file" onChange={handleImage3} required />
        </div>

        {/* Image Preview */}
        <div className="flex gap-4">
          {frontEndImage1 && (
            <img src={frontEndImage1} alt="Preview 1" className="w-20 h-20 rounded object-cover" />
          )}
          {frontEndImage2 && (
            <img src={frontEndImage2} alt="Preview 2" className="w-20 h-20 rounded object-cover" />
          )}
          {frontEndImage3 && (
            <img src={frontEndImage3} alt="Preview 3" className="w-20 h-20 rounded object-cover" />
          )}
        </div>

        {/* Rent, City, Landmark */}
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Rent per day (e.g. 2000)"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="City (e.g. Delhi)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Nearby Landmark (e.g. Connaught Place Metro)"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            className="border rounded-lg px-4 py-2"
            required
          />
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Next →
          </button>
        </div>
      </form>
    </div>
  );
}

export default ListingPage1;