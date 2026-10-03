import Contatti from '../components/Contatti.jsx'
import Hero from '../components/Hero.jsx'
import Obiettivi from '../components/Visione.jsx'
import Storia from '../components/Storia.jsx'

const Home = () => {
  return (
    <div className="home-sections">
      <Hero />
      <div className="app-main">
      <Storia />
      <Obiettivi />
      <Contatti />
      </div>
    </div>
  )
}

export default Home