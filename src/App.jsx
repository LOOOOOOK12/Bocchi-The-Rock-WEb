import './App.css'
import Nav from './Components/NavBAr'
import Home from "./Pages/Home"
import Synopsis from "./Pages/Synopsis"
import Characters from './Pages/Characters'
import Songs from "./Pages/Songs"

function App() {
  return (
    <>
    <Nav/>
      <Home/>
      <Synopsis/>
      <Characters/>
      <Songs/>
    </>
  )
}

export default App
