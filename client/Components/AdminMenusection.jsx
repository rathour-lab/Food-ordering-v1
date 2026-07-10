import React, { useEffect, useRef } from 'react'
import Admin from './AdminMenuForm';
import { useState } from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';

const AdminMenusection = ({form,setForm}) => {

  const[menu,setMenu]=useState([]);
  const[menuCount,setMenuCount]=useState(0);
  const[like,setLike]=useState(false)
  const ref = useRef()
  const[editData,setEditData]=useState(null)

  useEffect(()=>{
    const getMenu = async() =>{
      console.log("hloooo");
      
    try {
        let res = await fetch('http://localhost:3000/menu');
        let data = await res.json();
        setMenu(data.data);
       
        
        setMenuCount(data.count)

      }
      catch (error) {
        console.log(error);
      } 
    }
    getMenu()

    
  },[])
  
  const deleteItem = async(id)=>{
      setMenu(prev =>{
        return prev.filter(item=>item._id !== id)
      })
   try {
     let res = await fetch(`http://localhost:3000/removerMenu/${id}`,{
      method:'DELETE'
    });

   } catch (error) {
    console.log(error);
   }
  }
  
   const edit = async(food)=>{
      setForm(true)
   setEditData(food)
  }

  if (form) {
    return <Admin form={form} setForm={setForm} editData={editData} setEditData={setEditData} />
  }

  const likeItem = ()=>{
    setLike(!like)
  }

  return (
    <>
    <section className='bg-[#fff8dd] px-6 py-6 '>
     <div className=' bg-white rounded-2xl p-6 shadow-md border border-orange-100 mb-6 flex justify-between'>
       <div className="flex items-center gap-5">

  {/* Icon */}
  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-100">
    <img
      src="https://img.icons8.com/?size=100&id=G736SmolvT3J&format=png&color=FD7E14"
      alt="Order History"
      className="w-12 h-12"
    />
  </div>

  {/* Text */}
  <div>
    <h1 className="text-3xl font-bold text-gray-800">
    Menu Menagement
    </h1>

    <p className="text-gray-500 mt-1">
      View, review, and manage all table reservation requests from customers in one place.
    </p>
  </div>
</div>
<button
  onClick={() => setForm(!form)}
  className="flex items-center gap-2 bg-orange-500/90 backdrop-blur-md border border-orange-300 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 cursor-pointer"
>
  <FaPlus className="text-sm" />
  Add New Item
</button>
     </div>

<div className='grid grid-cols-4 gap-4 *:bg-white *:rounded-2xl'>
      <div className=' px-1 py-4 w-full flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'> <img width="48" height="48" src="https://img.icons8.com/?size=100&id=24555&format=png&color=FD7E14" alt="ticket-confirmed"/></div>
        <div>
          <h1 className="font-bold text-sm text-gray-700">  Total Menu Item</h1>
<p className="text-2xl font-extrabold"> {menuCount}</p>
<p className="font-bold text-sm text-gray-700"> Available on Menu</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div  className='self-center'><img width="48" height="48" className='' src="https://img.icons8.com/?size=100&id=bmIB2pcxPHgU&format=png&color=FD7E14" alt="data-pending"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'>Available Items</h1>
          <p className='text-2xl font-extrabold'>18</p>
          <p className='font-bold text-sm text-gray-700'>Ready to order</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/?size=100&id=2828&format=png&color=FD7E14" alt="ticket-confirmed"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'> Categories</h1>
          <p className='text-2xl font-extrabold'>45</p>
          <p className='font-bold text-sm text-gray-700'>Food categories</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/?size=100&id=ADiAqImPmRwi&format=png&color=FD7E14" alt="checked-truck"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'>Featured Items</h1>
          <p className='text-2xl font-extrabold'>14</p>
          <p className='font-bold text-sm text-gray-700'>Customer favorites</p>
        </div>
      </div>
      
    </div>

    <div className='grid grid-cols-4 gap-5 py-5 '>
      {menu.map((food)=>{
        return <div className="bg-white rounded-3xl border border-orange-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ">

  {/* Food Image */}
  <div className="relative">
    <img
      src={`${food.image}`}
      alt="Pizza"
      className="w-full h-52 object-cover"
    />

<div className='absolute right-4 top-2' onClick={likeItem}>
   <FaHeart className={`w-8 h-8   ${like ? 'text-red-600 ':'text-gray-500'}`} /> 
</div>
  </div>

  {/* Card Content */}
  <div className="p-5">

    {/* Title */}
<div className='flex justify-between'>
      <h2 className="text-2xl font-bold text-gray-800">
     {food.name}
    </h2>
    <span className="self-center bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
      {food.category}
    </span>
</div>

    {/* Description */}
    <p className="text-gray-500 text-sm mt-2 leading-6 overflow-hidden h-18  ">
  {food.description}
</p>

    {/* Price */}
    <div className="flex justify-between items-center mt-5">

      <span className="text-gray-600 font-bold text-xl text-gray-800">
        Price :
      </span>

      <span className="text-2xl font-bold text-orange-500">
        ₹{food.price}
      </span>

    </div>

  <div className="flex justify-between items-center mt-5">
     <span className="text-gray-600 font-bold text-xl text-gray-800">
        Stock :
      </span>
     <div
  className={`px-3 py-1 rounded-full text-xs font-bold ${
    food.isAvailable
      ? "bg-green-600 text-white"
      : "bg-orange-400 text-white"
  }`}
>
  {food.isAvailable ? "Available" : "Unavailable"}
</div>
  </div>

    {/* Divider */}
    <div className="border-t border-gray-200 my-5"></div>

    {/* Buttons */}
    <div className="flex gap-3">

      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
      onClick={()=>edit(food)}
      >
        ✏️ Edit
      </button>

      <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
       onClick={()=>deleteItem(food._id)}
       >
        🗑 Delete
      </button>

    </div>

  </div>

</div>
      })}
    </div>
    </section>
    </>
  )
}

export default AdminMenusection