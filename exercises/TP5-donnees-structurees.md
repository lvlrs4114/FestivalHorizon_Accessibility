# 🕵️ TP5 — Le faux concert

Un concert affiche une information différente de celle envoyée aux moteurs. Trouvez-la d’abord à l’écran.

## 🟢 Niveau 1 — Trouver l’erreur

1. Ouvrez `/concerts/northern-lights-vendredi` dans le site.
2. Comparez l’artiste, la date et le lieu affichés avec `src/data/program.ts`.
3. Dans l’éditeur, ouvrez `src/data/eventMarkup.json` : ce fichier fournit le JSON-LD injecté sur ce concert.
4. **Réussi :** montrez une valeur qui ne correspond pas entre les sources.

## 🟡 Niveau 2 — Corriger

1. Corrigez la valeur trouvée dans `src/data/eventMarkup.json` à partir des données du projet.
2. Lancez `npm run mission:5` pour vérifier syntaxe JSON et cohérence des champs contrôlés.
3. Rechargez la page; DevTools → Elements → cherchez `application/ld+json` et comparez avec le texte visible.
4. **Réussi :** commande `[OK]`, script présent dans le DOM, information cohérente.

<details><summary>Indice</summary>Comparez le début de `startDate` avec l’année donnée par le programme.</details>

## 🔴 Niveau 3 — Bonus : un deuxième concert

Ajoutez un JSON-LD cohérent pour le concert d’Orion du vendredi, depuis `src/data/program.ts` et `src/data/festival.ts`; injectez-le uniquement sur sa page. Validez le JSON et vérifiez-le dans le DOM. **N’inventez pas** adresse, prix de billet ou données absentes.

**Score rapide :** 1 erreur trouvée · 1 correction · 1 preuve (commande + DOM) · +1 bonus Orion.

## Référence facultative

JSON-LD structure des informations pour les systèmes; sa syntaxe valide ne prouve pas l’exactitude. Les valeurs doivent correspondre au contenu visible et aux données fiables. Un balisage valide ne garantit pas un résultat enrichi.
