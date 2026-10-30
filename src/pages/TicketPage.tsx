import {useState} from 'react'
import TicketForm from '../components/TicketForm'
import FAQ from '../components/FAQ'
import BookingModal from '../components/BookingModal'
import Notification from '../components/Notification'
export default function TicketPage(){const[booking,setBooking]=useState<{ticket:string;quantity:number;total:number}|null>(null),[message,setMessage]=useState('');return <><section className="section"><h1>Billetterie Festival Horizon</h1><p>Pass 1 jour : 49 € · Pass 3 jours : 119 €. Échange possible jusqu’au 1er septembre 2027.</p><a href="/programme">Voir le programme</a></section><TicketForm onNotify={m=>setMessage(m)} onBooking={(ticket,quantity,total)=>setBooking({ticket,quantity,total})}/><Notification message={message} kind="success"/><FAQ/><BookingModal open={booking!==null} ticketLabel={booking?.ticket??''} quantity={booking?.quantity??0} total={booking?.total??0} onClose={()=>setBooking(null)}/></>}
