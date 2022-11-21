import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../img/Jephthah_Ndukwe_CV.png'
import AnimCursor from './animated-cursor'
import Navbar from './Navbar'
import Svg from './svg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { motion as m } from 'framer-motion'

const Resume = () => {
  return (
    <>
<Navbar/>
<Svg/>
<AnimCursor/>
<m.div
 initial={{ y: "100%" }}
 animate={{ y: "0%" }}
 transition={{ duration: 1, ease: "easeOut" }}>
    <div className='resume'>
      <h1>Resumé.</h1>
      <h3>Reach out to me via my <Link to='/ContactTwo'> contact page </Link>.<a href='https://drive.google.com/file/d/1Bu2GYe2BZg0NT_ygAcLiGGmnPTWAyt_a/view?usp=share_link'>view</a> or <a href='https://drive.google.com/file/d/1Bu2GYe2BZg0NT_ygAcLiGGmnPTWAyt_a/view?usp=share_link'>download</a> the resume</h3>
      <img src={resume} className='resumeImg' />
      <div className='resume-bg'></div>
    </div><br></br>
   <Link to='/ContactTwo' className='conA'><h3>Are you convinced now to contact me? <FaLongArrowAltRight className='arrow2' /></h3></Link>
   </m.div>
    </>
  )
}

export default Resume
