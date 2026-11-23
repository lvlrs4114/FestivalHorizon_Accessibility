import { PUBLIC_SITE_URL } from '../config/site'

export const pageMetadata: Record<string, {
    title?: string;
    description?: string;
    canonical?: string;
    robots?: string
}> = {
    '/': {
        title: 'Festival Horizon 2027 à Montclar',
        description: 'Découvrez le Festival Horizon 2027, ses artistes et ses concerts au bord du lac à Montclar.',
        canonical: `${PUBLIC_SITE_URL}/`
    },
    '/programme': {
        title: 'Programme des concerts — Festival Horizon 2027',
        description: 'Consultez les artistes, les horaires et les scènes du Festival Horizon 2027 à Montclar.',
        canonical: `${PUBLIC_SITE_URL}/programme`
    },
    '/billetterie': {
        title: 'Billetterie Festival Horizon 2027',
        description: 'Réservez vos billets pour les concerts et choisissez votre pass.'
    },
    '/infos-pratiques': {
        title: 'Accès et infos pratiques — Festival Horizon 2027',
        description: 'Préparez votre venue au Festival Horizon 2027 : navettes depuis la gare de Montclar, parking et horaires.'
    },
    '/archives/2026': {
        title: 'Festival Horizon — archives',
        robots: 'noindex,follow',
        canonical: `${PUBLIC_SITE_URL}/archives/2026`
    },
}
