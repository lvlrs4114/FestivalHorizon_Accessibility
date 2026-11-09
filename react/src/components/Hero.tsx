export default function Hero() {
    return (
        <section className="hero" id="accueil">
            <img className="hero-image" src="/assets/Horizon.png" alt=""/>
            <div className="hero-shade"/>
            <div className="hero-content">
                <p className="eyebrow light-eyebrow">Montclar · au bord du lac</p>
                <h1>Trois jours<br/>à l’horizon.</h1>
                <p className="hero-intro">De la musique, des rencontres et des nuits qui n’en finissent pas.</p>
                <p className="hero-date">18 — 20 septembre 2026</p>
                <a className="button button-light" href="#billetterie">Je réserve ma place <span
                    aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-side-note">Une parenthèse au bord de l’eau <span>✳</span></div>
            <div className="hero-index">01 <span>/</span> 03</div>
        </section>
    )
}
