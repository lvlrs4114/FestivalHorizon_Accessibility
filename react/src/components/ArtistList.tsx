import { artists } from '../data/artists'

export default function ArtistList() {
  return (
    <section className="section artists-section" id="artistes">
      <div className="section-heading">
        <div><p className="eyebrow">Les visages du festival</p><h2>À l’affiche</h2></div>
        <p className="section-aside">Quatre univers, un même horizon.<br />Et vous, au premier rang.</p>
      </div>
      <ul className="artist-grid">
        {artists.map((artist, index) => (
          <li className="artist-card" key={artist.id}>
            <article>
            <div className="artist-photo-wrap">
              <img className="artist-photo" src={artist.image} alt={`${artist.name} sur scène`} />
              <span className="artist-number">0{index + 1}</span>
              <button className="artist-info" type="button" onClick={() => window.alert(`${artist.name} · ${artist.genre}`)} aria-label={`En savoir plus sur ${artist.name}`}>i</button>
            </div>
            <div className="artist-meta"><h3>{artist.name}</h3><span>{artist.genre}</span></div>
            <p>{artist.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
