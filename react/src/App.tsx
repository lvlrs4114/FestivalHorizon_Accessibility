import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ArtistList from './components/ArtistList'
import ProgramFilters from './components/ProgramFilters'
import ProgramTable from './components/ProgramTable'
import FAQ from './components/FAQ'
import TicketForm from './components/TicketForm'
import BookingModal from './components/BookingModal'
import Notification from './components/Notification'
import { program } from './data/program'

export default function App() {
  const [day, setDay] = useState('Tous les jours')
  const [genre, setGenre] = useState('Tous les genres')
  const [notification, setNotification] = useState('')
  const [notificationKind, setNotificationKind] = useState<'success' | 'error'>('success')
  const [booking, setBooking] = useState<{ ticket: string; quantity: number; total: number } | null>(null)

  const concerts = useMemo(() => program.filter((concert) =>
    (day === 'Tous les jours' || concert.day === day) &&
    (genre === 'Tous les genres' || concert.genre === genre),
  ), [day, genre])

  function notify(message: string, kind: 'success' | 'error' = 'success') {
    setNotification(message)
    setNotificationKind(kind)
    window.setTimeout(() => setNotification(''), 4200)
  }

  function changeDay(value: string) {
    setDay(value)
    notify(`Programme filtré : ${value}.`)
  }

  function changeGenre(value: string) {
    setGenre(value)
    notify(`Genre sélectionné : ${value}.`)
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ArtistList />
        <section className="section program-section" id="programme">
          <div className="section-heading"><div><p className="eyebrow">Trois jours, mille histoires</p><h2>Le programme</h2></div><p className="section-aside">Choisissez votre tempo,<br />on s’occupe du reste.</p></div>
          <ProgramFilters day={day} genre={genre} onDayChange={changeDay} onGenreChange={changeGenre} />
          <ProgramTable concerts={concerts} />
          <div className="program-footnote"><span>✳</span> Les horaires sont susceptibles d’évoluer selon les conditions météo.</div>
        </section>
        <FAQ />
        <TicketForm onNotify={notify} onBooking={(ticket, quantity, total) => setBooking({ ticket, quantity, total })} />
      </main>
      <footer className="site-footer"><div className="footer-top"><a className="brand footer-brand" href="#accueil"><span className="brand-mark" aria-hidden="true">FH</span><span>Festival <strong>Horizon</strong></span></a><p>Trois jours à l’horizon.<br />Montclar · 18—20 septembre 2026</p><a href="#accueil" className="back-top">Retour en haut ↑</a></div><div className="footer-bottom"><span>© Festival Horizon 2026</span><span>Fait avec le cœur, au bord du lac.</span></div></footer>
      <div className="global-notice"><Notification message={notification} kind={notificationKind} /></div>
      <BookingModal open={booking !== null} ticketLabel={booking?.ticket ?? ''} quantity={booking?.quantity ?? 0} total={booking?.total ?? 0} onClose={() => setBooking(null)} />
    </>
  )
}
