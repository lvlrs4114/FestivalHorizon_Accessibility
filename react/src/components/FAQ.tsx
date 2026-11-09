const questions = [
  ['Peut-on venir avec de la nourriture ?', 'Oui, un petit pique-nique est accepté. Des points d’eau et un village gourmand sont disponibles sur place.'],
  ['Les billets sont-ils remboursables ?', 'Les billets ne sont pas remboursables, mais ils peuvent être cédés à une autre personne.'],
  ['Comment accéder au festival ?', 'Des navettes relient la gare de Montclar au site. Un parking vélo est installé à l’entrée.'],
  ['Les animaux sont-ils autorisés ?', 'Pour le confort de tous, seuls les chiens d’assistance sont admis sur le site.'],
]

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading"><div><p className="eyebrow">Avant de partir</p><h2>Une question ?</h2></div><p className="section-aside">Les infos pratiques<br />pour profiter sereinement.</p></div>
      <div className="faq-list">
        {questions.map(([question, answer], index) => (
          <details className="faq-item" key={question} open={index === 0}>
            <summary className="faq-question">
              <span className="faq-index" aria-hidden="true">0{index + 1}</span>
              <span>{question}</span>
              <span className="faq-plus" aria-hidden="true">+</span>
            </summary>
            <p className="faq-answer">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
