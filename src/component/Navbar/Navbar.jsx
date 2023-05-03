import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight, FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-red-100 rounded-lg py-4 px-3 md:px-3 md:my-2 my-0 mx-0 md:mx-28 flex justify-between items-center">
        <Link to="/">
          <div id="logo" className="text-red-500 text-lg md:text-3xl font-bold">
            Kitchen italia
          </div>
        </Link>
        <ul
          className={`flex md:flex-row flex-col md:bg-transparent font-bold bg-red-100 absolute md:static duration-500 rounded-lg md:rounded-none text-right md:text-center w-full md:w-fit py-3 md:py-0 ${
            open ? "top-14" : "-top-96"
          }`}
        >
          <li className="hover:bg-red-200 mr-6 md:mr-3 px-3 rounded-full duration-500">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:bg-red-200 mr-6 md:mr-3 px-3 rounded-full duration-500">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li className="hover:bg-red-200 mr-6 md:mr-3 px-3 rounded-full duration-500">
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign up
            </NavLink>
          </li>
          <li className="hover:bg-red-200 md:mr-0 mr-6 px-3 rounded-full duration-500">
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign in
            </NavLink>
          </li>
        </ul>
        <div onClick={() => setOpen(!open)} className="md:hidden ml-3 my-2 ">
          <span className="duration-500">
            {open == true ? (
                <FaAlignJustify className="h-6 w-6 text-red-500" />
                ) : (
                <FaAlignRight className="h-6 w-6 text-red-500" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
