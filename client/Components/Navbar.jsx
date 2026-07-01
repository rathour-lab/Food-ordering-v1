import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
     const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
    return (


            <nav  className={`flex sticky top-0 items-center justify-between px-8 py-4 bg-[#F8F1E7] shadow-xl transition-all duration-300 ${
    scrolled ? "mx-0 rounded-none " : "m-6 rounded-2xl"
  }`}>
                <div>

                    <img className='h-15.5' src="https://foodu-react.vercel.app/assets/img/logo.png" alt="" />


                </div>

                <ul className='lg:flex gap-10 text-black font-medium text-xl hidden'>

                   <Link to={'/'} > <li  className='hover:underline cursor-pointer'>Home</li></Link>
                   <Link to={'/Menu'}> <li className='hover:underline cursor-pointer'>Menu</li></Link>
                   <Link to={'/Reservations'}> <li className='hover:underline cursor-pointer'>Reservations</li></Link>
                </ul>
                <div className='flex space-x-8 items-center'>
                    <div><img className='h-8 hover:cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" /></div>
                    <button className='py-2 px-6 bg-red-500 hover:bg-red-500/90 hover:cursor-pointer rounded-lg text-white'>
                        Admin
                    </button>
                </div>

            </nav>
        

    )
}

export default Navbar