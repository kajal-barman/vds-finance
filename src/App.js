
import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import CreditCard from './pages/CreditCard'
import EMICalculator from './pages/EMICalculator'
import Home from './pages/Home'
import Loan from './pages/Loan'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Press from './pages/Press'
import Blog from './pages/Blog'
import Affiliates from './pages/Affilites'
import CreditScore from './pages/CreditScore'
import Investments from './pages/Investment'
import HelpCenter from './pages/HelpCenter'
import FAQS from './pages/FAQS'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Security from './pages/Security'
import Practice from './pages/Practice'

import { Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/credit-score" element={<CreditScore />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/security" element={<Security />} />
       <Route path="/practice" element={<Practice />} />
      </Routes>

    </div>
  )
}

export default App