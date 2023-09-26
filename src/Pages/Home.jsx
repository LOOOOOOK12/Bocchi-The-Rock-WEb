import HomeStyles from '../Styles/HomeStyles'
import homeLogo from '../assets/Kessoku_Band_Logo.png'

function Home() {

  return (
    <HomeStyles id= "Home"> 
        <img src={homeLogo} alt="LOGO" />
    </HomeStyles>
  )
}

export default Home