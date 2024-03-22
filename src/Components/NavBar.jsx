import Logo from '../Images/Kessoku_Band_Logo.png'
import NavStyles from '../Styles/NavStyles'
import Burgir from './Burgir'

function NavBAr() {

  return (
    <NavStyles>
      <div className='LOGO'>
          <a href="#Home"><img src={Logo} alt='LOGO'></img></a>
      </div>
      <Burgir />
    </NavStyles>
  )
}

export default NavBAr