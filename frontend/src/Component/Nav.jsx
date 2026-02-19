import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
import { userDataContext } from "../Context/UserContext";
import { authDataContext } from "../Context/AuthContext";

function Nav() {
  const [showpopup, setShowpopup] = useState(false);
  const { userData, setUserData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${serverUrl}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      setUserData(null);
      setShowpopup(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full min-h-[80px] border-b border-[#dcdcdc] px-[40px] py-[20px] flex items-center justify-between">

        <img
          src={logo}
          alt="logo"
          className="w-[130px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Search */}
        <div className="w-[35%] relative hidden md:block">
          <input
            type="text"
            placeholder="Anywhere | Any Location | Any City"
            className="w-full px-[30px] py-[10px] border-2 border-[#bdbaba] outline-none rounded-[30px] text-[17px]"
          />
          <button className="absolute p-[10px] rounded-full bg-red-500 right-[5px] top-[5px]">
            <FiSearch className="w-[20px] h-[20px] text-white" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-[15px] relative">
          <span className="text-[16px] cursor-pointer rounded-full hover:bg-[#ded9d9] px-[8px] py-[5px]">
            List your home
          </span>

          <button
            onClick={() => setShowpopup(!showpopup)}
            className="px-[15px] py-[8px] flex items-center gap-[8px] border border-[#8d8c8c] rounded-full hover:shadow-lg"
          >
            <RxHamburgerMenu className="w-[20px] h-[20px]" />

            {/* Show First Letter If Logged In */}
            {userData ? (
              <div className="w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center font-semibold">
                {userData?.name?.slice(0, 1).toUpperCase()}
              </div>
            ) : (
              <CgProfile className="w-[23px] h-[23px]" />
            )}
          </button>

          {/* Popup */}
          {showpopup && (
            <div className="w-[220px] absolute bg-white top-[110%] right-[0%] border border-[#aaa9a9] z-10 rounded-lg shadow-lg">
              <ul className="w-full text-[17px] flex flex-col py-[10px]">

                {!userData && (
                  <li
                    onClick={() => {
                      setShowpopup(false);
                      navigate("/login");
                    }}
                    className="px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer"
                  >
                    Login
                  </li>
                )}

                {userData && (
                  <li
                    onClick={handleLogout}
                    className="px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer"
                  >
                    Logout
                  </li>
                )}

                <div className="w-full h-[1px] bg-[#c1c0c0] my-2"></div>

                <li className="px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  My Listing
                </li>

                <li className="px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  Check Booking
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full h-[85px] bg-white flex items-center justify-center gap-[40px] border-b overflow-x-auto">

        <Category icon={<MdWhatshot />} label="Trending" />
        <Category icon={<GiFamilyHouse />} label="Villa" />
        <Category icon={<MdBedroomParent />} label="Rooms" />
        <Category icon={<MdOutlinePool />} label="Pool House" />
        <Category icon={<GiWoodCabin />} label="Cabins" />
        <Category icon={<SiHomeassistantcommunitystore />} label="Shops" />
        <Category icon={<IoBedOutline />} label="PG" />
        <Category icon={<FaTreeCity />} label="Farm House" />
        <Category icon={<BiBuildingHouse />} label="Flat" />

      </div>
    </>
  );
}

function Category({ icon, label }) {
  return (
    <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-black hover:border-b-2 border-black pb-2">
      <div className="w-[28px] h-[28px]">{icon}</div>
      <h3 className="text-[14px] mt-1">{label}</h3>
    </div>
  );
}

export default Nav;
