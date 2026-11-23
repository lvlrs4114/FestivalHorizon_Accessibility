import { useEffect } from 'react'
import { concerts } from './routeData'
import eventMarkup from '../data/eventMarkup.json'
import { festivalEdition } from '../data/festival'

export default function ConcertPage({slug}: { slug: string }) {
    const c = concerts.find(item => item.slug === slug);
    const markups = eventMarkup as Record<string, unknown>;
    const markup = '@type' in markups
        ? slug === 'northern-lights-vendredi' ? markups : undefined
        : markups[slug];
    useEffect(() => {
        if (!markup) return;
        const node = document.createElement('script');
        node.type = 'application/ld+json';
        node.textContent = JSON.stringify(markup);
        document.head.append(node);
        return () => node.remove();
    }, [markup]);
    if (!c) return <section className="section"><h1>Concert introuvable</h1><a href="/programme">Voir le programme</a>
    </section>;
    const dateLabel = festivalEdition.dateLabels[c.day as keyof typeof festivalEdition.dateLabels] ?? 'Date à confirmer';
    return <section className="section"><p className="eyebrow">Concert · Festival Horizon 2027</p><h1>{c.artist}</h1>
        <p>{dateLabel} à {c.time} · {c.stage} · Montclar</p><p>{c.artist} se produit le {dateLabel} à {c.time} sur
            la {c.stage}, à Montclar.</p><a className="button" href="/billetterie">Billetterie</a></section>
}
