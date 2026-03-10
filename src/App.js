
import React from 'react'

import About from './pages/About'
import Contact from './pages/Contact'
import CreditCard from './pages/CreditCard'
import EMICalculator from './pages/EMICalculator'
import Home from './pages/Home'
import Loan from './pages/Loan'
import Services from './pages/Services'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/credit-card" element={<CreditCard/>} />
        <Route path="/emi-calculator" element={<EMICalculator/>} />
        <Route path="/loan" element={<Loan/>} />
        <Route path="/services" element={<Services/>} />
        
       
      </Routes>

    </div>
  )
}

export default App