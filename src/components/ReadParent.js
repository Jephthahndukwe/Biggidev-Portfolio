import React from 'react'
import AnimCursor from './animated-cursor'
import Navbar from './Navbar'
import Reads from './Reads'
import Svg from './svg'

function ReadParent() {
  return (
    <div>
        {/* <Navbar/> */}
        <AnimCursor/>
        <Svg/>
        <Reads/>
    </div>
  )
}

export default ReadParent