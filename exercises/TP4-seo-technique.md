# TP4 — SEO technique

Pour chaque enquête, établis d’abord ton diagnostic, puis modifie et valide.

## Exercice 1 — Robots et indexation

**À examiner :** `public/robots.txt`, `src/data/pageMetadata.ts`, directives du DOM.

Politique du scénario : les pages publiques principales et l’archive 2026 doivent pouvoir être explorées et rester éligibles à l’indexation. Identifie les configurations contraires à cette politique, corrige-les et confronte ton hypothèse au script de diagnostic.

**Vérification :** inspecte robots et directives dans le DOM après correction ; explique toute alerte restante.

## Exercice 2 — Reconstituer le sitemap

**À examiner :** routes dans `src/App.tsx`, `artists.ts`, `program.ts`, `public/sitemap.xml`.

Reconstitue les URL publiques pertinentes à partir des routes et données. Compare cet inventaire au sitemap et relève omissions et entrées obsolètes avant de lancer `npm run seo:sitemap`. Corrige le sitemap.

**Vérification :** compare ton inventaire au résultat du script, puis contrôle les URL et leur domaine.

## Exercice 3 — Canonical cohérentes

**À examiner :** les canonical du DOM sur `/programme` et `/`, `src/data/pageMetadata.ts`, `src/config/site.ts`.

Compare ces deux pages avec leur route et corrige les incohérences observées. Le périmètre obligatoire se limite à ces deux routes ; n’ajoute pas de canonical aux routes dynamiques.

**Vérification :** inspecte `link[rel="canonical"]` après rendu sur les deux pages et vérifie qu’il s’agit d’une URL absolue cohérente avec chacune. Ne confonds pas canonical et redirection.

## Exercice 4 — Observer les statuts HTTP

**À examiner :** serveur `npm run seo:http-demo`, commandes `curl -I`.

Teste `http://localhost:4174/`, `/ancienne-programmation`, `/inconnue` et `/ressources/archive-2025`. Note statut, éventuel `Location`, signification et conséquence possible pour un robot. Compare si possible une URL inconnue sur Vite et la réponse de la démo.

**Vérification :** conserve les en-têtes observés ; distingue statut HTTP et écran React.

## Exercice 5 — Choisir le mécanisme adapté

Pour chaque situation, note le comportement HTTP ou la directive attendue et justifie ton choix.

1. `/artistes/northern-lights` a été remplacée définitivement par `/artistes/northern-lights-live`. L’ancienne page ne doit plus être consultée ; le nouvel URL conserve le contenu.
2. `/archives/2024` n’a jamais existé et aucune archive de cette édition n’est disponible.
3. `/ressources/archive-2025` a été retirée durablement. L’éditeur veut signaler explicitement ce retrait, mais accepte qu’un serveur réponde comme à une ressource introuvable.
4. `/programme` et `/programme?jour=vendredi` restent accessibles ; le contenu est équivalent et l’éditeur veut privilégier l’URL sans paramètre dans les résultats.
5. Une page interne de confirmation de réservation doit rester accessible à l’utilisateur et crawlable, mais ne doit pas être proposée dans les résultats.

**Vérification :** justifie chaque choix à partir de l’existence de la destination, de la permanence du changement et de l’objectif éditorial. Pour le cas 3, accepter 404 ou 410 si l’étudiant explique le choix ; aucun des deux n’est universellement obligatoire.

## Bonus — Redirection temporaire

Explique la différence entre 301 et 302 pour une URL déplacée temporairement. Le serveur de démonstration ne fournit pas d’endpoint 302 à tester.

## Bonus — Page de campagne

Pour une campagne temporaire fictive, définis une politique d’indexation et indique les directives nécessaires selon qu’elle constitue ou non un duplicata.
