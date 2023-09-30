import './App.css'
import Nav from './Components/NavBAr'
import Home from "./Pages/Home"
import Synopsis from "./Pages/Synopsis"
import Characters from './Pages/Characters'
import Songs from "./Pages/Songs"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <Synopsis/>
      <Characters/>
      <Songs/>
      <Footer/>
    </>
  )
}

export default App
