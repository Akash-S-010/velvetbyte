import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App