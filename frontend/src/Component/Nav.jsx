import React from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot, MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";

function Nav() {
  let [showpopup,setShowpopup] = useState(false)
  return (
    <>
      {/* Navbar */}
      <div className="w-full min-h-[80px] border-b border-[#dcdcdc] px-[40px] py-[20px] flex items-center justify-between">
        
        <img src={logo} alt="logo" className="w-[130px]" />

        {/* Search */}
        <div className="w-[35%] relative">
          <input
            type="text"
            placeholder="Anywhere | Any Location | Any City"
            className="w-full px-[30px] py-[10px] border-2 border-[#bdbaba] outline-none rounded-[30px] text-[17px]"
          />
          <button className="absolute p-[10px] rounded-full bg-red-500 right-[5px] top-[5px]">
            <FiSearch className="w-[20px] h-[20px] text-white" />
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-[15px] relative">
          <span className="text-[16px] cursor-pointer rounded-full hover:bg-[#ded9d9] px-[8px] py-[5px]">
            List your home
          </span>

          <button className="px-[15px] py-[8px] flex items-center gap-[8px] border border-[#8d8c8c] rounded-full hover:shadow-lg">
            <RxHamburgerMenu className="w-[20px] h-[20px]" />
            <CgProfile className="w-[23px] h-[23px]" />
          </button>
          {showpopup && <div className='w-[220px] h-[250px] absolute bg-slate-200 top-[110%] right-[10%] border-[1px] border-[#aaa9a9] z-10 rounded-lg'>
            <ul className='w-[100%] h-[100%] text-[17px] flex items-start justify-around flex-col py-[10px]'>
              <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>Login</li>
              <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>Logout</li>
              <div className='w-[100%] h-[1px] bg-[#c1c0c0]'></div>
              <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>List your Home</li>
              <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>My Listing</li>
              <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>Check Booking</li>
            </ul>

          </div> }
        </div> 
      </div>

      {/* Categories Section */}
      <div className="w-full h-[85px] bg-white flex items-center justify-center gap-[40px] border-b overflow-x-auto">
        
        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <MdWhatshot className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">Trending</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <GiFamilyHouse className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">Villa</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <MdBedroomParent className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">Rooms</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <MdOutlinePool className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">Pool House</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <GiWoodCabin className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">Cabins</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <SiHomeassistantcommunitystore className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">Shops</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <IoBedOutline className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">PG</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <FaTreeCity className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">Farm House</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
          <BiBuildingHouse className="w-[28px] h-[28px]" />
          <h3 className="text-[14px] mt-1">Flat</h3>
        </div>

      </div>
    </>
  );
}

export default Nav;
