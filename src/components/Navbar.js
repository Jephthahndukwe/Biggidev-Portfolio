import React, { Component } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import '../index'


class Navbar extends Component {
state = {  clicked : false };

handleClick = () => {
   this.setState({clicked: !this.state.clicked})
}

  render () {
  return (
    <div className='navbar'>
    <header>
      <nav>
        <ul id='navbar'  className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li>
                <Link to='/About_section'>About</Link>
            </li>
            <li>
                <Link to='/work2'>Work</Link>
            </li>
             <li>
                <Link to='/resume'>Resume</Link>
            </li>
            <li>
                <Link to='/ContactTwo'>Contact</Link>
            </li>
        </ul>
      </nav>
      <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </header>
    </div>
  )
  }
}

export default Navbar
