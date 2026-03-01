import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListingDataContext = createContext();

export const ListingProvider = ({ children }) => {
  const navigate = useNavigate();

  // 🟢 Default Demo Listings (So cards show initially)
  const [listingData, setListingData] = useState([
    {
      id: 1,
      title: "2BHK Apartment",
      description: "Spacious 2BHK with balcony",
      rent: 15000,
      city: "Mumbai",
      landmark: "Near Metro Station",
      category: "Apartment",
      frontEndImage1:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      frontEndImage2: null,
      frontEndImage3: null,
      backEndImage1: null,
      backEndImage2: null,
      backEndImage3: null,
    },
  ]);

  // 🟢 Form States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [category, setCategory] = useState("");

  const [frontEndImage1, setFrontEndImage1] = useState(null);
  const [frontEndImage2, setFrontEndImage2] = useState(null);
  const [frontEndImage3, setFrontEndImage3] = useState(null);

  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);

  // 🟢 Add Listing Function
  const addListing = () => {
    // Basic validation
    if (!title || !rent || !city) {
      alert("Please fill required fields!");
      return;
    }

    const newListing = {
      id: Date.now(),
      title,
      description,
      rent,
      city,
      landmark,
      category,
      frontEndImage1,
      frontEndImage2,
      frontEndImage3,
      backEndImage1,
      backEndImage2,
      backEndImage3,
    };

    // Add to array
    setListingData((prev) => [...prev, newListing]);

    console.log("Listing Added:", newListing);

    // Reset form
    setTitle("");
    setDescription("");
    setRent("");
    setCity("");
    setLandmark("");
    setCategory("");

    setFrontEndImage1(null);
    setFrontEndImage2(null);
    setFrontEndImage3(null);
    setBackEndImage1(null);
    setBackEndImage2(null);
    setBackEndImage3(null);

    // Navigate to Home
    navigate("/");
  };

  return (
    <ListingDataContext.Provider
      value={{
        listingData,
        setListingData,

        title, setTitle,
        description, setDescription,
        rent, setRent,
        city, setCity,
        landmark, setLandmark,
        category, setCategory,

        frontEndImage1, setFrontEndImage1,
        frontEndImage2, setFrontEndImage2,
        frontEndImage3, setFrontEndImage3,
        backEndImage1, setBackEndImage1,
        backEndImage2, setBackEndImage2,
        backEndImage3, setBackEndImage3,

        addListing,
      }}
    >
      {children}
    </ListingDataContext.Provider>
  );
};