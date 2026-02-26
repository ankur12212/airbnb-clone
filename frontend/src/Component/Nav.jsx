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

  // Logout
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
      <div className="w-full min-h-[80px] border-b px-10 py-5 flex items-center justify-between">

        {/* Logo */}
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
            className="w-full px-6 py-2 border rounded-full"
          />
          <button className="absolute p-2 rounded-full bg-red-500 right-1 top-1">
            <FiSearch className="text-white" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">

          {/* ✅ LIST YOUR HOME NAVIGATION */}
          <span
            onClick={() => navigate("/ListingPage1")}
            className="text-[16px] cursor-pointer rounded-full hover:bg-gray-200 px-3 py-2"
          >
            List your home
          </span>

          {/* Profile Button */}
          <button
            onClick={() => setShowpopup(!showpopup)}
            className="px-4 py-2 flex items-center gap-2 border rounded-full hover:shadow-lg"
          >
            <RxHamburgerMenu />

            {userData ? (
              <div className="w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center font-semibold">
                {userData?.name?.slice(0, 1).toUpperCase()}
              </div>
            ) : (
              <CgProfile />
            )}
          </button>

          {/* Popup */}
          {showpopup && (
            <div className="w-[220px] absolute bg-white top-[110%] right-0 border z-10 rounded-lg shadow-lg">
              <ul className="text-[16px] flex flex-col py-2">

                {!userData && (
                  <li
                    onClick={() => {
                      setShowpopup(false);
                      navigate("/login");
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Login
                  </li>
                )}

                {userData && (
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                )}

                <div className="h-[1px] bg-gray-300 my-2"></div>

                {/* ✅ MY LISTING */}
                <li
                  onClick={() => {
                    setShowpopup(false);
                    navigate("/my-listing");
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Listing
                </li>

                {/* ✅ CHECK BOOKING */}
                <li
                  onClick={() => {
                    setShowpopup(false);
                    navigate("/booking");
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Check Booking
                </li>

              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="w-full h-[85px] flex items-center justify-center gap-10 border-b overflow-x-auto">

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