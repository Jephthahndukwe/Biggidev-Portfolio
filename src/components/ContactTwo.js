import React from 'react';
import AnimCursor from './animated-cursor';
import Navbar from './Navbar';
import Svg from './svg';

function ContactTwo() {
  return (
    <>
    <Navbar/>
    <AnimCursor/>
    <Svg/>
   
    <div className='contactTwo'>
        <h1>Hello.</h1>
        <div className='Contact-text'>
        <p>Just keeping it simple.</p>
        <p>Email: <a href='jephthahndukwe@gmail.com'>Jephthahndukwe@gmail</a></p>
        <p>On the internet: <a href='https://www.linkedin.com/in/jephthah-ndukwe-537b69250/'>Linkedin</a> / 
        <a href='https://github.com/Jephthahndukwe'>Github</a> / 
        <a href='https://codepen.io/Jephthahndukwe'>Codepen</a> / 
        <br/> <a href='https://twitter.com/CoachJephthah'>Twitter</a></p>
        </div>
    </div>
    </>
  )
}

export default ContactTwo