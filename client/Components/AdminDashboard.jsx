import React, { useState } from 'react'
import Admin from './Admin-menu'

const AdminDashboard = () => {
  
  return (
    <>
    <section className='bg-[#fff8dd] px-6 py-6'>
       <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-md border border-orange-100 mb-6">

  {/* Icon */}
  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-100">
    <img
      src="https://img.icons8.com/?size=100&id=15HuPyEJyD8J&format=png&color=FD7E14"
      alt="Order History"
      className="w-12 h-12"
    />
  </div>

  {/* Text */}
  <div>
   <h1 className="text-3xl font-bold text-gray-800">
  Dashboard
</h1>

<p className="text-gray-500 mt-1">
  Welcome back! Here's an overview of your restaurant's performance, orders, revenue, menu, and reservations.
</p>
  </div>
<div>

</div>
</div>

<div className='grid grid-cols-4 gap-4 *:bg-white *:rounded-2xl'>
      <div className=' px-1 py-4 w-full flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'> <img width="48" height="48" src="https://img.icons8.com/?size=100&id=ySRi3OLgoOJX&format=png&color=FD7E14" alt="ticket-confirmed"/></div>
        <div>
          <h1 className="font-bold text-sm text-gray-700"> Total Orders</h1>
<p className="text-2xl font-extrabold"> 128</p>
<p className="font-bold text-sm text-gray-700"> All customer orders received</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div  className='self-center'><img width="52" height="52" className='' src="https://img.icons8.com/?size=100&id=68426&format=png&color=FD7E14" alt="data-pending"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'>Total Revenue</h1>
          <p className='text-2xl font-extrabold'>₹52,840</p>
          <p className='font-bold text-sm text-gray-700'>Total earnings from  orders.</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/?size=100&id=QiAIVvJZ1woO&format=png&color=FD7E14" alt="ticket-confirmed"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'> Menu Items</h1>
          <p className='text-2xl font-extrabold'>45</p>
          <p className='font-bold text-sm text-gray-700'>Currently available dishes</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/?size=100&id=qXfHicSrtSY4&format=png&color=FD7E14" alt="checked-truck"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'> Reservations</h1>
          <p className='text-2xl font-extrabold'>14</p>
          <p className='font-bold text-sm text-gray-700'>Total table bookings</p>
        </div>
      </div>
      
    </div>

   
    </section>
    </>
  )
}

export default AdminDashboard