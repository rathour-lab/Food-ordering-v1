import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bgimg from "../src/assets/restourantimg.jpg";
import crown from "../src/assets/icons8-crown-48.png";

const About = () => {
  return (
    <div className="bg-[#fff8dd] py-12">

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 sm:px-10 lg:px-20">

      
        <div className="flex justify-center">
          <div className="relative">

            
            <div
              className="w-64 h-80 sm:w-80 sm:h-[430px] lg:w-[380px] lg:h-[500px] rounded-full bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: `url(${bgimg})`,
              }}
            ></div>

            
            <div className="absolute top-10 -right-5 sm:right-0 bg-[#a8a184] text-white rounded-2xl p-4 w-36 shadow-lg">
              <img src={crown} alt="" className="w-10 h-10 mb-2" />
              <p className="text-sm font-semibold">
                30+ Years of Experience
              </p>
            </div>

            {/* Small Circular Image */}
            <div className="absolute bottom-6 -left-6 sm:-left-10">
              <img
                src={bgimg}
                alt=""
                className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-8 border-white object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        
        <div className="space-y-6 text-center lg:text-left">

          <p className="uppercase tracking-[5px] text-gray-500 font-semibold">
            About Us
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            OUR COMMITMENT TO
            <br />
            AUTHENTICITY &
            <span className="text-[#ff8800]"> EXCELLENCE</span>
          </h1>

          <p className="text-gray-500 leading-7 max-w-lg mx-auto lg:mx-0">
            Every dish we create is a celebration of connection, crafted with
            passion and inspired by diverse flavours. Join us in an inviting
            space where every bite sparks joy and every moment becomes a
            cheerful memory.
          </p>

        
          
<div className="space-y-4">

  <a href="#" className="flex items-center gap-3 group">
    <span className="w-3 h-3 rounded-full bg-[#ff8800]"></span>
    <span className="text-gray-600 group-hover:text-[#ff8800] transition">
      Seasonal & Locally Sourced Ingredients
    </span>
  </a>

  <a href="#" className="flex items-center gap-3 group">
    <span className="w-3 h-3 rounded-full bg-[#ff8800]"></span>
    <span className="text-gray-600 group-hover:text-[#ff8800] transition">
      Vegetarian & Dietary Friendly Options
    </span>
  </a>

  <a href="#" className="flex items-center gap-3 group">
    <span className="w-3 h-3 rounded-full bg-[#ff8800]"></span>
    <span className="text-gray-600 group-hover:text-[#ff8800] transition">
      Exclusive Pairings & Unique Flavours
    </span>
  </a>

</div>

        
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">

            <button className="bg-black hover:bg-[#ff8800] duration-300 text-white px-6 py-3 rounded-full flex items-center justify-center gap-3">
              Order Now
              <FaArrowRight />
            </button>

            <button className="bg-black hover:bg-[#ff8800] duration-300 text-white px-6 py-3 rounded-full flex items-center justify-center gap-3">
              Explore More
              <FaArrowRight />
            </button>

          </div>

        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-14">

        <div className="border-t border-[#a8a184]/40 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-[#a8a184]/50 rounded-2xl p-6 text-white shadow-md hover:scale-105 duration-300">
            <img src={crown} alt="" className="w-10 mb-3" />
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p className="text-sm leading-6">
              We use only fresh ingredients and carefully selected recipes to
              create unforgettable dining experiences.
            </p>
          </div>

          <div className="bg-[#a8a184]/50 rounded-2xl p-6 text-white shadow-md hover:scale-105 duration-300">
            <img src={crown} alt="" className="w-10 mb-3" />
            <h3 className="font-bold text-lg mb-2">Expert Chefs</h3>
            <p className="text-sm leading-6">
              Our chefs bring decades of culinary expertise, blending tradition
              with creativity in every dish.
            </p>
          </div>

          <div className="bg-[#a8a184]/50 rounded-2xl p-6 text-white shadow-md hover:scale-105 duration-300">
            <img src={crown} alt="" className="w-10 mb-3" />
            <h3 className="font-bold text-lg mb-2">Best Dining</h3>
            <p className="text-sm leading-6">
              Experience a warm atmosphere, exceptional service, and delicious
              meals that bring family and friends together.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;