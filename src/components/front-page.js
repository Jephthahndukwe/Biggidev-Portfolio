import '../App.css';
import { FaGithub } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaCodepen} from 'react-icons/fa';
import {FaPlay} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';
import Audio from '../audio/Jephthah-Ndukwe.mp3';
import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <body>
            <div className='Home'>
                <div className='home-list' style={{position: "fixed"}}>
                   <a href='https://github.com/Jephthahndukwe' target='_blank'><FaGithub className='icon github' /></a><br></br><br></br>
                   <a href='https://x.com/BiggiDev' target='_blank'><FaTwitter className='icon twitter' /></a><br></br><br></br>
                   <a href='https://www.instagram.com/nd_jephthah/' target='_blank'><FaInstagram className='icon instagram' /></a><br></br><br></br>
                   <a href='https://www.linkedin.com/in/jephthah-ndukwe' target='_blank'><FaLinkedin className='icon linkedins' /></a><br></br><br></br>
                   <a href='https://codepen.io/Jephthahndukwe' target='_blank'><FaCodepen className='icon codepen' /></a>
                    <hr className='home-hr'></hr>
                </div>
                <div className='responsive'>
                <div className='home-text2'>
                    <h2>Jephthah Ndukwe</h2>
                    <p>Frontend developer specialized in building Web and Mobile <br className='res-br'></br> applications. </p>
                    <p>Worked as a senior developer at <a href='https://www.adanianlabs.io/' target="_blank">Adanian Labs <br className='res-br'></br> Company.</a></p>
                </div>
                {/* <div className='bg-music'>
                       <audio src= {Audio} autoPlay="true" loop="true" type='audio/mpeg' id='myMusic' />                   
                    <div className='btn'>
                        <FaPlay className='Play icon' />
                        <FaPause className='Pause icon' />
                    </div>
                </div> */}
                <div className='home-text'>
                <h1 className='nav-link'><Link to='/About_section'>About</Link></h1>
                <h1 className='nav-link'><Link to='/work2'>Work</Link></h1>
                <h1 className='nav-link nav-con'><Link to='/contactTwo'>Contact</Link></h1>
                </div>
                </div>
                <div className='home-mail'>
                    <p>Jephthahndukwe@gmail.com</p>
                    <hr className='mail-hr'></hr>
                </div>    
            </div>
        </body>
    )
}

export default Home