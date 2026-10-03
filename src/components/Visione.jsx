import TextReveal from './TextReveal'

function Obiettivi() {
  return (
    <section id="obiettivi" aria-labelledby="obiettivi-title" className='bg-vision section'>
      <TextReveal as="h2" id="obiettivi-title" className="font-oswald section-title text-white">La nostra visione</TextReveal>
      <div className="vision-content">
        <TextReveal className="vision-text text-white font-inter">
          <span>Il pugilato è per tutti</span>
          <div className="text-spacer"></div>
          La nostra visione è semplice: <span>rendere il pugilato uno sport accessibile a tutti</span>.
          <div className="text-spacer"></div>
          Vogliamo che la Pugilistica Spinea Ring continui a essere una palestra aperta, un luogo dove chiunque possa sentirsi il benvenuto, indipendentemente dall’età, dall’esperienza o dagli obiettivi personali.
          <div className="text-spacer"></div>
          Che tu voglia salire sul ring, migliorare la tua forma fisica o semplicemente scoprire qualcosa di nuovo, per noi il punto di partenza è sempre lo stesso: <span>la voglia di mettersi in gioco</span>.
          <div className="text-spacer"></div>
          Il nostro obiettivo è avvicinare sempre più persone allo sport e far conoscere il pugilato per ciò che realmente è: non soltanto confronto e competizione, ma <span>disciplina, rispetto, tecnica e crescita personale</span>.
          <div className="text-spacer"></div>
          Vogliamo trasmettere la passione per la nobile arte creando un ambiente in cui <span>allenarsi, imparare, migliorarsi</span> e condividere la fatica con gli altri.
          <div className="text-spacer"></div>
          Perché non serve essere un pugile per entrare in palestra. <span>A volte basta entrarci per scoprire di esserlo</span>.
        </TextReveal>
      </div>
      <div className="section-spacer"></div>
    </section>
  )
}

export default Obiettivi
