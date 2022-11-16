import React from "react";
import '../App.css';
import travel from '../img/TraveBetter.png';
import foundation from '../img/DHF.png';
import trading from '../img/Trading.png';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
    return(
        <body>
            <div className="body3" id="Work">
                    <h1>MY WORK.</h1>
                    <div className="work-text">
                        <div className="work-bg"></div>
                        <h3>TravelBetter</h3>
                        <p>A easy and stress free way to travel any where in the world.</p>
                        <div className="work-img">
                            <img src={travel} className="travelImg" />
                        </div>
                    </div>
                    <div className="work-text2">
                            <h4>Featured Product</h4>
                            <h3>Travel Agency</h3>
                        <div className="work-para">
                                <p>We bring to the wanderlust of Nigeria a venue to book cheap flights when one makes a flight booking online. Our online flight booking domain caters to the needs of booking flights and traces down the cheapest flights in the market to international destinations.</p>
                            <div className="work-link link2">
                                <a href="https://github.com/Jephthahndukwe/Travelbetter"><FaGithub className="github git" /></a> 
                                <a href="https://travelbetter.netlify.app"><FaExternalLinkAlt className="github external" /></a>
                            </div>
                        </div>
                    </div>

                <div className="second-work">
                    <div className="work-text3">
                        <div className="work-bg2"></div>
                            <h3>DHF Foundation</h3>
                            <p>we are seeking the support of the general public to touch lives.</p>
                        <div className="work-img2">
                            <img src={foundation} className="foundationImg" />
                        </div>
                    </div>
                    <div className="work-text2">
                            <h4>Featured Product</h4>
                            <h2>DHF Foundation</h2>
                        <div className="work-para2">
                                <p>Door of Hope Foundation is a nonprofit organization that raises funds to support the advancement of child healthcare across the Western Cape and the Continent, DHF has invested over 3 million towards improving public health infrastructure, training specialist pediatric health workers, and enabling the establishment of child public health programmes.</p>
                            <div className="work-link">
                                <a href="https://github.com/Jephthahndukwe/Travelbetter"><FaGithub className="github git" /></a> 
                                <a href="https://travelbetter.netlify.app"><FaExternalLinkAlt className="github external" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-work">
                    <div className="work-text3">
                        <div className="work-bg2"></div>
                            <h3>Trading Vendor</h3>
                            <p>Simple & secure access to buy, sell and trade all Currencies.</p>
                        <div className="work-img2">
                            <img src={trading} className="tradingImg" />
                        </div>
                    </div>
                    <div className="work-text2">
                            <h4>Featured Product</h4>
                            <h3>Trading Vendor</h3>
                        <div className="work-para2">
                                <p>In recent years, we have watched the Nigerian Naira weaken against US Dollar and not even the parallel market is saved from this dilemma. It's safe to say that you would want to work with the bigger guy. PraizEx has made the process thinner by making it easy to individually own a Dollar account and this comes an assurance</p>
                            <div className="work-link link2">
                                <a href="https://github.com/Jephthahndukwe/Trading"><FaGithub className="github git" /></a> 
                                <a href="https://tradingproject.netlify.app/"><FaExternalLinkAlt className="github external" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}


export default Work