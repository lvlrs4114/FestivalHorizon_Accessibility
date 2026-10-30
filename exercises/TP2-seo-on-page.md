# TP2 — SEO on-page

Inspecte les métadonnées après rendu React, puis améliore leur précision et les contenus associés.

## Exercice 1 — Corriger les titles

**À examiner :** `src/data/pageMetadata.ts`, `src/components/PageMetadata.tsx`, `src/App.tsx`.

Compare accueil, programme, infos pratiques, billetterie, une fiche artiste et un concert. Identifie titres absents, génériques ou dupliqués, puis corrige-les. Les routes dynamiques peuvent dépendre du fallback de `App.tsx` : suis le chemin des props jusqu’au composant metadata.

**Vérification :** inspecte chaque `<title>` dans le DOM et l’onglet ; chaque titre identifie précisément sa page et repose sur des faits du festival.

## Exercice 2 — Écrire les meta descriptions

**À examiner :** mêmes métadonnées et pages du festival.

Repère les descriptions absentes, génériques ou dupliquées. Corrige les pages concernées avec un texte distinct, cohérent avec la page, factuel, d’une longueur raisonnable et sans promesse inventée.

**Vérification :** compare les descriptions dans le DOM de plusieurs routes, dont une route dynamique.

## Exercice 3 — Améliorer le contenu utile

**À examiner :** `src/data/artists.ts`, `src/data/program.ts`, `ArtistPage.tsx`, `PracticalInfoPage.tsx`.

Dans `ArtistPage.tsx`, modifie uniquement le paragraphe de présentation d’Orion : affiche son genre puis sa description depuis `artists.ts`, sans ajouter de biographie ni modifier la section des concerts (liens réservés au TP3). Ensuite, pour un visiteur arrivant en train, réorganise les sections de `PracticalInfoPage.tsx` afin que l’accès soit présenté avant les autres rubriques. N’invente ni adresse ni tarif absent.

**Vérification :** sur `/artistes/orion`, le paragraphe présente « Pop » et la description exacte des données ; la section concerts n’est pas modifiée. Sur les informations pratiques, « Transports et accès » précède les autres rubriques. Toute information absente reste explicitement à confirmer.

## Exercice 4 — Différencier les fiches concert

**À examiner :** `ConcertPage.tsx`, `src/data/program.ts`.

Compare deux ou trois fiches et repère les formulations répétées. Remplace le texte générique par une présentation propre à chaque concert à partir des données disponibles. Privilégie la réutilisation des données React plutôt que des chaînes dupliquées.

**Vérification :** les pages présentent artiste, date, heure et scène correspondants ; aucune donnée n’est inventée.

## Bonus — Comparer des snippets

Propose deux variantes de title et description pour une même page. Évalue-les selon l’exactitude, la distinction et la clarté, sans prétendre qu’une formulation est une vérité SEO absolue.
