import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
        <body>
            <div className="contact-text" id="Contact">
                <h1>Get In Touch</h1>
                <p>Although I'm not currently looking for any new opportunities, my inbox is <br></br> always open. Whether you have a question or just want to say hi, I'll try my <br></br> best to get back to you!</p>
            <div className="contact-list">
              <a href="https://github.com/Jephthahndukwe" target="_blank"><FaGithub className="icon Git"/></a>
              <a href="https://twitter.com/CoachJephthah" target="_blank"><FaTwitter className="icon Twitter" /></a>
              <a href="'https://www.instagram.com/jephthah_ndukwe" target="_blank"><FaInstagram className="icon Instagram" /></a>
              <a href="https://www.linkedin.com/in/jephthah-ndukwe-537b69250/" target="_blank"><FaLinkedin className="icon Linkedin" /></a>
            </div>
               <Link to='ContactTwo'><button className="btn">Say Hello</button></Link>
            </div>
        </body>
    )
}

export default Contact