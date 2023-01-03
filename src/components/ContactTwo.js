import React from 'react'
import AnimCursor from './animated-cursor'
import './responsive.css'
import Navbar from './Navbar'
import Svg from './svg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

function ContactTwo() {
  return (
    <div className='contactTwo'>
    {/* <Navbar/> */}
    {/* <AnimCursor/> */}
    <Svg/>
   <m.div
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }} 
    className='responsive-contact'>
      <div className='contactTwo'>
        <h1>Hello.</h1>
        <div className='Contact-text'>
        <p>Just keeping it simple.</p>
        <p>Email: <a href='https://gmail.com/jephthahndukwe@gmail.com'>Jephthahndukwe@gmail</a></p>
        <p>On the internet: <a href='https://www.linkedin.com/in/jephthah-ndukwe-537b69250/' target="_blank">Linkedin</a> / 
        <a href='https://github.com/Jephthahndukwe' target="_blank">Github</a> / 
        <a href='https://codepen.io/Jephthahndukwe' target="_blank">Codepen</a> / 
        <br/> <a href='https://wa.link/drn37x' target="_blank">Whatsapp</a></p>
        </div>
      <Link to='/' className='contactA'><h3>Go Back Home <FaLongArrowAltRight className='arrow4' /></h3></Link> 
    </div>
    </m.div>
    </div>
  )
}

export default ContactTwo