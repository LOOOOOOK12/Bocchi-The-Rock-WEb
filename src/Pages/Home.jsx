import HomeStyles from '../Styles/HomeStyles'
import Title from "../assets/Bocchi_the_Rock 21_English_Logo.png"

function Home() {

  return (
    <HomeStyles id= "Home"> 
      <img src={Title} alt="LOGO" />
    </HomeStyles>
  )
}

export default Home