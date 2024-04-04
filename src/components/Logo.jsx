import React from 'react'
import myImage from '../assets/logo.png'

function Logo({width = '100px'}) {
  return (
    <div className='w-20 h-50'> 
       <img src={myImage} alt="My Image" />
    </div>
  )
}

export default Logo;