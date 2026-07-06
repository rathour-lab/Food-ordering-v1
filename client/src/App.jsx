import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import HomeSection from '../Pages/homePage'
import Reservation from '../Components/Reservation'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import Menupage from '../Pages/MenuPage'
import Adminpage from '../Components/adminpage'
import Loader from "../Components/Loader";
import AdminDashboard from '../Components/AdminDashboard';
import AdminMenusection from '../Components/AdminMenusection';
import AdminOrders from '../Components/AdminOrders';
import AdminReservation from '../Components/AdminReservation';
import Cart from '../Components/cart'


function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/Admin");

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />
  }


  return (
    <>
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/Cart" element={<Cart />} />
        
        <Route path="/Menu" element={<Menupage />} />
        <Route path="/Reservations" element={<Reservation />} />


        <Route path="/Admin" element={<Adminpage />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="menu" element={<AdminMenusection />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="reservation" element={<AdminReservation />} />
        </Route>
      </Routes>
      {!isAdmin && <Footer />}

    </>
  )
}

export default App
