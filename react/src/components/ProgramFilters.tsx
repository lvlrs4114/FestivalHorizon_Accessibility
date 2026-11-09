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
        <label htmlFor="program-day">Jour du festival</label>
        <select id="program-day" value={day} onChange={(event) => onDayChange(event.target.value)}>
          <option value="Tous les jours">Tous les jours</option>
          <option value="Vendredi">Vendredi 18 septembre</option>
          <option value="Samedi">Samedi 19 septembre</option>
          <option value="Dimanche">Dimanche 20 septembre</option>
        </select>
      </div>
      <div className="filter-control">
        <label htmlFor="program-genre">Style musical</label>
        <select id="program-genre" value={genre} onChange={(event) => onGenreChange(event.target.value)}>
          <option value="Tous les genres">Tous les genres</option>
          {genres.filter((item) => item !== 'Tous les genres').map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
