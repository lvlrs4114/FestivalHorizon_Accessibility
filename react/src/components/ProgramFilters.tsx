import { genres } from '../data/program'

type Props = {
  day: string
  genre: string
  onDayChange: (value: string) => void
  onGenreChange: (value: string) => void
}

export default function ProgramFilters({ day, genre, onDayChange, onGenreChange }: Props) {
  return (
    <div className="filters">
      <div className="filter-control">
        <span>Jour du festival</span>
        <select value={day} onChange={(event) => onDayChange(event.target.value)}>
          <option value="Tous les jours">Tous les jours</option>
          <option value="Vendredi">Vendredi 18 septembre</option>
          <option value="Samedi">Samedi 19 septembre</option>
          <option value="Dimanche">Dimanche 20 septembre</option>
        </select>
      </div>
      <div className="filter-control">
        <span>Style musical</span>
        <div className="genre-dropdown">
          <div className="genre-trigger" onClick={(event) => event.currentTarget.parentElement?.classList.toggle('dropdown-open')}>
            {genre} <span aria-hidden="true">⌄</span>
          </div>
          <div className="genre-options">
            {genres.map((item) => <div className="genre-option" key={item} onClick={(event) => {
              onGenreChange(item)
              event.currentTarget.closest('.genre-dropdown')?.classList.remove('dropdown-open')
            }}>{item}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
