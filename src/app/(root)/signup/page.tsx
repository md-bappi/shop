"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center ">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-xs w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 py-1 text-bg-btn">
          Sign UP
        </h2>

        <form onSubmit={handleSubmit} className=" mt-6">
          <div className="grid grid-cols-1 gap-2 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full  px-4 py-1.5 border border-border rounded-xl shadow-sm outline-none transition-all duration-300 text-gray-700 placeholder:text-sm"
                placeholder="Md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full  px-4 py-1.5 border border-border rounded-xl shadow-sm outline-none transition-all duration-300 text-gray-700 placeholder:text-sm"
              placeholder="anis@gmail.com"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full  px-4 py-1.5 border border-border rounded-xl shadow-sm outline-none transition-all duration-300 text-gray-700 placeholder:text-sm"
              placeholder="Create a password "
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="group w-full bg-bg-btn text-white py-2 px-4 rounded-xl font-medium hover:bg-bg-btn-hover transition-colors flex items-center justify-center cursor-pointer overflow-hidden"
          >
            Sign Up
            <span className="ml-2 transform transition-transform duration-300 ease-in-out -rotate-[25deg] group-hover:rotate-0 ">
              <FaArrowRight />
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6 pt-6 flex items-center gap-1 text-sm">
          <p>Already have an Account?</p>
          <Link
            type="button"
            href="/login"
            className="text-indigo-600 font-medium hover:underline cursor-pointer"
          >
            Login
          </Link>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-600 font-medium">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 font-medium">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
