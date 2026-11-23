# 🤖 TP7 — Dans la peau de Googlebot

Que voit-on dans le code source, et que construit React ? Ouvrez l’accueil du site. Faites les niveaux dans l’ordre.

## 🟢 Niveau 1 — La page et son miroir

1. Sur l’accueil, repérez le titre « Trois jours à l’horizon ».
2. Ouvrez le code source : clic droit → **Afficher le code source** (Chrome/Firefox; Ctrl+U).
3. Cherchez le titre (Ctrl+F).
4. Revenez à la page, ouvrez DevTools → **Elements/Inspecteur**, puis retrouvez le titre dans le DOM après le chargement de React.
5. **Réussi si :** vous expliquez pourquoi le titre apparaît dans la page alors qu’il est absent du code source initial.

## 🟡 Niveau 2 — Un fragment HTML prêt d’avance

1. Dans le terminal du projet, lancez `npm run seo:prerender`.
2. Ouvrez `dist/prerender-demo/index.html` dans l’éditeur.
3. Trouvez le titre et le paragraphe déjà présents dans le HTML, à l’intérieur de `<main>`.
4. **Réussi si :** vous expliquez pourquoi ce fragment est déjà là avant le chargement dans un navigateur.

Cette commande pré-rend seulement `FestivalIntro` dans une page de démonstration autonome. Elle ne pré-rend pas l’accueil complet et n’ajoute pas ce HTML au site.

## 🔴 Niveau 3 — Changez la vitrine (bonus)

1. Modifiez une phrase factuelle dans `src/components/FestivalIntro.tsx`.
2. Relancez `npm run seo:prerender`.
3. **Réussi si :** la nouvelle phrase apparaît dans l’accueil et dans le fichier HTML régénéré.

**À retenir :** CSR construit l’interface dans le navigateur; le pré-rendu génère du HTML à l’avance. Ici, la commande illustre ce principe sur `FestivalIntro` seulement; elle ne transforme pas le site en SSG. Le SSR sera expliqué en classe. Un site CSR peut être indexé par un moteur qui exécute JavaScript.
