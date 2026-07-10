import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Menu = ({cartvalue}) => {
  console.log('menu render');
  
  const [item, setItem] = useState([])
  const [addedItems, setAddedItems] = useState([]);
  const [showCard, setShowCard] = useState(4)
  const [selectedId, setSelectedId] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1023) {
        setShowCard(8)
      }
      else if (window.innerWidth >= 640) {
        setShowCard(6)
      }
      else {
        setShowCard(4)
      }
    };  

    updateCards();

    window.addEventListener("resize", updateCards);


    async function getMenu() {
      let response = await fetch('http://localhost:3000/menu');
      let data = await response.json();
      setItem(data.data);

    }
    getMenu();

    return () => window.removeEventListener("resize", updateCards);
  }, [])

  const  handleAddToCart =async (cartdata) => {
    cartvalue(prev=> prev+1)
    console.log('working',cartdata);
    
let res=await fetch('http://localhost:3000/get-order',{
  method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(cartdata)
})

  };
  return (
    <>
      <div className='bg-[#fff8dd]  transition-all duration-500'>
        <div className="text-center py-12  px-6">
          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            Our Menu
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#39364b] mt-3">
            Delicious Food Crafted With Passion
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5 text-base md:text-lg leading-7">
            Discover our carefully curated selection of freshly prepared dishes made
            with premium ingredients. Whether you're craving a quick snack or a
            complete meal, we have something delicious for everyone.
          </p>

          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
        </div>
        <div className='py-16 pb-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-18 md:gap-14 md:pb-5 px-6  lg:px-22 lg:pb-15 '>
          {item.slice(0,showCard).map((food) => {
            return <div key={food._id} className="bg-[#f3f3f3] rounded-2xl pt-18 md:pt-14 pb-8 space-y-5 md:mb-5 relative px-5 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transition-all duration-350">
              <div className='object-contain'>

                <img src={`${food.image}`} alt="" className="px-26 sm:px-16 md:px-10 lg:px-12 h-38 absolute inset-0 -top-12 transition-transform duration-300 hover:scale-105" />
              </div>
              <div className='space-y-2'>
                <h1 className='pt-12 md:pt-8 font-extrabold text-xl text-[#39364b]'>{food.name}</h1>
                <p className='text-sm h-15 overflow-hidden'>{food.description}</p>
                <div className='flex justify-between pb-3'>
                  <p className='text-orange-500 font-extrabold self-center'>$ {food.price}</p>
                  <p className={`font-bold py-1 px-2 rounded-2xl text-white ${food.isAvailable ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {food.isAvailable ? 'Available' : 'notAvailable'}</p>

                  <button onClick={() => {handleAddToCart(food)
                  }}
                    disabled={addedItems.includes(food._id)} className={`absolute -bottom-7 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold whitespace-nowrap ${addedItems.includes(food._id) ? "bg-green-500 border-green-500 text-white cursor-default" : "bg-[#39364b] border-[#39364b] text-white hover:bg-white hover:text-orange-500 hover:border-orange-500"}`}>{addedItems.includes(food._id) ? "✓ Added" : "Add to Cart"}</button>
                </div>
              </div>
            </div>
          })}
        </div>
        <div className=' flex justify-center items-center  pt-5 '>
          <button className="bg-[#39364b] hover:cursor-pointer text-white px-8 py-3 rounded-full border-2 border-[#39364b] hover:bg-transparent hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-105" onClick={() => navigate('/Menu')}>
            🍽️ Explore Full Menu
          </button></div>
      </div>
    </>
  )
}

export default Menu
