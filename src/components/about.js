import React from "react"
import Profile from '../img/professional_Picture.png'


const About = () => {
    return(
        <body>
        <div className="body2 body" id="About">
            <h1>ABOUT ME.</h1>
            <div className="about-box">
                <div className="about-text">
                    <p>My name is Jephthah Ndukwe, I'm  a front-end developer based in Nigeria. <br className="res-br"></br> I have developed many types of front-ends from well know No Code Website Builder to <br className="res-br"></br> Learning System Platforms.</p>
                    <p>Results-driven Senior Software Engineer with 6+ years of experience in creating <br className="res-br"></br> high-performance web and mobile applications. Proficient in HTML5, CSS3, <br className="res-br"></br> JavaScript, ReactJS, and React Native. Strong background in Agile/Lean <br className="res-br"></br> development methodologies and a proven track record of delivering exceptional <br className="res-br"></br> user interface and experiences.</p>
                    <p>I'm Passionate about cutting edge, pixel-perfect, beautiful interface and intuitively <br className="res-br"></br> implemented UX.</p>
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