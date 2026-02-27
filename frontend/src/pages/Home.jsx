import React, { useContext } from "react";
import Nav from "../Component/Nav";
import Card from "../Component/Card";
import { ListingDataContext } from "../Context/ListingContext";

function Home() {
  const { listingData } = useContext(ListingDataContext);
  

  return (
    <div>
      <Nav />
      <div className="w-full h-[77vh] flex items-center justify-center gap-[25px] flex-wrap mt-[250px] md:mt-[180px]">
        {listingData.map((list) => (
          <Card
            key={list.id}
            title={list.title}
            landmark={list.landmark}
            image1={list.frontEndImage1}
            rent={list.rent}
            city={list.city}
          />
        ))}
      </div>
    </div>
    
  );
}

export default Home;