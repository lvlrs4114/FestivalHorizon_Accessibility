import { PUBLIC_SITE_URL } from '../config/site'

export const pageMetadata: Record<string, {title?:string;description?:string;canonical?:string;robots?:string}> = {
  '/': { title: 'Festival Horizon', description: 'Découvrez Festival Horizon.' },
  '/programme': { title: 'Festival Horizon', description: 'Trois jours de musique, des artistes et des concerts au bord du lac.' , canonical: `${PUBLIC_SITE_URL}/` , robots: 'noindex,follow' },
  '/billetterie': { title: 'Billetterie Festival Horizon 2027', description: 'Réservez vos billets pour les concerts et choisissez votre pass.' },
  '/infos-pratiques': { title: 'Festival Horizon', description: 'Trois jours de musique, des artistes et des concerts au bord du lac.' },
  '/archives/2026': { title: 'Festival Horizon — archives', robots: 'noindex,follow', canonical: `${PUBLIC_SITE_URL}/archives/2026` },
}
