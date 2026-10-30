# TP6 — Performances

Mesure dans des conditions comparables avant de modifier, puis répète le protocole.

## Exercice 1 — Mesures initiales

**À examiner :** version buildée avec `npm run build` puis `npm run preview`, Lighthouse.

Réalise deux audits comparables. Note LCP, CLS, TBT, conditions de mesure et ressources problématiques ; conserve les rapports.

**Vérification :** deux mesures documentées sans score de référence inventé.

## Exercice 2 — Optimiser les images

**À examiner :** onglet Network, `public/assets/Horizon.png`, `Hero.tsx` et images secondaires.

Repère les images pertinentes, produis une variante optimisée et adapte le JSX. Déduis la stratégie de chargement de la position de chaque image. Préserve un texte alternatif accessible et compare les ressources avant/après.

**Vérification :** poids et rendu comparés ; image principale visible traitée selon son rôle, images secondaires selon leur position.

## Exercice 3 — Déplacement de mise en page

**À examiner :** `LayoutShiftImage.tsx`, Performance avec réseau ralenti.

Observe le chargement, enregistre une trace et identifie l’origine du déplacement. Corrige le composant pour stabiliser la mise en page dès le premier affichage.

**Vérification :** comparer les événements de déplacement avant/après dans une trace comparable.

## Exercice 4 — Interaction bloquante

**À examiner :** `InteractionDemo.tsx`, Performance.

Enregistre l’interaction, identifie la tâche qui retarde la réponse, modifie son traitement puis compare les traces. Le résultat fonctionnel doit rester compréhensible.

**Vérification :** trace après modification montrant une tâche réduite ou fractionnée ; durées mesurées, jamais supposées.

## Bonus — Variabilité

Répète plusieurs audits et explique les écarts observés à partir du protocole, du cache, du réseau ou de la machine.
