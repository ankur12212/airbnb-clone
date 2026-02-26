import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListingDataContext = createContext();

export const ListingProvider = ({ children }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [frontEndImage1, setFrontEndImage1] = useState(null);
  const [frontEndImage2, setFrontEndImage2] = useState(null);
  const [frontEndImage3, setFrontEndImage3] = useState(null);

  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);

  const [rent, setRent] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [category, setCategory] = useState("");

  // ✅ Function to Add Listing and Navigate to Home
  const addListing = () => {
    // You can call API here later

    console.log("Listing Added:", {
      title,
      description,
      rent,
      city,
      landmark,
      category,
    });

    // Navigate to Home Page
    navigate("/");

    // Optional: reset form after adding
    setTitle("");
    setDescription("");
    setRent("");
    setCity("");
    setLandmark("");
    setCategory("");
  };

  return (
    <ListingDataContext.Provider
      value={{
        title, setTitle,
        description, setDescription,
        frontEndImage1, setFrontEndImage1,
        frontEndImage2, setFrontEndImage2,
        frontEndImage3, setFrontEndImage3,
        backEndImage1, setBackEndImage1,
        backEndImage2, setBackEndImage2,
        backEndImage3, setBackEndImage3,
        rent, setRent,
        city, setCity,
        landmark, setLandmark,
        category, setCategory,
        addListing,   // ✅ export function
      }}
    >
      {children}
    </ListingDataContext.Provider>
  );
};