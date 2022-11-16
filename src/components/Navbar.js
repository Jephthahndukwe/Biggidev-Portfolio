import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <ul>
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
    </div>
  )
}

export default Navbar
