import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function ListingPage1() {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto">
      
      <form className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px] overflow-auto">
        
        {/* Back Button */}
        <div
          className="w-[50px] h-[50px] bg-red-500 cursor-pointer absolute top-[10%] left-[20px] rounded-full flex items-center justify-center"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
        </div>

      </form>

    </div>
  );
}

export default ListingPage1;