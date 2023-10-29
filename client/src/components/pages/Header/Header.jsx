import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
    window.location.href = "/";
  };

  return (
    <div>
      <nav className="bg-black text-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <p className="text-3xl">Redux-Authentication</p>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-12 h-10 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              width="1.25rem"
              height="1rem"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 text-white text-lg">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white hover:text-green-300  md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block py-2 pl-3 pr-4 text-white hover:text-green-300  md:p-0"
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="inline-block cursor-pointer rounded-full border border-solid border-[#c9fd02] bg-white px-3 py-0 text-center font-bold text-black transition hover:border-black hover:bg-[#c9fd02]
                                    "
                >
                  login
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    logout();
                  }}
                  className="inline-block cursor-pointer rounded-full border border-solid border-[#c9fd02] bg-white px-3 py-0 text-center font-bold text-black transition hover:border-black hover:bg-[#c9fd02]               "
                >
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
