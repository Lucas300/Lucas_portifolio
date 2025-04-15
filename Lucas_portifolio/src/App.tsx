import './App.css'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Projetosfullstack from './components/projetos/projetosfullstack/ProjetosFullstack'
import Skills from './components/skills/skills'
import Sobre from './components/sobre/Sobre'
import Home from './pages/Home'


function App() {
    return (
    <>
      <NavBar />
      <Home />
      <Sobre/>
      <Skills />
      <Projetosfullstack />
      <Footer />
    </>
  )
}

export default App
