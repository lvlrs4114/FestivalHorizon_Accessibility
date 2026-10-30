import { artists } from '../data/artists'

export default function ArtistList() {
  return (
    <section className="section artists-section" id="artistes">
      <div className="section-heading">
        <div><p className="eyebrow">Les visages du festival</p><h2>À l’affiche</h2></div>
        <p className="section-aside">Quatre univers, un même horizon.<br />Et vous, au premier rang.</p>
      </div>
      <div className="artist-grid">
        {artists.map((artist, index) => (
          <article className="artist-card" key={artist.id}>
            <div className="artist-photo-wrap">
              <img className="artist-photo" src={artist.image} alt={`${artist.name} sur scène`} />
              <span className="artist-number">0{index + 1}</span>
              <a className="artist-info" href={`/artistes/${artist.id}`} aria-label={`Découvrir ${artist.name}`}>i</a>
            </div>
            <div className="artist-meta"><h3>{artist.name}</h3><span>{artist.genre}</span></div>
            <p>{artist.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
