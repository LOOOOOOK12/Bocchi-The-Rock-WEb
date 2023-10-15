import Logo from '../Images/Kessoku_Band_Logo.png'
import NavStyles from '../Styles/NavStyles'
import RightNav from './RightNav'
import { useState, useEffect } from 'react'
import Burgir from './Burgir'

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
      <Burgir />
    </NavStyles>
  )
}

export default NavBAr