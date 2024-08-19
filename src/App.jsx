import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUsPage from './pages/AboutUsPage';
import './App.css';
import BookingNumberPage from './pages/BookingNumberPage'
import SearchResultsPage from './pages/SearchResultsPage'

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/buy-ticket' element={<HomePage />} />
        <Route path='/booking-number' element={<BookingNumberPage />} />
        <Route path='/search' element={<SearchResultsPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />

      </Routes>

      <div className='hidden'>
        <Footer />
      </div>
    </>
  )
}

export default App
