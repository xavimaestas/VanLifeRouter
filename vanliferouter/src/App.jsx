import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import About from './Routes/About.jsx'
import Vans from './Routes/Vans.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
  <BrowserRouter>
  <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vans" element={<Vans/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}



export default App
