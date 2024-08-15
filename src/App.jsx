import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <div className='hidden'>
        <Footer />
      </div>
    </>
  )
}

export default App
