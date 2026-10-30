import { festivalEdition } from './festival'
export type Concert = {
  id: number
  artist: string
  stage: string
  day: string
  time: string
  genre: string
  date: string
  slug: string
}

export const program: Concert[] = [
  { id: 1, artist: 'Northern Lights', stage: 'Grande scène', day: 'Vendredi', time: '18:30', genre: 'Électro', date: festivalEdition.dates['Vendredi'], slug: 'northern-lights-vendredi' },
  { id: 2, artist: 'Orion', stage: 'Grande scène', day: 'Vendredi', time: '21:00', genre: 'Pop', date: festivalEdition.dates['Vendredi'], slug: 'orion-vendredi' },
  { id: 3, artist: 'Monochrome', stage: 'Scène du lac', day: 'Vendredi', time: '23:15', genre: 'Techno', date: festivalEdition.dates['Vendredi'], slug: 'monochrome-vendredi' },
  { id: 4, artist: 'Les Voix du Lac', stage: 'Scène du lac', day: 'Samedi', time: '17:00', genre: 'Acoustique', date: festivalEdition.dates['Samedi'], slug: 'les-voix-du-lac-samedi' },
  { id: 5, artist: 'Northern Lights', stage: 'Grande scène', day: 'Samedi', time: '20:00', genre: 'Électro', date: festivalEdition.dates['Samedi'], slug: 'northern-lights-samedi' },
  { id: 6, artist: 'Orion', stage: 'Grande scène', day: 'Samedi', time: '22:30', genre: 'Pop', date: festivalEdition.dates['Samedi'], slug: 'orion-samedi' },
  { id: 7, artist: 'Monochrome', stage: 'Scène du lac', day: 'Dimanche', time: '19:00', genre: 'Techno', date: festivalEdition.dates['Dimanche'], slug: 'monochrome-dimanche' },
  { id: 8, artist: 'Les Voix du Lac', stage: 'Grande scène', day: 'Dimanche', time: '16:30', genre: 'Acoustique', date: festivalEdition.dates['Dimanche'], slug: 'les-voix-du-lac-dimanche' },
]

export const genres = ['Tous les genres', 'Électro', 'Pop', 'Techno', 'Acoustique']
export const days = ['Tous les jours', 'Vendredi', 'Samedi', 'Dimanche']
