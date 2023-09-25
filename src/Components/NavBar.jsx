import React from 'react'
import Logo from '../Images/Kessoku_Band_Logo.png'
import NavStyles from '../Styles/NavStyles'

function NavBAr() {
  return (
    <NavStyles>
      <div className='LOGO'>
          <a href="#Home"><img src={Logo} alt='LOGO'></img></a>
      </div>
        <ul className='links'>
          <a href="#Home"><li>Home</li></a>
          <a href="#Synopsis"><li>Synopsis</li></a>
          <a href="#Characters"><li>Characters</li></a>
          <a href="#Songs"><li>Songs</li></a>
        </ul> 
    </NavStyles>
  )
}

export default NavBAr