# 🚨 TP4 — Opération sauver le festival

Une fiche artiste existe, mais Google peut-il l’explorer ? Commencez au vert.

## 🟢 Niveau 1 — Trouver la page bloquée

1. Dans l’explorateur de fichiers, ouvrez `public/robots.txt`.
2. Repérez la ligne qui bloque une URL `/artistes/...`.
3. Ouvrez cette URL dans le site et vérifiez que la fiche existe.
4. **Réussi :** montrez la règle et dites en une phrase ce qu’elle empêche Google de faire.

## 🟡 Niveau 2 — Réparer

1. Modifiez ou retirez la règle qui bloque la fiche existante.
2. Enregistrez, puis lancez `npm run mission:4 -- --robots`.
3. **Réussi :** le contrôle robots affiche `[OK]`. Le script complet vérifie aussi le sitemap et les canonical; le niveau jaune ne dépend que de robots.
4. Expliquez : robots.txt agit sur le crawl; il ne commande pas directement l’indexation.

<details><summary>Indice 1</summary>La règle commence par `Disallow`.</details>
<details><summary>Indice 2</summary>Comparez le chemin bloqué avec les URL visibles dans la section artistes.</details>
<details><summary>Indice 3</summary>Une règle Disallow cible une fiche artiste existante; adaptez-la pour autoriser son exploration.</details>

## 🔴 Niveau 3 — Bonus : sitemap suspect

1. Comparez `public/sitemap.xml` aux routes dans `src/App.tsx` et aux données artistes/concerts.
2. Corrigez les URL manquantes ou inconnues; gardez les URL sur le domaine configuré.
3. Lancez `npm run mission:4` puis `npm run seo:sitemap`.
4. **Réussi :** le validateur mission affiche tous les contrôles `[OK]`; le diagnostic sitemap ne signale plus d’écart.

**Score rapide :** 1 diagnostic · 1 correction robots · 1 validation robots · +1 bonus sitemap. Les canonical accueil/programme sont déjà cohérentes : vérifiez-les, ne les modifiez pas pour créer un défaut.

## Référence facultative

`robots.txt` règle l’exploration (crawl), pas directement l’indexation. `noindex` concerne l’indexation et doit être lisible par le robot. Une canonical indique une URL préférée; elle ne garantit pas l’indexation. Le script HTTP illustre 200, 301, 404 et 410; `npm run seo:http-check` le vérifie sans serveur.
