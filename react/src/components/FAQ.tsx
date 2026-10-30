import { useState } from 'react'

const questions = [
  ['Peut-on venir avec de la nourriture ?', 'Oui, un petit pique-nique est accepté. Des points d’eau et un village gourmand sont disponibles sur place.'],
  ['Les billets sont-ils remboursables ?', 'Les billets ne sont pas remboursables, mais ils peuvent être cédés à une autre personne.'],
  ['Comment accéder au festival ?', 'Des navettes relient la gare de Montclar au site. Un parking vélo est installé à l’entrée.'],
  ['Les animaux sont-ils autorisés ?', 'Pour le confort de tous, seuls les chiens d’assistance sont admis sur le site.'],
]

export default function FAQ() {
  const [opened, setOpened] = useState<number | null>(0)
  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading"><div><p className="eyebrow">Avant de partir</p><h2>Une question ?</h2></div><p className="section-aside">Les infos pratiques<br />pour profiter sereinement.</p></div>
      <div className="faq-list">
        {questions.map(([question, answer], index) => (
          <div className={`faq-item ${opened === index ? 'faq-item-open' : ''}`} key={question}>
            <div className="faq-question" onClick={() => setOpened(opened === index ? null : index)}>
              <span className="faq-index">0{index + 1}</span><span>{question}</span><span className="faq-plus">{opened === index ? '−' : '+'}</span>
            </div>
            {opened === index && <p className="faq-answer">{answer}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
