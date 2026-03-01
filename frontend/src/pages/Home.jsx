import React, { useContext } from "react";
import Nav from "../Component/Nav";
import Card from "../Component/Card";
import { ListingDataContext } from "../Context/ListingContext";

function Home() {
  const { listingData } = useContext(ListingDataContext);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />

      {/* Listings Section */}
      <div className="pt-[170px] px-6 pb-12 max-w-7xl mx-auto">
        <div className="grid gap-8 
          sm:grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4">
          
          {listingData.map((list) => (
            <Card
              key={list.id}
              title={list.title}
              landmark={list.landmark}
              image1={list.frontEndImage1}
              image2={list.frontEndImage2}
              image3={list.frontEndImage3}
              rent={list.rent}
              city={list.city}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Home;