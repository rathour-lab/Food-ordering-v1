import React, { useState } from 'react'
import { FaCalendarAlt, FaClock, FaUserFriends, FaCheckCircle } from "react-icons/fa";

// ਤੁਹਾਡੇ ਅਸੈਟਸ (ਲੋੜ ਅਨੁਸਾਰ ਇਮੇਜ ਬਦਲ ਸਕਦੇ ਹੋ)
import Hero from '../src/assets/hero.png' 
import chicken from '../src/assets/chickenicon.png' // ਇਸਨੂੰ VIP/Private Cabin ਲਈ ਵਰਤ ਸਕਦੇ ਹੋ
import burger from '../src/assets/burgericon.png'   // ਇਸਨੂੰ Pre-order ਲਈ ਵਰਤ ਸਕਦੇ ਹੋ
import pizza from '../src/assets/pizza.png'

const Reservation = () => {
  // ਫਾਰਮ ਦੀ ਸਟੇਟ (State)
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2 Guests'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table reserved for ${formData.guests} on ${formData.date} at ${formData.time}!`);
  };

  return (
    <>
      <div className="relative h-full bg-cover bg-center mx-auto bg-[#fff8dd] pb-10">
        <div className='px-5 sm:px-15 md:px-15 lg:px-26 transition-all duration-300'>
          
          {/* Main Hero & Form Section */}
          <div className='w-full flex flex-col md:flex-row md:items-center md:justify-between gap-10 pt-10'>
            
            {/* Left Side: Heading and Form */}
            <div className='space-y-6 flex-1'>
              <div className='text-5xl font-bold tracking-wide leading-12'>
                Book Your <span className='text-[#ff8800]'>Vibe <br /> &</span> Dine 🍔
              </div>
              <p className="text-sm text-gray-600 max-w-sm">
                Skip the waiting line! Reserve your perfect spot at Hunger Town today and enjoy freshly prepared gourmet flavors right on time.
              </p>

              {/* Reservation Form */}
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl shadow-xl space-y-4 max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  {/* Date Input */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                      <FaCalendarAlt className="text-[#ff8800]" /> Date
                    </label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff8800] bg-gray-50 cursor-pointer" 
                    />
                  </div>

                  {/* Time Input */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                      <FaClock className="text-[#ff8800]" /> Time
                    </label>
                    <input 
                      type="time" 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff8800] bg-gray-50 cursor-pointer" 
                    />
                  </div>
                </div>

                {/* Guests Selection */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                    <FaUserFriends className="text-[#ff8800]" /> Guests
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff8800] bg-gray-50 cursor-pointer"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6+ Guests (Party)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-3 bg-black text-white px-7 py-3 rounded-full font-semibold tracking-wide shadow-lg shadow-black/20 transition-all duration-300 hover:bg-neutral-900 active:scale-95 cursor-pointer"
                >
                  Confirm Table Booking
                  <FaCheckCircle className="transition-transform duration-300 group-hover:scale-110" />
                </button>
              </form>

            </div>

            {/* Right Side: Hero Image */}
            <div className='mt-4 flex-1 lg:flex ms-20 justify-end'>
              <img className='h-100 mt-16 hidden md:inline-block object-contain' src={Hero} alt="Hunger Town Dining" />
            </div>
          </div>

          {/* Bottom Section: Features/Perks */}
          <div className="pb-10 mt-12 relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            
            {/* Background Side Image */}
            <div className="absolute hidden lg:flex shrink-0 left-0">
              <img
                src={pizza}
                alt="Decorative Food"
                className="w-75 xl:w-95 h-auto opacity-80"
              />
            </div>

            {/* Features Cards Container */}
            <div className="md:mt-4 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-end gap-6 w-full lg:gap-4">
              
              {/* Feature 1 */}
              <div className="flex items-center bg-white p-5 rounded-2xl shadow-md lg:w-fit hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-[#F5E9D7] rounded-full shrink-0">
                  <img
                    className="w-12 h-12 object-contain"
                    src={chicken}
                    alt="Private Cabin"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-base md:text-lg">
                    Private & VIP Booths
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Premium seating for dates & family
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center bg-white p-5 rounded-2xl shadow-md lg:w-fit hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-[#F5E9D7] rounded-full shrink-0">
                  <img
                    className="w-12 h-12 object-contain"
                    src={burger}
                    alt="Pre-order"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-base md:text-lg">
                    Pre-order Your Meal
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Food serves hot right as you arrive
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Reservation;