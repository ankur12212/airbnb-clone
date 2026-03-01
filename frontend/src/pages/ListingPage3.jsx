import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import { ListingDataContext } from "../Context/ListingContext";

function ListingPage3() {
  const navigate = useNavigate();

  const {
    title,
    description,
    backEndImage1,
    backEndImage2,
    backEndImage3,
    rent,
    city,
    landmark,
  } = useContext(ListingDataContext);

  const handleAddListing = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);
      formData.append("image1", backEndImage1);
      formData.append("image2", backEndImage2);
      formData.append("image3", backEndImage3);

      const response = await axios.post(
        "http://localhost:6000/api/listing/create",
        formData,
        { withCredentials: true }
      );

      alert("Listing Added Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Review Your Listing</h2>

        <p><strong>Title:</strong> {title}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Rent:</strong> ₹{rent}</p>

        <button
          onClick={handleAddListing}
          className="bg-red-500 text-white px-6 py-2 rounded mt-4"
        >
          Add Listing
        </button>
      </div>
    </div>
  );
}

export default ListingPage3;