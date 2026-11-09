import { useEffect, useRef } from 'react'

type Props = {
  open: boolean
  ticketLabel: string
  quantity: number
  total: number
  onClose: () => void
}

export default function BookingModal({ open, ticketLabel, quantity, total, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog ref={dialogRef} className="booking-modal" aria-labelledby="booking-title"
      onCancel={(event) => { event.preventDefault(); onClose() }}>
      <button className="modal-close" type="button" onClick={onClose} aria-label="Fermer la confirmation">×</button>
      <div className="modal-icon" aria-hidden="true">✳</div>
      <p className="eyebrow">C’est dans la poche</p>
      <h2 id="booking-title">À très bientôt<br />à l’Horizon !</h2>
      <p className="modal-copy">Votre réservation est confirmée sur cet appareil.</p>
      <div className="booking-summary"><span>{ticketLabel} · {quantity} {quantity > 1 ? 'billets' : 'billet'}</span><strong>{total} €</strong></div>
      <button className="button modal-button" type="button" onClick={onClose}>Fermer</button>
    </dialog>
  )
}
