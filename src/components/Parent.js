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

function Parent() {
  return (
    <div>
        <Home />
        <AnimCursor />
        <Svg />
        <About />
        <Work />
        <News />
        <Contact />
        <Footer />
    </div>
  )
}

export default Parent
