import { readFileSync } from 'node:fs'

const read = path => readFileSync(path, 'utf8')
const errors = []
let events
try { events = JSON.parse(read('src/data/eventMarkup.json')) } catch { errors.push('Le fichier de données structurées contient une erreur de syntaxe JSON.') }

if (events) {
  const event = events['@type'] === 'Event' ? events : events['northern-lights-vendredi']
  const date = read('src/data/festival.ts').match(/year:\s*(\d+)/)?.[1]
  const artist = read('src/data/artists.ts').match(/id:\s*'northern-lights',[\s\S]*?name:\s*'([^']+)'/)?.[1]
  const program = read('src/data/program.ts')
  const concert = program.match(/artist:\s*'Northern Lights',[^\n]*slug:\s*'northern-lights-vendredi'/)?.[0]
  const slug = concert?.match(/slug:\s*'([^']+)'/)?.[1]
  const page = read('src/pages/ConcertPage.tsx')
  if (!event) errors.push('Le balisage de Northern Lights vendredi est manquant.')
  if (event && date && !event.startDate?.startsWith(date)) errors.push('Une information temporelle structurée ne correspond pas à l’édition du festival.')
  if (event && (!artist || !event.name?.includes(artist))) errors.push('Le nom de l’événement doit correspondre aux données du concert.')
  if (event && (!event.location?.name || !concert?.includes(`stage: '${event.location.name}'`))) errors.push('Le lieu structuré ne correspond pas aux données du programme.')
  if (event && slug && (!event.url?.endsWith(`/concerts/${slug}`) || !page.includes("node.type = 'application/ld+json'") || !page.includes('JSON.stringify(markup)'))) errors.push('Le balisage doit être injecté sur la page du concert concerné.')

  const orion = events['@type'] === 'Event' ? undefined : events['orion-vendredi']
  const orionConcert = program.match(/artist:\s*'Orion',[^\n]*slug:\s*'orion-vendredi'/)?.[0]
  if (orion) {
    const orionSlug = orionConcert?.match(/slug:\s*'([^']+)'/)?.[1]
    const orionTime = orionConcert?.match(/time:\s*'([^']+)'/)?.[1]
    if (!orion.startDate?.startsWith('2027-09-17') || !orionTime || !orion.startDate.includes(`T${orionTime}:`)) errors.push('La date ou l’heure du balisage Orion ne correspond pas au programme.')
    if (!orion.name?.includes('Orion') || !orion.location?.name || !orionConcert?.includes(`stage: '${orion.location.name}'`)) errors.push('Le balisage Orion ne correspond pas aux données du concert.')
    if (orionSlug && (!orion.url?.endsWith(`/concerts/${orionSlug}`) || !page.includes('eventMarkup[slug'))) errors.push('Le balisage Orion doit être injecté sur sa page dédiée.')
  }
}

console.log('MISSION 5 — Le faux concert')
if (!errors.length) console.log('[OK] Le JSON est valide et les champs contrôlés sont cohérents avec le projet.')
else for (const error of errors) console.log(`[À REVOIR] ${error}`)
console.log('Contrôle local statique : vérifiez aussi le script JSON-LD dans le DOM après chargement.')
if (errors.length) process.exitCode = 1
