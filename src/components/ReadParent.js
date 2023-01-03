import React from 'react'
import './responsive.css'
import AnimCursor from './animated-cursor'
import Navbar from './Navbar'
import Reads from './Reads'
import Svg from './svg'
import { motion as m } from 'framer-motion'

function ReadParent() {
  return (
    <m.div
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className='read-svg'>
        <Reads/>
    </m.div>
  )
}

export default ReadParent