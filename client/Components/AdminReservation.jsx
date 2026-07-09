import React, { useEffect, useState } from 'react'

const AdminReservation = () => {

    const [reservationData,setReservationData]=useState([])
    const [reservationCount,setReservationCount]=useState(0)
    const [reservationConfirm,setReservationConfirm]=useState(0)
    const [reservationCancel,setReservationCancel]=useState(0)

 useEffect(()=>{
   const showReservation = async() =>{
  try {
    let res = await fetch('http://localhost:3000/get-Reservation');
    let data =await res.json();

     setReservationData(data.data);
setReservationCount(data.count);
  }
  catch (error) {
    console.log(error);
  }
  
}
showReservation()
},[])
const confirm = () =>{
 setReservationConfirm(prev=> prev + 1);
}
const Cancel = () =>{
 setReservationCancel(prev=> prev + 1);
}


  return (
    <>
    <section className='bg-[#fff8dd] px-6 py-6'>
       <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-md border border-orange-100 mb-6">

  {/* Icon */}
  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-100">
    <img
      src="https://img.icons8.com/comic/100/FD7E14/restaurant-table.png"
      alt="Order History"
      className="w-12 h-12"
    />
  </div>

  {/* Text */}
  <div>
    <h1 className="text-3xl font-bold text-gray-800">
      Reservation Requests
    </h1>

    <p className="text-gray-500 mt-1">
      View, review, and manage all table reservation requests from customers in one place.
    </p>
  </div>

</div>

<div className='grid grid-cols-4 gap-4 *:bg-white *:rounded-2xl'>
      <div className=' px-1 py-4 w-full flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'> <img width="48" height="48" src="https://img.icons8.com/?size=100&id=g6FfrEql0mPQ&format=png&color=FD7E14" alt="ticket-confirmed"/></div>
        <div>
          <h1 className="font-bold text-sm text-gray-700">  Total Reservations</h1>
<p className="text-2xl font-extrabold">{reservationCount}</p>
<p className="font-bold text-sm text-gray-700"> All reservation requests</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div  className='self-center'><img width="48" height="48" className='' src="https://img.icons8.com/?size=100&id=15849&format=png&color=FD7E14" alt="data-pending"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'>Pending Requests</h1>
          <p className='text-2xl font-extrabold'>18</p>
          <p className='font-bold text-sm text-gray-700'>Awaiting confirmation</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/dotty/80/FD7E14/ticket-confirmed.png" alt="ticket-confirmed"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'> Confirmed Bookings</h1>
          <p className='text-2xl font-extrabold'>{reservationConfirm}</p>
          <p className='font-bold text-sm text-gray-700'>Ready for guests</p>
        </div>
      </div>
       <div className=' px-1 py-4 w-full  flex justify-evenly bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
        <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/?size=100&id=42223&format=png&color=FD7E14" alt="checked-truck"/></div>
        <div>
          <h1 className='font-bold text-sm text-gray-700'>Cancelled Reservations</h1>
          <p className='text-2xl font-extrabold'>{reservationCancel}</p>
          <p className='font-bold text-sm text-gray-700'>Cancelled bookings</p>
        </div>
      </div>
      
    </div>

    <div className="grid grid-cols-4 py-6">
{reservationData.map((customer)=>{
  return <div key={customer._id} className='bg-white rounded-3xl border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6'>
  {/* Header */}
  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
    <div>
      <h2 className="text-xl font-bold text-gray-800">
        id #{customer._id ?.slice(-6)}
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Reservation Details
      </p>
    </div>

    <span className=" bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
      Confirmed
    </span>
  </div>

  {/* Details */}
  <div className="space-y-3 py-5">

    <div className="flex justify-between">
      <span className="text-gray-500">👤 Customer</span>
      <span className="font-semibold text-gray-800">{customer.fullName}</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">📧 Email</span>
      <span
  className="font-semibold text-gray-800 truncate max-w-[170px]"
  title={customer.email}
>
  {customer.email}
</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">📞 Phone</span>
      <span className="font-semibold text-gray-800">
        {customer.phone}
        
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">👥 Guests</span>
      <span className="font-semibold text-gray-800">
        {customer.guests}
        
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">📅 Date</span>
      <span className="font-semibold text-gray-800">
                {new Date(customer.date).toLocaleDateString("en-IN")}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">🕒 Time</span>
      <span className="font-semibold text-gray-800">
                {customer.time}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">🎉 Occasion</span>
      <span className="font-semibold text-gray-800">
                {customer.occasion}
      </span>
    </div>

  </div>

  {/* Buttons */}
  <div className="flex gap-3 pt-4 border-t border-gray-200">

    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition" onClick={confirm}>
      ✓ Confirm
    </button>

    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition" onClick={Cancel}>
      ✕ Cancel
    </button>

  </div>
</div>
})}
</div>
    </section>
    </>
    
  )
}

export default AdminReservation