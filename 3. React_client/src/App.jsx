import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (

    // jsx fragmentation 
    <>

      <BrowserRouter>

        <Navbar />


        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>


    </>


  )
}

export default App