# Festival Horizon — version React

Application pédagogique sur une seule page, réalisée avec React, TypeScript et Vite. Elle reprend les couleurs, les images et les artistes du site HTML du dépôt. Les données du programme et les réservations sont simulées localement.

## Démarrer

Depuis ce dossier :

```bash
npm install
npm run dev
```

Vite indique l’adresse locale à ouvrir (généralement `http://localhost:5173`). Pour vérifier la compilation de production :

```bash
npm run build
```

## Parcours de la page

- Le menu mène aux sections par ancres.
- Les filtres jour et genre mettent à jour le tableau du programme.
- La FAQ s’ouvre et se ferme à la souris.
- Le formulaire contrôle les valeurs, valide les champs, calcule le prix et montre les données `FormData` à la réservation.
- La réservation ouvre une confirmation locale, fermable à la souris.

Les défauts d’accessibilité sont intentionnels et font partie du support de cours. Le TP étudiant se trouve dans [`TP_ACCESSIBILITE_REACT.md`](./TP_ACCESSIBILITE_REACT.md). Les consignes de lancement n’utilisent pas de serveur ni de service externe. Les polices Google sont une amélioration visuelle facultative; des polices de remplacement sont déclarées.
