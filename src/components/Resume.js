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
{/* <Navbar/> */}
<Svg/>
{/* <AnimCursor/> */}
<m.div
 initial={{ y: "100%" }}
 animate={{ y: "0%" }}
 exit={{ opacity: 1 }}
 transition={{ duration: 1, ease: "easeOut" }} 
 className='resumePage'>
    <div className='resume'>
      <h1>Resumé.</h1>
      <h3>Reach out to me via my <Link to='/ContactTwo'> contact page </Link> or <a href='https://drive.google.com/file/d/1ZdBZvb_0JhrW_dh6zmRYyYTfx3_MaKR3/view?usp=drive_link' target='_blank'>download</a> the resume</h3>
      <img src={resume} className='resumeImg' />
      <div className='resume-bg'></div>
    </div><br></br>
   <Link to='/ContactTwo' className='conA'><h3>Are you convinced now to contact me? <FaLongArrowAltRight className='arrow2' /></h3></Link>
   </m.div>
    </>
  )
}

export default Resume
