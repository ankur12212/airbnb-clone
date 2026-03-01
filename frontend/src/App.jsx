import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ListingPage1 from "./pages/ListingPage1";
import ListingPage2 from "./pages/ListingPage2";
import ListingPage3 from "./pages/ListingPage3";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/listingpage1" element={<ListingPage1 />} />
      <Route path="/listingpage2" element={<ListingPage2 />} />
      <Route path="/listingpage3" element={<ListingPage3 />} />
    </Routes>
  );
};

export default App;