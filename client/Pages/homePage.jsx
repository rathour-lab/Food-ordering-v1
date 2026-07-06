import React from 'react'
import Menu from '../Components/Menu'
import About from '../Components/About'
import Home from '../Components/Home'
import LoginPage from '../Pages/loginPage'
import CartPage from './cartPage'
import SignUp from '../Pages/SignUp'


function HomeSection() {
  return (
    <>
    <Home />
    <Menu />
    <About/>
    <CartPage />
    <SignUp />
    <LoginPage />
    </>
  )
}

export default HomeSection