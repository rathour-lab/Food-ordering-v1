import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import Hero from '../src/assets/hero.png'
import chicken from '../src/assets/chickenicon.png'
import burger from '../src/assets/burgericon.png'
import Herochutteny from '../src/assets/herochutteny.png'
import Menu from '../Components/Menu'
import Reservation from '../Components/Reservation'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'

import About from '../Components/About'


function App() {


  return (
    <>
      <div className="relative h-full bg-cover bg-center  mx-auto bg-[#fff8dd] "
      >

        <Navbar />
        <div className='px-5 sm:px-8 md:px-10 lg:px-16 transition-all duration-300'>

          <div className=' w-full flex flex-col md:flex md:flex-row md:items-center md:justify-between mt-10'>
            <div className='space-y-4 flex-1'>

              <div className=' text-5xl font-bold tracking-wide leading-12 '>

                Your <span className='text-[#ff8800]'>Gateway <br /> to</span>  Gourmet <br /> Burgers🍔

              </div>
              <p className=" text-sm text-gray-600  max-w-sm">
                Crafted with fresh ingredients and packed with unforgettable flavors, every
                meal at Hunger Town is prepared to satisfy your cravings.
              </p>
              <div className='flex space-x-4'>

                <button className='bg-black text-white px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-black/90 hover:rounded-2xl transition-all duration-300 hover:scale-105'>Grab your order</button>
                
                <button className='bg-[#ff8800] px-4 py-2 rounded-xl text-white hover:cursor-pointer hover:bg-[#ff8800]/80 transition-all duration-300 hover:scale-105'>Combo deals</button>
              </div>

            </div>

            <div className='flex-1'>
              <img className='h-100  hidden md:inline-block' src={`${Hero}`} alt="" />
            </div>
          </div>
         <div className="pb-10 mt-8 flex flex-col lg:flex-row items-center  gap-8 lg:gap-10">

  
  <div className="hidden lg:flex justify-center flex-shrink-0">
    <img
      src={Herochutteny}
      alt="Chutney"
      className="w-60  h-auto"
    />
  </div>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">

   
    <div className="flex items-center bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="p-3 bg-[#F5E9D7] rounded-full flex-shrink-0">
        <img
          className="w-12 h-12 object-contain"
          src={chicken}
          alt="Chicken"
        />
      </div>

      <div className="ml-4">
        <h3 className="font-bold text-base md:text-lg">
          Farm Sourced Meat
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Healthiest meat ever
        </p>
      </div>

    </div>

   
    <div className="flex items-center bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="p-3 bg-[#F5E9D7] rounded-full flex-shrink-0">
        <img
          className="w-12 h-12 object-contain"
          src={burger}
          alt="Burger"
        />
      </div>

      <div className="ml-4">
        <h3 className="font-bold text-base md:text-lg">
          Freshly Prepared
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          Tasteful spices & divine flavour
        </p>
      </div>

    </div>

  </div>

</div>
        </div>

      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        
        <Route path="/Reservations" element={<Reservation />} />
      </Routes>
      <About/>
      <Footer />



    </>
  )
}

export default App
