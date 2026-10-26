# Réponses proposées aux exercices

Ce document propose des pistes de correction. Certaines observations sur le site peuvent varier selon la page, le navigateur et les corrections déjà apportées. Pour les constats sur le site, vérifiez toujours le comportement observé.

## Exercice POUR

| Situation | Principe principal | Impact possible | Test concret |
|---|---|---|---|
| Image informative sans texte alternatif | **Perceptible** | Une personne qui ne voit pas l’image ne reçoit pas son information. | Lire la page avec un lecteur d’écran ou examiner l’alternative de l’image dans l’arbre d’accessibilité. |
| Modale impossible à quitter au clavier | **Utilisable** | Une personne au clavier peut rester bloquée et ne plus accéder au reste de la page. | Ouvrir la modale au clavier, parcourir avec Tab et essayer Échap. |
| Message « invalide » sans indication de correction | **Compréhensible** | La personne ne sait pas ce qui est incorrect ni comment poursuivre. | Soumettre une valeur invalide et vérifier si le champ en cause et la correction attendue sont annoncés. |
| `div` cliquable sans rôle ni état accessibles | **Robuste** | Les technologies d’assistance peuvent ne pas reconnaître l’élément comme une commande ou annoncer son état. | Examiner nom/rôle/état dans l’arbre d’accessibilité et essayer l’activation au clavier. |

Les principes peuvent se recouper. Par exemple, un `div` cliquable peut aussi être inutilisable au clavier. Le principe principal dépend de l’impact que vous choisissez de mettre en avant.

## TP0 — Diagnostic sans souris

Dans `labs/keyboard.html`, le faux bouton « Action » n’est pas atteignable avec Tab, le focus est masqué par `*:focus { outline:none }`, et les liens avec `tabindex="1"` et `tabindex="4"` passent avant les autres contrôles dans un ordre inattendu. Le bouton natif, lui, est atteignable et activable. Pour décrire un défaut, indiquez une séquence reproductible et son impact; cette page est à diagnostiquer, pas à modifier.

Sur l’accueil de Festival Horizon, exemples à vérifier : le menu est un `div` activé par clic et n’est pas un bouton clavier ; « Réserver » est aussi un `div` cliquable ; le lien vers le programme « Cliquez ici » est peu explicite hors contexte ; plusieurs images ont des alternatives discutables ou manquantes ; le contraste du texte de date est faible. Appuyez vos constats sur deux vérifications concrètes.

## TP1 — Sémantique et structure

Correction attendue dans `labs/semantics.html` : remplacer le faux titre « Mon espace » par un titre (par exemple `h2`), transformer « Accueil | Profil | Paramètres » en navigation `nav` avec de vrais liens, utiliser un `button type="button"` pour « Enregistrer » et un lien `<a href="../index.html">Retour à l’accueil</a>` pour la navigation vers l’accueil.

Un titre visuel doit aussi être un titre dans le HTML. Un lien sert à aller vers une destination; un bouton déclenche une action. Les éléments natifs exposent mieux leur nom et leur rôle, et fournissent l’activation clavier attendue. Une hiérarchie possible est `h1` pour le titre du lab, puis `h2` pour « Mon espace » et « Questions ».

À l’observation sur le site, exemples : le nom de marque est un `div`, le titre principal est un `div` stylé, le menu est un `div`, et « Réserver » est un `div` cliquable. Deux problèmes DOM ou dans l’arbre d’accessibilité peuvent être relevés s’ils sont démontrés.

## TP2 — Images et liens

Dans `labs/images.html` :

- `Horizon.png` est l’affiche et porte une information : fournir une alternative concise, utile dans ce contexte. Si l’affiche contient beaucoup de texte, reprendre aussi les informations essentielles en texte HTML.
- `decor.png` montre le village du festival. Si elle est présentée comme décoration, utiliser `alt=""`; si son contenu est informatif, rédiger une alternative adaptée au contexte.
- `food.png` représente le village gourmand : remplacer `alt="photo"` par une description de l’information pertinente, par exemple « Stands de cuisine et tables en plein air ».
- Cette page de lab ne contient pas de lien à reformuler. Si la consigne est prise au sens du site du festival, « Cliquez ici » dans la carte de la scène principale est le meilleur exemple; le remplacer par « Voir le programme de la scène principale » ou un libellé contextuel équivalent.

Le texte alternatif dépend de l’information et du contexte, pas du style de l’image. Éviter « image de » si cela n’ajoute rien. Un `alt=""` est correct pour une image décorative afin qu’elle soit ignorée par les lecteurs d’écran.

## TP3 — Contraste, couleur et reflow

### Contraste et couleur

Dans `contrast.html`, la combinaison du premier paragraphe (`#d5d0c9` sur blanc) a un contraste d’environ **1,5:1**, insuffisant pour du texte courant. Il faut mesurer la paire réellement affichée avec un outil de contraste. À titre de repère WCAG AA : 4,5:1 pour le texte courant, 3:1 pour du grand texte.

Les mots « Disponible » et « Complet » accompagnent déjà le vert et le rouge, donc le statut n’est pas uniquement transmis par la couleur. Une bonne vérification consiste à désactiver les couleurs ou à inspecter le texte; la correction peut renforcer le contraste sans supprimer les libellés.

Sur `programme.html`, chercher les statuts visuels et vérifier si le texte seul permet de distinguer les états. Ne pas conclure à un défaut sans vérifier la page rendue.

### Reflow

Dans `reflow.html`, `.fixed-demo` a une largeur de 980 px et ses trois enfants ont une largeur minimale de 310 px : à 320 px CSS ou avec un zoom élevé, cela provoque un débordement horizontal. Remplacer ces dimensions rigides par une grille ou des blocs fluides. Le contenu doit rester disponible après correction du débordement.

La bannière animée sert à examiner le mouvement continu. Une préférence de réduction du mouvement doit arrêter ou réduire l’animation avec `@media (prefers-reduced-motion: reduce)`.

Dans Chrome, ouvrez les outils de développement avec F12, puis la palette de commandes avec Ctrl + Maj + P (Windows/Linux) ou Cmd + Maj + P (Mac). Recherchez « Show Rendering », sélectionnez cette commande, puis dans le panneau Rendering (Rendu), choisissez `prefers-reduced-motion: reduce` dans « Emulate CSS media feature prefers-reduced-motion ».

## TP4 — Clavier et focus

Supprimer les `tabindex` positifs, remplacer le faux bouton par un vrai `button`, et retirer la règle qui masque le contour de focus. Un style `:focus-visible` marqué peut personnaliser l’indicateur sans le supprimer. Après correction, l’ordre de tabulation suit l’ordre du document; Tab et Maj+Tab déplacent le focus, Entrée active liens et boutons, Espace active un bouton.

Pour une modale complète : le déclencheur ouvre la modale et le focus entre dans celle-ci; Tab et Maj+Tab restent dans la modale; Échap la ferme; le focus retourne au déclencheur. La modale doit avoir un nom accessible et son arrière-plan ne doit pas rester interactif pendant l’ouverture. L’exercice demande d’expliquer ce comportement, pas de coder une modale complète.

Sur la modale de `programme.html`, faire tester ouverture, ordre du focus, fermeture et retour du focus. Noter uniquement les défauts observés.

## TP5 — Formulaires et erreurs

Associer chaque champ à un `label` visible via `for`/`id`; un placeholder seul ne remplace pas un label. Utiliser `type="email"` pour l’adresse, `required` lorsque le champ est obligatoire et des valeurs explicites. Grouper les choix radio avec `fieldset` et `legend`, et donner le même `name` aux radios d’un même groupe.

Pour une validation compréhensible, indiquer précisément le champ en erreur et la correction attendue, associer l’aide ou l’erreur au champ avec `aria-describedby`, et définir `aria-invalid="true"` quand il est invalide. Après soumission invalide, le focus peut aller au premier champ en erreur ou à un résumé d’erreurs lié aux champs; dans tous les cas, l’erreur doit être annoncée et le parcours doit rester clair. Tester une adresse invalide, une sélection radio manquante, puis une saisie valide.

Sur `inscription.html`, provoquez une erreur réelle et vérifiez comment le formulaire indique quel champ corriger.
