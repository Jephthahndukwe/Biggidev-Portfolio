import React from "react";
import { FaStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="footer">
                  <h3>Designed & built by Jephthah Ndukwe</h3>
                <div className="footer-p">
                    <p><FaStar className="icon star"/> <span>5,507</span></p>
                    <p><FaShareAlt  className="icon share"/><span>2,507</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer