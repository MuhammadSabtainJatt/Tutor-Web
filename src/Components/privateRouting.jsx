import React from 'react'
import { useAuthContext } from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'


export default function CustomprivateRouting({Component}) {
  const {isAuth}=useAuthContext()
  const Location=useLocation()
    if(!isAuth){
        return <Navigate to={"/auth/login"} state={{from:Location.pathname}} replace />
    }
  return (
    <Component />
  )
}
