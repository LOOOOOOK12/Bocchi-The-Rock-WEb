import './App.css'
import NavBar from './Components/NavBAr'
import Home from "./Pages/Home"
import Synopsis from "./Pages/Synopsis"
import Band from './Pages/Band'
import Characters from './Pages/Characters'
import Char from './Pages/Char'
import Songs from "./Pages/Songs"
import Footer from "./Components/Footer"


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Synopsis/>
      <Band/>
      <Characters/>
      <Char/>
      <Songs/>
      <Footer/>
    </>
  )
}

export default App
