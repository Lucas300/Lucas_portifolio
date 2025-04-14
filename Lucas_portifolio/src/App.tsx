import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Sobre from './components/sobre/Sobre'
import Home from './pages/Home'


function App() {
    return (
    <>
      <NavBar />
      <Home />
      <Sobre/>
      <Footer />
    </>
  )
}

export default App
