import Header from './components/Header'
import PageMetadata from './components/PageMetadata'
import HomePage from './pages/HomePage'
import ProgramPage from './pages/ProgramPage'
import ArtistPage from './pages/ArtistPage'
import ConcertPage from './pages/ConcertPage'
import TicketPage from './pages/TicketPage'
import PracticalInfoPage from './pages/PracticalInfoPage'
import ArchivePage from './pages/ArchivePage'
import NotFoundPage from './pages/NotFoundPage'
import { artists } from './data/artists'
import { program } from './data/program'
import { festivalEdition } from './data/festival'

export default function App() {
    const path = window.location.pathname.replace(/\/$/, '') || '/', parts = path.split('/').filter(Boolean);
    let title = 'Festival Horizon 2027 — musique au bord du lac', description: string | undefined, page
    if (path === '/') {
        page = <HomePage/>
    } else if (path === '/programme') {
        title = 'Programme des concerts — Festival Horizon 2027';
        page = <ProgramPage/>
    } else if (parts[0] === 'artistes' && parts[1]) {
        const artist = artists.find(item => item.id === parts[1]);
        title = artist ? `${artist.name} — artistes du Festival Horizon 2027` : 'Artiste introuvable — Festival Horizon 2027';
        description = artist ? `${artist.name} (${artist.genre}) : ${artist.description} Festival Horizon 2027, à Montclar.` : 'La fiche artiste demandée est introuvable au Festival Horizon 2027.';
        page = <ArtistPage slug={parts[1]}/>
    } else if (parts[0] === 'concerts' && parts[1]) {
        const concert = program.find(item => item.slug === parts[1]);
        title = concert ? `${concert.artist} — ${concert.day} au Festival Horizon 2027` : 'Concert introuvable — Festival Horizon 2027';
        const dateLabel = concert ? festivalEdition.dateLabels[concert.day as keyof typeof festivalEdition.dateLabels] : 'date à confirmer';
        description = concert ? `${concert.artist} joue le ${dateLabel} à ${concert.time}, sur la ${concert.stage} à Montclar, au Festival Horizon 2027.` : 'Le concert demandé est introuvable au Festival Horizon 2027.';
        page = <ConcertPage slug={parts[1]}/>
    } else if (path === '/billetterie') page = <TicketPage/>
    else if (path === '/infos-pratiques') {
        title = 'Accès et infos pratiques — Festival Horizon 2027';
        page = <PracticalInfoPage/>
    } else if (path === '/archives/2026') {
        title = 'Festival Horizon 2026 — archives';
        page = <ArchivePage/>
    } else page = <NotFoundPage/>
    return <><PageMetadata path={path} title={title} description={description}/><Header/>
        <main>{page}</main>
        <footer className="site-footer">
            <div className="footer-top"><a className="brand" href="/">Festival <strong>Horizon</strong></a>
                <nav aria-label="Navigation de pied de page"><a href="/programme">Programme</a> · <a
                    href="/billetterie">Billetterie</a> · <a href="/infos-pratiques">Infos pratiques</a></nav>
                <a href="/archives/2026">Archives 2026</a></div>
            <div className="footer-bottom">© Festival Horizon 2027</div>
        </footer>
    </>
}
