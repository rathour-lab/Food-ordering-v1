import React, { useState, useEffect } from "react";
import { FaCar, FaCheck, FaClock, FaRoad, FaUserShield } from "react-icons/fa";
import { Link, NavLink, useFetcher } from "react-router-dom";

import logo from "../src/assets/logo.png";
import menu from "../src/assets/menu.png";
import { FaClipboardCheck, FaUtensils, FaCheckCircle } from "react-icons/fa";
import Menu from "./Menu";
import LoginPage from "../Pages/loginPage";
import { useLocation, useNavigate } from "react-router-dom";



const Navbar = ({ setadminlogin, adminlogin, socket, statusTrack }) => {
    const [scrolled, setScrolled] = useState(false);
    const [cart, setCart] = useState(false);
    const [status, setStatus] = useState(true);
    const [orderStatus, setOrderStatus] = useState([])
    const [sidebar, setSidebar] = useState(false);
    const [ATC_data, setATC_data] = useState([]);



    const totalPrice = ATC_data.reduce((total, cart) => {
        return total + cart.item.price * cart.item.quantity;
    }, 0);
    console.log('nav render');
    const location = useLocation();
    let navigator = useNavigate()
    useEffect(() => {
        setCart(false);
        setStatus(true);
    }, [location.pathname]);

    const totalQuantity = ATC_data.reduce((total, cart) => {
        return total + cart.item.quantity;
    }, 0);
    async function increaseItem(id) {

        const cart = ATC_data.find(i => i._id === id);

        await fetch(`http://localhost:3000/cart/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity: cart.item.quantity + 1,
            }),
        });

        getCartItem();

    }
    async function decreaseItem(id) {

        const cart = ATC_data.find(i => i._id === id);

      if (cart.item.quantity === 1) return;

        await fetch(`http://localhost:3000/cart/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity: cart.item.quantity - 1,
            }),
        });

        getCartItem();

    }
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // orders status                      ////////////////////////////////
    useEffect(() => {
        async function Status() {
            const userId = localStorage.getItem("userId");

            let res = await fetch(
                `http://localhost:3000/getAdminCartData/${userId}`
            );
            let data = await res.json();
            setOrderStatus(data.data)


            // console.log(orderStatus.data.map((item)=>{
            //     return item._id,item.orderStatus
            // }));

        }
        Status();
    }, [])

    async function getCartItem() {
        let userId = localStorage.getItem('userId')
        const response = await fetch(`http://localhost:3000/get-cartItem/${userId}`);
        const data = await response.json();

        setATC_data(data);

    }
    
   socket.current.onmessage=(event)=>{
     if (event.data==='CartItem_ADD') {
        getCartItem();
     }
     
    }

    return (
        <div
            className={`sticky top-0 z-50 bg-[#fff8dd] transition-all duration-500 ${scrolled
                ? "px-0"
                : "px-3 sm:px-5 md:px-8 lg:px-10 pt-3 md:pt-4"
                }`}
        >
            <nav
                className={`flex items-center justify-between bg-[#F8F1E7] py-2 transition-all duration-500 ${scrolled
                    ? "rounded-none shadow-2xl"
                    : "rounded-2xl shadow-lg"
                    } px-4 sm:px-6 md:px-8 lg:px-16`}
            >
                <div className="-ml-2 sm:-ml-4 md:-ml-7">
                    <img
                        className="h-14 sm:h-16 md:h-20 w-auto rounded-full"
                        src={logo}
                        alt="logo"
                    />
                </div>

                <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-lg font-semibold">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `relative group transition-all duration-300 ${isActive ? "text-[#ff8800]" : "text-gray-800"
                            }`
                        }
                    >
                        <li className="py-2 hover:scale-105 transition-transform duration-300">
                            Home
                        </li>

                        <span
                            className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
                        ></span>
                    </NavLink>

                    <NavLink
                        to="/Menu"
                        className={({ isActive }) =>
                            `relative group transition-all duration-300 ${isActive ? "text-[#ff8800]" : "text-gray-800"
                            }`
                        }
                    >
                        <li className="py-2 hover:scale-105 transition-transform duration-300">
                            Menu
                        </li>

                        <span
                            className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
                        ></span>
                    </NavLink>

                    <NavLink
                        to="/Reservations"
                        className={({ isActive }) =>
                            `relative group transition-all duration-300 ${isActive ? "text-[#ff8800]" : "text-gray-800"
                            }`
                        }
                    >
                        <li className="py-2 hover:scale-105 transition-transform duration-300">
                            Reservations
                        </li>

                        <span
                            className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
                        ></span>
                    </NavLink>


                    <button onClick={() => setStatus(!status)}
                        className="relative
                        flex items-center
                        gap-2
                        px-5
                        py-2
                        rounded-full
                        bg-white
                        border-2
                        border-orange-300
                        text-orange-400
                         hover:text-orange-600
                        hover:cursor-pointer
                        transition  "
                    >
                        <FaClipboardCheck />
                        Status

                        <span
                            className={`absolute -top-1 -right-1 h-3 w-3 rounded-full bg-orange-500 ${totalQuantity > 0 ? "animate-ping" : "animate-none"
                                }`}
                        ></span>
                        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-orange-500"></span>
                        <div className={`${status ? 'hidden' : 'block'} absolute w-60  text-black top-15 py-5 px-5 flex flex-col justify-center right-0`}>
                            <div className="bg-white rounded-2xl shadow-lg p-6 w-140 ">
                                <h2 className="text-xl font-bold mb-6 text-gray-800">
                                    Order Status
                                </h2>
                                {orderStatus.map((orders) => {
                                    return (
                                        <div className="flex justify-between items-center ">
                                            <div className="w-40 truncate ">{orders._id}</div>
                                            <div className="border-l-2 w-40">{orders.orderStatus}</div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </button>
                </ul>

                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">

                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="relative">

                            <div className="absolute z-10 -top-2 -right-2 h-5 w-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold flex items-center justify-center">
                                {totalQuantity}
                            </div>

                            <div
                                className={`absolute top-18.5 right-0 md:-right-12 lg:-right-30
    w-[90vw] sm:w-80 max-w-sm
    bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden
    z-50 transition-all duration-300
    ${cart ? "block" : "hidden"}`}
                            >
                                {totalQuantity === 0 ? (
                                    <>
                                        <div className="p-6  flex flex-col items-center">

                                            <img
                                                className="h-24 mb-4 opacity-70"
                                                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                                                alt="Empty Cart"
                                            />

                                            <h3 className="text-lg font-semibold text-gray-800">
                                                Your Cart is Empty
                                            </h3>

                                            <p className="text-sm text-gray-500 text-center mt-2">
                                                Looks like you haven't added any delicious food yet.
                                            </p>

                                        </div>

                                        <div className="border-t p-4">
                                            <button onClick={() => navigator('/Menu')}
                                                className="w-full py-3 rounded-full
            bg-gradient-to-r from-orange-500 to-amber-500
            text-white font-semibold
            hover:from-orange-600 hover:to-amber-600
            transition duration-300"
                                            >
                                                Browse Menu
                                            </button>
                                        </div>
                                    </>
                                ) : (<div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[90vw] sm:w-80 max-w-sm">

                                    {/* Header */}
                                    <div className="px-5 py-4 border-b bg-orange-50">
                                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                            🛒 Your Cart
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {totalQuantity} Item{{ totalQuantity } !== 1 && "s"}
                                        </p>
                                    </div>

                                    {/* Cart Items */}
                                    <div className="max-h-80 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin scrollbar-thumb-orange-300">

                                        {ATC_data.map((cartdata) => (
                                            <div
                                                key={cartdata.item._id}
                                                className="flex justify-between items-center pb-4 border-b last:border-none"
                                            >
                                                <div className="flex-1">

                                                    <h4 className="font-semibold text-gray-800">
                                                        {cartdata.item.name}
                                                    </h4>

                                                    <p className="text-orange-500 font-bold mt-1">
                                                        ₹{cartdata.item.price}
                                                    </p>

                                                    {/* Quantity */}
                                                    <div className="flex items-center gap-3 mt-3">

                                                        <button onClick={() => decreaseItem(cartdata._id)}
                                                            className="h-8 w-8 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white transition"
                                                        >
                                                            −
                                                        </button>

                                                        <span className="font-semibold">
                                                            {cartdata.item.quantity}
                                                        </span>

                                                        <button onClick={() => increaseItem(cartdata._id)}
                                                            className="h-8 w-8 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white transition"
                                                        >
                                                            +
                                                        </button>

                                                    </div>
                                                </div>

                                            </div>
                                        ))}

                                    </div>


                                    <div className="border-t bg-white px-5 py-4">

                                        <div className="flex justify-between items-center text-lg font-bold mb-4">
                                            <span>Total</span>
                                            <span className="text-orange-500">₹{totalPrice}</span>
                                        </div>

                                        <Link to="/Cart">
                                            <button
                                                onClick={() => setCart(false)

                                                }
                                                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
                                            >
                                                Go to Cart →
                                            </button>
                                        </Link>

                                    </div>

                                </div>)}
                            </div>

                            <img
                                onClick={() => setCart(!cart)}
                                className="h-7 sm:h-8 cursor-pointer hover:scale-110 transition duration-300"
                                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                                alt="cart"
                            />

                        </div>
                        <div className="relative">

                            <img onClick={() => setSidebar(!sidebar)}
                                className="h-7 sm:h-8 md:hidden cursor-pointer"
                                src={menu}
                                alt="menu"
                            />
                            {!sidebar ? (<></>) : (<>

                                <div className="bg-white absolute top-14 h-145 w-2xs -right-4  transition-all  duration-300 rounded-s-3xl px-3 py-2  flex flex-col  ">
                                    <div className="flex justify-between items-center border-b-2 border-gray-600 ">
                                        <p className="py-3 font-bold text-xl text-center ">HUNGER TOWN </p>
                                        <img className="size-8 cursor-pointer" src="https://img.icons8.com/?size=100&id=gykZ2Zai2dlQ&format=png&color=FD7E14" alt="" onClick={() => setSidebar(!sidebar)} />
                                    </div>
                                    <ul className="  text-lg font-semibold pt-5   *:space-y-4 flex-1">

                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                `relative group transition-all duration-300 ${isActive ? "text-[#ff8800]" : "text-gray-800"
                                                }`
                                            }
                                        >
                                            <li className="py-2  transition-transform duration-300">
                                                Home
                                            </li>

                                            <span
                                                className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
                                            ></span>
                                        </NavLink>

                                        <NavLink
                                            to="/Menu"
                                            className={({ isActive }) =>
                                                `relative group transition-all duration-300 ${isActive ? "text-[#ff8800]" : "text-gray-800"
                                                }`
                                            }
                                        >
                                            <li className="py-2  transition-transform duration-300">
                                                Menu
                                            </li>

                                            <span
                                                className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
                                            ></span>
                                        </NavLink>

                                        <NavLink
                                            to="/Reservations"
                                            className={({ isActive }) =>
                                                `relative group transition-all duration-300  ${isActive ? "text-[#ff8800]" : "text-gray-800"
                                                }`
                                            }
                                        >
                                            <li className="py-2 transition-transform duration-300  ">
                                                Reservations
                                            </li>

                                            <span
                                                className="
              absolute left-0 -bottom-1
              h-[3px] w-0
              bg-[#ff8800]
              rounded-full
              transition-all duration-300
              group-hover:w-full
            "
                                            ></span>
                                        </NavLink>
                                    </ul>
                                    <Link to='/menu'>
                                        <div className="  rounded-2xl py-2 text-white font-bold bg-linear-to-r from-orange-500 to-amber-500  flex justify-center items-center hover:cursor-pointer shadow-lg shadow-orange-400/30 transition-all duration-300 hover:shadow-xl ">
                                            <button className="hover:cursor-pointer">Order Now</button>
                                        </div>
                                    </Link>
                                </div>
                            </>)}
                        </div>

                    </div>

                    <button onClick={() => setadminlogin(!adminlogin)}
                        className="
                hidden lg:flex items-center gap-2
                px-6 py-2.5
                bg-gradient-to-r from-orange-500 to-amber-500
                text-white font-semibold
                rounded-full
                shadow-lg shadow-orange-400/30
                transition-all duration-300
                hover:from-orange-600 hover:to-amber-600
                hover:shadow-xl hover:-translate-y-1
                active:scale-95
                focus:outline-none
                focus:ring-4
                focus:ring-orange-300
                cursor-pointer
              "
                    >
                        <FaUserShield className="transition-transform duration-300" />
                        Admin
                    </button>

                </div>
            </nav>

        </div>

    );
};

export default Navbar;
