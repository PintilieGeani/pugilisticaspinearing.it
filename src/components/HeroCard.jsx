import TextReveal from './TextReveal'
const HeroCard = ({ image, title }) => {
    return (
        <article
            className="hero-card"
            style={{ backgroundImage: image ? `url(${image})` : undefined }}
        >
            <TextReveal as="h2" className="hero-card__title">{title}</TextReveal>
        </article>
    )
}

export default HeroCard
