import HomeStyles from '../Styles/HomeStyles'
import Title from "../assets/Bocchi_the_Rock 21_English_Logo.png"
import bg from "../assets/bgPicture.jpg"

function Home() {

  return (
    <div id= "Home" className='h-screen flex items-center justify-center relative'>
      <img src={bg} alt="" className='absolute brightness-[.2] h-screen w-full object-cover -z-10' />
      <img src={Title} alt="LOGO" className='h-32'/>
    </div>
  )
}

export default Home