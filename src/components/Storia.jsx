import laStoria from '../assets/immagini/la_storia.webp'
import TextReveal from './TextReveal'

function Storia() {
  return (
    <>
    <section id="storia" aria-labelledby="storia-title" className='bg-primary section'>
      <TextReveal as="h2" id="storia-title" className="font-oswald section-title text-white">La nostra storia</TextReveal>
      <div className="storia-content">
        <div className="storia-image">
          <img src={laStoria} alt="La storia della Pugilistica Spinea Ring" loading="lazy" />
        </div>
        <TextReveal className="storia-text text-white font-inter">
          La Pugilistica Spinea Ring nasce nel 2004 dalla passione e dall’esperienza di <span>Mauro Manfreo</span>  e <span>Angelo Ruzza</span>, due pugili veneziani che hanno deciso di trasformare una vita trascorsa sul ring in qualcosa da tramandare. <br />
          <div className="text-spacer"></div>
          Dopo anni di esperienza come atleti, Mauro e Angelo hanno portato a Spinea non soltanto la loro conoscenza tecnica, ma soprattutto un amore profondo per la <span>nobile arte</span> e per i valori che da sempre la accompagnano: <span>disciplina, sacrificio, rispetto e determinazione</span>. <br />
          <div className="text-spacer"></div>
          Da questa visione nasce la <span>Pugilistica Spinea Ring</span>: una società in cui il pugilato non significa semplicemente imparare a colpire, ma crescere come atleta e come persona. <br />
          <div className="text-spacer"></div>
          Negli anni la palestra è diventata un punto d'incontro per chi vuole avvicinarsi alla boxe, per chi desidera mettersi alla prova e per chi sceglie di vivere questo sport a livello agonistico. <span>Generazioni diverse</span>, unite dalla <span>stessa passione</span> e dallo stesso rumore dei guantoni sul sacco. 
        </TextReveal>
      </div>
    <div className="section-spacer"></div>
    </section>
    </>
  )
}

export default Storia
