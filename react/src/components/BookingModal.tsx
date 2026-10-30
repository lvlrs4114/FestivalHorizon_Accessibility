type Props = {
  open: boolean
  ticketLabel: string
  quantity: number
  total: number
  onClose: () => void
}

export default function BookingModal({ open, ticketLabel, quantity, total, onClose }: Props) {
  if (!open) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="booking-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose}>×</button>
        <div className="modal-icon">✳</div>
        <p className="eyebrow">C’est dans la poche</p>
        <h2>À très bientôt<br />à l’Horizon !</h2>
        <p className="modal-copy">Votre réservation est confirmée sur cet appareil.</p>
        <div className="booking-summary"><span>{ticketLabel} · {quantity} {quantity > 1 ? 'billets' : 'billet'}</span><strong>{total} €</strong></div>
        <button className="button modal-button" type="button" onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}
