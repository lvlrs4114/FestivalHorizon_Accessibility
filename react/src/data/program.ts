export type Concert = {
  id: number
  artist: string
  stage: string
  day: string
  time: string
  genre: string
}

export const program: Concert[] = [
  { id: 1, artist: 'Northern Lights', stage: 'Grande scène', day: 'Vendredi', time: '18:30', genre: 'Électro' },
  { id: 2, artist: 'Orion', stage: 'Grande scène', day: 'Vendredi', time: '21:00', genre: 'Pop' },
  { id: 3, artist: 'Monochrome', stage: 'Scène du lac', day: 'Vendredi', time: '23:15', genre: 'Techno' },
  { id: 4, artist: 'Les Voix du Lac', stage: 'Scène du lac', day: 'Samedi', time: '17:00', genre: 'Acoustique' },
  { id: 5, artist: 'Northern Lights', stage: 'Grande scène', day: 'Samedi', time: '20:00', genre: 'Électro' },
  { id: 6, artist: 'Orion', stage: 'Grande scène', day: 'Samedi', time: '22:30', genre: 'Pop' },
  { id: 7, artist: 'Monochrome', stage: 'Scène du lac', day: 'Dimanche', time: '19:00', genre: 'Techno' },
  { id: 8, artist: 'Les Voix du Lac', stage: 'Grande scène', day: 'Dimanche', time: '16:30', genre: 'Acoustique' },
]

export const genres = ['Tous les genres', 'Électro', 'Pop', 'Techno', 'Acoustique']
export const days = ['Tous les jours', 'Vendredi', 'Samedi', 'Dimanche']
