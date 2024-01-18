import React from 'react'
import Home from './components/Home/Home.jsx'
import Header from './components/Header.jsx/Header.jsx'
import Footer from './components/Footer.jsx/Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
        <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout