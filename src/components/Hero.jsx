import HeroCard from "./HeroCard"
import TextReveal from "./TextReveal"
import determinazione from "../assets/immagini/determinazione.webp"
import condivisione from "../assets/immagini/condivisione.webp"
import gioia from "../assets/immagini/gioia.webp"
import unione from "../assets/immagini/unione.webp"


function Hero() {
    return (
        <div className="hero-layout">
            <section className="hero" id="hero">
                <div className="hero-logo"></div>
                <div className="hero-text">
                    <TextReveal as="h1" className="font-bebas-neue">
                        Disciplina, tecnica e <span>carattere</span>.
                    </TextReveal>
                    <TextReveal as="h3" delay={0.08} className="font-oswald">
                        Dove la <span>nobile arte</span> incontra la <span>passione</span>
                    </TextReveal>
                    </div>
                    <a className="cta-hero" href="#storia">
                        Scopri di più
                    </a>
            </section>
                <div className="hero-cards">
                    <HeroCard image={determinazione} title={"Determinazione"} />
                    <HeroCard image={condivisione} title={"Condivisione"} />
                    <HeroCard image={gioia} title={"Sorrisi"} />
                    <HeroCard image={unione} title={"Unione"} />
                </div>
        </div>
    )

}

export default Hero
