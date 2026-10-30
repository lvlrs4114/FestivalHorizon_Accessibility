# TP — Auditer et améliorer Festival Horizon avec React

**Niveau : Bachelor 2 · Durée indicative : 4 h**

Cette application est un support d’analyse. Elle fonctionne principalement à la souris, mais comporte des défauts d’accessibilité volontaires. Commencez par observer et noter les problèmes avant de modifier le code. Vous n’aurez probablement pas le temps de tout corriger : les exercices prioritaires passent avant les compléments.

## Partie 1 — Audit initial (30 min)

1. Dans un terminal, ouvrez `react/`, lancez `npm install`, puis `npm run dev` et ouvrez l’adresse indiquée.
2. Parcourez la page uniquement au clavier : Tab, Maj+Tab, Entrée, Espace et les flèches. Notez où le focus va et quels contrôles répondent.
3. Testez quelques sections avec un lecteur d’écran (Orca sous Ubuntu ou NVDA sous Windows). Écoutez les noms, rôles et états annoncés.
4. Dans Firefox DevTools, inspectez l’arbre d’accessibilité de plusieurs éléments : le menu, les filtres, une question de FAQ, un champ et la confirmation.
5. Lancez Lighthouse dans Chrome DevTools, relevez les constats et comparez-les à vos tests manuels.
6. Identifiez au moins trois problèmes, sans encore chercher à tout réparer.

| Composant | Problème | Outil de détection | Impact | Correction proposée |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Un bon score automatique ne garantit pas une expérience utilisable : certains problèmes d’interaction, de focus ou d’annonces dynamiques nécessitent des essais manuels.

## Partie 2 — HTML sémantique (35 min)

Dans `src/components/` et `src/App.tsx` :

- Remettez les titres dans un ordre cohérent, avec un titre principal pour la page.
- Repérez la navigation et le contrôle qui ouvre le menu. Vérifiez leur comportement au clavier et la structure des liens.
- Les cartes artistes forment un ensemble : choisissez une structure HTML qui exprime ce regroupement.
- Vérifiez si les textes alternatifs décrivent utilement les images dans leur contexte.
- Rendez le tableau compréhensible hors de son apparence visuelle : titre, en-têtes de colonnes et associations aux cellules.

Après chaque changement, vérifiez la structure dans l’inspecteur Firefox et parcourez les éléments avec le lecteur d’écran. Le tableau doit rester utilisable sur petit écran.

## Partie 3 — Formulaires accessibles (45 min)

Travaillez dans `src/components/TicketForm.tsx`.

- Associez les libellés aux champs, choisissez les types et attributs utiles, puis testez la saisie et les suggestions du navigateur.
- Ajoutez une structure de groupe compréhensible pour les choix de billet.
- Faites en sorte que les erreurs indiquent clairement le champ concerné et soient perceptibles au clavier et au lecteur d’écran.
- Comparez la validation native HTML à la validation faite par React. Testez un champ vide, un e-mail incorrect, une quantité hors limites et une case non cochée.
- Observez le résumé `FormData` après une soumission valide.

Expliquez avec un exemple du formulaire la différence entre `id`, `htmlFor`, `name`, `value` et `type`. Dans React, `htmlFor` sert à écrire l’attribut HTML `for` d’un label.

## Partie 4 — Composants interactifs (40 min)

Examinez `FAQ.tsx` et `ProgramFilters.tsx`.

- Rendez la FAQ utilisable au clavier et faites annoncer son état ouvert/fermé.
- Comparez le composant React actuel avec `<details>` et `<summary>`. Pourrait-on utiliser le HTML natif ici ?
- Testez le filtre de genre sans souris. Le choix doit toujours modifier réellement les lignes du programme.
- Si vous conservez un dropdown personnalisé, définissez le contrôle, son nom, son état, ses options et les interactions clavier attendues. Un contrôle natif reste une option à comparer.

Vérifiez le nom, le rôle et l’état dans Firefox Accessibility Inspector, puis testez le parcours avec Tab, Entrée, Espace et les flèches.

## Partie 5 — React et gestion du focus (complément avancé, 30 min)

Dans `BookingModal.tsx` et `App.tsx`, observez ce qui se passe à l’ouverture et à la fermeture de la confirmation.

- Où se trouve le focus quand la fenêtre apparaît ? Peut-on parcourir son contenu sans sortir derrière ?
- Testez Escape et la restauration du focus vers le bouton qui a lancé la réservation.
- Étudiez `<dialog>`, `showModal()`, `close()`, `useRef()` et le cycle de rendu React. Ne déplacez le focus que lorsque le dialogue est réellement ouvert.
- Les messages de filtre, de validation et de confirmation sont-ils annoncés sans déplacer le focus ? Comparez `aria-live`, `role="status"` et `role="alert"`.

## Partie 6 — CSS accessible (complément, 20 min)

Dans `src/styles/global.css` :

- Repérez les couleurs de texte les moins contrastées et vérifiez-les avec un outil de contraste.
- Rétablissez un indicateur de focus visible cohérent avec le design (`:focus-visible`).
- Vérifiez l’animation à l’aide du réglage de réduction des mouvements du système (`prefers-reduced-motion`).
- Zoomez fortement et réduisez la largeur de la fenêtre. Le contenu et les contrôles restent-ils lisibles et accessibles ?

## Partie 7 — Audit final (15 min)

Relancez vos tests clavier, lecteur d’écran, inspecteur Firefox et Lighthouse. Complétez le tableau initial avec les corrections réalisées. Citez au moins un défaut détecté en test manuel qui n’était pas évident dans le rapport Lighthouse, et expliquez pourquoi les deux méthodes se complètent.

## Exercices prioritaires

À traiter en premier pendant la séance :

1. Corriger la structure du document et des titres (sémantique).
2. Rendre le menu utilisable au clavier.
3. Associer correctement les libellés des champs (labels).
4. Structurer le groupe de billets et rendre ses erreurs compréhensibles (formulaire).
5. Ajouter des en-têtes et un titre au tableau du programme.
6. Rendre la FAQ opérable au clavier et annoncer son état.
7. Rendre les messages dynamiques perceptibles sans déplacer le focus.
8. Rétablir un focus visible.

## Exercices complémentaires

- Gérer complètement l’ouverture, le piège de focus, Escape et la restauration du focus de la modale avec `<dialog>`.
- Rendre le dropdown personnalisé accessible au clavier, ou le remplacer par un élément natif.
- Améliorer les alternatives d’images et le contraste.
- Ajouter les indications d’autocomplétion et expérimenter les attributs de validation HTML.
- Vérifier l’adaptation au zoom et respecter `prefers-reduced-motion`.
- Refaire un audit approfondi avec plusieurs navigateurs et technologies d’assistance.
