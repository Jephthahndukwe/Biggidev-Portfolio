import React from 'react'
import './responsive.css'
import AnimCursor from './animated-cursor'
import Svg from './svg'
import About from './about'
import Work from './work'
import News from './scrollText'
import Contact from './contact'
import Footer from './footer'
import Home from './front-page'
import { motion as m } from 'framer-motion'

function Parent() {
  return (
    <m.div
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}>
        <Home />
        <Svg />
        <About />
        <Work />
        <News />
        <Contact />
        <Footer />
    </m.div>
  )
}

export default Parent
