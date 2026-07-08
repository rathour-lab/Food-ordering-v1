import React, { useEffect, useState } from 'react'
import Hero from '../src/assets/hero.png'
import chicken from '../src/assets/chickenicon.png'
import burger from '../src/assets/burgericon.png'
import Herochutteny from '../src/assets/herochutteny.png'
import heroMenu from '../src/assets/heroMenu.png'
import Home from '../Components/Home'
import { useNavigate } from 'react-router-dom'

import { FaArrowRight, FaCcDinersClub, FaFire, FaMotorcycle, FaTruck, FaUtensils, FaUtensilSpoon } from 'react-icons/fa'
function Menupage() {

  const [item, setItem] = useState([])
  const [addedItems, setAddedItems] = useState([]);
  const [idItem,setIdItem]=useState(null)
  const navigate= useNavigate()

  useEffect(() => {

    async function getItems() {
    let res = await fetch("http://localhost:3000/Menu");
    let data = await res.json();
    setItem(data)
    
  }
  getItems();
  },[]);

   const handleAddToCart = async (id) => {
  setAddedItems((prev) => [...prev, id]);
    navigate(`/cart/${id}`);
  try {
    const res = await fetch("http://localhost:3000/menuid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menuId: id,
      }),
    });

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
   
  return (
    <>
      <div className='px-5 sm:px-15 md:px-15 lg:px-26 transition-all duration-300 '>
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
              <button
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

      <div className='bg-[#fff8dd]  transition-all duration-500'>
        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Our Menu
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#39364b] mt-3">
            🍽️ Freshly Crafted, Served with Passion
          </h1>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-base md:text-lg leading-8">
            Explore our complete collection of mouth-watering dishes, prepared with
            fresh ingredients, rich flavors, and a touch of culinary excellence.
            From quick bites to signature meals, every dish is made to satisfy your
            cravings.
          </p>

          <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mt-6"></div>
        </div>
        <div className='py-16 pb-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-18 md:gap-14 md:pb-5 px-6  lg:px-22 lg:pb-15 '>
          {item.map((food) => {
            return <div key={food._id} className="bg-[#f3f3f3] rounded-2xl pt-18 md:pt-14 pb-8 space-y-5 md:mb-5 relative px-5 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transition-all duration-350">
              <div className='object-contain'>

                <img src={`${food.image}`} alt="" className="px-26 sm:px-16 md:px-10 lg:px-12 h-28 absolute inset-0 -top-12 transition-transform duration-300 hover:scale-105 rounded-2xl w-full  " />
              </div>
              <div className='space-y-2'>
                <h1 className='pt-12 md:pt-8 font-extrabold text-xl text-[#39364b]'>{food.name}</h1>
                <p className='text-sm h-15 overflow-hidden'>{food.description}</p>
                <div className='flex justify-between pb-3'>
                  <p className='text-orange-500 font-extrabold self-center'>$ {food.price}</p>
                  <p className={`font-bold py-1 px-2 rounded-2xl text-white ${food.isAvailable ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {food.isAvailable ? 'Available' : 'notAvailable'}</p>

                  <button onClick={() => handleAddToCart(food._id)} disabled={addedItems.includes(food._id)} className={`absolute -bottom-7 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold whitespace-nowrap ${addedItems.includes(food._id) ? "bg-green-500 border-green-500 text-white cursor-default" : "bg-[#39364b] border-[#39364b] text-white hover:bg-white hover:text-orange-500 hover:border-orange-500"}`}>{addedItems.includes(food._id) ? "✓ Added" : "Add to Cart"}</button>
                </div>
              </div>
            </div>
          })}
        </div>


      </div>
    </>
  )

}

export default Menupage
