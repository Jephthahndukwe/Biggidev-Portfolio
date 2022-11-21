import React from 'react'
import AnimCursor from './animated-cursor'
import Navbar from './Navbar'
import Svg from './svg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'

function ContactTwo() {
  return (
    <>
    <Navbar/>
    <AnimCursor/>
    <Svg/>
   <m.div
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1, ease: "easeOut" }}>
      <div className='contactTwo'>
        <h1>Hello.</h1>
        <div className='Contact-text'>
        <p>Just keeping it simple.</p>
        <p>Email: <a href='jephthahndukwe@gmail.com' target="_blank">Jephthahndukwe@gmail</a></p>
        <p>On the internet: <a href='https://www.linkedin.com/in/jephthah-ndukwe-537b69250/' target="_blank">Linkedin</a> / 
        <a href='https://github.com/Jephthahndukwe' target="_blank">Github</a> / 
        <a href='https://codepen.io/Jephthahndukwe' target="_blank">Codepen</a> / 
        <br/> <a href='https://twitter.com/CoachJephthah' target="_blank">Twitter</a></p>
        </div>
      <Link to='/' className='contactA'><h3>Go Back Home <FaLongArrowAltRight className='arrow4' /></h3></Link> 
    </div>
    </m.div>
    </>
  )
}

export default ContactTwo