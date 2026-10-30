import type { Concert } from '../data/program'

export default function ProgramTable({ concerts }: { concerts: Concert[] }) {
  return (
    <div className="table-scroll">
      <table className="program-table">
        <thead><tr><td>Artiste</td><td>Scène</td><td>Jour</td><td>Horaire</td></tr></thead>
        <tbody>
          {concerts.length ? concerts.map((concert) => (
            <tr key={concert.id}>
              <td><strong>{concert.artist}</strong><span className="table-genre">{concert.genre}</span></td>
              <td>{concert.stage}</td><td>{concert.day}</td><td className="time-cell">{concert.time}</td>
            </tr>
          )) : <tr><td className="empty-state" colSpan={4}>Aucun concert ne correspond à ces filtres.</td></tr>}
        </tbody>
      </table>
    </div>
  )
}
