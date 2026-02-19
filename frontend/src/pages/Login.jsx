import { useState, useContext } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { authDataContext } from "../Context/AuthContext";
import { userDataContext } from "../Context/UserContext"; // ✅ Added import

function Login() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { serverUrl } = useContext(authDataContext);
  const { userData, setUserData } = useContext(userDataContext); // ✅ Fixed

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      // ✅ Fixed result → response
      setUserData(response.data);

      console.log("Login Success:", response.data);

      // Clear form
      setEmail("");
      setPassword("");

      // Redirect once
      navigate("/");

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative bg-gray-50">

      {/* Back Button */}
      <div
        onClick={() => navigate("/")}
        className="w-[45px] h-[45px] bg-red-500 cursor-pointer absolute top-[8%] left-[20px] rounded-full flex items-center justify-center hover:bg-red-600 transition"
      >
        <FaArrowLeftLong className="text-white" />
      </div>

      {/* Form */}
      <form
        onSubmit={handleLogin}
        className="w-[90%] max-w-[400px] flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-semibold text-center">
          Welcome Back
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded outline-none focus:ring-2 focus:ring-red-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            required
            className="border p-2 rounded w-full pr-10 outline-none focus:ring-2 focus:ring-red-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
            onClick={() => setShow(!show)}
          >
            {show ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </span>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className={`p-2 rounded text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Signup Link */}
        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
