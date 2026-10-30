# TP7 — React et indexation

Observe les contenus effectivement présents à chaque étape du rendu.

## Exercice 1 — Ce que reçoit le navigateur

**À examiner :** une page artiste et une page programme, View Source, Elements et navigateur sans JavaScript.

Pour chaque page, compare code source initial, DOM après exécution, métadonnées et contenu visible. Désactive JavaScript et relève les différences factuelles dans un tableau.

| Page | Source initiale | DOM après JS | Sans JS |
|---|---|---|---|
| | | | |

**Vérification :** chaque cellule décrit une observation reproductible, pas une conclusion générale sur les moteurs.

## Exercice 2 — CSR et pré-rendu

Lance `npm run seo:prerender` et retrouve la sortie générée. Compare le HTML de `FestivalIntro.tsx` dans l’application et dans le document pré-rendu. Le script ne pré-rend pas toute l’application.

**Vérification :** identifie à quel moment le contenu devient disponible dans chacun des deux cas et cite les fichiers examinés.

## Exercice 3 — Modifier un contenu partagé

Modifie `FestivalIntro.tsx` avec une information réelle du festival. Vérifie le changement dans React, regénère le HTML pré-rendu et retrouve-le dans la sortie. Explique pourquoi modifier le composant seul ne met pas à jour le fichier déjà généré.

**Vérification :** même changement repérable dans l’application et la sortie générée après relance du script.

## Bonus — Choisir une stratégie de rendu

Compare CSR, SSR et SSG pour plusieurs pages du festival. Justifie les choix par la fraîcheur des données et le contenu observé ; plusieurs réponses argumentées sont recevables.
