import Logo from '../Images/Kessoku_Band_Logo.png'
import Logo2 from '../assets/bocchi-the-rock-logo-00522AF4F8-seeklogo.com.png'
import NavStyles from '../Styles/NavStyles'
import { useState, useEffect } from 'react'

function NavBAr() {

  const [isNavActive, setNavActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavStyles className={isNavActive ? 'active' : ''}>
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