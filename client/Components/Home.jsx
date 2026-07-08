import React, { useState } from 'react'
import { FaArrowRight, FaFire, FaCalendarAlt, FaClock, FaUserFriends, FaCheckCircle } from "react-icons/fa";

import Hero from '../src/assets/hero.png'
import chicken from '../src/assets/chickenicon.png'
import burger from '../src/assets/burgericon.png'
import pizza from '../src/assets/pizza.png'

const Home = () => {
  console.log('home render');
  
  // Reservation Form State
  const [resData, setResData] = useState({
    date: '',
    time: '',
    guests: '2 Guests'
  });

  const handleReservation = (e) => {
    e.preventDefault();
    alert(`Table reserved for ${resData.guests} on ${resData.date} at ${resData.time}!`);
  };

  return (
    <>
      <div className="relative h-full bg-cover bg-center mx-auto bg-[#fff8dd] pb-10">
        <div className='px-5 sm:px-15 md:px-15 lg:px-26 transition-all duration-300'>

          {/* --- HERO SECTION --- */}
          <div className='w-full flex flex-col md:flex-row md:items-center md:justify-between '>
            <div className='space-y-4 flex-1'>
              <div className='text-5xl font-bold tracking-wide leading-12'>
                Your <span className='text-[#ff8800]'>Gateway <br /> to</span> Gourmet <br /> Burgers🍔
              </div>
              <p className="text-sm text-gray-600 max-w-sm">
                Crafted with fresh ingredients and packed with unforgettable flavors, every
                meal at Hunger Town is prepared to satisfy your cravings.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {/* Primary Button */}
                <button className="group flex items-center gap-3 bg-black text-white px-7 py-3 rounded-full font-semibold tracking-wide shadow-lg shadow-black/20 transition-all duration-300 hover:bg-neutral-900 hover:shadow-2xl hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-black/20 cursor-pointer">
                  Grab Your Order
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Secondary Button */}
                <button className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-7 py-3 rounded-full font-semibold tracking-wide shadow-lg shadow-orange-400/40 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-2xl hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300 cursor-pointer">
                  <FaFire className="text-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                  Combo Deals
                </button>
              </div>
            </div>

            <div className='mt-4 flex-1 lg:flex ms-20'>
              <img className='h-100 mt-16 hidden md:inline-block' src={Hero} alt="" />
            </div>
          </div>

          {/* --- FEATURES SECTION --- */}
          <div className="pb-10 mt-4 relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            <div className="absolute hidden lg:flex shrink-0">
              <img src={pizza} alt="Pizza" className="w-75 xl:w-95 h-auto" />
            </div>

            <div className="md:mt-4 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-end gap-6 w-full lg:gap-4">
              {/* Feature 1 */}
              <div className="flex items-center bg-white p-5 rounded-2xl shadow-md lg:w-fit hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-[#F5E9D7] rounded-full shrink-0">
                  <img className="w-12 h-12 object-contain" src={chicken} alt="Chicken" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-base md:text-lg">Farm Sourced Meat</h3>
                  <p className="text-gray-500 text-sm mt-1">Healthiest meat ever</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center bg-white p-5 rounded-2xl shadow-md lg:w-fit hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-[#F5E9D7] rounded-full shrink-0">
                  <img className="w-12 h-12 object-contain" src={burger} alt="Burger" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-base md:text-lg">Freshly Prepared</h3>
                  <p className="text-gray-500 text-sm mt-1">Tasteful spices & divine flavour</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- NEW: RESERVATION SECTION --- */}
          <hr className="border-t border-orange-200/50 my-10" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-gradient-to-br from-amber-100 to-orange-100 p-8 md:p-12 rounded-3xl shadow-inner">
            <div className="space-y-3 flex-1">
              <span className="text-xs font-bold text-[#ff8800] uppercase tracking-widest bg-orange-200/60 px-3 py-1 rounded-full">
                Book A Table
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
                Want to Skip the Line? <br />
                <span className="text-[#ff8800]">Reserve Your Spot</span>
              </h2>
              <p className="text-gray-600 text-sm max-w-md">
                Planning a dinner or a burger party with friends? Book your table in advance and we’ll make sure your vibe is sorted.
              </p>
            </div>

            {/* Inline Booking Form */}
            <form onSubmit={handleReservation} className="w-full lg:w-auto flex-1 bg-white p-6 rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-3 lg:flex lg:items-end gap-4">
              
              {/* Date Input */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <FaCalendarAlt className="text-[#ff8800]" /> Date
                </label>
                <input 
                  type="date" 
                  required
                  value={resData.date}
                  onChange={(e) => setResData({...resData, date: e.target.value})}
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff8800] bg-gray-50 cursor-pointer w-full" 
                />
              </div>

              {/* Time Input */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <FaClock className="text-[#ff8800]" /> Time
                </label>
                <input 
                  type="time" 
                  required
                  value={resData.time}
                  onChange={(e) => setResData({...resData, time: e.target.value})}
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff8800] bg-gray-50 cursor-pointer w-full" 
                />
              </div>

              {/* Guests Dropdown */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <FaUserFriends className="text-[#ff8800]" /> Guests
                </label>
                <select 
                  value={resData.guests}
                  onChange={(e) => setResData({...resData, guests: e.target.value})}
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff8800] bg-gray-50 cursor-pointer w-full"
                >
                  <option className=''>1 Guest</option>
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:col-span-3 lg:w-auto bg-[#ff8800] text-white px-6 py-2.5 h-[42px] rounded-xl font-semibold text-sm shadow-md shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Book Now
                <FaCheckCircle />
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;