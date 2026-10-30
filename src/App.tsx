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

export default function App(){const path=window.location.pathname.replace(/\/$/,'')||'/',parts=path.split('/').filter(Boolean);let title='Festival Horizon 2027 — musique au bord du lac',page
if(path==='/'){page=<HomePage/>}
else if(path==='/programme'){title='Festival Horizon';page=<ProgramPage/>}
else if(parts[0]==='artistes'&&parts[1])page=<ArtistPage slug={parts[1]}/>
else if(parts[0]==='concerts'&&parts[1])page=<ConcertPage slug={parts[1]}/>
else if(path==='/billetterie')page=<TicketPage/>
else if(path==='/infos-pratiques')page=<PracticalInfoPage/>
else if(path==='/archives/2026'){title='Festival Horizon 2026 — archives';page=<ArchivePage/>}
else page=<NotFoundPage/>
return <><PageMetadata path={path} title={title}/><Header/><main>{page}</main><footer className="site-footer"><div className="footer-top"><a className="brand" href="/">Festival <strong>Horizon</strong></a><nav aria-label="Navigation de pied de page"><a href="/programme">Programme</a> · <a href="/billetterie">Billetterie</a> · <a href="/infos-pratiques">Infos pratiques</a></nav><a href="/archives/2026">Archives 2026</a></div><div className="footer-bottom">© Festival Horizon 2027</div></footer></>}
