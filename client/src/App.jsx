import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home'

import Reservation from '../Components/Reservation'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'

import Menupage from '../Components/Menu-page'
import Adminpage from '../Components/adminpage'


function App() {


  return (
    <>
      

        <Navbar />
       


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menupage />} />

        <Route path="/Reservations" element={<Reservation />} />
        <Route path="/Admin" element={<Adminpage />} />
      </Routes>
      
      <Footer />



    </>
  )
}

export default App
