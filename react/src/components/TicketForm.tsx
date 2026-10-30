import { useState, type FormEvent } from 'react'
import Notification from './Notification'

type Values = { firstName: string; lastName: string; email: string; phone: string; ticket: string; quantity: number; conditions: boolean }
type Props = { onBooking: (ticketLabel: string, quantity: number, total: number) => void; onNotify: (message: string, kind?: 'success' | 'error') => void }

const prices: Record<string, number> = { '1 jour': 49, '3 jours': 119 }
const initialValues: Values = { firstName: '', lastName: '', email: '', phone: '', ticket: '1 jour', quantity: 1, conditions: false }

export default function TicketForm({ onBooking, onNotify }: Props) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formDataPreview, setFormDataPreview] = useState('')
  const total = prices[values.ticket] * values.quantity

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }))
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (!values.firstName.trim()) next.firstName = 'Saisissez votre prénom.'
    if (!values.lastName.trim()) next.lastName = 'Saisissez votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Saisissez une adresse e-mail valide.'
    if (!values.phone.trim()) next.phone = 'Saisissez votre téléphone.'
    if (values.quantity < 1 || values.quantity > 8) next.quantity = 'Choisissez entre 1 et 8 billets.'
    if (!values.conditions) next.conditions = 'Vous devez accepter les conditions.'
    setErrors(next)
    if (Object.keys(next).length) {
      onNotify('Certains champs sont à vérifier avant de continuer.', 'error')
      return
    }
    const data = new FormData(event.currentTarget)
    setFormDataPreview(Array.from(data.entries()).map(([key, value]) => `${key}=${value}`).join(' · '))
    onNotify('Votre réservation est prête.', 'success')
    onBooking(values.ticket, values.quantity, total)
  }

  return (
    <section className="section ticket-section" id="billetterie">
      <div className="ticket-copy"><p className="eyebrow light-eyebrow">On se retrouve là-bas ?</p><h2>Votre place<br />vous attend.</h2><p>Choisissez votre format et retrouvons-nous au bord du lac.</p>
        <div className="ticket-price-note"><span>À partir de</span><strong>49 €</strong><span>par personne</span></div>
        <div className="ticket-deco" aria-hidden="true">HORIZON<br /><span>18—20 · 09 · 26</span></div>
      </div>
      <div className="ticket-form-wrap">
        <div className="form-topline"><span>RÉSERVATION EN LIGNE</span><span>01 / 02</span></div>
        <form onSubmit={submit} noValidate>
          <div className="form-grid">
            <div className="field"><label>Prénom</label><input id="first-name" name="firstName" type="text" value={values.firstName} placeholder="Camille" onChange={(event) => update('firstName', event.target.value)} />{errors.firstName && <small className="field-error">{errors.firstName}</small>}</div>
            <div className="field"><label htmlFor="last-name">Nom</label><input id="last-name" name="lastName" type="text" value={values.lastName} placeholder="Martin" onChange={(event) => update('lastName', event.target.value)} />{errors.lastName && <small className="field-error">{errors.lastName}</small>}</div>
          </div>
          <div className="form-grid">
            <div className="field"><label htmlFor="email-address">Adresse e-mail</label><input id="email-address" name="email" type="email" value={values.email} placeholder="camille@exemple.fr" onChange={(event) => update('email', event.target.value)} />{errors.email && <small className="field-error">{errors.email}</small>}</div>
            <div className="field"><label htmlFor="phone-number">Téléphone</label><input id="phone-number" name="phone" type="tel" value={values.phone} placeholder="06 12 34 56 78" onChange={(event) => update('phone', event.target.value)} />{errors.phone && <small className="field-error">{errors.phone}</small>}</div>
          </div>
          <div className="field ticket-choice"><span>Votre pass</span>
            <div className="ticket-options">
              {Object.entries(prices).map(([ticket, price]) => <label className={`ticket-option ${values.ticket === ticket ? 'selected' : ''}`} key={ticket}>
                <input type="radio" name="ticket" value={ticket} checked={values.ticket === ticket} onChange={() => update('ticket', ticket)} />
                <span><strong>{ticket}</strong><small>{ticket === '1 jour' ? 'Accès au choix' : 'Tout le festival'}</small></span><b>{price} €</b>
              </label>)}
            </div>
          </div>
          <div className="form-grid quantity-total">
            <div className="field"><label htmlFor="quantity">Quantité</label><input id="quantity" name="quantity" type="number" min="1" max="8" value={values.quantity} onChange={(event) => update('quantity', Number(event.target.value))} />{errors.quantity && <small className="field-error">{errors.quantity}</small>}</div>
            <div className="total-box"><span>Total à régler</span><strong>{total} €</strong></div>
          </div>
          <div className="conditions-field"><input id="conditions" name="conditions" type="checkbox" checked={values.conditions} onChange={(event) => update('conditions', event.target.checked)} /><label htmlFor="conditions">J’accepte les conditions de réservation.</label></div>
          {errors.conditions && <small className="field-error">{errors.conditions}</small>}
          <Notification message={Object.keys(errors).length ? 'Certains champs sont à vérifier avant de continuer.' : ''} kind="error" />
          <button className="button submit-button" type="submit">Confirmer ma réservation <span aria-hidden="true">↗</span></button>
          {formDataPreview && <p className="form-data-preview">FormData : {formDataPreview}</p>}
        </form>
      </div>
    </section>
  )
}
