import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
  import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import Hero from '../src/assets/hero.png'
import Menu from '../Components/Menu'
import Reservation from '../Components/Reservation'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import Admin from '../Components/Admin-menu'



function App() {


  return (
    <>
  <div  className="relative h-full bg-cover bg-center  mx-auto bg-[#F5E9D7] "
         >

        <Navbar />
        <div className='px-5 sm:px-8 md:px-10 lg:px-16 transition-all duration-300'>

            <div className=' w-full flex flex-col md:flex md:flex-row md:items-center md:justify-between mt-10'>
              <div className=' m-5 space-y-4'>

              <div className=' text-5xl font-bold tracking-wide leading-12 '>

              Your <span className='text-[#ff8800]'>Gateway <br /> to</span>  Gourmet <br /> Burgers🍔
              
              </div>
              <p className=" text-sm text-gray-600  max-w-sm">
  Crafted with fresh ingredients and packed with unforgettable flavors, every
  meal at Hunger Town is prepared to satisfy your cravings.
</p>
              <button className='bg-black text-white px-4 py-2 rounded-xl'>Grab your order</button>
              </div>

              <div className='-ms-15'>
                <img className='h-100   hidden md:block' src={`${Hero}`} alt="" />
              </div>
              </div>
        </div>
        
  </div>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Reservations" element={<Reservation />} />
    </Routes>
 <Footer/>



   </>
  )
}

export default App
