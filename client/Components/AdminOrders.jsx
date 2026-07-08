import React, { useState } from 'react'
// import bag from '../src/assets/shopping-bag.gif'

const AdminOrders = () => {

  const statusOptions = [
    {
      title:"Update Status"
    },
    {
      title:"Order Placed"
    },
    {
      title:"Confirmed"
    },
    {
      title:"Preparing"
    },
    {
      title:"Ready for Pickup"
    },
    {
      title:"Out for Delivery"
    },
    {
      title:"Delivered"
    }
]

const statusStyle = (status)=>{
  switch (status) {
    case "Order Planced":
      return "bg-blue-100 text-blue-700"
      break;
    case "Confirmed":
      return "bg-indigo-100 text-indigo-700"
      break;
    case "Preparing":
      return "bg-yellow-100 text-yellow-700"
      break;
    case "Ready for Pickup":
      return "bg-purple-100 text-purple-700"
      break;
    case "Out for Delivery":
      return "bg-cyan-100 text-cyan-700"
      break;
    case "Delivered":
      return "bg-green-100 text-green-700"
      break;

    default:
      return "bg-gray-100 text-gray-700"
      break;
  }
}

const [symbol,setSymbol]=useState('Order Placed')

  return (
    <>
    <section className='bg-[#fff8dd] px-6 py-6'>
     <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-md border border-orange-100 mb-6">

  {/* Icon */}
  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-100">
    <img
      src="https://img.icons8.com/officel/80/order-history.png"
      alt="Order History"
      className="w-10 h-10"
    />
  </div>

  {/* Text */}
  <div>
    <h1 className="text-3xl font-bold text-gray-800">
      Order History
    </h1>

    <p className="text-gray-500 mt-1">
      View, track, and manage all customer orders in one place.
    </p>
  </div>

</div>


    <div className='grid grid-cols-3 gap-4 *:bg-white *:rounded-2xl'>
      <div className=' px-0 py-4 w-full flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/pastel-glyph/64/FD7E14/paper-bag--v2.png" alt="paper-bag--v2"/></div>
        <div>
          <h1 className='font-bold
           text-sm text-gray-700'>Total Orders</h1>
          <p  className='text-2xl font-extrabold'>1212</p>
          <p className='font-bold text-sm text-gray-700'>All time orders</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div  className='self-center'><img width="48" height="48" className='' src="https://img.icons8.com/parakeet-line/48/FD7E14/data-pending.png" alt="data-pending"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'>Pending Orders</h1>
          <p className='text-2xl font-extrabold'>42</p>
          <p className='font-bold text-sm text-gray-700'>Need atention</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/ios/50/FD7E14/checked-truck.png" alt="checked-truck"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'>Delivered Orders</h1>
          <p className='text-2xl font-extrabold'>1112</p>
          <p className='font-bold text-sm text-gray-700'>Successfully delivered</p>
        </div>
      </div>
      
    </div>

<div className='grid grid-cols-4 py-6'>
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 p-5">

  {/* Header */}
  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
    <h2 className="text-lg font-bold text-gray-800">
      📦 Order #87841
    </h2>

    <span className={`${statusStyle(symbol)} text-xs font-semibold px-3 py-1 rounded-full`} >
       {symbol || "Update Status"}
    </span>
  </div>

  {/* Items */}
  <div className="py-4 space-y-3 border-b border-gray-200">

    <div className="flex justify-between">
      <p>🍕 Pizza</p>
      <span className="font-semibold">×2</span>
    </div>

    <div className="flex justify-between">
      <p>🍔 Burger</p>
      <span className="font-semibold">×1</span>
    </div>

    <div className="flex justify-between">
      <p>🥤 Coke</p>
      <span className="font-semibold">×1</span>
    </div>

  </div>

  {/* Payment */}
  <div className="py-4 border-b border-gray-200 space-y-3">

    <div className="flex justify-between items-center">

      <span className="text-gray-600 font-medium">
        Payment
      </span>

      <div className="flex gap-2">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
          Paid
        </span>

        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
          UPI
        </span>
      </div>

    </div>

    <div className="flex justify-between items-center">
      <span className="font-semibold text-gray-700">
        Total
      </span>

      <span className="text-2xl font-bold text-orange-500">
        ₹500
      </span>
    </div>

  </div>

  {/* Date */}
  <div className="flex justify-between py-4 text-sm text-gray-500 font-medium">
    <span>📅 08 Jul 2026</span>
    <span>🕒 05:55 PM</span>
  </div>

  {/* Status */}
  <select className="w-full rounded-xl border-2 border-orange-300 py-3 px-4 font-semibold text-orange-600 outline-none focus:border-orange-500 bg-orange-50 text-center" value={symbol} onChange={(e)=>setSymbol(e.target.value)}>

    {statusOptions.map((icon)=>{
      return <option key={icon.title} value={icon.title}>{icon.title}</option>
    })}
    

  </select>

</div>
</div>
    </section>
    </>
  )
}

export default AdminOrders