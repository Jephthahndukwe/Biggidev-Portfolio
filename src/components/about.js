import React from "react";
import Profile from '../img/professional_Picture.png';


const About = () => {
    return(
        <body>
        <div className="body2 body" id="About">
            <h1>ABOUT ME.</h1>
            <div className="about-box">
                <div className="about-text">
                    <p>My name is Jephthah Ndukwe, I'm  a front-end developer based in Nigeria. <br></br> I have developed many types of front-ends from well know Travel Agency to <br></br> Charity Foundation Platforms.</p>
                    <p>I'm a Developer Advocate who's always willing to help and give the best solutions <br></br> to my clients with the use of software and  has project experience building easy-to-use,<br></br> responsive, accessible, and user-friendly websites and web applications.</p>
                    <p>I'm Passionate about cutting edge, pixel-perfect, beautiful interface and intuitively <br></br> implemented UX.</p>
                </div>
                <div className="img"> </div>
                <div className="about-img">
                    <img src={Profile} className="profile" />
                </div>
            </div>
            <div className="about-grid">
                <div className="about-grid-box">
                    <h2>01. Research</h2>
                    <p>Understand the client's subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer's needs and requirements.</p>
                </div>
                <div className="about-grid-box">
                    <h2>02. Design</h2>
                    <p>Misleadingly thought of as the superficial appearance of a product, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup.</p>
                </div>
                <div className="about-grid-box">
                    <h2>02. Develop</h2>
                    <p>Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer utilizing the research and designs to produce commercial products for the customer.</p>
                </div>
            </div>
        </div>
        </body>
    )
}


export  default About