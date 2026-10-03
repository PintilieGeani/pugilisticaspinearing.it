import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import logoTrasparente from '../assets/loghi/logo-trasparenza.png'
import './AppFooter.css'
import TextReveal from './TextReveal'

// Inserire qui gli URL ufficiali dei profili quando disponibili.
const socialLinks = [
  { name: 'Facebook', icon: faFacebookF, href: "https://www.facebook.com/groups/133340474493/" },
  { name: 'Instagram', icon: faInstagram, href: "https://www.instagram.com/pugilistica.spinea.ring/" },
  { name: 'WhatsApp', icon: faWhatsapp, href: 'https://wa.me/393398628332' },
]

const sections = [
  { label: 'Home', href: '/#hero' },
  { label: 'La nostra storia', href: '/#storia' },
  { label: 'La nostra visione', href: '/#obiettivi' },
  { label: 'Contatti', href: '/#contatti' },
]

function AppFooter() {
  return (
    <footer className="app-footer font-inter">
      <div className="app-footer__content">
        <nav className="app-footer__sections" aria-labelledby="footer-sections-title">
          <TextReveal as="h2" id="footer-sections-title" className="app-footer__title font-oswald">Esplora il sito</TextReveal>
          <TextReveal as="ul" className="app-footer__list">
            {sections.map(({ label, href }) => (
              <li key={href}>
                <a href={href}><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />{label}</a>
              </li>
            ))}
          </TextReveal>
        </nav>

        <div className="app-footer__brand">
          <a className="app-footer__logo-link" href="/#hero" aria-label="Pugilistica Spinea Ring: torna alla home">
            <img className="app-footer__logo" src={logoTrasparente} alt="Pugilistica Spinea Ring" loading="lazy" />
          </a>
          <TextReveal as="h2" className="app-footer__title font-oswald">Pugilistica Spinea Ring</TextReveal>
          <TextReveal as="p">La passione per la nobile arte, dal 2004.</TextReveal>
          <div className="app-footer__socials" role="group" aria-label="Seguici sui social">
            {socialLinks.map(({ name, icon, href }) => (
              <a key={name} className="app-footer__social" href={href ?? '#'} onClick={href ? undefined : (event) => event.preventDefault()} target={href ? '_blank' : undefined} rel={href ? 'noopener noreferrer' : undefined} aria-label={href ? `${name} (si apre in una nuova scheda)` : name} title={name}>
                <FontAwesomeIcon icon={icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <section className="app-footer__contacts" aria-labelledby="footer-contacts-title">
          <TextReveal as="h2" id="footer-contacts-title" className="app-footer__title font-oswald">Vieni ad allenarti</TextReveal>
          <TextReveal as="ul" className="app-footer__list">
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=Via+Veronese+54%2Fa+Spinea+Venezia" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
                <address>Via Veronese, 54/a<br />Spinea, Venezia</address>
              </a>
            </li>
            <li><a href="tel:+393398628332"><FontAwesomeIcon icon={faPhone} aria-hidden="true" />339 862 8332</a></li>
            <li><a href="mailto:pugilisticaspinearing@gmail.it"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />pugilisticaspinearing@gmail.it</a></li>
            <li className="app-footer__hours"><FontAwesomeIcon icon={faClock} aria-hidden="true" /><span>Lunedì, mercoledì e venerdì<br />18:00 – 20:00</span></li>
          </TextReveal>
        </section>
      </div>
      <div className="app-footer__bottom">
        <small>&copy; {new Date().getFullYear()} Pugilistica Spinea Ring. Tutti i diritti riservati.</small>
        <a href="/#hero">Torna in alto <FontAwesomeIcon icon={faArrowRight} rotation={270} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default AppFooter
