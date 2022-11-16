import '../App.css';
import { FaGithub } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaCodepen} from 'react-icons/fa';
// import {FaPlay} from 'react-icons/fa';
// import {FaPause} from 'react-icons/fa';
import Audio from '../audio/Jephthah-Ndukwe.mp3';
import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <body>
            <div className='Home'>

                <div className='home-list'>
                   <a href='https://github.com/Jephthahndukwe'><FaGithub className='icon github' /></a><br></br><br></br>
                   <a href='https://twitter.com/CoachJephthah'><FaTwitter className='icon twitter' /></a><br></br><br></br>
                   <a href='https://www.instagram.com/jephthah_ndukwe'><FaInstagram className='icon instagram' /></a><br></br><br></br>
                   <a href='https://www.linkedin.com/in/jephthah-ndukwe'><FaLinkedin className='icon linkedin' /></a><br></br><br></br>
                   <a href='https://codepen.io/Jephthahndukwe'><FaCodepen className='icon codepen' /></a>
                    <hr className='home-hr'></hr>
                </div>
                <div className='respo'>
                <div className='home-text2'>
                    <h2>Jephthah Ndukwe</h2>
                    <p>Frontend developer specialized in building web <br></br> application </p>
                    <p>Currently working as a junior developer <br></br> at <a href='https://andela.com/'>Andela Company</a></p>
                </div>
                <div className='bg-music'>
                       <audio src= {Audio} autoPlay="true" loop="true" type='audio/mpeg' id='myMusic'>second Audio</audio>                      
                    {/* <div className='btn'>
                        <FaPlay className='Play icon' />
                        <FaPause className='Pause icon' />
                    </div> */}
                </div>
                <div className='home-text'>
                   <Link to='/About_section'><h1 className='nav-link'>About</h1></Link>
                    <Link to='/work2'><h1 className='nav-link'>Work</h1></Link>
                    <Link to='/contactTwo'><h1 className='nav-link'>Contact</h1></Link>
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