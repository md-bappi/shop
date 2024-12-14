import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className=" relative flex justify-between items-center py-6">
      <Link to="/">
        <span className="logo text-2xl font-medium uppercase text-indigo-500">
          sh<span className="text-orange-500">op</span>
        </span>
      </Link>

      <ul className="hidden sm:flex gap-5 text-base text-gray-700 uppercase font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collection">Collection</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>

      <div className=" flex justify-between items-center gap-5">
        <img
          src={assets.search_icon}
          alt=""
          className=" size-5 hover:cursor-pointer duration-300"
        />

        <div className=" group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="size-5 hover:cursor-pointer duration-300"
          />
          <div className=" hidden group-hover:block absolute pt-6 right-0">
            <div className=" flex flex-col gap-3 bg-slate-100 w-32 p-4">
              <span className=" hover:text-gray-900 duration-300 hover:cursor-pointer">
                My Profile
              </span>
              <span className=" hover:text-gray-900 duration-300 hover:cursor-pointer">
                Orders
              </span>
              <span className=" hover:text-gray-900 duration-300 hover:cursor-pointer">
                Logout
              </span>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative ">
          <img src={assets.cart_icon} alt="" className="size-5" />
          <p className=" absolute -bottom-2 -right-2 size-4 rounded-full text-xs flex justify-center items-center bg-orange-700 font-bold p-2 text-gray-50">
            15
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className=" w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* sidebar menu for small screens */}
      <div
        className={` absolute top-0 right-0 bottom-0 left-0 h-screen overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className=" flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
