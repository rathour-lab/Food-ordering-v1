import React, { useEffect, useState } from 'react'
import Hero from '../src/assets/hero.png'
import chicken from '../src/assets/chickenicon.png'
import burger from '../src/assets/burgericon.png'
import Herochutteny from '../src/assets/herochutteny.png'
import heroMenu from '../src/assets/heroMenu.png'
import Home from '../Components/Home'
import { useNavigate } from 'react-router-dom'

import { FaArrowRight, FaCcDinersClub, FaFire, FaMotorcycle, FaTruck, FaUtensils, FaUtensilSpoon } from 'react-icons/fa'
import Menu from '../Components/Menu'
function Menupage({socket}) {

  return (
    <>
      <div className='bg-[#fff8dd]   px-5 sm:px-15 md:px-15 lg:px-26 transition-all duration-300 '>
        <div className='flex justify-between gap-10 max-w-6xl'>

          <div className='space-y-4 flex-1 py-25'>

            <div className=' text-5xl font-bold tracking-wide leading-12 '>

              Discover Our <br /> <span className='text-[#ff8800]'>Delicious <br /></span>  Menu🍽️

            </div>
            <p className=" text-sm text-gray-600  max-w-sm">
              From juicy burgers and cheesy pizzas to refreshing drinks and tasty desserts,
              explore our freshly prepared dishes made with premium ingredients for every craving.
            </p>

            <div className=" flex flex-wrap items-center gap-4">

              {/* Primary Button */}
              <button onClick={()=>window.scroll(0,480)}
                className="
         group flex items-center gap-3
         bg-black text-white
         px-7 py-3 rounded-full
         font-semibold tracking-wide
         shadow-lg shadow-black/20
         transition-all duration-300
         hover:bg-neutral-900
         hover:shadow-2xl hover:-translate-y-1
         active:scale-95
         focus:outline-none focus:ring-4 focus:ring-black/20
         cursor-pointer
         "
              >
                Browse Menu

                <FaArrowRight
                  className="
           transition-transform duration-300
           group-hover:translate-x-1
           "
                />
              </button>

              {/* Secondary Button */}
              <button
                className="
         group flex items-center gap-3
         bg-gradient-to-r from-orange-500 to-amber-500
         text-white
         px-7 py-3 rounded-full
         font-semibold tracking-wide
         shadow-lg shadow-orange-400/40
         transition-all duration-300
         hover:from-orange-600 hover:to-amber-600
         hover:shadow-2xl hover:-translate-y-1
         active:scale-95
         focus:outline-none focus:ring-4 focus:ring-orange-300
         cursor-pointer
         "
              >
                <FaFire
                  className="
           text-lg
           transition-transform duration-300
           group-hover:rotate-12 group-hover:scale-125
           "
                />

                Best Sellers
              </button>

            </div>

          </div>
          <div className='flex-1 relative pt-30 left-10 hidden xl:block'>
            <div className="relative w-68 h-80 ">
              {/* Background Shape */}
              <div
                className="absolute inset-0 bg-[#641919]"
                style={{
                  clipPath: "polygon(0 0, 25% 0, 100% 35%, 100% 100%, 0 100%)",
                  borderRadius: "30px",
                }}
              ></div>

              {/* Burger */}
              <img
                src={`${heroMenu}`}
                alt=""
                className="h-100 absolute -top-25 left-33 -translate-x-1/2 z-10"
              />
            </div>
          </div>
          <div className=' flex flex-col justify-center items-center space-y-3'>
            <div className='flex space-x-2 h-20 w-55  items-center'>
              <div>
<FaMotorcycle className='h-12 w-12 px-2 py-2 rounded-full bg-gray-100'/>
              </div>
            <div className='flex flex-col'>
              <span className='font-bold text-lg'>Fast delivery</span>
              <span className='text-gray-400'>promise to deliver within 30 mins</span>
            </div>
            </div>
            <div className='flex space-x-2 h-20 w-55  items-center'>
              <div>
<FaTruck className='h-12 w-12 px-2 py-2 rounded-full bg-gray-100'/>
              </div>
            <div className='flex flex-col'>
              <span className='font-bold text-lg'>Fast Pickup</span>
              <span className='text-gray-400'>promise to deliver within 30 mins</span>
            </div>
            </div>
           <div className='flex space-x-2 h-20 w-55  items-center'>
              <div>
<FaUtensils className='h-12 w-12 px-2 py-2 rounded-full bg-gray-100'/>
              </div>
            <div className='flex flex-col'>
              <span className='font-bold text-lg'>Dine in</span>
              <span className='text-gray-400'>promise to deliver within 30 mins</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pb-40 bg-[#fff8dd]'>

<Menu />
      </div>
     
    </>
  )

}

export default Menupage
