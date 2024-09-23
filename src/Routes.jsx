import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './Context/AuthContext'
import PrivateRoute from './Components/privateRouting'
// pages 
// import Home from './Pages/Home/index'
import Pages from './Pages'
import Auth from './Auth'

export default function CustomRoutes() {
  const {isAuth}=useAuthContext()
  return (
    <Routes>
      {/* <Route path="/" element={<Home />}></Route> */}
      <Route path="/*" element={<PrivateRoute Component={Pages}/>} ></Route>
      <Route path="/auth/*" element={<Auth />} ></Route>
    </Routes>
  )
}
