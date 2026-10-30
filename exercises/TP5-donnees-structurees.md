# TP5 — Données structurées

Compare le JSON-LD au contenu réellement affiché. Les propriétés facultatives doivent être justifiées.

## Exercice 1 — Auditer l’Event existant

**À examiner :** `src/data/eventMarkup.json`, page du concert correspondant, `src/data/program.ts` et autres données utiles.

Compare nom, date, heure, lieu, description et URL. Note uniquement les écarts constatés entre données et page.

**Vérification :** chaque écart cite ses deux sources ; les informations non disponibles restent inconnues.

## Exercice 2 — Corriger l’Event

Corrige l’objet JSON-LD à partir des incohérences trouvées. `offers` est facultatif dans ce scénario : le pass journalier n’est pas nécessairement un billet autonome pour le concert ; ajoute-le uniquement si tu peux justifier clairement cette relation.

**Vérification :** valide la syntaxe JSON, puis compare les propriétés à la page et au programme.

## Exercice 3 — Ajouter un Event

**À examiner :** fiche et données du concert d’Orion, `ConcertPage.tsx`.

Ajoute un JSON-LD cohérent pour ce concert en réutilisant les données disponibles. Valide la syntaxe et utilise un outil de validation Schema.org disponible ; note les limites de la validation locale.

**Vérification :** valeurs cohérentes avec la fiche et le programme ; JSON valide et visible dans le DOM.

## Bonus — Choisir un type Schema.org

Compare Event et MusicEvent pour un concert décrit par les données disponibles. Justifie le type retenu sans ajouter de propriétés non étayées.
