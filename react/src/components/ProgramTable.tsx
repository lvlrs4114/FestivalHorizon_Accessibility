import type { Concert } from '../data/program'

export default function ProgramTable({concerts}: { concerts: Concert[] }) {
    return (
        <div className="table-scroll">
            <table className="program-table">
                <caption>Programme des concerts correspondant aux filtres sélectionnés</caption>
                <caption>Programme des concerts correspondant aux filtres sélectionnés</caption>
                <thead>
                <tr>
                    <th scope="col">Artiste</th>
                    <th scope="col">Scène</th>
                    <th scope="col">Jour</th>
                    <th scope="col">Horaire</th>
                </tr>
                </thead>
                <tbody>
                {concerts.length ? concerts.map((concert) => (
                    <tr key={concert.id}>
                        <td><strong>{concert.artist}</strong><span className="table-genre">{concert.genre}</span></td>
                        <td>{concert.stage}</td>
                        <td>{concert.day}</td>
                        <td className="time-cell">{concert.time}</td>
                    </tr>
                )) : <tr>
                    <td className="empty-state" colSpan={4}>Aucun concert ne correspond à ces filtres.</td>
                </tr>}
                </tbody>
            </table>
        </div>
    )
}
