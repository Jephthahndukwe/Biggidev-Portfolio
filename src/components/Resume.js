import React from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import resume from '../img/Jephthah_Ndukwe_CV.png';
import AnimCursor from './animated-cursor';
import Navbar from './Navbar';
import Svg from './svg';

const Resume = () => {
  return (
    <>
<Navbar/>
<Svg/>
<AnimCursor/>
    <m.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 3, ease: "easeOut" }}  className='resume'>

      <h1>Resumé.</h1>
      <h3>Reach out to me via my <Link to='/ContactTwo'> contact page </Link>.<a href='https://drive.google.com/file/d/1Bu2GYe2BZg0NT_ygAcLiGGmnPTWAyt_a/view?usp=share_link'>view</a> or <a href='https://drive.google.com/file/d/1Bu2GYe2BZg0NT_ygAcLiGGmnPTWAyt_a/view?usp=share_link'>download</a> the resume</h3>
      <img src={resume} className='resumeImg' />
      <div className='resume-bg'></div>
    </m.div>
    </>
  )
}

export default Resume
