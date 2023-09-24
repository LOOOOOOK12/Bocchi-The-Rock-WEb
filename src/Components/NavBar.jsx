import React from 'react'
import Logo from '../Images/Kessoku_Band_Logo.png'


function NavBAr() {
  return (
    <div>
      <div className='LOGO'>
          <img src={Logo} alt="" />
      </div>
        <ul className='Links'>
          <a href="#Home"><li>Home</li></a>
          <a href="#Synopsis"><li>Synopsis</li></a>
          <a href="#Characters"><li>Characters</li></a>
          <a href="#Songs"><li>Songs</li></a>
        </ul> 
    </div>
  )
}

export default NavBAr