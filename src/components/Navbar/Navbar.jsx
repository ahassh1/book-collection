import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar shadow-sm bg-base-200">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/readList">Read List</Link>
            </li>

            <li>
              <details>
                <summary>Listed Books</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a>Pages To Read</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-xl font-bold pl-3 text-[#26CCC2]">
          BookHouse
        </Link>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/readList">Read List</Link>
          </li>

          <li>
            <details>
              <summary>Listed Books</summary>
              <ul className="p-2 bg-base-100 w-40 z-10">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a>Pages To Read</a>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-2">
        <Link to="/login" className="btn bg-[#26CCC2] text-white">
          Sign In
        </Link>
        <Link to="/register" className="btn bg-[#4de0a3] text-white">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
