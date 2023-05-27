import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import About from './Routes/About.jsx'
import Vans from './Routes/Vans.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import VanDetail from './Routes/VanDetail.jsx'
import "./server.js"
import './App.css'


function App() {




  return (
  <BrowserRouter>
  <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vans" element={<Vans/>} />
      <Route path="/vans/:id" element={<VanDetail/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}



export default App
