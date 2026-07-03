import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaArrowRight,
} from "react-icons/fa";
import logo from '../src/assets/logo.png'

export default function Footer() {
    return (
        <footer className="relative overflow-hidden mt-16 -mb-2 bg-[#F5E9D7] text-[#1F1A17] px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20">
            <div className="max-w-7xl mx-auto py-12 sm:py-14 lg:py-16 relative z-10">

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

                    {/* BRAND */}
                    <div>

                       <div className="flex items-center gap-3 mb-5 flex-wrap">
                            {/* LOGO */}
                            <div className="relative w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-white/20 flex items-center justify-center overflow-hidden">

                                <img
                                    src={`${logo}`}
                                    alt="Cake Academy"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            {/* TEXT */}
                            <div>

                              <h2 className="text-2xl sm:text-3xl font-black text-[#ff8800] leading-none">
                                Hunger Town</h2>



                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-[#1F1A17] text-sm leading-7 max-w-md">
                        Hunger Town brings your favorite meals from the best local restaurants
                            straight to your doorstep. Fresh, delicious, and delivered fast whenever
                            hunger strikes.
                        </p>



                    </div>

                    {/* QUICK LINKS */}
                    <div>

                        <h3 className="text-lg font-bold mb-6 text-[#ff8800]">
                            Quick Links
                        </h3>

                       <ul className="space-y-3 text-[#1F1A17]">
                            {[
                                ["Home", "/"],
                                ["About", "/about"],
                                ["Courses", "/courses"],
                                ["Gallery", "/gallery"],
                                ["Contact", "/contact"],
                            ].map(([name, path]) => (

                                <li key={name}>

                                    <Link
                                        to={path}
                                        className="group flex items-center gap-3 hover:text-[#ff8800] transition-all duration-300"
                                    >

                                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition duration-300" />

                                        {name}

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                    
                    {/* CONTACT */}
                    <div>

                        <h3 className="text-lg font-bold mb-6 text-[#ff8800]">
                            Contact Info
                        </h3>

                        <div className="space-y-5 text-[#1F1A17]">

                            {/* LOCATION */}
                           

                            {/* PHONE */}
                           <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center flex-shrink-0">

                                    <FaPhoneAlt className="text-[#ff8800]" />

                                </div>

                                <div>

                                    <p className="text-black font-semibold">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+917087831409"
                                        className="text-sm mt-1 inline-block hover:text-[#ff8800] transition-all duration-300"
                                    >
                                        +91 7087831409
                                    </a>

                                </div>

                            </div>

                            {/* EMAIL */}
                            <div className="flex items-start gap-4">

                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center flex-shrink-0">

                                    <FaEnvelope className="text-[#ff8800]" />

                                </div>

                                <div>

                                    <p className="text-black font-semibold">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:cakeacdofchd@gmail.com"
                                       className="text-sm mt-1 inline-block break-all hover:text-[#ff8800]"
                                    >
                                        HungerTown@gmail.com
                                    </a>

                                </div>

                            </div>

                        </div>

                        {/* SOCIALS */}
                        <div className="flex flex-wrap gap-4 mt-8">

                            {/* FACEBOOK */}
                            <a
                                href="https://www.facebook.com/share/1EDBCVXLVg/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-[#1F4E9D] transition-all duration-300 hover:-translate-y-1"
                            >
                                <FaFacebookF />
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://www.instagram.com/cakeacademyofchd?igsh=NGVlMW5hMGY3ejY2&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-pink-500 hover:text-[#2B2521] transition-all duration-300 hover:-translate-y-1"
                            >
                                <FaInstagram />
                            </a>

                            {/* WHATSAPP */}
                            <a
                                href="https://wa.me/917087831409"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-green-500 transition-all duration-300 hover:-translate-y-1"
                            >
                                <FaWhatsapp />
                            </a>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#B8ADA3]">

                    <p className="text-center md:text-left leading-6">
                        © {new Date().getFullYear()} Cake Academy Of Chandigarh.
                        All rights reserved.
                    </p>

                    <p className="text-center md:text-right">
                        Crafted with passion for Cravers
                    </p>

                </div>

            </div>

        </footer>
    );
}