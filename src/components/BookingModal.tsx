import {useEffect,useRef} from 'react'
type Props={open:boolean;ticketLabel:string;quantity:number;total:number;onClose:()=>void}
export default function BookingModal({open,ticketLabel,quantity,total,onClose}:Props){const ref=useRef<HTMLDialogElement>(null),returnFocus=useRef<HTMLElement|null>(null)
useEffect(()=>{const dialog=ref.current;if(!dialog)return;if(open){returnFocus.current=document.activeElement as HTMLElement;dialog.showModal()}else if(dialog.open)dialog.close()},[open])
function close(){ref.current?.close();onClose()}
function restoreFocus(){returnFocus.current?.focus()}
return <dialog ref={ref} className="booking-modal" aria-labelledby="booking-title" onClose={restoreFocus} onCancel={event => { event.preventDefault(); onClose(); ref.current?.close() }}><button className="modal-close" type="button" onClick={close} aria-label="Fermer la confirmation">×</button><div className="modal-icon" aria-hidden="true">✳</div><p className="eyebrow">C’est dans la poche</p><h2 id="booking-title">À très bientôt<br/>à l’Horizon !</h2><p className="modal-copy">Votre réservation est confirmée sur cet appareil.</p><div className="booking-summary"><span>{ticketLabel} · {quantity} {quantity>1?'billets':'billet'}</span><strong>{total} €</strong></div><button className="button modal-button" type="button" onClick={close}>Fermer</button></dialog>}
