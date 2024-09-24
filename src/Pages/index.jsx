import React from 'react'
import { Route, Routes } from 'react-router-dom'
// pages
import About from './About/index'
import Contact from './Contact/index'
import Home from './Home/index'
import Registertutor from './Registeration/registertutor'
// components
import Header from '../Components/Header/index'
import Footer from '../Components/Footer/index'

export default function Customindex() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='tutorregister' element={<Registertutor />}></Route>

            </Routes>
            <Footer />
        </>
    )
}
