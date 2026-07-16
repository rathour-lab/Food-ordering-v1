import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";

const AdminOrders = () => {

  const statusOptions = [
    {
      title: "Update Status"
    },
    {
      title: "Order Placed"
    },
    {
      title: "Confirmed"
    },
    {
      title: "Preparing"
    },
    {
      title: "Ready for Pickup"
    },
    {
      title: "Out for Delivery"
    },
    {
      title: "Delivered"
    }
  ]

  const statusStyle = (status) => {
    switch (status) {
      case "Order Placed":
        return "bg-blue-100 text-blue-700";

      case "Confirmed":
        return "bg-indigo-100 text-indigo-700";

      case "Preparing":
        return "bg-yellow-100 text-yellow-700";

      case "Ready for Pickup":
        return "bg-purple-100 text-purple-700";

      case "Out for Delivery":
        return "bg-cyan-100 text-cyan-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  const [order, setOrder] = useState([]);
  const [orderCount, setOrderCount] = useState(0)



  useEffect(() => {
    try {
      const foodOrder = async () => {
        let res = await fetch('http://localhost:3000/getAdminCartData');
        let data = await res.json();
        setOrder(data.data);
        setOrderCount(data.count)
        console.log(data.data);
      }
      foodOrder();
    } catch (error) {
      console.log(error);

    }
  }, [])


  const updateOrderStatus = async (id, status) => {
    console.log(id);
    console.log(status);
    try {
      let res = await fetch(`http://localhost:3000/order-status/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          orderStatus: status
        })
      });
      if (res.ok) {
        setOrder((prev) => {
          return prev.map((item) => item._id === id ? { ...item, orderStatus: status } : item)
        })
      }

      Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: `Order status changed to ${status}`,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);

    }
  }

  const orderDelivered = order.filter(item => item.orderStatus === "Delivered").length
  const orderPlaced = order.filter(item => item.orderStatus === "Order Placed").length
  const readyToPickup = order.filter(item => item.orderStatus === "Ready for Pickup").length;


  return (
    <>
      <section className="bg-[#fff8dd] px-4 sm:px-6 py-6">
       <div className="flex flex-col sm:flex-row sm:items-center gap-5 bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-orange-100 mb-6">

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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Order History
            </h1>

           <p className="text-sm sm:text-base text-gray-500 mt-1">
              View, track, and manage all customer orders in one place.
            </p>
          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 *:bg-white *:rounded-2xl">
          <div className=' px-1 py-4 w-full flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
            <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/pastel-glyph/64/FD7E14/paper-bag--v2.png" alt="paper-bag--v2" /></div>
            <div>
              <h1 className='font-bold
           text-sm text-gray-700'>Total Orders</h1>
              <p className='text-xl sm:text-2xl font-extrabold'>{orderCount}</p>
              <p className='font-bold text-sm text-gray-700'>All time orders</p>
            </div>
          </div>
          <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
            <div className='self-center'><img width="48" height="48" className='' src="https://img.icons8.com/parakeet-line/48/FD7E14/data-pending.png" alt="data-pending" /></div>
            <div>
              <h1 className='font-bold text-sm text-gray-700'>Placed Orders </h1>
              <p className='text-xl sm:text-2xl font-extrabold'>{orderPlaced}</p>
              <p className='font-bold text-sm text-gray-700'>Need atention</p>
            </div>
          </div>
          <div className=' px-1 py-4 w-full  flex justify-evenly "bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100'>
            <div className='self-center'><img width="48" height="48" src="https://img.icons8.com/ios/50/FD7E14/checked-truck.png" alt="checked-truck" /></div>
            <div>
              <h1 className='font-bold text-sm text-gray-700'>Delivered Orders</h1>
              <p className='text-xl sm:text-2xl font-extrabold'>{orderDelivered}</p>
              <p className='font-bold text-sm text-gray-700'>Successfully delivered</p>
            </div>
          </div>
          <div className="px-1 py-4 w-full flex justify-evenly bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
            <div className="self-center">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/?size=100&id=112481&format=png&color=FD7E14"
                alt="Ready for Pickup"
              />
            </div>

            <div>
              <h1 className="font-bold text-sm text-gray-700">Ready for Pickup</h1>
              <p className="text-xl sm:text-2xl font-extrabold"> {readyToPickup} </p>
              <p className="font-bold text-sm text-gray-700">Waiting for customer </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-6 gap-5">
          {order && order.map((food) => {
            return <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 p-5 h-full flex flex-col">

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200">
               <h2 className="text-base sm:text-lg font-bold text-gray-800 break-all">
                   Order #{food._id.slice(-6)}
                </h2>

                <span className={`${statusStyle(food.orderStatus)} whitespace-nowrap text-xs font-semibold px-3 py-1 rounded-full`} >
                  {food.orderStatus}
                </span>
              </div>

              {/* Items */}
              <div className="py-4 space-y-3 border-b border-gray-200 h-32 overflow-y-auto scrollbar-thin">

                {food.cartItems.map((item) => {
                  return <div className="flex justify-between items-center gap-3">
                   <p className="flex items-center gap-2 text-sm break-words"><img src={item.image} className='size-6  rounded-full' alt="" /> {item.name}</p>
                    <span className="font-semibold">×{item.quantity}</span>
                  </div>
                })}

              </div>

              {/* Payment */}
              <div className="py-4 border-b border-gray-200 space-y-3">

                <div className="flex justify-between items-center">

                  <span className="text-gray-600 font-medium">
                    Payment
                  </span>

                  <div className="flex flex-wrap gap-2 justify-end">
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

                 <span className="text-xl sm:text-2xl font-bold text-orange-500">
                    ₹{food.grandTotal}
                  </span>
                </div>

              </div>

              {/* Date */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 py-4 text-sm text-gray-500 font-medium">
                <span>📅 {new Date(food.createdAt).toLocaleDateString("en-IN")}</span>
                <span>🕒 {new Date(food.createdAt).toLocaleTimeString("en-IN")}</span>
              </div>

              {/* Status */}
              <select className="w-full rounded-xl border-2 border-orange-300 py-3 px-4 text-sm sm:text-base font-semibold text-orange-600 outline-none focus:border-orange-500 bg-orange-50 text-center" value={food.orderStatus} onChange={(e) => updateOrderStatus(food._id, e.target.value)}>

                {statusOptions.map((icon) => {
                  return <option key={icon.title} value={icon.title}>{icon.title}</option>
                })}


              </select>

            </div>
          })}
        </div>
      </section>
    </>
  )
}

export default AdminOrders