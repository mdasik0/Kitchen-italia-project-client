import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-red-100 rounded-lg py-4 px-3 md:my-2 my-0 mx-0 md:mx-28 flex justify-between items-center">
        <Link to="/">
          <div id="logo" className="text-red-500 text-3xl font-bold">
            Kitchen italia
          </div>
        </Link>
        <div className="flex font-semibold">

          <div className="hover:bg-red-200 mr-3 px-3 rounded-full duration-500">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>
          <div className="hover:bg-red-200 mr-3 px-3 rounded-full duration-500">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </div>
          <div className="hover:bg-red-200 mr-3 px-3 rounded-full duration-500">
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign up
            </NavLink>
          </div>
          <div className="hover:bg-red-200 px-3 rounded-full duration-500">
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign in
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
