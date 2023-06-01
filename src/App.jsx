
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import About from './Routes/About.jsx'
import Vans from './Routes/Vans.jsx'
import Layout from './components/Layout.jsx'
import VanDetail from './Routes/VanDetail.jsx'
import HostLayout from './Host/HostLayout.jsx'
import Host from './Host/Host.jsx'
import Income from './Host/Income.jsx'
import Reviews from './Host/Reviews.jsx'
import HostVans from './Host/HostVans.jsx'
import HostVansDetail from './Host/HostVansDetail.jsx'
import "./server.js"
import './App.css'


function App() {




  return (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />}/>

        <Route path="host" element={<HostLayout/>}>
          <Route index element={<Host/>}/>
          <Route path="income" element={<Income />}/>
          <Route path="reviews" element={<Reviews />}/>
          <Route path="vans" element={<HostVans />}/>
          <Route path="vans/:id" element={<HostVansDetail />}/>
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>
  )
}



export default App
