import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Login() {
  const [show, setShow] = useState(false);
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
          <form className="w-[90%] max-w-[500px] flex flex-col gap-5">
            
            <h1 className="text-2xl font-semibold">Welcome to Airbnb</h1>
    
            {/* Username */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="name"
                className="border-2 border-gray-400 rounded-lg px-4 py-2"
              />
            </div>
    
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="border-2 border-gray-400 rounded-lg px-4 py-2"
              />
            </div>
    
            {/* Password */}
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="password">Password</label>
              <input
                type={show ? "text" : "password"}
                id="password"
                className="border-2 border-gray-400 rounded-lg px-4 py-2 pr-10"
              />
    
              {/* Toggle Icon */}
              <div
                className="absolute right-3 top-9 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </div>
            </div>
    
            <button className="bg-red-500 text-white py-2 rounded-lg">
              Sign Up
            </button>
    
          </form>
        </div>
  )
}

export default Login