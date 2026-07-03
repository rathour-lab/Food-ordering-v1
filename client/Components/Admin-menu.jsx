import React from 'react'
import { useState } from 'react'

function Admin() {
    const[foodDetail,setFoodDetail]=useState({
        name:'',
        description:'',
        price:'',
        category:'',
        image:'',
        isAvailable:''
    });

    async function addFoodItem() {
        let response= await fetch('http://localhost:3000/addMenu',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(foodDetail)
        });
        let data= await response.json();
        setFoodDetail(data)
    }

console.log(foodDetail);
    
  return (
    <>
  <div className="min-h-screen bg-[#e8e8e8] py-12 px-6">
  <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

    <div className="text-center mb-10">
      <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
        Admin Panel
      </p>

      <h1 className="text-4xl font-extrabold text-[#39364b] mt-2">
        Add New Food Item
      </h1>

      <p className="text-gray-500 mt-3">
        Fill in the details below to add a new menu item.
      </p>

      <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mt-5"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block mb-2 font-semibold text-[#39364b]">
          Food Name
        </label>

        <input
          type="text"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none"
          value={foodDetail.name}
          onChange={(e)=>setFoodDetail({...foodDetail,name:e.target.value})}
          placeholder="Burger"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold text-[#39364b]">
          Price
        </label>

        <input
          type="number"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none"
          value={foodDetail.price}
          onChange={(e)=>setFoodDetail({...foodDetail,price:e.target.value})}
          placeholder="$20"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block mb-2 font-semibold text-[#39364b]">
          Description
        </label>

        <textarea
          rows="4"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 resize-none focus:border-orange-500 focus:outline-none"
          value={foodDetail.description}
          onChange={(e)=>setFoodDetail({...foodDetail,description:e.target.value})}
          placeholder="Write food description..."
        />
      </div>

      <select
  value={foodDetail.category}
  onChange={(e) =>
    setFoodDetail({ ...foodDetail, category: e.target.value })
  }
  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-orange-500 outline-none"
>
  <option value="">Select Category</option>
  <option>Burger</option>
  <option>Pizza</option>
  <option>Pasta</option>
  <option>Sandwich</option>
  <option>Dessert</option>
  <option>Drinks</option>
</select>
      <div>
        <label className="block mb-2 font-semibold text-[#39364b]">
          Image URL
        </label>

        <input
          type="text"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:outline-none"
          value={foodDetail.image}
          onChange={(e)=>setFoodDetail({...foodDetail,image:e.target.value})}
          placeholder="https://..."
        />
      </div>

      <div className="mt-6 flex justify-center">
  {foodDetail.image ? (
    <img
      src={foodDetail.image}
      alt="Preview"
      className="w-56 h-56 object-cover rounded-2xl shadow-lg border-4 border-orange-200"
    />
  ) : (
    <div className="w-56 h-56 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
      Image Preview
    </div>
  )}
</div>

      <label className="flex items-center cursor-pointer">
  <input
    type="checkbox"
    checked={foodDetail.isAvailable}
    onChange={(e) =>
      setFoodDetail({
        ...foodDetail,
        isAvailable: e.target.checked,
      })
    }
    className="sr-only"
  />

  <div
    className={`w-14 h-7 rounded-full relative transition ${
      foodDetail.isAvailable
        ? "bg-green-500"
        : "bg-gray-300"
    }`}
  >
    <span
      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition ${
        foodDetail.isAvailable ? "translate-x-7" : ""
      }`}
    ></span>
  </div>

  <span className="ml-3 font-semibold text-[#39364b]">
    {foodDetail.isAvailable ? "Available" : "Unavailable"}
  </span>
</label>    </div>

    <button
      onClick={addFoodItem}
      className="w-full mt-8 bg-[#39364b] text-white py-4 rounded-xl text-lg font-semibold border-2 border-[#39364b] hover:bg-white hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
    >
      🍔 Add Food Item
    </button>

  </div>
</div>
    </>
  )
}

export default Admin
