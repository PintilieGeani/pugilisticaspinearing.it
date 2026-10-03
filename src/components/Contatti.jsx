import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextReveal from './TextReveal'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'

function Contatti() {
  return (
    <section id="contatti" aria-labelledby="contatti-title" className="bg-primary section">
      <TextReveal as="h2" id="contatti-title" className="font-oswald section-title text-white">Contatti</TextReveal>
      <div className="contatti-content">
        <div className="contatti-text text-white font-inter">
          <div className="contatti-item">
            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
            <TextReveal>
              <h3 className="font-oswald">Dove siamo</h3>
              <address>Via Veronese, 54/a<br />Spinea, Venezia</address>
            </TextReveal>
          </div>
          <div className="text-spacer"></div>
          <div className="contatti-item">
            <FontAwesomeIcon icon={faClock} aria-hidden="true" />
            <TextReveal>
              <h3 className="font-oswald">Orari</h3>
              <p>Lunedì, mercoledì e venerdì<br />dalle 18:00 alle 20:00</p>
            </TextReveal>
          </div>
          <div className="text-spacer"></div>
          <div className="contatti-item">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            <TextReveal>
              <h3 className="font-oswald">Email</h3>
              <a href="mailto:pugilisticaspinearing@gmail.it">pugilisticaspinearing@gmail.it</a>
            </TextReveal>
          </div>
          <div className="text-spacer"></div>
          <div className="contatti-item">
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
            <TextReveal>
              <h3 className="font-oswald">Telefono</h3>
              <a href="tel:+393398628332">339 862 8332</a>
            </TextReveal>
          </div>
        </div>
        <div className="contatti-map">
          <iframe
            title="Dove siamo: Via Veronese, 54/a, Spinea, Venezia"
            src="https://www.google.com/maps?q=Via%20Veronese%2054%2Fa%2C%20Spinea%2C%20Venezia&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="section-spacer"></div>
    </section>
  )
}

export default Contatti
