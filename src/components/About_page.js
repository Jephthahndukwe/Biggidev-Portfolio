import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';
import { FaRegCircle } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

function About_page() {
  return (
    <body>
        <div className='about_section'>
            <h1>About Me.</h1>
            <div className='about2'>
                <h2><FaRegCircle className='circle'/>
                    Engineering
                    <a href='https://github.com/Jephthahndukwe'>View Github</a>
                </h2>
                <p>When it comes to business, first impressions matter, and good website design is the key to capitalizing on them. An excellent site is   <br/> not judged solely on its looks, but on its functionality and usability as well. My experience as a programmer allows me to come up <br/> with intelligent solutions to technical challenges, while at the same time designing sleek and visually appealing websites. Aside from <br/> having extensive knowledge of recognized technical standards, I am conversant with modern building practices.</p>
                <hr className='about2-hr'></hr>
                
                <h2><FaRegCircle className='circle2'/>
                    Product 
                    <a href='' className='product'>View Product</a>
                </h2>
                <p>In spite of not being an atypical product manager, I have strong backgrounds in research, product design, and product coordination <br/> that can help the product grow from 0 to 1. As a first-rate analytical thinker, I am able to maintain the product's vision from start to <br/> finish, both technically and product-wise.</p>
                <hr className='about3-hr'></hr>

                <h2><FaRegCircle className='circle3'/>
                    Design
                    <Link to='/Reads' className='product product2'>View Design</Link>
                </h2>
                <p>Although I am not the typical designer, I do possess excellent visual abilities, and this makes me an excellent presenter, allowing me <br/> to successfully communicate design ideas to stakeholders and design teams. With my strong conceptualization ability, I am able to <br/> visualize and create beautiful works. Lastly, you can find me mostly tweaking stylesheets and creating fluid user experiences.</p>
                <hr className='about3-hr'></hr>
            </div>
        </div>

        <div className='reads'>
            <h3>My Reads.</h3>
            <div className='read-text'>
               <h2><FaRegCircle className='circle4'/>
               <a href='https://acumenacademy.org/course/design-kit-human-centered-design/'>Human Centered Design 101. <span> Acumen</span> </a>
                        <span className='product'><FaCalendarAlt className='calender'/> 2017-2018</span>
                    </h2>
                    <p>This is an intensive, hands-on learning experience that will challenge you to get out of your chair and out into the real world to talk to <br/> people and test your ideas. You'll leave this experience equipped and energized to apply the human-centered design process to <br/> challenges across industries, sectors, and geographies to generate breakthrough ideas.</p>
                    <hr className='about4-hr'></hr>

                    <h2><FaRegCircle className='circle5'/><a href='https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/'>
                    Data Structure And Algorithm.<span> Udemy</span> </a>
                        <span className='product2'><FaCalendarAlt className='calender2'/> 2019</span>
                    </h2>
                    <p>Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates <br/> in computer science is the fact that they don't have knowledge about algorithms, data structures and the notorious Big-O Notation</p>
                    <hr className='about5-hr'></hr>

                    <h2><FaRegCircle className='circle6'/><a href='https://www.edx.org/course/adaptive-leadership-in-development'>
                    Adaptive Leadership.<span> edX</span></a>
                        <span className='product3'><FaCalendarAlt className='calender3'/> 2019</span>
                    </h2>
                    <p> This introductory course helps you identify and make progress on a leadership challenge in your own life, team, or community. You'll <br/> apply the tools and techniques of Adaptive Leadership, a practical framework developed at Harvard Kennedy School of Government <br/> for leading change, particularly during times of uncertainty or when there are no easy answers.</p>
                    <hr className='about6-hr'></hr>

                    <h2><FaRegCircle className='circle7'/><a href='https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/'>
                    Learning to Learn [Efficient learning].<span> Udemy</span></a>
                        <span className='product4'><FaCalendarAlt className='calender4'/> 2020</span>
                    </h2>
                    <p>Improve memory & productivity using the skills of the world's top performers and learning strategies proven by research.</p>
                    <hr className='about7-hr'></hr>

                    <h2><FaRegCircle className='circle8'/>
                    <Link to='/Reads'>Learning Something Great.</Link> 
                        <a href='' className='product5'><FaCalendarAlt className='calender5'/> 2021</a>
                    </h2>
                    <p>We continue learning everyday.</p>
                    <hr className='about8-hr'></hr>
            </div>
            <div className='continue'>
                <Link to='/Work2'><h4>Lets Continue to my work <FaLongArrowAltRight className='arrow' /></h4></Link>
                <div className='icons'>
                    <FaTwitter className='icon twitter'/>
                    <FaFacebook className='icon facebook'/>
                    <FaLinkedin className='icon linkedin'/>
                    <FaGithub className='icon githubs'/>
                    <FaDribbble className='icon dribbble'/>
                    <FaInstagram className='icon instagram'/>                   
                </div>
            </div>
        </div>
    </body>
  )
}

export default About_page
