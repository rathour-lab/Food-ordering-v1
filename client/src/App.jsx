import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
  import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import herobg from '../src/assets/herobg.png'
import Menu from '../Components/Menu'
import Reservation from '../Components/Reservation'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
function App() {


  return (
    <>
  <div  className="relative h-screen bg-cover bg-center overflow-x-hidden mx-auto"
         style={{
        backgroundImage: `url(${herobg})`,
      }}>

        <Navbar />
  </div>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Reservations" element={<Reservation />} />
    </Routes>
 <Footer/>



   </>
  )
}

export default App
