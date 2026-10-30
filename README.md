# Festival Horizon 2027 — laboratoire SEO

Projet de cours SEO B2 en React, TypeScript et Vite. Le site est volontairement un support d’audit : certains défauts SEO sont présents, tandis que la navigation, les formulaires et l’accessibilité restent utilisables.

## Démarrage

```bash
npm install
npm run dev
npm run build
npm run preview
```

Le serveur Vite sert les URL côté client : `/`, `/programme`, `/artistes/northern-lights`, `/artistes/orion`, `/artistes/monochrome`, `/concerts/:slug`, `/billetterie`, `/infos-pratiques`, `/archives/2026`.

## Structure

- `src/components` : composants partagés, navigation, réservation et métadonnées.
- `src/pages` : une page par URL principale.
- `src/hooks` : effets réutilisables, dont le titre de page.
- `src/data` : artistes et programmation 2027.
- `public/assets` : ressources du festival.
- `public/robots.txt`, `public/sitemap.xml` : supports TP technique.
- `exercises` : neuf TP et progression de deux séances.
- `scripts` : contrôles simples, démo HTTP réelle et génération HTML statique de démonstration.

## Limites

Le site est rendu côté client. Inspecter View Source et le DOM après JavaScript. L’audit Lighthouse local et la validation des fichiers ne prouvent pas l’indexation Google. Search Console demande une propriété publique vérifiée. Un sitemap ne garantit pas l’indexation ; canonical exprime une préférence.

URL publique fictive centralisée dans `src/config/site.ts` : `https://festival-horizon.example`.

## Supports d'analyse locale

- `npm run seo:check` vérifie quelques fichiers et signale certains constats statiques ; il ne juge pas la pertinence éditoriale.
- `npm run seo:sitemap` vérifie la structure XML et avertit sur couverture, URL inconnues, doublons et cohérence canonical. Les écarts sont intentionnels et ne bloquent pas `npm run build`.
- `npm run seo:http-demo` démarre un serveur distinct sur `127.0.0.1:4174`. Exemples : `/ancienne-programmation` (301), `/inconnue` (404), `/ressources/archive-2025` (410), `/` (200). Inspecter avec `curl -I`.
- `npm run seo:http-check` vérifie localement la logique des réponses sans ouvrir de port, utile dans les environnements qui interdisent l’écoute réseau.
- `npm run seo:prerender` construit l’application puis rend `FestivalIntro`, le composant React partagé avec l’accueil, dans `dist/prerender-demo/index.html`.

Les liens internes utilisent des routes Vite côté client ; le fallback SPA peut répondre HTTP 200 avec le shell HTML pour une URL inconnue. Ce statut serveur est différent du contenu « Page introuvable » affiché par React. Les métadonnées et balisages ajoutés par les effets React apparaissent après exécution JavaScript, pas dans la réponse HTML initiale.
