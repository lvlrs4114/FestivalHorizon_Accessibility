export type Artist = {
  id: string
  name: string
  genre: string
  description: string
  image: string
}

export const artists: Artist[] = [
  {
    id: 'northern-lights',
    name: 'Northern Lights',
    genre: 'Électro',
    description: 'Des nappes lumineuses et des rythmes qui accompagnent la tombée du jour.',
    image: '/assets/artiste1.png',
  },
  {
    id: 'orion',
    name: 'Orion',
    genre: 'Pop',
    description: 'Une pop alternative généreuse, pensée pour chanter ensemble.',
    image: '/assets/artiste2.png',
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    genre: 'Techno',
    description: 'Une techno minimale et précise qui transforme la nuit en mouvement.',
    image: '/assets/artiste3.png',
  },
  {
    id: 'les-voix-du-lac',
    name: 'Les Voix du Lac',
    genre: 'Acoustique',
    description: 'Des harmonies folk à écouter au bord de l’eau, à l’heure dorée.',
    image: '/assets/concert.png',
  },
]
