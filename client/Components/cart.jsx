import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Cart = () => {
    const [CartItem, setCartItem] = useState([])
    const [itemquantity, setItemquantity] = useState(0)

    useEffect(() => {

        async function getMenu() {
            let response = await fetch('http://localhost:3000/Menu');
            let data = await response.json();
            setCartItem(data);
            console.log(data);

        }
        getMenu();

    }, [])
    return (
       <div className="min-h-screen bg-orange-50 py-10 pb-60 ">
  <div className="max-w-7xl mx-auto px-6 flex flex-col xl:flex-row gap-8">

    {/* Cart */}
    <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Cart Items
      </h2>

      <div className="overflow-y-scroll max-h-[600px] rounded-xl ">

        <table className="w-full ">

          <thead className="bg-gray-100 sticky top-0">
            <tr className="text-gray-700 *:py-2">
             <th className="min-w-[120px]">Item</th>
<th className="min-w-[180px]">Name</th>
<th className="min-w-[200px] hidden lg:table-cell">Description</th>
<th className="min-w-[150px]">Quantity</th>
<th className="min-w-[120px]">Price</th>
            </tr>
          </thead>

          <tbody className=''>

            {CartItem.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition "
              >

                <td className="p-4 flex justify-center">
                  <img
                    src={item.image}
                    className="w-16 h-16 rounded-lg object-cover"
                    alt=""
                  />
                </td>

                <td className="font-semibold px-8">
                  {item.name}
                </td>

                <td className="text-gray-500 text-sm max-w-xs truncate ">
                  {item.description}
                </td>

                <td>
                  <div className="flex justify-center items-center gap-3">

                    <button
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
                    >
                      <FaChevronLeft />
                    </button>

                    <span className="font-semibold">
                      {itemquantity}
                    </span>

                    <button
                      className="w-8 h-8 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center transition"
                    >
                      <FaChevronRight />
                    </button>

                  </div>
                </td>

                <td className="text-center font-bold text-orange-600">
                  ₹{item.price}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

    {/* Summary */}

    <div className="w-full ">

      <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

        <h2 className="text-2xl font-bold mb-6">
          Order Summary
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹999</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-orange-600">₹999</span>
          </div>

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition mt-6"
          >
            Checkout
          </button>

        </div>

      </div>

    </div>

  </div>
</div>
    );
}

export default Cart