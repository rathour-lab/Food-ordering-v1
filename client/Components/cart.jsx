import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';

const Cart = ({setStatus,statusTrack}) => {
    const [CartItem, setCartItem] = useState([])
    const [itemquantity, setItemquantity] = useState(0)
    const [itemPrice,setItemPrice]=useState(0)
  const [showPayment, setShowPayment] = useState(false);
const [paymentMethod, setPaymentMethod] = useState("");
const totalItems = CartItem.length;

const totalQuantity = CartItem.reduce((total, item) => {
  return total + item.quantity;
}, 0);

const grandTotal = CartItem.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

const deliveryFee = grandTotal > 500 ? 0 : 40;

const finalTotal = grandTotal + deliveryFee;


  function increaseItem(id) {
      
          setCartItem((prev)=>{
            
              
            return  prev.map((item)=>{
                if (item._id===id) {
                  
                  return {...item,quantity:item.quantity+1}
                }else{
                  return item;
                }
              })
              
            }
          )
  }
  function decreseItem(id) {
    setCartItem((prev)=>{
      return prev.map((item)=>{
        if (item._id===id) {
          return {...item,quantity:item.quantity-1}
        }else{
          return item;
        }
      })
    })
  }
    useEffect(() => {

        async function getMenu() {
            let response = await fetch('http://localhost:3000/get-cartItem');
            let data = await response.json();
         setCartItem(data);
           

        }
        getMenu();

    }, [])

         
    

      async function deleteItem(id) {
        console.log(id);
        
        let response=await fetch(`http://localhost:3000/delete-cartItem/${id}`,{
          method:'DELETE'
        })
        let data =await response.json();
        setCartItem(data.data)
        console.log(data.message);
        
        }
     
    
   async function handelCheckout() {
    
   
    
      let res=await fetch('http://localhost:3000/postAdminCartData',{
        method:'POST',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify({
          cartItems: CartItem,
          grandTotal,
          date:new Date()

        })
      })
      setStatus({
        ...statusTrack,
        orderPlaced:true,
        
      })
    }
    {showPayment && (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

    <div className="bg-white rounded-xl p-6 w-96">

        <h2 className="text-xl font-bold mb-5">
            Select Payment Method
        </h2>

        <div className="space-y-3">

            <label className="flex gap-3">
                <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
            </label>

            <label className="flex gap-3">
                <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                UPI
            </label>

            <label className="flex gap-3">
                <input
                    type="radio"
                    name="payment"
                    value="Card"
                    onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                Credit / Debit Card
            </label>

        </div>

        <button
            onClick={handelCheckout}
            className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg"
        >
            Confirm Order
        </button>

    </div>

</div>
)}
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
<th className="min-w-[120px]">Delete</th>
            </tr>
          </thead>

          <tbody className=''>

            {CartItem.map((item) => (

              <tr
                key={item._id}
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
                      <FaChevronLeft onClick={()=>decreseItem(item._id)}/>
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      className="w-8 h-8 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center transition"
                    >
                      <FaChevronRight onClick={()=>increaseItem(item._id)}/>
                    </button>

                  </div>
                </td>

                <td className="text-center font-bold text-orange-600">
                  
                  ₹{item.price}
                </td>
                <td className="  font-bold text-orange-600">
                  
                 <FaTrash className=' w-full text-red-500' onClick={()=>deleteItem(item._id)}/>
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

    {/* Summary */}

    <div className="w-full xl:w-[380px]">

  <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

    <h2 className="text-2xl font-bold mb-6">
      Order Summary
    </h2>

    <div className="space-y-4">

      <div className="flex justify-between text-gray-600">
        <span>Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="flex justify-between text-gray-600">
        <span>Total Quantity</span>
        <span>{totalQuantity}</span>
      </div>

      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>
        <span>₹{grandTotal}</span>
      </div>

      <div className="flex justify-between text-gray-600">
        <span>Delivery Fee</span>
        <span>
          {deliveryFee === 0 ? (
            <span className="text-green-600 font-semibold">FREE</span>
          ) : (
            `₹${deliveryFee}`
          )}
        </span>
      </div>

      <div className="border-t pt-4 flex justify-between text-2xl font-bold">
        <span>Total</span>
        <span className="text-orange-600">₹{finalTotal}</span>
      </div>

      {deliveryFee !== 0 && (
        <p className="text-sm text-gray-500">
          Add ₹{500 - grandTotal} more for free delivery.
        </p>
      )}
<button
    onClick={() => setShowPayment(true)}
    className="w-full bg-orange-500 text-white py-3 rounded-xl"
>
     Checkout • ₹{finalTotal}
</button>
     
    </div>

  </div>

</div>

  </div>
</div>

    );
}

export default Cart