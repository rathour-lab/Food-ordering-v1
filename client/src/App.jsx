import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import Menu from '../Components/Menu'
import Reservation from '../Components/Reservation'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'

import About from '../Components/About'
import Menupage from '../Components/Menu-page'


function App() {


  return (
    <>
      <div className="relative h-full bg-cover bg-center  mx-auto bg-[#fff8dd] "
      >

        <Navbar />
       
      <Home />
</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menupage />} />
        
        <Route path="/Reservations" element={<Reservation />} />
      </Routes>
      <Menu />
      <About/>
      <Footer />



    </>
  )
}

export default App
