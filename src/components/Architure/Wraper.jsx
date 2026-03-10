import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Wraper = ({children}) => {
  return (
    <>
    <Navbar/>
     {children}
    <Footer/>
    </>
  )
}

export default Wraper