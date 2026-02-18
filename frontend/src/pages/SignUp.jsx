import React, { useState, useContext } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../Context/AuthContext";

function SignUp() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { name, email, password }
      );

      console.log(response.data);

      // Clear form
      setName("");
      setEmail("");
      setPassword("");

      // Small delay for better UX
      setTimeout(() => {
        navigate("/login");
      }, 800);

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup Failed");
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
        onSubmit={handleSignUp}
        className="w-[90%] max-w-[400px] flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-semibold text-center">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Username"
          required
          className="border p-2 rounded outline-none focus:ring-2 focus:ring-red-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded outline-none focus:ring-2 focus:ring-red-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <button
          type="submit"
          disabled={loading}
          className={`p-2 rounded text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
