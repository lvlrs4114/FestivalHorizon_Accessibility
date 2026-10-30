# TP3 — Architecture et maillage interne

Teste les parcours comme un visiteur, puis corrige les ruptures observées.

## Exercice 1 — Trouver les ruptures

**À examiner :** navigation depuis le programme, `ProgramTable.tsx`, `ArtistPage.tsx`, `ConcertPage.tsx`.

Sans saisir directement les URL, teste plusieurs parcours entre programme, fiches artistes et fiches concerts. Quand un parcours devient difficile ou impossible, note l’étape, la route et le composant React qui produit le lien.

**Vérification :** chaque constat est reproductible et relié à un composant ou une destination précise.

## Exercice 2 — Réparer les parcours

**À examiner :** composants identifiés à l’exercice précédent.

Corrige les ruptures constatées. Les pages importantes doivent être accessibles par des liens internes vers les bonnes routes ; les ancres doivent annoncer leur destination et fonctionner au clavier. Vérifie au moins trois parcours, puis recharge directement leurs routes finales.

**Vérification :** parcours complet à la souris et au clavier, destinations exactes, rechargement direct fonctionnel.

## Bonus — Étendre l’architecture

Propose une organisation de navigation adaptée à un festival de plusieurs dizaines d’artistes. Justifie-la avec des parcours concrets.
