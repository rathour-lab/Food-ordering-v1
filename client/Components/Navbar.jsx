import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png";
import menu from "../src/assets/menu.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "px-0" : "px-5 sm:px-8 lg:px-10 pt-4"
      }`}
    >
      <nav
        className={`flex items-center justify-between py-2 bg-[#F8F1E7] transition-all duration-500 ${
          scrolled
            ? "mx-0 rounded-none shadow-2xl"
            : "rounded-2xl shadow-lg"
        } px-5 sm:px-8 md:px-10 lg:px-16`}
      >
        {/* Logo */}
        <div className="-ms-7">
          <img
            className="h-20 w-fit rounded-full"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-black font-medium text-xl">
          <Link to="/">
            <li className="hover:text-[#ff8800] transition">Home</li>
          </Link>

          <Link to="/Menu">
            <li className="hover:text-[#ff8800] transition">Menu</li>
          </Link>

          <Link to="/Reservations">
            <li className="hover:text-[#ff8800] transition">
              Reservations
            </li>
          </Link>
        </ul>

        {/* Right Side */}
        <div className="flex items-center md:space-x-5">
          <div className="flex space-x-5 items-center">
            <img
              className="h-8 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt="cart"
            />

            <img
              className="h-8 md:hidden cursor-pointer"
              src={menu}
              alt="menu"
            />
          </div>

          <button className="hidden md:block py-2 px-6 bg-[#ff8800] hover:bg-[#e97900] rounded-lg text-white transition">
            Admin
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;