import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
    return (
        <body>
            <div className="contact-text" id="Contact">
                <h1>Get In Touch</h1>
                <p>Although I'm not currently looking for any new opportunities, my inbox is <br></br> always open. Whether you have a question or just want to say hi, I'll try my <br></br> best to get back to you!</p>
            <div className="contact-list">
              <a href=""><FaGithub className="icon Git"/></a>
              <a href=""><FaTwitter className="icon Twitter" /></a>
              <a href=""><FaInstagram className="icon Instagram" /></a>
              <a href=""><FaLinkedin className="icon Linkedin" /></a>
            </div>
                <button className="btn">Say Hello</button>
            </div>
        </body>
    )
}

export default Contact