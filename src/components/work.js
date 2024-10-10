import React from "react";
import '../App.css';
import travel from '../img/TraveBetter.png';
import adanian from '../img/adanian.png';
import aora from '../img/aora.png';
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
                            <h3 className="res-br">Travel</h3>
                        <div className="work-para">
                               <h4 className="big-br">Featured Product</h4>
                               <h3 className="big-br">Travel</h3>
                                <p>We bring to the wanderlust of Nigeria a venue to book cheap flights when one makes a flight booking online. Our online flight booking domain caters to the needs of booking flights and traces down the cheapest flights in the market to international destinations.</p><br/>
                            <div className="work-link link2">
                                <a href="https://github.com/Jephthahndukwe/Travelbetter" target="_blank"><FaGithub className="github git" /></a> 
                                <a href="https://travelbetter.netlify.app" target="_blank"><FaExternalLinkAlt className="github external" /></a>
                            </div>
                        </div>
                    </div>

                <div className="second-work">
                    <div className="work-text3">
                        <div className="work-bg2"></div>
                            <h3>Adanian Labs Website Builder</h3>
                            <p>Build your website with zero code experience</p>
                        <div className="work-img2">
                            <img src={adanian} className="adanianImg" />
                        </div>
                    </div>
                    <div className="work-text2">
                            <h4 className="res-br">Featured Product</h4>
                            <h3 className="res-br">Adanian Labs</h3>
                        <div className="work-para para">
                               <h4 className="big-br">Featured Product</h4>
                               <h3 className="big-br">Adanian Labs</h3>
                                <p>Embark on the exciting journey of website building! Whether you"re crafting a personal blog, a professional portfolio, or an online store, the process involves selecting a platform, choosing a design, and adding content that reflects your unique style and purpose. With user-friendly tools and customizable templates, you have the creative freedom to shape your digital presence.</p>
                            <div className="work-link">
                                <a href="https://github.com/Jephthahndukwe/Adanian-Website-Builder-" target="_blank"><FaGithub className="github git res-git" /></a> 
                                <a href="https://adanian-website-builder.vercel.app/" target="_blank"><FaExternalLinkAlt className="github external res-ext" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-work">
                    <div className="work-text3">
                        <div className="work-bg2"></div>
                            <h3>Aora</h3>
                            <p>When creativity meets innovation: embark on a journey of limitless exploration with Aora</p>
                        <div className="work-img2">
                            <img src={aora} className="aoraImg" />
                        </div>
                    </div>
                    <div className="work-text2">
                            <h4 className="res-br">Featured Product</h4>
                            <h3 className="res-br">Aora</h3>
                        <div className="work-para para">
                               <h4 className="big-br">Featured Product</h4>
                               <h3 className="big-br">Aora</h3>
                                <p>Aora is a vibrant social media app that allows users to share and discover short videos, much like TikTok. Users can upload their own videos, follow others, and explore a wide range of trending content. Aora creates a space where creativity thrives, making it easy to connect with other users, build a following, and engage with a community of creators.</p>
                            <div className="work-link">
                                <a href="https://github.com/Jephthahndukwe/Aora" target="_blank"><FaGithub className="githubs git" /></a> 
                                {/* <a href="https://tradingproject.netlify.app/" target="_blank"><FaExternalLinkAlt className="github external res-extern" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}


export default Work