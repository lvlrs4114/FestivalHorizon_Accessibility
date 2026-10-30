import Hero from '../components/Hero'
import ArtistList from '../components/ArtistList'
import { program } from '../data/program'
import { festivalEdition } from '../data/festival'
import { concertSlug } from './routeData'
import FestivalIntro from '../components/FestivalIntro'
import InteractionDemo from '../components/InteractionDemo'
import LayoutShiftImage from '../components/LayoutShiftImage'
export default function HomePage() { return <><Hero/><ArtistList/><section className="section"><FestivalIntro/><p>Trois jours de musique au bord du lac, du 17 au 19 septembre {festivalEdition.year}.</p><figure className="layout-shift-photo"><LayoutShiftImage/><figcaption>Le site s’illumine à la tombée du jour.</figcaption></figure><InteractionDemo/><h2>Prochains concerts</h2>{program.slice(0,3).map((c,i)=><p key={c.id}><a href={`/concerts/${concertSlug(c,i)}`}>{c.artist} — {c.day} {c.time}</a></p>)}<a className="button" href="/billetterie">Réserver mes billets</a><p><a href="/infos-pratiques">En savoir plus</a></p></section></> }
