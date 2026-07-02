import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import logo  from '../src/assets/logo.png'
import menu  from '../src/assets/menu.png'
const Navbar = () => {

    return (


            <nav  className="flex sticky top-0 items-center justify-between px-5 sm:px-8 md:px-10 lg:px-16  py-2 bg-[#F8F1E7] shadow-xl transition-all duration-300 
  ">
                <div className='-ms-7'>

                    <img className='h-20 w-fit rounded-full' src={`${logo}`} alt="" />


                </div>

                <ul className='md:flex gap-10 text-black font-medium text-xl hidden'>

                   <Link to={'/'} > <li  className='hover:underline cursor-pointer'>Home</li></Link>
                   <Link to={'/Menu'}> <li className='hover:underline cursor-pointer'>Menu</li></Link>
                   <Link to={'/Reservations'}> <li className='hover:underline cursor-pointer'>Reservations</li></Link>
                </ul>
                <div className='flex items-center md:space-x-5'>

                <div className='flex space-x-5 items-center'>
                    <img className='h-8 hover:cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
                    <div><img className='h-8 md:hidden' src={`${menu}`} alt="" /></div>
                    
                    

                </div>
                <button className='hidden md:block py-2 px-6 bg-[#ff8800] hover:bg-[#ff8800]/90 hover:cursor-pointer rounded-lg text-white'>
                        Admin
                    </button>
                </div>

            </nav>
        

    )
}

export default Navbar