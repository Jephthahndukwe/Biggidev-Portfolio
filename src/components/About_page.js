import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { FaRegCircle } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { motion as m } from 'framer-motion'

function About_page() {
  return (
    <m.div
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className='about-section'>
    <body>
        <div className='about_section'>
            <h1>About Me.</h1>
            <div className='about2'>
                <h2><FaRegCircle className='circle'/>
                    Engineering
                    <a href='https://github.com/Jephthahndukwe'>View Github</a>
                </h2>
                <p>When it comes to business, first impressions matter, and good website design is the key to capitalizing on them. An excellent site is   <br className='res-br'/> not judged solely on its looks, but on its functionality and usability as well. My experience as a programmer allows me to come up <br className='res-br'/> with intelligent solutions to technical challenges, while at the same time designing sleek and visually appealing websites. Aside from <br className='res-br'/> having extensive knowledge of recognized technical standards, I am conversant with modern building practices.</p>
                <hr className='about2-hr'></hr>
                
                <h2><FaRegCircle className='circle2'/>
                    Product 
                    <Link to='/Work2' className='product'>View Product</Link>
                </h2>
                <p>In spite of not being an atypical product manager, I have strong backgrounds in research, product design, and product coordination <br className='res-br'/> that can help the product grow from 0 to 1. As a first-rate analytical thinker, I am able to maintain the product's vision from start to <br className='res-br'/> finish, both technically and product-wise.</p>
                <hr className='about3-hr'></hr>

                <h2><FaRegCircle className='circle3'/>
                    Design
                    <Link to='/Reads' className='product product2'>View Design</Link>
                </h2>
                <p>Although I am not the typical designer, I do possess excellent visual abilities, and this makes me an excellent presenter, allowing me <br className='res-br'/> to successfully communicate design ideas to stakeholders and design teams. With my strong conceptualization ability, I am able to <br className='res-br'/> visualize and create beautiful works. Lastly, you can find me mostly tweaking stylesheets and creating fluid user experiences.</p>
                <hr className='about3-hr  hr2'></hr>
            </div>
        </div>

        <div className='reads'>
            <h3>My Reads.</h3>
            <div className='read-text'>
               <h2><FaRegCircle className='circle4'/>
               <a href='https://acumenacademy.org/course/design-kit-human-centered-design/'>Human Centered Design 101. <span> Acumen</span> </a>
                        <span className='product productS'><FaCalendarAlt className='calender'/> 2017-2018</span>
                    </h2>
                    <p>This is an intensive, hands-on learning experience that will challenge you to get out of your chair and out into the real world to talk to <br className='res-br'/> people and test your ideas. You'll leave this experience equipped and energized to apply the human-centered design process to <br className='res-br'/> challenges across industries, sectors, and geographies to generate breakthrough ideas.</p>
                    <hr className='about4-hr'></hr>

                    <h2><FaRegCircle className='circle5'/><a href='https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/'>
                    Data Structure And Algorithm.<span> Udemy</span> </a>
                        <span className='product2 productS'><FaCalendarAlt className='calender2'/> 2019</span>
                    </h2>
                    <p>Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates <br className='res-br'/> in computer science is the fact that they don't have knowledge about algorithms, data structures and the notorious Big-O Notation</p>
                    <hr className='about5-hr'></hr>

                    <h2><FaRegCircle className='circle6'/><a href='https://www.edx.org/course/adaptive-leadership-in-development'>
                    Adaptive Leadership.<span> edX</span></a>
                        <span className='product3 productS'><FaCalendarAlt className='calender3'/> 2019</span>
                    </h2>
                    <p className='stub'> This introductory course helps you identify and make progress on a leadership challenge in your own life, team, or community. You'll <br className='res-br'/> apply the tools and techniques of Adaptive Leadership, a practical framework developed at Harvard Kennedy School of Government <br className='res-br'/> for leading change, particularly during times of uncertainty or when there are no easy answers.</p>
                    <hr className='about6-hr'></hr>

                    <h2><FaRegCircle className='circle7'/><a href='https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/'>
                    Learning to Learn [Efficient learning].<span> Udemy</span></a>
                        <span className='product4 productS'><FaCalendarAlt className='calender4'/> 2020</span>
                    </h2>
                    <p className='stub'>Improve memory & productivity using the skills of the world's top performers and learning strategies proven by research.</p>
                    <hr className='about7-hr'></hr>

                    <h2><FaRegCircle className='circle8'/>
                    <Link to='/Reads'>Learning Something Great.</Link> 
                        <a href='' className='product5 productS'><FaCalendarAlt className='calender5'/> 2021</a>
                    </h2>
                    <p className='stub'>We continue learning everyday.</p>
                    <hr className='about8-hr'></hr>
            </div>
            <div className='continue'>
                <Link to='/Work2'><h4>Lets Continue to my work <FaLongArrowAltRight className='arrow' /></h4></Link>
                <div className='icons'>
                    <a href='https://twitter.com/CoachJephthah' target='_blank'><FaTwitter className='icon twitter'/></a>
                    <a href='https://web.facebook.com/chika.ndukwe.39904/' target="_blank"><FaFacebook className='icon facebook'/></a>
                    <a href='https://www.linkedin.com/in/jephthah-ndukwe' target="_blank"><FaLinkedin className='icon linkedin'/></a>
                    <a href='https://github.com/Jephthahndukwe' target="_blank"><FaGithub className='icon githubs'/></a>
                    <a href='https://dribbble.com/jephthahndukwe' target='_blank'><FaDribbble className='icon dribbble'/></a>
                    <a href='https://www.instagram.com/jephthah_ndukwe' target="_blank"><FaInstagram className='icon instagram'/></a>                 
                </div>
            </div>
        </div>
    </body>
    </m.div>
  )
}

export default About_page
