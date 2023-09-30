import HomeStyles from '../Styles/HomeStyles'
import Title from "../assets/Bocchi_the_Rock 21_English_Logo.png"
import homeLogo from '../assets/Kessoku_Band_Logo.png'
import Logo2 from '../assets/bocchi-the-rock-logo-00522AF4F8-seeklogo.com.png'

function Home() {

  return (
    <HomeStyles id= "Home"> 
        <img src={Title} alt="LOGO" />
    </HomeStyles>
  )
}

export default Home