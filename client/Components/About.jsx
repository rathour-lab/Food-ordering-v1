import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import bgimg from '../src/assets/restourantimg.jpg'
import { FaCrown } from 'react-icons/fa'
import crown from '../src/assets/icons8-crown-48.png'
const About = () => {
  return (
    <div className='bg-[#fff8dd]'>

    <div className=' grid grid-cols-1 md:grid-cols-2 px-10 sm:px-30 md:px-6 md:gap-15 lg:px-10 pt-4 transition-all duration-300 '>
      <div className='px-10 lg:px-20 sm'>

      <div className='relative'>

      <div 
      className=" h-110 w-75 bg-no-repeat bg-center bg-cover rounded-full"
      style={{
        backgroundImage: `url(${bgimg})`
      }}>
        </div>
        <div className='absolute inset-55 top-15 h-36 bg-[#a8a184] text-white font-medium w-32 rounded-2xl p-2 px-4 space-y-2'>
          <img className='size-12' src={`${crown}`} alt="" />
          {/* < FaCrown className='size-12'/> */}
          <p>30+ years of experience</p>
          </div>
          <div className='absolute inset-0 top-65 -left-15 rounded-full object-cover '><img className=' border-white border-8 w-40 h-40 rounded-full ' src={`${bgimg}`} alt="" /></div>
      </div>
      </div>

      <div className='space-y-4 mt-8'>
        <p className='text-gray-500 font-serif tracking-wider'>ABOUT US</p>
        <h1 className='text-2xl font-bold'>
          OUR COMMITMENT TO <br /> AUTHENTICITY & <span className='text-[#ff8800]'>EXCELLENCE</span> 
        </h1>
        <p className='text-gray-500 max-w-sm'>
          Every dish we create is a celebration of connection, crafted with passion and inspired by diverse flavours. Join us in an inviting space where every bite sparks joy and every moment becomes a cheerfull memory.
        </p>
        <div className='text-gray-500 space-y-2'>

        <p><img src="" alt="" /> <span> Sessional & Locally Sourced Ingredients </span></p>
        <p><img src="" alt="" /> <span> Vegetarian & Dietary Friendly Options </span></p>
        <p><img src="" alt="" /> <span> Exculsive Pairings & Unique Flavours</span></p>
        </div>
        <div className='flex space-x-4'>
          <button className='bg-black text-white px-4 py-3 rounded-full  flex items-center gap-3 '>Order Now <span><FaArrowRight/></span></button>
          <button className='bg-black text-white px-4 py-3 rounded-full flex items-center gap-3 '>Explore More <span><FaArrowRight/></span></button>
        </div>
        
      </div>
     
    </div>
    <div className='px-16'>

     <div className=' border-t border-t-[#a8a184]/50 grid grid-cols-1 space-y-2 md:grid-cols-3 gap-10 mt-4 py-4 '>
        <div className='px-4 py-2 bg-[#a8a184]/50 text-white font-medium rounded-xl h-30'><img src={`${crown}`} alt="" />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, possimus?</div>
        <div className='px-4 py-2 bg-[#a8a184]/50 text-white font-medium rounded-xl h-30'><img src={`${crown}`} alt="" />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, possimus?</div>
        <div className='px-4 py-2 bg-[#a8a184]/50 text-white font-medium rounded-xl h-30'><img src={`${crown}`} alt="" />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, possimus?</div>
        </div>
    </div>
        </div>
  )
}

export default About