import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <div className="min-h-[0vh]"></div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout






