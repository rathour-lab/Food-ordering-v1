import React, { useState, useEffect } from "react";
import { FaUserShield } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import logo from "../src/assets/logo.png";
import menu from "../src/assets/menu.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartitem, setCartitem] = useState(0);
  const [cart, setCart] = useState(false);

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
      className={`sticky top-0 z-50 bg-[#fff8dd] transition-all duration-500 ${
        scrolled
          ? "px-0"
          : "px-3 sm:px-5 md:px-8 lg:px-10 pt-3 md:pt-4"
      }`}
    >
      <nav
        className={`flex items-center justify-between bg-[#F8F1E7] py-2 transition-all duration-500 ${
          scrolled
            ? "rounded-none shadow-2xl"
            : "rounded-2xl shadow-lg"
        } px-4 sm:px-6 md:px-8 lg:px-16`}
      >
        <div className="-ml-2 sm:-ml-4 md:-ml-7">
          <img
            className="h-14 sm:h-16 md:h-20 w-auto rounded-full"
            src={logo}
            alt="logo"
          />
        </div>

        <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-lg font-semibold">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative group transition-all duration-300 ${
                isActive ? "text-[#ff8800]" : "text-gray-800"
              }`
            }
          >
            <li className="py-2 hover:scale-105 transition-transform duration-300">
              Home
            </li>

            <span
              className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
            ></span>
          </NavLink>

          <NavLink
            to="/Menu"
            className={({ isActive }) =>
              `relative group transition-all duration-300 ${
                isActive ? "text-[#ff8800]" : "text-gray-800"
              }`
            }
          >
            <li className="py-2 hover:scale-105 transition-transform duration-300">
              Menu
            </li>

            <span
              className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
            ></span>
          </NavLink>

          <NavLink
            to="/Reservations"
            className={({ isActive }) =>
              `relative group transition-all duration-300 ${
                isActive ? "text-[#ff8800]" : "text-gray-800"
              }`
            }
          >
            <li className="py-2 hover:scale-105 transition-transform duration-300">
              Reservations
            </li>

            <span
              className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
            ></span>
          </NavLink>

        </ul>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">

          <div className="flex items-center gap-3 md:gap-4">
<div className="relative">

  <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold flex items-center justify-center">
    {cartitem}
  </div>

  <div
    className={`absolute top-12 right-0 md:-right-12 lg:-right-24
    w-[90vw] sm:w-80 max-w-sm
    bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden
    z-50 transition-all duration-300
    ${cart ? "block" : "hidden"}`}
  >
    {cartitem === 0 ? (
      <>
        <div className="p-6 flex flex-col items-center">

          <img
            className="h-24 mb-4 opacity-70"
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
          />

          <h3 className="text-lg font-semibold text-gray-800">
            Your Cart is Empty
          </h3>

          <p className="text-sm text-gray-500 text-center mt-2">
            Looks like you haven't added any delicious food yet.
          </p>

        </div>

        <div className="border-t p-4">
          <button
            className="w-full py-3 rounded-full
            bg-gradient-to-r from-orange-500 to-amber-500
            text-white font-semibold
            hover:from-orange-600 hover:to-amber-600
            transition duration-300"
          >
            Browse Menu
          </button>
        </div>
      </>
    ) : (
      <div className="p-5">

        <h3 className="text-lg font-semibold mb-4">
          🛒 Your Cart
        </h3>

        <div className="flex justify-between items-center border-b pb-3 mb-3">

          <div>
            <p className="font-medium">
              Pizza
            </p>

            <p className="text-sm text-gray-500">
              Qty : 1
            </p>
          </div>

          <p className="font-semibold text-orange-500">
            ₹299
          </p>

        </div>

        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Total</span>
          <span>₹299</span>
        </div>

        <button
          className="w-full py-3 rounded-full
          bg-gradient-to-r from-orange-500 to-amber-500
          text-white font-semibold
          hover:from-orange-600 hover:to-amber-600
          transition duration-300"
        >
          Checkout
        </button>

      </div>
    )}
  </div>

  <img
    onClick={() => setCart(!cart)}
    className="h-7 sm:h-8 cursor-pointer hover:scale-110 transition duration-300"
    src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
    alt="cart"
  />

</div>

<img
  className="h-7 sm:h-8 md:hidden cursor-pointer"
  src={menu}
  alt="menu"
/>

</div>
          <Link to="/Admin">
            <button
              className="
                hidden lg:flex items-center gap-2
                px-6 py-2.5
                bg-gradient-to-r from-orange-500 to-amber-500
                text-white font-semibold
                rounded-full
                shadow-lg shadow-orange-400/30
                transition-all duration-300
                hover:from-orange-600 hover:to-amber-600
                hover:shadow-xl hover:-translate-y-1
                active:scale-95
                focus:outline-none
                focus:ring-4
                focus:ring-orange-300
                cursor-pointer
              "
            >
              <FaUserShield className="transition-transform duration-300" />
              Admin
            </button>
          </Link>
        </div>
      </nav>

      
    </div>
  );
};

export default Navbar;