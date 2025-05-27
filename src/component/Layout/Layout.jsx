import React from 'react'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import Model from '../2dmodel/Model'
import Dmodel from '../3dmodel/Dmodel'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout

