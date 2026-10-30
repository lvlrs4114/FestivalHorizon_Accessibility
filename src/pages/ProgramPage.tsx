import {useMemo,useState} from 'react'
import ProgramFilters from '../components/ProgramFilters'
import ProgramTable from '../components/ProgramTable'
import {program} from '../data/program'
import {concerts} from './routeData'
export default function ProgramPage(){const[day,setDay]=useState('Tous les jours'),[genre,setGenre]=useState('Tous les genres');const filtered=useMemo(()=>program.filter(c=>(day==='Tous les jours'||c.day===day)&&(genre==='Tous les genres'||c.genre===genre)),[day,genre]);return <section className="section program-section"><h1>Programme du Festival Horizon 2027</h1><p>Retrouvez les concerts du 17 au 19 septembre à Montclar.</p><ProgramFilters day={day} genre={genre} onDayChange={setDay} onGenreChange={setGenre}/><ProgramTable concerts={filtered}/><ul>{filtered.map(c=>{const item=concerts.find(x=>x.id===c.id)!;return <li key={c.id}><a href={`/concerts/${item.slug}`}>{c.artist} — {c.day} {c.time}</a></li>})}</ul><p><a href="/artistes/monochrome">Voir plus</a></p></section>}
