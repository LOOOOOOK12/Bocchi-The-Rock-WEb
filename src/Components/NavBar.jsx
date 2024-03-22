import Logo from '../Images/Kessoku_Band_Logo.png'
import NavStyles from '../Styles/NavStyles'
import RightNav from './RightNav'
import { useState, useEffect } from 'react'
import Burgir from './Burgir'

function NavBar() {

  return (
    <NavStyles>
      <div className='LOGO'>
          <a href="#Home"><img src={Logo} alt='LOGO'></img></a>
      </div>
      <Burgir />
    </NavStyles>
  )
}

export default NavBar