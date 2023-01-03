import React from "react";
import '../App.css';
import travel from '../img/TraveBetter.png';
import chatme from '../img/ChatMe.png';
import trading from '../img/Trading.png';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
    return(
        <body>
            <div className="body3" id="Work">
                    <h1>MY WORK.</h1>
                    <div className="work-text">
                        <div className="work-bg res-br"></div>
                        <h3>TravelBetter</h3>
                        <p>A easy and stress free way to travel any where in the world.</p>
                        <div className="work-img">
                            <img src={travel} className="travelImg" />
                        </div>
                    </div>
                    <div className="work-text2">
                            <h4 className="res-br">Featured Product</h4>
                            <h3 className="res-br">Travel Agency</h3>
                        <div className="work-para">
                               <h4 className="big-br">Featured Product</h4>
                               <h3 className="big-br">Travel Agency</h3>
                                <p>We bring to the wanderlust of Nigeria a venue to book cheap flights when one makes a flight booking online. Our online flight booking domain caters to the needs of booking flights and traces down the cheapest flights in the market to international destinations.</p>
                            <div className="work-link link2">
                                <a href="https://github.com/Jephthahndukwe/Travelbetter" target="_blank"><FaGithub className="github git" /></a> 
                                <a href="https://travelbetter.netlify.app" target="_blank"><FaExternalLinkAlt className="github external" /></a>
                            </div>
                        </div>
                    </div>

                <div className="second-work">
                    <div className="work-text3">
                        <div className="work-bg2"></div>
                            <h3>CodeMe AI Chatbox</h3>
                            <p>CodeMe: Optimizing Language Models for Dialogue</p>
                        <div className="work-img2">
                            <img src={chatme} className="chatmeImg" />
                        </div>
                    </div>
                    <div className="work-text2">
                            <h4 className="res-br">Featured Product</h4>
                            <h2 className="res-br">CodeMe AI Chatbox</h2>
                        <div className="work-para2">
                               <h4 className="big-br">Featured Product</h4>
                               <h3 className="big-br">CodeMe AI Chatbox</h3>
                                <p>We've trained a model called CodeMe which interacts in a conversational way. The dialogue format makes it possible for CodeMe to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. CodeMe is a sibling model, which is trained to follow an instruction in a prompt and provide a detailed response.</p>
                            <div className="work-link">
                                <a href="https://github.com/Jephthahndukwe/CodeMe" target="_blank"><FaGithub className="github git res-git" /></a> 
                                <a href="https://code-me.vercel.app" target="_blank"><FaExternalLinkAlt className="github external res-ext" /></a>
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
                            <h4 className="res-br">Featured Product</h4>
                            <h3 className="res-br">Trading Vendor</h3>
                        <div className="work-para2">
                               <h4 className="big-br">Featured Product</h4>
                               <h3 className="big-br">Trading Vendor</h3>
                                <p>In recent years, we have watched the Nigerian Naira weaken against US Dollar and not even the parallel market is saved from this dilemma. It's safe to say that you would want to work with the bigger guy. PraizEx has made the process thinner by making it easy to individually own a Dollar account and this comes an assurance</p>
                            <div className="work-link link2">
                                <a href="https://github.com/Jephthahndukwe/Trading" target="_blank"><FaGithub className="github git" /></a> 
                                <a href="https://tradingproject.netlify.app/" target="_blank"><FaExternalLinkAlt className="github external res-extern" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}


export default Work